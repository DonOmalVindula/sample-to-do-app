import "./matchMedia.mock.js";
import Todo from "./todo";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

// write test to check whether the todo component is rendered or not
it("renders todo without crashing", () => {
    render(<Todo />);
});

// write test to check whether the todo list heading is present or not
it("renders todo list heading", () => {
    render(<Todo />);
    expect(screen.getByText("To-do List")).toBeInTheDocument();
});




