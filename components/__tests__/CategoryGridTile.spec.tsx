import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import CategoryGridTile from "../CategoryGridTile";

// Mock the Category model
jest.mock("../../data/models/category", () => {
  return class Category {
    id: string;
    title: string;
    color: string;
    constructor(id: string, title: string, color: string) {
      this.id = id;
      this.title = title;
      this.color = color;
    }
  };
});

describe("CategoryGridTile", () => {
  const mockProps = {
    title: "Test Category",
    color: "#ff0000",
  };

  it("renders correctly with given props", () => {
    const { getByText, getByTestId } = render(
      <CategoryGridTile {...mockProps} />,
    );

    // Check if the title is rendered correctly
    const titleElement = getByText("Test Category");
    expect(titleElement).toBeTruthy();

    // Check if the component has the correct structure
    const rootView = getByTestId("category-grid-item");
    expect(rootView).toBeTruthy();

    // Check if the inner container exists
    const innerContainer = getByTestId("inner-container");
    expect(innerContainer).toBeTruthy();

    // Check if the inner container has the correct background color
    expect(innerContainer.props.style).toContainEqual({
      backgroundColor: "#ff0000",
    });
  });

  it("handles press events correctly", () => {
    const onPressMock = jest.fn();

    const { getByTestId } = render(
      <CategoryGridTile {...mockProps} onPress={onPressMock} />,
    );

    // Find the Pressable component by testID and trigger press event
    const pressable = getByTestId("category-pressable");

    // Simulate a press event
    fireEvent.press(pressable);

    // Check if the onPress callback was called
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
