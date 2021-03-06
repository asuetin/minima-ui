import {forwardRef, useState, useEffect, useRef, HTMLAttributes} from 'react';

import {remToPx, uniqueId, isUndef, unique, limitInRange} from 'utils/functions';
import {useMergedRef, useEvent} from 'utils/hooks';

import themeDefault from 'utils/theme';

import Icon from 'components/Icon';

import Styled from './ComboBox.styles';

export type ComboBoxProps = {
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
	chevron?: JSX.Element;
	searchDisabled?: boolean;
	disabled?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, 'onChange'>;

const ComboBox = forwardRef<HTMLDivElement, ComboBoxProps>(({
	height = remToPx(themeDefault.size[3]),
	options,
	groups,
	value,
	onChange,
	visibleOptionCount = 5,
	chevron = <Icon preset='down'/>,
	searchDisabled = false,
	disabled = false,
	id,
	...props
}, forwardedRef) => {
	const idRef = useRef(id ?? uniqueId('combobox-'));

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

	const changeToIndex = optionIndex => {
		const option = optionsGrouped[optionIndex];

		if (isMultiselectable){
			const valueNew = [...value as (string | number)[]];
			const indexInValue = (value as (string | number)[]).findIndex(v => v == option?.value);

			if (indexInValue == -1){
				valueNew.unshift(option?.value);
			}
			else {
				valueNew.splice(indexInValue, 1);
			}

			onChange(valueNew);
		}
		else {
			onChange(option?.value);
		}
	};

	//keyboard-specific controls
	useEvent('keydown', (e: KeyboardEvent) => {
		if (!disabled){
			if (isExpanded){
				switch (e.code){
				case 'ArrowDown':
					setSelectedIndex(selectedIndexPrev => {
						let indexNext = limitInRange(selectedIndexPrev+1, [0, optionsGrouped.length-1]);
						return optionsGrouped[indexNext].isGroup ? limitInRange(++indexNext, [0, optionsGrouped.length-1]) : indexNext;
					});
					e.preventDefault();
					break;
				case 'ArrowUp':
					setSelectedIndex(selectedIndexPrev => {
						let indexNext = limitInRange(selectedIndexPrev-1, [0, optionsGrouped.length-1]);
						return optionsGrouped[indexNext].isGroup ? limitInRange(--indexNext, [0, optionsGrouped.length-1]) : indexNext;
					});
					e.preventDefault();
					break;
				case 'Home':
					setSelectedIndex(() => {
						let indexNext = 0;
						return optionsGrouped[indexNext].isGroup ? limitInRange(++indexNext, [0, optionsGrouped.length-1]) : indexNext;
					});
					break;
				case 'End':
					setSelectedIndex(optionsGrouped.length-1);
					break;
				case 'PageDown':
					setSelectedIndex(selectedIndexPrev => {
						let indexNext = limitInRange(selectedIndexPrev+visibleOptionCount, [0, optionsGrouped.length-1]);
						return optionsGrouped[indexNext].isGroup ? limitInRange(++indexNext, [0, optionsGrouped.length-1]) : indexNext;
					});
					break;
				case 'PageUp':
					setSelectedIndex(selectedIndexPrev => {
						let indexNext = limitInRange(selectedIndexPrev-visibleOptionCount, [0, optionsGrouped.length-1]);
						return optionsGrouped[indexNext].isGroup ? limitInRange(++indexNext, [0, optionsGrouped.length-1]) : indexNext;
					});
					break;
				case 'Enter': {
					if (rowCount){
						changeToIndex(selectedIndex);
						componentRef.current.focus();
					}
					break;
				}
				case 'Escape': {
					componentRef.current.focus();
				}
				}
			}
			switch (e.code){
			case 'Enter': {
				setIsExpanded(isExpandedPrev => isExpandedPrev && isMultiselectable ? true : !isExpandedPrev);
				break;
			}
			case 'Escape': {
				if (!isExpanded) {
					componentRef.current.blur();
				}
				setIsExpanded(false);
			}
			}
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
		const optionsGroupedNew: typeof optionsGrouped = [...(searchResults ?? options)].sort((a, b) => {
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

	const optionRenderer = (optionIndex, style) => {
		const option = optionsGrouped[optionIndex];

		return <Styled.Option
			style={style}
			key={`${optionIndex}-${option?.value}`}
			onClick={rowCount && !option?.isGroup ? () => {
				changeToIndex(optionIndex);
				if (!isMultiselectable){
					setIsExpanded(false);
				}
			} : undefined}
			role={option?.isGroup ? undefined : 'option'}
			id={`${dropdownId}-row-${optionIndex}`}
			aria-checked={rowCount && !option?.isGroup && isMultiselectable ?
				(value as (string | number)[]).includes(option?.value) :
				undefined
			}
			aria-selected={rowCount && !option?.isGroup && selectedIndex == optionIndex ? true : undefined}
			as={option?.isGroup ? 'label' : undefined}
		>
			{option?.label ?? option?.value ?? 'No results'}
		</Styled.Option>;
	};

	return <Styled.ComboBox
		{...props}
		ref={componentRef}
		id={id}
		height={height}
		onClick={isExpanded ? undefined : () => setIsExpanded(isExpandedPrev => !isExpandedPrev)}
		onBlur={e => {
			if (!componentRef.current.contains(e.relatedTarget as HTMLElement)){
				setIsExpanded(false);
			}
		}}
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
			aria-labelledby={props['aria-labelledby']}
			aria-multiselectable={isMultiselectable}
			aria-label={props['aria-label'] ? undefined : 'Dropdown menu'}
		/>}
		<Styled.Input
			ref={inputRef}
			value={!searchDisabled && isExpanded ? searchQuery : (() => {
				if (isMultiselectable){
					return (value as (string | number)[]).map(v => {
						const optionSelected = options.find(o => o.value == v);
						return optionSelected.label ?? optionSelected.value;
					}).join(', ');
				}
				return options.find(o => o.value == value)?.label ?? String(value);
			})()}
			onChange={!searchDisabled ? v => setSearchQuery(v) : undefined}
			readOnly={searchDisabled}
			placeholder='Enter search query'
			tabIndex={!searchDisabled && isExpanded ? 0 : -1}
			aria-autocomplete={searchDisabled ? undefined : 'both'}
			aria-controls={isExpanded ? dropdownId : undefined}
			aria-activedescendant={isExpanded ? `${dropdownId}-row-${selectedIndex}` : undefined}
			aria-labelledby={props['aria-labelledby']}
		>
		</Styled.Input>
		<Styled.ChevronButton
			onClick={isExpanded ? () => setIsExpanded(false) : undefined}
			icon={chevron}
			tabIndex={-1}
			aria-label='Expand dropdown menu'
		/>
	</Styled.ComboBox>;
});

ComboBox.displayName = 'ComboBox';

export default ComboBox;