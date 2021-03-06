import styled from "styled-components";
import { ButtonProps } from "components/base/types";

const Button: React.FC<ButtonProps> = ({ clickHandler, children, ...rest }) => {
  return (
    <StyledButton onClick={clickHandler} {...rest}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button``;

export default Button;
