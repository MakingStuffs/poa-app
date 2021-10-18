import { screen, render } from "utils/testing/testHelpers";
import { Button } from "components";

describe("<Button />", () => {
  test("renders", () => {
    render(<Button clickHandler={() => {}} data-testid="button" />);
    const element = screen.getByTestId("button");
    expect(element).toBeInTheDocument();
  });

  test("can have children", () => {
    render(
      <Button clickHandler={() => {}} data-testid="button">
        <span data-testid="span">Hey</span>
      </Button>
    );
    const element = screen.getByTestId("button");
    expect(element).toBeInTheDocument();
    const child = screen.getByTestId("span");
    expect(child).toBeInTheDocument();
  });

  test("uses callback on click", () => {
    const fn = jest.fn();
    render(<Button clickHandler={fn} data-testid="button"></Button>);
    const element = screen.getByTestId("button");
    expect(element).toBeInTheDocument();
    element.click();
    expect(fn.mock.calls.length).toBe(1);
  });
});
