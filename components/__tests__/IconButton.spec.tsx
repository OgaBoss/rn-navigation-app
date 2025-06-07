// Mock react-native before importing any components
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import IconButton from "../IconButton";

jest.mock("react-native");

// Mock the Ionicons component from @expo/vector-icons
jest.mock("@expo/vector-icons", () => ({
  Ionicons: ({ name, size, color }) => (
    <mock-ionicons
      name={name}
      size={size}
      color={color}
      testID="mock-ionicons"
    />
  ),
}));

describe("IconButton", () => {
  const mockProps = {
    icon: "star",
    color: "#ff0000",
    onPress: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with given props", () => {
    const { getByTestId } = render(<IconButton {...mockProps} />);

    // Check if the Ionicons component is rendered with correct props
    const iconElement = getByTestId("mock-ionicons");
    expect(iconElement.props.name).toBe("star");
    expect(iconElement.props.size).toBe(24);
    expect(iconElement.props.color).toBe("#ff0000");
  });

  it("handles press events correctly", () => {
    const { UNSAFE_getAllByType } = render(<IconButton {...mockProps} />);

    // Find the Pressable component and trigger press event
    const pressable = UNSAFE_getAllByType("Pressable")[0];

    // Simulate a press event
    fireEvent.press(pressable);

    // Check if the onPress callback was called
    expect(mockProps.onPress).toHaveBeenCalledTimes(1);
  });

  it("applies pressed style when pressed", () => {
    const { UNSAFE_getAllByType } = render(<IconButton {...mockProps} />);

    // Find the Pressable component
    const pressable = UNSAFE_getAllByType("Pressable")[0];

    // Get the style function from the Pressable component
    const styleFunction = pressable.props.style;

    // Call the style function with pressed=true to simulate pressed state
    const pressedStyle = styleFunction({ pressed: true });

    // Check if the pressed style has the correct opacity
    expect(pressedStyle).toEqual({ opacity: 0.7 });

    // Call the style function with pressed=false to simulate unpressed state
    const unpressedStyle = styleFunction({ pressed: false });

    // Check that no style is applied when not pressed
    expect(unpressedStyle).toBeFalsy();
  });
});
