export type ColorType = {
	XXD?: string;
	XD?: string;
	D?: string;
	M: string;
	L?: string;
	XL?: string;
	XXL?: string;
};

export type ThemeType = {
	background: ColorType;
	accent: ColorType;
	content: ColorType;
};

const theme: ThemeType = {
	background: {
		XXD: 'rgb(195,195,195)',
		XD: 'rgb(215,215,215)',
		D: 'rgb(225,225,225)',
		M: 'rgb(235,235,235)',
		L: 'rgb(245,245,245)'
	},
	accent: {
		XD: 'rgb(85,115,195)',
		D: 'rgb(105,135,215)',
		M: 'rgb(125,155,235)',
		L: 'rgb(145,175,255)'
	},
	content: {
		M: 'rgb(90,90,90)',
		L: 'rgb(150,150,150)',
		XL: 'rgb(160,160,160)'
	},
};

export default theme;