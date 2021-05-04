import {useRef, useEffect, MutableRefObject, ForwardedRef} from 'react';

export const useEvent = (
	name: string,
	handler: (e: Event | undefined) => void,
	target: typeof window | HTMLElement = window,
	capture = false
): void => {
	const handlerRef = useRef(handler);
	handlerRef.current = handler;

	useEffect(() => {
		if (target){
			const listener = e => handlerRef.current(e);
			target.addEventListener(name, listener, capture);
			return () => target.removeEventListener(name, listener);
		}
	}, [name, target, capture]);
};

export const useMergedRef = <T>(...refs: ForwardedRef<T>[]): MutableRefObject<T> => {
	const mergedRef = useRef();

	useEffect(() => {
		for (const ref of refs){
			if (typeof ref == 'function'){
				ref(mergedRef.current);
			}
			else if (ref){
				ref.current = mergedRef.current;
			}
		}
	}, [refs]);

	return mergedRef;
};

export const useInterval = (
	handler: () => void,
	delay: number,
	runOnMount = true
): void => {
	const handlerRef = useRef(handler);

	useEffect(() => {
		handlerRef.current = handler;
	}, [handler]);

	useEffect(() => {
		if (runOnMount){
			handlerRef.current();
		}
		const interval = setInterval(() => handlerRef.current(), delay);
		return () => clearInterval(interval);
	}, [delay, runOnMount]);
};