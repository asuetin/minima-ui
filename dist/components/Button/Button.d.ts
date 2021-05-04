import { HTMLAttributes } from 'react';
import Icon from 'components/Icon';
export declare type ButtonProps = {
    onClick: () => void;
} & ({
    label: string;
    icon?: typeof Icon | SVGSVGElement | HTMLImageElement;
} | {
    label?: string;
    icon: typeof Icon | SVGSVGElement | HTMLImageElement;
}) & HTMLAttributes<HTMLButtonElement>;
declare const Button: import("react").ForwardRefExoticComponent<ButtonProps & import("react").RefAttributes<HTMLButtonElement>>;
export default Button;