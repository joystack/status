import React from "react";
import "./App.css";
import styled, {createGlobalStyle} from "styled-components";
import Status from "./status";
import useIssues from "./useIssues";
import Header from "./header";
import Components from "./components";
import Incidents from "./incidents";
import Footer from "./footer";
import {ReloadOutlined, RocketOutlined} from "@ant-design/icons";
import {ContainerCard, IconCardTitle} from "./cards";
import {Button} from "antd";

const PageBackground = createGlobalStyle`
  body {
    background: ${({backgroundImageUrl}) => `url(${backgroundImageUrl})`} no-repeat center;
    background-size: cover;
    backdrop-filter: blur(2px);
  }
`

const Container = styled.div`
  max-width: 1008px;
  padding: 16px;
  margin: 16px auto;
`;

const ComponentsContainer = styled(ContainerCard)`
`;


const minecraftBackgroundCount = 6

function useRandomBackgroundImage() {
  return React.useMemo(() => {
    const index = Math.floor(Math.random() * minecraftBackgroundCount)
    return `/background/minecraft/background-${index}.jpg`
  }, [])
}

export default () => {
  const [
    componentsLoading,
    componentsError,
    componentsResults,
    componentsRefetch,
  ] = useIssues("component");

  const [
    incidentsLoading,
    incidentsError,
    incidentsResults,
    incidentsRefetch,
  ] = useIssues("incident");

  const backgroundImage = useRandomBackgroundImage()

  return (
    <Container>
      <PageBackground backgroundImageUrl={backgroundImage}/>
      <Header/>
      <ComponentsContainer
        title={
          <IconCardTitle>
            <RocketOutlined/>
            Status
          </IconCardTitle>
        }
        extra={
          <Button
            type="primary"
            icon={<ReloadOutlined/>}
            onClick={componentsRefetch}
          >
            Reload
          </Button>
        }
        cover={
          <Status
            loading={componentsLoading}
            error={{
              hasError: componentsError || incidentsError,
              errors: {componentsError, incidentsError},
            }}
            components={componentsResults}
            refetch={() => {
              componentsRefetch();
              incidentsRefetch();
            }}
          />
        }
      >
        <Components
          loading={componentsLoading}
          components={componentsResults}
        />
      </ComponentsContainer>
      <Incidents
        loading={incidentsLoading}
        incidents={incidentsResults}
        incidentsRefetch={incidentsRefetch}
      />
      <Footer/>
    </Container>
  );
};
