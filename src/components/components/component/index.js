import React from "react";
import styled from "styled-components";
import Status from "./status";

const Component = styled.div`
  background-color: white;
  padding: 10px 16px;
  border-radius: 3px;
  justify-content: space-between;
  align-items: center;
  display: flex;
  font-size: 15px;
  box-shadow: 0 1px 5px 0 rgba(100, 100, 100, 0.3);

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export default ({ component }) => {
  return (
    <Component>
      {component.title} <Status labels={component.labels} />
    </Component>
  );
};
