import {forwardRef, useState, useRef, useEffect, HTMLAttributes} from 'react';
import {createPortal} from 'react-dom';

import {useMergedRef} from 'utils/hooks';

import Styled from './Modal.styles';

export type ModalProps = {
	onClose: () => void;
} & HTMLAttributes<HTMLDivElement>;

const Modal = forwardRef<HTMLDivElement, ModalProps>(({
	children,
	onClose,
	...props
}, forwardedRef) => {
	const [isParentReady, setIsParentReady] = useState(false);

	const componentRef = useMergedRef<HTMLDivElement>(forwardedRef);

	const parentDivRef = useRef<HTMLDivElement>();
	const contentRef = useRef<HTMLDivElement>();

	useEffect(() => {
		parentDivRef.current = document.createElement('div');
		document.body.appendChild(parentDivRef.current);
		setIsParentReady(true);
		return () => parentDivRef.current?.remove();
	}, []);

	return isParentReady && parentDivRef.current instanceof HTMLDivElement ?
		createPortal(
			<Styled.Modal
				{...props}
				ref={componentRef}
				aria-modal={true}
				onClick={e => {
					if (!contentRef.current.contains(e.target as Node)){
						onClose();
					}
				}}
			>
				<Styled.Content ref={contentRef}>
					{children}
				</Styled.Content>
			</Styled.Modal>,
			parentDivRef.current
		) : null;
});

Modal.displayName = 'Modal';

export default Modal;