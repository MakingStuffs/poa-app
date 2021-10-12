import { FormProps } from "types";
import styled from "styled-components";

const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};

const StyledForm = styled.form``;

export default Form;
