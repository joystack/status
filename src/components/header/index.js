import React from "react";
import styled from "styled-components";

const Logo = styled.img`
  height: 110px;
  width: auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 25px;
`;

export default () => (
  <Header>
      <Logo
        src="/brand/logo.png"
        alt="Joystack"
      />
  </Header>
)
