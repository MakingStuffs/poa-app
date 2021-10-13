import { render, screen } from "utils/testing/testHelpers";
import { Form } from "components";

describe("<Form />", () => {
  test("renders", () => {
    render(<Form data-testid="form" onSubmit={() => {}} />);
    const element = screen.getByTestId("form");
    expect(element).toBeInTheDocument();
  });

  test("calls function passed to onSubmit", () => {
    const fn = jest.fn((e) => e.preventDefault());
    render(<Form data-testid="form" onSubmit={fn} />);
    const element = screen.getByTestId("form") as HTMLFormElement;
    element.submit();
    expect(fn.mock.calls.length).toBe(1);
  });

  test("renders child components", () => {
    render(
      <Form data-testid="form" onSubmit={() => {}}>
        <input data-testid="input" />
      </Form>
    );
    const form = screen.getByTestId("form");
    expect(form).toBeInTheDocument();
    const input = screen.getByTestId("input");
    expect(input).toBeInTheDocument();
  });
});
