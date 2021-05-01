export declare const getBodyFontSize: () => number;
export declare const pxToRem: (v: string | number) => number;
export declare const remToPx: (v: string | number) => number;
export declare const isUndef: (v: unknown) => boolean;
export declare const debounce: (delay: number, f: (...args: unknown[]) => void) => (...args: unknown[]) => void;
export declare const isDescendantOf: (descendant: Node, target: Node) => boolean;
export declare const uniqueId: (prefix: string) => string;
export declare const unique: <T>(array: T[], selector?: (el: T) => unknown) => T[];
export declare const wrapInRange: (v: number, range: [number, number]) => number;
