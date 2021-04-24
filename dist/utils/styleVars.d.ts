export declare type StyleVarType = {
    XXS?: string;
    XS?: string;
    S?: string;
    M: string;
    L?: string;
    XL?: string;
    XXL?: string;
};
export declare const size: StyleVarType;
export declare const radius: StyleVarType;
export declare const getShadow: (size?: keyof StyleVarType, color?: string) => string;
export declare const focus: string;
