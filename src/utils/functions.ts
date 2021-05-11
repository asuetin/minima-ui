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

export const throttle = (
	delay: number,
	f: (...args: unknown[]) => void,
	runOnFinish = true
): typeof f => {
	let lastCall = 0, timerId;

	return (...args) => {
		const now = (new Date).getTime();

		if (runOnFinish && timerId) {
			clearTimeout(timerId);
		}

		if (now - lastCall < delay) {
			return;
		}
		lastCall = now;

		if (runOnFinish){
			timerId = setTimeout(() => {
				f(...args);
				timerId = null;
			}, delay);
		}
		return f(...args);
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

export const limitInRange = (v: number, range: [number | null, number | null], wrap = false): number => {
	if (range[0] !== null && v < range[0]){
		return wrap ? range[1] : range[0];
	}
	if (range[1] !== null && v > range[1]){
		return wrap ? range[0] : range[1];
	}
	return v;
};