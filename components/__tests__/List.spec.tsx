// Mock react-native before importing any components
import React from "react";
import { render } from "@testing-library/react-native";
import "@testing-library/jest-native/extend-expect";
import List from "../List";

jest.mock("react-native");

describe("List", () => {
  it("renders correctly with empty data", () => {
    const { UNSAFE_root } = render(<List data={[]} />);

    // With empty data, nothing should be rendered
    expect(UNSAFE_root.children.length).toBe(0);
  });

  it("renders correctly with single item", () => {
    const testData = ["Test Item"];
    const { getByText, UNSAFE_getAllByType } = render(<List data={testData} />);

    // Check if the text is rendered correctly
    const textElement = getByText("Test Item");
    expect(textElement).toBeTruthy();

    // Check if we have the correct number of View components
    const viewElements = UNSAFE_getAllByType("View");
    expect(viewElements.length).toBe(1);

    // Check if the View has the correct style
    expect(viewElements[0].props.style).toMatchObject({
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginVertical: 4,
      marginHorizontal: 8,
      backgroundColor: "#f17a30",
    });

    // Check if the Text has the correct style
    const textElements = UNSAFE_getAllByType("Text");
    expect(textElements[0].props.style).toMatchObject({
      color: "#351401",
      textAlign: "center",
    });
  });

  it("renders correctly with multiple items", () => {
    const testData = ["Item 1", "Item 2", "Item 3"];
    const { getAllByText, UNSAFE_getAllByType } = render(
      <List data={testData} />,
    );

    // Check if all items are rendered
    const item1 = getAllByText("Item 1");
    const item2 = getAllByText("Item 2");
    const item3 = getAllByText("Item 3");

    expect(item1.length).toBe(1);
    expect(item2.length).toBe(1);
    expect(item3.length).toBe(1);

    // Check if we have the correct number of View components
    const viewElements = UNSAFE_getAllByType("View");
    expect(viewElements.length).toBe(3);

    // Check if we have the correct number of Text components
    const textElements = UNSAFE_getAllByType("Text");
    expect(textElements.length).toBe(3);
  });

  it("applies correct styles to list items", () => {
    const testData = ["Style Test"];
    const { UNSAFE_getAllByType } = render(<List data={testData} />);

    const viewElements = UNSAFE_getAllByType("View");
    const textElements = UNSAFE_getAllByType("Text");

    // Check View styles
    expect(viewElements[0].props.style).toMatchObject({
      borderRadius: 6,
      paddingHorizontal: 8,
      paddingVertical: 4,
      marginVertical: 4,
      marginHorizontal: 8,
      backgroundColor: "#f17a30",
    });

    // Check Text styles
    expect(textElements[0].props.style).toMatchObject({
      color: "#351401",
      textAlign: "center",
    });
  });
});
