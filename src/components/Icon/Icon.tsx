import type {SVGAttributes} from 'react';

import {isUndef, pxToRem} from 'utils/functions';

import Styled from './Icon.styles';

const noFill = {fillOpacity: 0};
const noStroke = {strokeOpacity: 0};
const strokeRound = {
	strokeLinecap: 'round' as const,
	strokeLinejoin: 'round' as const
};

const presetIcons = {
	user: {
		viewBoxSize: 24,
		path: <g {...noFill} transform="translate(0 -1098.52)">
			<circle cx="12" cy="1106.52" r="7"/>
			<path {...strokeRound} d="M2 1121.52c1.1-5.297 5.607-8 10-8 4.394 0 8.901 2.702 10 8"/>
		</g>
	},
	logout: {
		viewBoxSize: 24,
		path: <g {...noFill} {...strokeRound}>
			<path d="M14 16v7H1V1h13v7"/>
			<path d="M10 12h13"/>
			<path d="M19 8l4 4-4 4"/>
		</g>
	},
	gear: {
		viewBoxSize: 24,
		path: <g transform="translate(0 -1098.52)" {...strokeRound}>
			<circle cx="12" cy="1110.52" r="8" {...noFill}/>
			<path d="M10.5 1102.52l1-3h1l1 3zM13.5 1118.52l-1 3h-1l-1-3zM16.596 1103.802l2.829-1.414.707.707-1.414 2.829zM7.404 1117.237l-2.829 1.414-.707-.707 1.414-2.828zM18.717 1115.116l1.415 2.828-.707.707-2.829-1.414zM5.282 1105.923l-1.414-2.828.707-.707 2.829 1.414zM20 1109.02l3 1v1l-3 1zM4 1112.02l-3-1v-1l3-1z"/>
		</g>
	},
	forward: {
		viewBoxSize: 16,
		path: <path d="M5 1l7 7-7 7" {...strokeRound} {...noFill}/>
	},
	down: {
		viewBoxSize: 16,
		path: <path d="M15 4.5l-7 7-7-7" {...strokeRound} {...noFill}/>
	},
	undo: {
		viewBoxSize: 16,
		path: <g {...noFill} {...strokeRound}>
			<path d="M3 4h6"/>
			<path d="M9 4a5 5 0 015 5 5 5 0 01-5 5"/>
			<path d="M9 14H5"/>
			<path d="M6 1L3 4l3 3"/>
		</g>
	},
	save: {
		viewBoxSize: 16,
		path: <g {...noFill} {...strokeRound}>
			<path d="M1 1v14h14V4l-3-3H8v8"/>
			<path d="M5 6l3 3 3-3"/>
		</g>
	},
	reset: {
		viewBoxSize: 16,
		path: <g {...strokeRound}>
			<g {...noFill}>
				<path d="M3 4h6"/>
				<path d="M9 4a5 5 0 015 5 5 5 0 01-5 5"/>
				<path d="M9 14H5"/>
				<path d="M6 1L3 4l3 3"/>
			</g>
			<circle {...noStroke} r="1.5" cy="9" cx="9"/>
		</g>
	},
	order: {
		viewBoxSize: 24,
		path: <g>
			<circle {...noStroke} r="1.5" cy="22.5" cx="5.5"/>
			<circle {...noStroke} cx="14.5" cy="22.5" r="1.5"/>
			<path {...noFill} {...strokeRound} d="M17 15H3L1 7h13m9-4h-3l-4 16H4"/>
		</g>
	},
	group: {
		viewBoxSize: 24,
		path: <g {...noFill} transform="translate(0 -1098.52)" >
			<ellipse ry="3.18" rx="3.152" cy="1102.7" cx="5.499"/>
			<path {...strokeRound} d="M.996 1109.514c.496-2.406 2.525-3.634 4.503-3.634 1.979 0 4.008 1.227 4.503 3.634"/>
			<ellipse cx="18.516" cy="1102.7" rx="3.152" ry="3.18"/>
			<path {...strokeRound} d="M14 1109.52c.495-2.406 2.538-3.64 4.516-3.64 1.978 0 4.008 1.228 4.503 3.634"/>
			<ellipse ry="3.18" rx="3.152" cy="1114.703" cx="12"/>
			<path {...strokeRound} d="M7.497 1121.517c.495-2.406 2.525-3.634 4.503-3.634 1.978 0 4.008 1.227 4.503 3.634"/>
		</g>
	},
	plus: {
		viewBoxSize: 16,
		path: <path {...noFill} {...strokeRound} d="M8 1v14M15 8H1"/>
	},
	search: {
		viewBoxSize: 16,
		path: <g {...noFill} {...strokeRound}>
			<ellipse ry="5.459" rx="5.432" cy="6.459" cx="6.432"/>
			<path d="M15 15l-4.5-4.5"/>
		</g>
	}
};

type IconNameType = 'user' | 'logout' | 'gear' | 'forward' | 'down' | 'undo' | 'save' | 'reset' | 'order' | 'group' | 'plus' | 'search';

export type IconProps = {
	size?: number;
	color?: string;
	strokeWidth?: number;
} & ({
	preset: IconNameType;
	viewBoxSize?: number;
	path?: JSX.Element;
} | {
	preset?: IconNameType;
	viewBoxSize: number;
	path: JSX.Element;
}) & Omit<SVGAttributes<SVGSVGElement>, 'path'>;

const Icon = ({
	preset,
	path,
	viewBoxSize,
	size,
	color = 'black',
	strokeWidth = 2,
	...props
}: IconProps): JSX.Element => {
	const isCustom = [path, viewBoxSize].every(v => !isUndef(v));

	const viewBoxSizeActual = isCustom ? viewBoxSize : presetIcons[preset].viewBoxSize;
	const pathActual = isCustom ? path : presetIcons[preset].path;

	const multiplier = (size ?? viewBoxSizeActual)/viewBoxSizeActual;
	const sizeMultiplied = `${pxToRem(viewBoxSizeActual*multiplier)}rem`;

	return <Styled.Icon
		{...props}
		viewBox={`0 0 ${viewBoxSizeActual} ${viewBoxSizeActual}`}
		size={sizeMultiplied}
		color={color}
		strokeWidth={`${pxToRem(strokeWidth)}rem`}
	>
		{pathActual}
	</Styled.Icon>;
};

Icon.displayName = 'Icon';

export default Icon;
export {presetIcons};
