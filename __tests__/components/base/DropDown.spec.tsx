import { render, screen } from "utils/testing/testHelpers";
import { DropDown } from "components";
describe("<DropDown />", () => {
  it("renders", () => {
    render(<DropDown data-testid="dropdown" />);
    const element = screen.getByTestId("dropdown");
    expect(element).toBeInTheDocument();
  });

  it("has children", () => {
    render(
      <DropDown data-testid="dropdown">
        <option value="1" data-testid="option"></option>
      </DropDown>
    );
    const element = screen.getByTestId("dropdown");
    expect(element).toBeInTheDocument();
    const option = screen.getByTestId("option");
    expect(option).toBeInTheDocument();
  });

  it("can change value", () => {
    render(
      <DropDown data-testid="dropdown">
        <option value="1" data-testid="option"></option>
        <option value="2" data-testid="option-2"></option>
      </DropDown>
    );
    const element = screen.getByTestId("dropdown") as HTMLSelectElement;
    expect(element).toBeInTheDocument();
    const option = screen.getByTestId("option") as HTMLOptionElement;
    expect(option).toBeInTheDocument();
    option.selected = true;
    element.dispatchEvent(new Event("change"));
    expect(element.value).toBe("1");
    const option2 = screen.getByTestId("option-2") as HTMLOptionElement;
    expect(option2).toBeInTheDocument();
    option2.selected = true;
    element.dispatchEvent(new Event("change"));
    expect(element.value).toBe("2");
  });

  it("uses callback", () => {
    const callback = jest.fn((event) => {});
    render(
      <DropDown data-testid="dropdown" changeCallback={callback}>
        <option value="1" data-testid="option"></option>
        <option value="2" data-testid="option-2"></option>
      </DropDown>
    );
    const element = screen.getByTestId("dropdown") as HTMLSelectElement;
    expect(element).toBeInTheDocument();
    const option = screen.getByTestId("option") as HTMLOptionElement;
    expect(option).toBeInTheDocument();
    option.click();
    option.selected = true;
    element.dispatchEvent(new Event("change", { bubbles: true }));
    expect(element.value).toBe("1");
    expect(callback).toHaveBeenCalled();
  });
});
