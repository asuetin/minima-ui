import type { CSSProperties } from 'react';
export declare type ColorType = [CSSProperties['color'], ...CSSProperties['color'][]] & {
    length: 10;
};
export declare type SizeType = [CSSProperties['width'], ...CSSProperties['width'][]] & {
    length: 5;
};
export declare type ShadowType = [CSSProperties['boxShadow'], ...CSSProperties['boxShadow'][]] & {
    length: 3;
};
export declare type ThemeType = {
    fontFamily: CSSProperties['fontFamily'];
    background: ColorType;
    accent: ColorType;
    content: ColorType;
    size: SizeType;
    radius: SizeType;
    shadow: ShadowType;
    light: ShadowType;
    focus: CSSProperties['boxShadow'];
};
declare const themeDefault: ThemeType;
export default themeDefault;
