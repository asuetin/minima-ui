import {useState, useEffect, useRef} from 'react';
import type {FC} from 'react';

import {uniqueId, isDescendantOf} from 'utils/functions';
import {useEvent} from 'utils/hooks';

import Icon from 'components/Icon';

import Styled from './ComboBox.styles';

export type ComboBoxProps = {
	className?: string;
	height?: number;
	options: {
		value: string | number;
		label?: string;
	}[],
	value: string | number | (string | number)[];
	onChange: (v: string | number | (string | number)[]) => void;
	visibleOptionCount?: number;
	arrowIcon?: typeof Icon | SVGSVGElement | HTMLImageElement;
	labelledBy?: string;
	searchDisabled?: boolean;
};

const ComboBox: FC<ComboBoxProps> = ({
	className,
	height = 32,
	options = [],
	value,
	onChange,
	visibleOptionCount = 5,
	arrowIcon = <Icon presetName='down'/>,
	labelledBy,
	searchDisabled = false
}) => {
	const idRef = useRef(uniqueId('combobox-'));

	const componentRef = useRef<HTMLDivElement>();
	const inputRef = useRef<HTMLInputElement>();

	const dropdownRef = useRef<HTMLUListElement>();

	const [isExpanded, setIsExpanded] = useState(false);

	const [searchQuery, setSearchQuery] = useState('');
	const [searchResults, setSearchResults] = useState<typeof options | null>();

	const [selectedIndex, setSelectedIndex] = useState(0);

	const optionsFiltered = searchResults || options;
	const rowCount = optionsFiltered.length;
	const dropdownId = `${idRef.current}-dropdown`;
	const isMultiselectable = Array.isArray(value);

	useEvent('keydown', (e: KeyboardEvent) => {
		switch (e.code){
		case 'ArrowDown':
			if (isExpanded){
				setSelectedIndex(selectedIndexPrev => selectedIndexPrev < optionsFiltered.length - 1 ? selectedIndexPrev + 1 : 0);
				e.preventDefault();
			}
			break;
		case 'ArrowUp':
			if (isExpanded){
				setSelectedIndex(selectedIndexPrev => selectedIndexPrev > 0 ? selectedIndexPrev - 1 : optionsFiltered.length - 1);
				e.preventDefault();
			}
			break;
		case 'Enter': {
			if (isExpanded && rowCount){
				onChange(optionsFiltered[selectedIndex].value);
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
	});

	useEvent('click', e => {
		if (isExpanded && !isDescendantOf(e.target as Node, componentRef.current)){
			setIsExpanded(false);
		}
	});

	useEffect(() => {
		if (isExpanded){
			setSearchQuery('');
			inputRef.current.focus();
		}
		setSelectedIndex(0);
	}, [isExpanded]);

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
		setSelectedIndex(0);
	}, [searchQuery, options]);

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

	const optionRenderer = (index, style) => {
		const option = optionsFiltered[index];
		const indexOfOption = isMultiselectable ? (value as (string | number)[]).findIndex(v => v == option?.value) : -1;

		return <Styled.Option
			style={style}
			key={`${index}-${option?.value}`}
			onClick={rowCount ? () => {
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
			role='option'
			id={`${dropdownId}-option-${index}`}
			aria-checked={rowCount && isMultiselectable ? indexOfOption != -1 : undefined}
			aria-selected={rowCount && selectedIndex == index ? true : undefined}
		>
			{option.label || option.value || 'No results'}
		</Styled.Option>;
	};

	return <Styled.ComboBox
		ref={componentRef}
		className={className}
		height={height}
		role='combobox'
		tabIndex={isExpanded ? -1 : 0}
		aria-expanded={isExpanded}
		aria-owns={dropdownId}
		aria-haspopup='listbox'
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
			aria-activedescendant={isExpanded ? `${dropdownId}-option-${selectedIndex}` : undefined}
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
};

export default ComboBox;