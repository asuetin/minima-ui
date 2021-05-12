import {useState, useEffect} from 'react';
import styled from 'styled-components';

import type {Story, Meta} from '@storybook/react';

import Table, {TableStyles} from 'components/Table';
import type {TableProps, CellType} from 'components/Table';

import TextInput from 'components/TextInput';

import {remToPx} from 'utils/functions';
import themeDefault from 'utils/theme';
import dedent from 'ts-dedent';

import DocsPage from 'stories/DocsPage';

export default {
	title: 'Components/Containers/Table',
	component: Table,
	argTypes: {
		refreshTrigger: {
			description: 'Changing this value causes the table to rerender',
			type: {
				summary: 'string | number | boolean'
			},
			control: 'number',
			table: {
				category: 'Core'
			}
		},
		columns: {
			description: 'Array of column objects',
			type: {
				summary: 'ColumnType[]',
				detail: dedent(`
					type DataType = {[key: string]: unknown} | string | number | boolean;

					type ColumnType = {
						dataKey: string | number;
						header: string;
						renderer?: (v: {
							__rowIndex: number;
							__dataKey: string | number;
							__getter?: (v: DataType) => string | number | boolean;
							[key: string]: unknown;
						}) => JSX.Element;
						getter?: (v: DataType) => string | number | boolean;
						width?: string | number;
						minWidth?: number;
						sortable?: boolean;
					};
				`),
				required: true
			},
			control: 'array',
			table: {
				category: 'Core'
			}
		},
		data: {
			description: 'Array of data objects',
			type: {
				summary: 'DataType[]',
				detail: dedent(`
					type DataType = {[key: string]: unknown} | string | number | boolean;
				`),
				required: true
			},
			control: 'array',
			table: {
				category: 'Core'
			}
		},
		defaultSortState: {
			description: 'Array of sort objects representing the default sort state',
			control: {
				disable: true
			},
			type: {
				summary: 'SortStateType[]',
				detail: dedent(`
					type SortStateType = {
						dataKey: string | number;
						value: 'asc' | 'desc';
					};
				`)
			},
			table: {
				category: 'Miscellaneous'
			}
		},
		rowHeight: {
			description: 'The height of one row',
			type: {
				summary: 'number'
			},
			control: 'number',
			defaultValue: remToPx(themeDefault.size[3]),
			table: {
				defaultValue: {
					summary: remToPx(themeDefault.size[3])
				},
				category: 'Geometry'
			}
		},
		visibleRowCount: {
			description: 'Number of visible rows. Causes the table to rerender when changed.',
			type: {
				summary: 'number'
			},
			control: 'number',
			defaultValue: 10,
			table: {
				defaultValue: {
					summary: 10
				},
				category: 'Geometry'
			}
		},
		onColumnResize: {
			description: 'Callback function on column resize',
			type: {
				summary: '(columnWidths: number[]) => void'
			},
			control: {
				disable: true
			},
			table: {
				category: 'Callbacks'
			}
		},
		onSort: {
			description: 'Callback function on sort change',
			type: {
				summary: '(sortState: SortStateType[]) => void',
				detail: dedent(`
					type SortStateType = {
						dataKey: string | number;
						value: 'asc' | 'desc';
					};
				`)
			},
			control: {
				disable: true
			},
			table: {
				category: 'Callbacks'
			}
		},
		onCellFocus: {
			description: 'Callback function on cell click',
			type: {
				summary: '(cell: CellType | null) => void',
				detail: dedent(`
					type CellType = {
						rowIndex: number;
						dataKey: string | number;
					};
				`)
			},
			control: {
				disable: true
			},
			table: {
				category: 'Callbacks'
			}
		},
		onCellHover: {
			description: 'Callback function on cell hover',
			type: {
				summary: '(cell: CellType | null) => void',
				detail: dedent(`
					type CellType = {
						rowIndex: number;
						dataKey: string | number;
					};
				`)
			},
			control: {
				disable: true
			},
			table: {
				category: 'Callbacks'
			}
		}
  	},
	parameters: {
		docs: {
			page: () => <DocsPage
				sourceLinks={[
					{
						path:'components/Table/Table.tsx',
						label: 'Component source'
					}, {
						path:'components/Table/Table.styles.ts',
						label: 'Styles source'
					}
				]}
			/>,
			description: {
				component: 'A virtualized table with sorting and column resizing that allows custom cell renderers'
			}
		}
	}
} as Meta;

