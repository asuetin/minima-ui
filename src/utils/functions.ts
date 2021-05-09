export const getBodyFontSize = (): number => parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));

export const pxToRem = (v: string | number): number => parseFloat(String(v))/(getBodyFontSize() || 16);

export const remToPx = (v: string | number): number => parseFloat(String(v))*(getBodyFontSize() || 16);

export const isUndef = (v: unknown): boolean => typeof v == 'undefined';

export const debounce = (
	delay: number,
	f: (...args: unknown[]) => void
): typeof f => {
	let timerId;
	return (...args) => {
		if (timerId) {
			clearTimeout(timerId);
		}

		timerId = setTimeout(() => {
			f(...args);
			timerId = null;
		}, delay);
	};
};

export const uniqueId = ((): ((prefix: string) => string) => {
	let count = 0;
	return (prefix: string): string => `${prefix}${++count}`;
})();

export const unique = <T>(array: T[], selector?: (el: typeof array[number]) => unknown): T[] => {
	if (isUndef(selector)){
		return array.filter((v, i, a) => a.indexOf(v) == i);
	}
	return array.filter((e, i) => array.findIndex((a) => {
		if (selector) {
			return selector(a) === selector(e);
		}
		return a === e;
	}) === i);
};

export const limitInRange = (v: number, range: [number, number], wrap = false): number => {
	if (v < range[0]){
		return wrap ? range[1] : range[0];
	}
	if (v > range[1]){
		return wrap ? range[0] : range[1];
	}
	return v;
};