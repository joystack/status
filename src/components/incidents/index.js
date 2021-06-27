import React from "react";
import styled from "styled-components";
import Incident from "./incident";
import Skeleton from "./skeleton";
import useDidMount from "../useDidMount";
import {FireOutlined, ReloadOutlined} from "@ant-design/icons";
import {ContainerCard, IconCardTitle} from "../cards";
import {Button} from "antd";

const Container = styled(ContainerCard)`
  margin: 32px auto 0 auto;
  max-width: 1040px;
`;

const NoFound = styled.div`
  margin: 0 8px;
`;

export default ({ loading, incidents , incidentsRefetch}) => {
  const [hasMounted] = useDidMount();

  return (
    <Container
      title={
        <IconCardTitle>
          <FireOutlined/>
          Incidents
        </IconCardTitle>
      }
      extra={
        <Button
          type="primary"
          icon={<ReloadOutlined/>}
          onClick={incidentsRefetch}
        >
          Reload
        </Button>
      }
    >
      {!loading || hasMounted ? (
        incidents?.length > 0 ? (
          incidents?.map((incident) => (
            <Incident key={incident.id} incident={incident} />
          ))
        ) : (
          <NoFound>No Incidents found.</NoFound>
        )
      ) : (
        <>
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </>
      )}
    </Container>
  );
};
