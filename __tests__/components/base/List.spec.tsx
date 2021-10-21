import { render, screen } from "utils/testing/testHelpers";
import { List } from "components";

describe("<List />", () => {
  it("renders ul element", () => {
    render(
      <List data-testid="ul" isOrdered={false}>
        <li>List</li>
      </List>
    );
    const element = screen.getByTestId("ul");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("UL");
  });

  it("renders ol element", () => {
    render(
      <List data-testid="ol" isOrdered={true}>
        <li>List</li>
      </List>
    );
    const element = screen.getByTestId("ol");
    expect(element).toBeInTheDocument();
    expect(element.tagName).toBe("OL");
  });

  it("renders children", () => {
    render(
      <List data-testid="ol" isOrdered={true}>
        <li data-testid="li">List</li>
      </List>
    );
    const element = screen.getByTestId("ol");
    expect(element).toBeInTheDocument();
    const child = screen.getByTestId("li");
    expect(child).toBeInTheDocument();
  });
});
