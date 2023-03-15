import "./matchMedia.mock.js";
import Todo from "./todo";
import { render, screen } from "@testing-library/react";

// Render todo without crashing
it("renders todo without crashing", () => {
    render(<Todo />);
});

// Check if the todo list heading is present
it("renders todo list heading", () => {
    render(<Todo />);
    expect(screen.getByText("To-do List")).toBeInTheDocument();
});

// Check if the todo list is empty
it("renders empty todo list", () => {
    render(<Todo />);
    expect(screen.getByText("No Data")).toBeInTheDocument();
}); 
