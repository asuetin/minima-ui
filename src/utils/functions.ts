export const getBodyFontSize = (): number => parseFloat(window.getComputedStyle(document.body).getPropertyValue('font-size'));

export const pxToRem = (v: string | number): number => parseFloat(String(v))/getBodyFontSize();

export const remToPx = (v: string | number): number => parseFloat(String(v))*getBodyFontSize();

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

export const isDescendantOf = (descendant: Node, target: Node): boolean => {
	let element = descendant;
	while (element){
		element = element.parentNode;
		if (element == target){
			return true;
		}
	}
	return false;
};

export const uniqueId = ((): ((prefix: string) => string) => {
	let count = 0;
	return (prefix: string): string => `${prefix}${++count}`;
})();