import {forwardRef, useState, useEffect, useRef, HTMLAttributes} from 'react';

import {remToPx, uniqueId, isDescendantOf, isUndef, unique} from 'utils/functions';
import {useMergedRef, useEvent} from 'utils/hooks';

import {size} from 'utils/styleVars';

import Icon from 'components/Icon';

import Styled from './ComboBox.styles';

export type ComboBoxProps = {
	className?: string;
	height?: number;
	options: {
		value: string | number;
		label?: string;
		group?: string | number;
	}[],
	groups?: {
		value: string | number;
		label: string;
	}[],
	value: string | number | (string | number)[];
	onChange: (v: string | number | (string | number)[]) => void;
	visibleOptionCount?: number;
	arrowIcon?: typeof Icon | SVGSVGElement | HTMLImageElement;
	labelledBy?: string;
	searchDisabled?: boolean;
	disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

const ComboBox = forwardRef<HTMLDivElement, ComboBoxProps>(({
	className,
	height = remToPx(size.M),
	options,
	groups,
	value,
	onChange,
	visibleOptionCount = 5,
	arrowIcon = <Icon preset='down'/>,
	labelledBy,
	searchDisabled = false,
	disabled = false
}, forwardedRef) => {
	const idRef = useRef(uniqueId('combobox-'));

	const componentRef = useMergedRef<HTMLDivElement>(forwardedRef);
	const inputRef = useRef<HTMLInputElement>();

	const dropdownRef = useRef<HTMLUListElement>();

	const [isExpanded, setIsExpanded] = useState(false);

	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState<typeof options | null>();
	const [optionsGrouped, setOptionsGrouped] = useState<(typeof options[number] & {isGroup?: boolean})[]>([]);

	const [selectedIndex, setSelectedIndex] = useState(0);

	const rowCount = optionsGrouped.length;
	const dropdownId = `${idRef.current}-dropdown`;
	const isMultiselectable = Array.isArray(value);

	//keyboard controls
	useEvent('keydown', (e: KeyboardEvent) => {
		if (!disabled){
			switch (e.code){
			case 'ArrowDown':
				if (isExpanded){
					setSelectedIndex(selectedIndexPrev => {
						let indexNext = selectedIndexPrev < optionsGrouped.length - 1 ? selectedIndexPrev + 1 : 0;
						return optionsGrouped[indexNext].isGroup ? ++indexNext : indexNext;
					});
					e.preventDefault();
				}
				break;
			case 'ArrowUp':
				if (isExpanded){
					setSelectedIndex(selectedIndexPrev => {
						let indexNext = selectedIndexPrev > 0 ? selectedIndexPrev - 1 : optionsGrouped.length - 1;
						return optionsGrouped[indexNext].isGroup ? --indexNext : indexNext;
					});
					e.preventDefault();
				}
				break;
			case 'Enter': {
				if (isExpanded && rowCount){
					onChange(optionsGrouped[selectedIndex].value);
					componentRef.current.focus();
				}
				setIsExpanded(isExpandedPrev => !isExpandedPrev);
				break;
			}
			case 'Escape': {
				if (isExpanded){
					componentRef.current.focus();
				}
				else {
					componentRef.current.blur();
				}
				setIsExpanded(false);
			}
			}
		}
	});

	//close on click outside
	useEvent('click', e => {
		if (isExpanded && !isDescendantOf(e.target as Node, componentRef.current)){
			setIsExpanded(false);
		}
	});

	//filter options
	useEffect(() => {
		let searchResultsNew = null;
		if (searchQuery != ''){
			searchResultsNew = options.filter(({label, value}) => {
				if (label){
					if (label.toLowerCase().includes(searchQuery.toLowerCase())){
						return true;
					}
				}
				else if (String(value).toLowerCase().includes(searchQuery.toLowerCase())){
					return true;
				}
				return false;
			});
		}
		setSearchResults(searchResultsNew);
	}, [searchQuery, options]);

	//group options
	useEffect(() => {
		const groupValues = [];
		const optionsGroupedNew: typeof optionsGrouped = [...(searchResults || options)].sort((a, b) => {
			groupValues.push(a.group, b.group);
			return a.group < b.group ? -1 : 0;
		});

		unique(groupValues.filter(v => !isUndef(v))).forEach(v => {
			const firstIndex = optionsGroupedNew.findIndex(o => o.group == v);
			optionsGroupedNew.splice(firstIndex, 0, {
				isGroup: true,
				value: v,
				label: groups?.find(g => g.value == v)?.label
			});
		});

		setOptionsGrouped(optionsGroupedNew);
	}, [searchResults, options, groups]);

	//scroll to selected option
	useEffect(() => {
		if (dropdownRef.current){
			let scrollTarget = height*selectedIndex;
			const {scrollTop} = dropdownRef.current;

			const isAbove = scrollTop + height*(visibleOptionCount-1) <= scrollTarget;
			const isBelow = scrollTop >= scrollTarget + height;

			if (isBelow){
				scrollTarget -= height*(visibleOptionCount-1);
			}
			if (isAbove || isBelow){
				dropdownRef.current.scrollTo({
					top: scrollTarget,
					behavior: 'smooth'
				});
			}
		}
	}, [selectedIndex, height, visibleOptionCount]);

	//clear search on open
	useEffect(() => {
		if (isExpanded){
			setSearchQuery('');
			inputRef.current.focus();
		}
	}, [isExpanded]);

	//close on disable
	useEffect(() => {
		if (disabled){
			setIsExpanded(false);
		}
	}, [disabled]);

	//select first available option
	useEffect(() => {
		setSelectedIndex(optionsGrouped.findIndex(o => !o.isGroup));
	}, [isExpanded, optionsGrouped]);

	const optionRenderer = (index, style) => {
		const option = optionsGrouped[index];
		const indexOfOption = isMultiselectable ? (value as (string | number)[]).findIndex(v => v == option?.value) : -1;

		return <Styled.Option
			style={style}
			key={`${index}-${option?.value}`}
			onClick={rowCount && !option?.isGroup ? () => {
				if (isMultiselectable){
					const valueNew = [...value as (string | number)[]];

					if (indexOfOption == -1){
						valueNew.unshift(option?.value);
					}
					else {
						valueNew.splice(indexOfOption, 1);
					}

					onChange(valueNew);
				}
				else {
					onChange(option?.value);
					setIsExpanded(false);
				}
			} : undefined}
			role={option?.isGroup ? undefined : 'option'}
			id={`${dropdownId}-row-${index}`}
			aria-checked={rowCount && !option?.isGroup && isMultiselectable ? indexOfOption != -1 : undefined}
			aria-selected={rowCount && !option?.isGroup && selectedIndex == index ? true : undefined}
			as={option?.isGroup ? 'label' : undefined}
		>
			{option?.label || option?.value || 'No results'}
		</Styled.Option>;
	};

	return <Styled.ComboBox
		ref={componentRef}
		className={className}
		height={height}
		role='combobox'
		tabIndex={isExpanded || disabled ? -1 : 0}
		aria-expanded={isExpanded}
		aria-owns={dropdownId}
		aria-haspopup='listbox'
		aria-disabled={disabled || undefined}
	>
		{isExpanded && <Styled.Dropdown
			ref={dropdownRef}
			rowCount={rowCount || 1}
			rowHeight={height}
			rowRenderer={optionRenderer}
			visibleOptionCount={visibleOptionCount}
			id={dropdownId}
			aria-labelledby={labelledBy}
			aria-multiselectable={isMultiselectable}
			aria-label={labelledBy ? undefined : 'Dropdown menu'}
		/>}
		<Styled.Input
			ref={inputRef}
			type='text'
			value={!searchDisabled && isExpanded ? searchQuery : (() => {
				if (isMultiselectable){
					return (value as (string | number)[]).map(v => {
						const optionSelected = options.find(o => o.value == v);
						return optionSelected.label || optionSelected.value;
					}).join(', ');
				}
				return options.find(o => o.value == value)?.label || value as string | number;
			})()}
			onChange={!searchDisabled ? e => setSearchQuery(e.target.value) : undefined}
			onClick={isExpanded ? undefined : () => setIsExpanded(isExpandedPrev => !isExpandedPrev)}
			readOnly={searchDisabled}
			placeholder='Enter search query'
			tabIndex={!searchDisabled && isExpanded ? 0 : -1}
			aria-autocomplete={searchDisabled ? undefined : 'both'}
			aria-controls={isExpanded ? dropdownId : undefined}
			aria-activedescendant={isExpanded ? `${dropdownId}-row-${selectedIndex}` : undefined}
			aria-labelledby={labelledBy}
		>
		</Styled.Input>
		<Styled.Button
			onClick={() => setIsExpanded(isExpandedPrev => !isExpandedPrev)}
			role='button'
			tabIndex={-1}
			aria-label='Expand dropdown menu'
		>
			{arrowIcon}
		</Styled.Button>
	</Styled.ComboBox>;
});

export default ComboBox;