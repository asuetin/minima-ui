import type { FC, HTMLAttributes } from 'react';
declare const presetIcons: {
    user: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    logout: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    gear: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    forward: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    down: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    undo: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    save: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    reset: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    order: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    group: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    plus: {
        viewBoxSize: number;
        path: JSX.Element;
    };
    search: {
        viewBoxSize: number;
        path: JSX.Element;
    };
};
declare type IconNameType = 'user' | 'logout' | 'gear' | 'forward' | 'down' | 'undo' | 'save' | 'reset' | 'order' | 'group' | 'plus' | 'search';
export declare type IconProps = {
    size?: number;
    color?: string;
    strokeWidth?: number;
} & ({
    preset: IconNameType;
    viewBoxSize?: number;
    path?: React.SVGProps<SVGElement>;
} | {
    preset?: IconNameType;
    viewBoxSize: number;
    path: React.SVGProps<SVGElement>;
}) & HTMLAttributes<SVGSVGElement>;
declare const Icon: FC<IconProps>;
export default Icon;
export { presetIcons };
