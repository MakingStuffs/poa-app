import { render, screen } from "utils/testing/testHelpers";
import { TextInput } from "components";

describe("<TextInput />", () => {
  test("renders with type of text", () => {
    render(<TextInput data-testid="textInput" />);
    const element = screen.getByTestId("textInput") as HTMLInputElement;
    expect(element).toBeInTheDocument();
    expect(element.type).toBe("text");
  });

  test("can change value", () => {
    render(<TextInput data-testid="textInput" />);
    const element = screen.getByTestId("textInput") as HTMLInputElement;
    expect(element).toBeInTheDocument();
    element.value = "testing";
    const elementByValue = screen.getByDisplayValue("testing");
    expect(elementByValue).toBeInTheDocument();
  });

  test("can set attributes", () => {
    render(
      <TextInput data-testid="textInput" inputMode="email" placeholder="test" />
    );
    const element = screen.getByTestId("textInput") as HTMLInputElement;
    expect(element).toBeInTheDocument();
    expect(element.placeholder).toBe("test");
    expect(element.inputMode).toBe("email");
  });
});
