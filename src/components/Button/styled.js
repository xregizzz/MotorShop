import styled from "styled-components";

export const Container = styled.button`
  background: ${(props) => (props.whiteSchema ? "#fdfdfd" : "#4529e6")};
  color: ${(props) => (props.whiteSchema ? "#0B0D0D" : "#FFFFFF")};
  height: 48px;
  border-radius: 4px;
  border: 1.5px solid ${(props) => (props.whiteSchema ? "#ced4da" : "#4529E6")};
  font-family: "Inter";
  margin-top: 16px;
  width: 100%;
  transition: 0.5s;

  :hover {
    filter: brightness(0.9);
  }
`;
