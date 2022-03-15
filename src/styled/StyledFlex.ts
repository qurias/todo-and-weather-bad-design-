import styled from "styled-components";

interface Flex {
  justify?: string;
  content?: string;
  items?: string;
  wrap?: string;
  direction?: string;
}

const StyledFlex = styled.div<Flex>`
  display: flex;

  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.items};
  align-content: ${(props) => props.content};
  flex-wrap: ${(props) => props.wrap};
  flex-direction: ${(props) => props.direction};
`;

export default StyledFlex;