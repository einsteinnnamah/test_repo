import styled from "styled-components";

export const OverFlowCarousel = styled.div`
  display: flex;
  justify-content: unset;
  width: max-content;
  transition: all 0.5s;
  transform: translateX(
    ${(props) =>
      props.lastTranslate ? props.lastTranslate : props.translate}px
  );
`;
