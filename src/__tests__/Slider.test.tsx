import {render, fireEvent} from '@testing-library/react';

import {Slider} from '../';
export default class PointerEventMocked extends Event {
	constructor(type: string, props: {[key: string]: unknown}) {
		super(type, props);
		['clientX'].forEach((prop) => {
			if (props[prop] != null){
				this[prop] = props[prop];
			}
		});
	}
}

// @ts-expect-error: workaround for a missing feature in js-dom https://github.com/jsdom/jsdom/pull/2666
global.PointerEvent = PointerEventMocked;

describe('Slider', () => {
	test('change the value of a slider with a mouse', async () => {
		let value = 0;

		const {container, getByRole} = render(<Slider
			range={[0, 100]}
			value={value}
			onChange={(v: number) => value = v}
		/>);

		(container.firstChild as HTMLElement).getBoundingClientRect = jest.fn().mockImplementation(() => ({
			x: 0,
			y: 0,
			width: 100,
			height: 32
		}));

		const leftThumbElement = getByRole('slider');

		fireEvent.pointerDown(leftThumbElement, {clientX: 0});
		fireEvent.pointerMove(window, {clientX: 50});
		fireEvent.pointerUp(window, {clientX: 50});

		expect(value).toEqual(50);
	});

	test('change the value of a single-thumb slider with a keyboard', async () => {
		let value = 0;

		const {container, getByRole, rerender} = render(<Slider
			range={[0, 100]}
			value={value}
			onChange={(v: number) => value = v}
		/>);

		(container.firstChild as HTMLElement).getBoundingClientRect = jest.fn().mockImplementation(() => ({
			x: 0,
			y: 0,
			width: 100,
			height: 32
		}));

		const leftThumbElement = getByRole('slider');

		for (let i = 0; i < 2; ++i){
			fireEvent.keyDown(leftThumbElement, {code: 'ArrowRight'});

			rerender(<Slider
				range={[0, 100]}
				value={value}
				onChange={(v: number) => value = v}
			/>);
		}

		expect(value).toEqual(2);
	});
});