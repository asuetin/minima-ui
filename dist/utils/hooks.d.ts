import { MutableRefObject, ForwardedRef } from 'react';
export declare const useEvent: (name: string, handler: (e: Event | undefined) => void, target?: typeof window | HTMLElement, capture?: boolean) => void;
export declare const useMergedRef: <T>(...refs: ForwardedRef<T>[]) => MutableRefObject<T>;
export declare const useInterval: (handler: () => void, delay: number, runOnMount?: boolean) => void;
