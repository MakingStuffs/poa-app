import styled from "styled-components";
import { DropDownProps } from "components/base/types";
import { useState } from "react";

const DropDown: React.FC<DropDownProps> = ({
  children,
  changeCallback,
  ...rest
}) => {
  const [value, setValue] = useState("");
  const handleChange: React.ChangeEventHandler = (event: React.ChangeEvent) => {
    const typedTarget = event.currentTarget as HTMLOptionElement;
    setValue(typedTarget.value);
    if (changeCallback) {
      changeCallback(event);
    }
  };
  return (
    <StyledSelect {...rest} value={value} onChange={handleChange}>
      {children}
    </StyledSelect>
  );
};

const StyledSelect = styled.select``;

export default DropDown;
