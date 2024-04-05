// import statements -----------------------------------------------------------------------------------------------------------
// @ts-ignore: Unreachable code error
import React from "react";
import { render, screen } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import App from "../src/pages/App";

beforeEach(() => {
  fetchMock.resetMocks();
});

test("renders todo items from API", async () => {
  // Mock the fetch function
  fetchMock.mockResponseOnce(
    JSON.stringify([{ userId: 1, id: 1, title: "todo 1", completed: false }]),
  );

  // render component
  render(<App />);

  // Wait for the API data to be fetched and rendered
  await screen.findByText("To do list");
  // Find all todo items
  const todoItems = screen.getAllByRole("heading");
  // Assert that todoItems is not empty
  expect(todoItems).not.toHaveLength(0);
});

// TO BE CONTINUED... Facing issues using Jest with react-ts