const BasicTemplate: Story<TableProps> = args => <Table {...args}/>;

export const Basic = BasicTemplate.bind({});

Basic.args = {
	columns: [
		{
			dataKey: 'id',
			header: 'ID',
			minWidth: 50
		}, {
			dataKey: 'name',
			header: 'Name',
			minWidth: 80
		}, {
			dataKey: 'name-short',
			header: 'Short name',
			minWidth: 125
		}, {
			dataKey: 'description',
			header: 'Description',
			sortable: false,
			minWidth: 125
		}
	],
	data: Array.from({length: 20}, (v, i) => ({
		id: i+1,
		name: `Name ${i+1}`,
		'name-short': `Short name ${i+1}`,
		description: `Description ${i+1}`
	}))
};

export const CustomGetters = BasicTemplate.bind({});

CustomGetters.parameters = {
	docs: {
		description: {
			story: 'The city and state names in this story are fetched through getter functions while the data itself only contains IDs.'
		}
	}
};

const cities = ['Montgomery', 'Sacramento', 'Atlanta'];
const states = ['Alabama', 'California', 'Georgia'];

CustomGetters.args = {
	columns: [
		{
			dataKey: 'id',
			header: 'ID',
			minWidth: 50
		}, {
			dataKey: 'city',
			header: 'City',
			minWidth: 125,
			getter: v => cities[v]
		}, {
			dataKey: 'state',
			header: 'State',
			minWidth: 125,
			getter: v => states[v]
		}
	],
	data: [
		{
			id: 1,
			city: 0,
			state: 0
		}, {
			id: 2,
			city: 1,
			state: 1
		}, {
			id: 3,
			city: 2,
			state: 2
		}
	]
};

const TextInputStyled = styled(TextInput)`
	position: relative;

	background-color: transparent !important;

	font-size: inherit;
	font-family: inherit;
	font-weight: inherit;
	color: inherit;

	border-radius: 0;
	outline: none;
	box-shadow: none;

	padding: 0;

	&:hover {
		box-shadow: inset 0 0 0 0.125rem lightgrey;
	}

	&:focus-visible {
		box-shadow: inset ${themeDefault.focus};
	}
`;

const EditableTemplate: Story<TableProps> = args => {
	const [refreshTrigger, setRefreshTrigger] = useState(false);
	const [data, setData] = useState(Basic.args.data);

	const [hovered, setHovered] = useState<CellType | null>(null);
	const {rowIndex: rowIndexHovered, dataKey: dataKeyHovered} = hovered ?? {};

	const [focused, setFocused] = useState<CellType | null>(null);
	const {rowIndex: rowIndexFocused, dataKey: dataKeyFocused} = focused ?? {};

	useEffect(() => {
		setRefreshTrigger(refreshTriggerPrev => !refreshTriggerPrev);
	}, [hovered, focused, data]);

	const textFieldRenderer = dataObj => {
		const {__rowIndex, __dataKey} = dataObj;
		const isHovered = __rowIndex == rowIndexHovered && __dataKey == dataKeyHovered;
		const isFocused = __rowIndex == rowIndexFocused && __dataKey == dataKeyFocused;

		return isHovered || isFocused ?
			<TextInputStyled
				value={dataObj[dataObj.__dataKey]}
				onChange={v => {
					setData(dataPrev => {
						const dataNew = [...dataPrev];
						dataNew[__rowIndex][__dataKey] = v;
						return dataNew;
					});
				}}
			/> :
			<TableStyles.DataRaw>{dataObj[__dataKey]}</TableStyles.DataRaw>;
	};

	return <Table
		{...args}
		refreshTrigger={refreshTrigger}
		data={data}
		columns={Basic.args.columns.map(columnObj => ({
			...columnObj,
			renderer: textFieldRenderer
		}))}
		onCellHover={setHovered}
		onCellFocus={setFocused}
		role='grid'
	/>;
};

export const Editable = EditableTemplate.bind({});

Editable.parameters = {
	docs: {
		description: {
			story: 'This story utilizes custom column renderers to allow the user to change the values in the table.'
		}
	}
};

Editable.args = {...Basic.args};
Editable.argTypes = {
	refreshTrigger: {
		control: {
			disable: true
		}
	},
	columns: {
		control: {
			disable: true
		}
	},
	data: {
		control: {
			disable: true
		}
	}
};