import React from "react";
import TodoTable from "./TodoTable";
import App from "./App";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent } from "@testing-library/dom";

test("renderstodotable", () => {
  const row = [{ desc: "Go to coffee", date: "24.11.2019" }];
  const todotable = render(<TodoTable todos={row} />);
  expect(todotable.container).toHaveTextContent("Go to coffee");
});

test("addtodo", () => {
  const { container, getByText, getByPlaceholderText } = render(<App />);
  const desc = getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  const date = getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "29.11.2019" } });
  const button = getByText("Add");
  fireEvent.click(button);
  expect(container).toHaveTextContent("Go to coffee");
});

test("clearAll", () => {
  const {container, getByText, getByPlaceholderText } = render(<App />);
  const desc = getByPlaceholderText("Description");
  fireEvent.change(desc, { target: { value: "Go to coffee" } });
  const date = getByPlaceholderText("Date");
  fireEvent.change(date, { target: { value: "29.11.2019" } });
  const button = getByText("Clear all");
  fireEvent.click(button);
  expect(container).toHaveTextContent([]);
});
