import theme from 'utils/theme';

export type StyleVarType = {
	XXS?: string;
	XS?: string;
	S?: string;
	M: string;
	L?: string;
	XL?: string;
	XXL?: string;
};

export const size: StyleVarType = {
	XXS: '0.25rem',
	XS: '0.5rem',
	S: '1rem',
	M: '2rem'
};

export const radius: StyleVarType = {
	M: '0.375rem'
};

const shadow: StyleVarType = {
	M: '0 0.05rem 0.2rem 0',
	L: '0 0.15rem 0.6rem 0'
};

export const getShadow = (size: keyof StyleVarType = 'M', color = 'rgb(160,160,160)'): string => {
	return `${shadow[size]} ${color}`;
};

export const focus = `0 0 0 0.125rem ${theme.accent.XD}`;