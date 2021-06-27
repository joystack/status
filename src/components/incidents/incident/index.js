import React from "react";
import styled from "styled-components";
import moment from "moment";
import ReactMarkdown from "react-markdown";
import {Card} from "antd";
import {IconCardTitle} from "../../cards";
import {IssuesCloseOutlined, WarningOutlined} from "@ant-design/icons";

const Incident = styled(Card)`
  transition: 0.3s;
  box-shadow: 0 1px 5px 0 rgba(100, 100, 100, 0.3);
  .ant-card-body {
    padding: 10px 20px 5px 20px;
  }
  :not(:last-child) {
    margin-bottom: 25px;
  }
`;

const Details = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3px;
`;

const Title = styled(IconCardTitle)`
  font-size: 16px;
  color: #1e1e1e;
`;

const Comment = styled.div`
  white-space: break-spaces;
  color: #1e1e1e;
  font-size: 15px;
`;

const Status = styled.div`
  color: ${(props) => (props.active ? "#6e6b6b" : "#cc4646")};
  background-color: ${(props) =>
    props.active ? "rgba(177, 177, 177, 0.1)" : "rgba(252,63,63,0.1)"};
  padding: 5px 12px;
  border-radius: 16px;
  font-size: 13px;
  transition: 0.3s;
`;

const Created = styled.div`
  font-size: 13px;
  color: #6e6b6b;
  font-weight: bold;
  margin-bottom: 10px;
`;

export default ({incident}) => (
  <Incident
    title={
      <Title>
        {incident.closed_at ? <IssuesCloseOutlined/> : <WarningOutlined/>}
        {incident.title}
      </Title>
    }
    extra={
      <Status active={incident.closed_at}>
        {incident.closed_at ? "Closed" : "Active"}
      </Status>
    }
  >
    <Details>
      <Created>
        {moment(incident.created_at)
          .format("MMMM Do YYYY, h:mm a")
          .toUpperCase()}
      </Created>
    </Details>
    <Comment>
      <ReactMarkdown source={incident.body}/>
    </Comment>
  </Incident>
);
