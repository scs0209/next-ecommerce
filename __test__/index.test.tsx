import { render, screen } from "@testing-library/react";

describe("Test", () => {
  it("should render a div element and be in the document", () => {
    render(<div>Test Element</div>);
    const testElement = screen.getByText("Test Element");
    expect(testElement).toBeInTheDocument();
  });
});
