/* eslint-disable no-undef */
import { render, screen } from "@testing-library/react";
import Shop from "../components/shop";
import { describe, it, expect, vi } from "vitest";
import * as rrd from 'react-router-dom';
import { act } from "react-dom/test-utils";
import userEvent from "@testing-library/user-event";

let emptyCart = [];
let mockData = [{
    id: 1,
    title: 'Mocking title',
    description: 'Mocking description',
    image: 'default.jpg',
    rating: {
        rate: 5,
    },
    category: 'mocking',
    price: 123,
}];
vi.mock('react-router-dom');
global.fetch = vi.fn().mockImplementation(() => 
    Promise.resolve({
        status: 300,
        json: () => Promise.resolve(mockData),
    })
);

describe("Shop component", () => {
    it("renders page when provided a GET response", async () => {
        rrd.useOutletContext.mockReturnValue(emptyCart);
        await act(async () => {
            render(<Shop />);
        });
        expect(screen.getByText('Mocking title').textContent).toMatch('Mocking title');
    });

    it("input value increases if you click", async () => {
        const user = userEvent.setup();
        rrd.useOutletContext.mockReturnValue(emptyCart);
        await act(async () => {
            render(<Shop />);
        });
        const inputQuantity = screen.getByDisplayValue('1');
        const plus = screen.getByText('+');

        await user.click(plus);
        await user.click(plus);

        expect(inputQuantity.value).toMatch("3");
    });

    it("input value decreases if you click", async () => {
        const user = userEvent.setup();
        rrd.useOutletContext.mockReturnValue(emptyCart);
        await act(async () => {
            render(<Shop />);
        });
        const inputQuantity = screen.getByDisplayValue('1');
        const plus = screen.getByText('+');
        const minus = screen.getByText('-');

        await user.click(plus);
        await user.click(plus);
        await user.click(minus);
        
        expect(inputQuantity.value).toMatch("2");
    });

});