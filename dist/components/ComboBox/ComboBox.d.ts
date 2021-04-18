import type { FC } from 'react';
import Icon from 'components/Icon';
export declare type ComboBoxProps = {
    className?: string;
    height?: number;
    options: {
        value: string | number;
        label?: string;
    }[];
    value: string | number;
    onChange: (v: string | number) => void;
    visibleOptionCount?: number;
    arrowIcon?: typeof Icon | SVGSVGElement | HTMLImageElement;
    labelledBy?: string;
};
declare const ComboBox: FC<ComboBoxProps>;
export default ComboBox;
