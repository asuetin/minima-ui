import type {CSSProperties} from 'react';

export type ColorType = [CSSProperties['color'], ...CSSProperties['color'][]] & {length: 10};
export type SizeType = [CSSProperties['width'], ...CSSProperties['width'][]] & {length: 5};
export type ShadowType = [CSSProperties['boxShadow'], ...CSSProperties['boxShadow'][]] & {length: 3};
export type BorderType = [CSSProperties['border'], ...CSSProperties['border'][]] & {length: 3};

export type ThemeType = {
	fontFamily: CSSProperties['fontFamily'];
	background: ColorType;
	accent: ColorType;
	content: ColorType;
	size: SizeType;
	radius: SizeType;
	border: BorderType;
	shadow: ShadowType;
	light: ShadowType;
	focus: CSSProperties['boxShadow'];
};

const minimaLight: ThemeType = {
	fontFamily: 'Open Sans, sans-serif',
	background: [
		'rgb(155,155,155)',
		'rgb(165,165,165)',
		'rgb(175,175,175)',
		'rgb(185,185,185)',
		'rgb(195,195,195)',
		'rgb(205,205,205)',
		'rgb(215,215,215)',
		'rgb(225,225,225)',
		'rgb(235,235,235)',
		'rgb(245,245,245)'
	],
	accent: [
		'rgb(55,85,165)',
		'rgb(65,95,175)',
		'rgb(75,105,185)',
		'rgb(85,115,195)',
		'rgb(95,125,205)',
		'rgb(105,135,215)',
		'rgb(115,145,225)',
		'rgb(125,155,235)',
		'rgb(135,165,245)',
		'rgb(145,175,255)'
	],
	content: [
		'rgb(60,60,60)',
		'rgb(70,70,70)',
		'rgb(80,80,80)',
		'rgb(90,90,90)',
		'rgb(100,100,100)',
		'rgb(110,110,110)',
		'rgb(120,120,120)',
		'rgb(130,130,130)',
		'rgb(140,140,140)',
		'rgb(150,150,150)'
	],
	border: [
		'none',
		'none',
		'none'
	],
	size: [
		'0.25rem',
		'0.5rem',
		'1rem',
		'2rem',
		'4rem',
	],
	radius: [
		'0.375rem',
		'0.375rem',
		'0.375rem',
		'0.375rem',
		'0.375rem',
	],
	shadow: [
		'0 0.05rem 0.2rem 0 rgb(160,160,160)',
		'0 0.15rem 0.6rem 0 rgb(160,160,160)',
		'0 0.45rem 1.8rem 0 rgb(160,160,160)',
	],
	light: [
		'0 0.05rem 0.2rem 0 rgb(145,175,255)',
		'0 0.15rem 0.6rem 0 rgb(145,175,255)',
		'0 0.45rem 1.8rem 0 rgb(145,175,255)',
	],
	focus: '0 0 0 0.125rem rgb(85,115,195)',
};

const minimaDark: ThemeType = {
	fontFamily: 'Open Sans, sans-serif',
	background: [
		'rgb(15,15,15)',
		'rgb(25,25,25)',
		'rgb(35,35,35)',
		'rgb(45,45,45)',
		'rgb(55,55,55)',
		'rgb(65,65,65)',
		'rgb(75,75,75)',
		'rgb(85,85,85)',
		'rgb(95,95,95)',
		'rgb(105,105,105)'
	],
	accent: [
		'rgb(55,85,165)',
		'rgb(65,95,175)',
		'rgb(75,105,185)',
		'rgb(85,115,195)',
		'rgb(95,125,205)',
		'rgb(105,135,215)',
		'rgb(115,145,225)',
		'rgb(125,155,235)',
		'rgb(135,165,245)',
		'rgb(145,175,255)'
	],
	content: [
		'rgb(250,250,250)',
		'rgb(245,245,245)',
		'rgb(240,240,240)',
		'rgb(235,235,235)',
		'rgb(230,230,230)',
		'rgb(225,225,225)',
		'rgb(220,220,220)',
		'rgb(195,195,195)',
		'rgb(180,180,180)',
		'rgb(175,175,175)'
	],
	border: [
		'none',
		'none',
		'none'
	],
	size: [
		'0.25rem',
		'0.5rem',
		'1rem',
		'2rem',
		'4rem',
	],
	radius: [
		'0.375rem',
		'0.375rem',
		'0.375rem',
		'0.375rem',
		'0.375rem',
	],
	shadow: [
		'0 0.05rem 0.2rem 0 rgb(160,160,160)',
		'0 0.15rem 0.6rem 0 rgb(160,160,160)',
		'0 0.45rem 1.8rem 0 rgb(160,160,160)',
	],
	light: [
		'0 0.05rem 0.2rem 0 rgb(145,175,255)',
		'0 0.15rem 0.6rem 0 rgb(145,175,255)',
		'0 0.45rem 1.8rem 0 rgb(145,175,255)',
	],
	focus: '0 0 0 0.125rem rgb(85,115,195)',
};

const minimaPlain: ThemeType = {
	fontFamily: 'Open Sans, sans-serif',
	background: [
		'rgb(175,175,175)',
		'rgb(185,185,185)',
		'rgb(195,195,195)',
		'rgb(205,205,205)',
		'rgb(215,215,215)',
		'rgb(225,225,225)',
		'rgb(235,235,235)',
		'rgb(245,245,245)',
		'rgb(255,255,255)',
		'rgb(255,255,255)'
	],
	accent: [
		'rgb(60,60,60)',
		'rgb(70,70,70)',
		'rgb(80,80,80)',
		'rgb(90,90,90)',
		'rgb(100,100,100)',
		'rgb(110,110,110)',
		'rgb(120,120,120)',
		'rgb(130,130,130)',
		'rgb(140,140,140)',
		'rgb(150,150,150)',
	],
	content: [
		'rgb(60,60,60)',
		'rgb(70,70,70)',
		'rgb(80,80,80)',
		'rgb(90,90,90)',
		'rgb(100,100,100)',
		'rgb(110,110,110)',
		'rgb(120,120,120)',
		'rgb(130,130,130)',
		'rgb(140,140,140)',
		'rgb(150,150,150)'
	],
	border: [
		'0.0625rem solid rgb(200,200,200)',
		'0.0625rem solid rgb(200,200,200)',
		'0.0625rem solid rgb(200,200,200)'
	],
	size: [
		'0.25rem',
		'0.5rem',
		'1rem',
		'2rem',
		'4rem',
	],
	radius: [
		'0',
		'0',
		'0',
		'0',
		'0',
	],
	shadow: [
		'none',
		'none',
		'none',
	],
	light: [
		'none',
		'none',
		'none',
	],
	focus: '0 0 0 0.125rem rgb(85,115,195)',
};

export default minimaLight;
export {minimaDark, minimaPlain};