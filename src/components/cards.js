import styled from "styled-components";
import {Card} from "antd";

export const ContainerCard = styled(Card)`
  overflow: hidden;
  border: none;
  background: none;
  box-shadow: -1px 1px 5px 0 rgba(77, 76, 76, 0.4);
  & > .ant-card-head {
    background-color: #fff;
  }
  & > .ant-card-body {
    background-color: rgba(200, 200, 200, 0.5);
    backdrop-filter: blur(5px);
  }
`

export const IconCardTitle = styled.span`
  display: flex;
  font-size: 20px;
  .anticon {
    margin: auto 10px auto 0;
    font-size: 1em;
    padding: 5px;
    border-radius: 1px;
    background-color: #f3f3f3;
    color: #ff6431;
  }
  span {
    margin: auto 0;
  }
`