import { FormProps } from "components/base/types";
import styled from "styled-components";

const Form: React.FC<FormProps> = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>;
};

const StyledForm = styled.form``;

export default Form;
