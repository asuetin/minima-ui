import styled from 'styled-components';

import {
	Title,
	Subtitle,
	Description,
	Primary,
	ArgsTable,
	Stories,
	PRIMARY_STORY,
} from '@storybook/addon-docs/blocks';

import Button from 'components/Button';

const Links = styled.div`
	display: flex;

	> * {
		height: 1.5rem;
		margin-right: 0.75rem;
	}

	>:last-child {
		margin-right: 0;
	}
`;

const DocsPage = ({sourceLinks}: {
	sourceLinks: {
		path: string;
		label: string;
	}[]
}): JSX.Element => {
	return <>
		<Title/>
		<Subtitle/>
		<Description/>
		{sourceLinks &&
			<Links>
				{sourceLinks.map(({path, label}) =>
					<Button
						href={`${REPOSITORY_URL}/blob/main/src/${path}`}
						label={label}
						key={label}
					/>
				)}
			</Links>
		}
		<br/>
		<Primary/>
		<ArgsTable story={PRIMARY_STORY}/>
		<Stories/>
	</>;
};

export default DocsPage;