import styled from "styled-components";
import { ListProps } from "./types";

const List: React.FC<ListProps> = ({ isOrdered, children, ...rest }) => {
  return isOrdered ? (
    <StyledOrderedList {...rest}>{children}</StyledOrderedList>
  ) : (
    <StyledUnOrderedList {...rest}>{children}</StyledUnOrderedList>
  );
};

const StyledOrderedList = styled.ol``;

const StyledUnOrderedList = styled.ul``;

export default List;
