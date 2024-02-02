import { render, screen } from "@testing-library/react";
import Cart from "../components/cart";
import { describe, it, expect, vi } from "vitest";
import { act } from "react-dom/test-utils";
import * as rrd from 'react-router-dom';
import { CartItem } from "../scripts/data/cartItem";
import userEvent from "@testing-library/user-event";

let emptyCart = [];
let mockData = {
    id: 1,
    title: 'Mocking title',
    description: 'Mocking description',
    image: 'default.jpg',
    rating: {
        rate: 5,
    },
    category: 'mocking',
    price: 123,
};
vi.mock('react-router-dom');
let filledCart = [(new CartItem(1, 3))];
global.fetch = vi.fn().mockImplementation(() => 
    Promise.resolve({
        status: 300,
        json: () => Promise.resolve(mockData),
    })
);

describe("Cart component", () => {
    it("renders correct page when cart is empty", async () => {
        rrd.useOutletContext.mockReturnValue(emptyCart);
        await act(async () => {
            render(<Cart />);
        });
        expect(screen.getByText('Oops!').textContent).toMatch('Oops!');
    });

    it("renders correct page when cart is not empty", async () => {
        rrd.useOutletContext.mockImplementation(() => {
            return [(filledCart), vi.fn()];
        })
        await act(async () => {
            render(<Cart />);
        });
        expect(screen.getByText('Remove from cart').textContent).toMatch('Remove from cart');
    });

    it("input value shows correct value", async () => {
        rrd.useOutletContext.mockImplementation(() => {
            return [(filledCart), vi.fn()];
        })
        await act(async () => {
            render(<Cart />);
        });
        const inputQuantity = screen.getByDisplayValue('3');
        expect(inputQuantity.value).toMatch("3");
    });

    it("input value increases if you click", async () => {
        const user = userEvent.setup();
        rrd.useOutletContext.mockImplementation(() => {
            return [(filledCart), vi.fn()];
        })
        await act(async () => {
            render(<Cart />);
        });
        const inputQuantity = screen.getByDisplayValue('3');
        const plus = screen.getByText('+');

        await user.click(plus);
        await user.click(plus);

        expect(inputQuantity.value).toMatch("5");
    });

    it("input value increases if you click", async () => {
        const user = userEvent.setup();
        rrd.useOutletContext.mockImplementation(() => {
            return [(filledCart), vi.fn()];
        })
        await act(async () => {
            render(<Cart />);
        });
        const inputQuantity = screen.getByDisplayValue('5');
        const plus = screen.getByText('+');
        const minus = screen.getByText('-');

        await user.click(plus);
        await user.click(plus);
        await user.click(minus);

        expect(inputQuantity.value).toMatch("6");
    });

    it("removing from cart works", async () => {
        const user = userEvent.setup();
        rrd.useOutletContext.mockImplementation(() => {
            return [(filledCart), vi.fn()];
        })
        await act(async () => {
            render(<Cart />);
        });
        const deleteFromCart = screen.getByText('Remove from cart');

        await user.click(deleteFromCart);

        expect(screen.getByText('Oops!').textContent).toMatch('Oops!');
    });

});