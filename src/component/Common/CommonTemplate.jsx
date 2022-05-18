import React from "react";
import styled from "styled-components";

const CommonTemplate = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
`;

function Div({ children }) {
  return <CommonTemplate>{children}</CommonTemplate>;
}
export default Div;
