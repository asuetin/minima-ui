export declare type ColorType = {
    XXD?: string;
    XD?: string;
    D?: string;
    M: string;
    L?: string;
    XL?: string;
    XXL?: string;
};
export declare type ThemeType = {
    background: ColorType;
    accent: ColorType;
    content: ColorType;
};
declare const theme: ThemeType;
export default theme;
