import React from "react";
import styled from "styled-components";

import FB_Logo from "../../assets/fb_logo.png";

const Title = styled.p`
  font-family: MaisonNeue-Bold;
  font-size: 18px;
  letter-spacing: 1.2px;
  margin-bottom: 10px;
`;

const InlineContainer = styled.div`
  display: flex;
  justify-content: left;
  margin: 15px 0px;
  p {
    margin: 0px;
  }
`;

const Tags = styled.p`
  font-family: MaisonNeue-Medium;
  font-size: 10px;
  color: #000;
  letter-spacing: 0.8px;
`;

const InfoTags = styled(Tags)`
  padding-right: 20px;
`;

const MetadataTags = styled(Tags)`
  padding-right: 10px;
`;

const Container = styled.div`
  width: 600px;
  height: 100px;
  margin: auto;

  display: flex;
`;

const Image = styled.img`
  height: 60px;
  align-self: center;
  padding-right: 25px;
`;

export default () => (
  <Container>
    <Image alt="Facebook Logo" src={FB_Logo} />
    <div>
      <Title>Senior DevOps Engineer</Title>
      <InlineContainer>
        <InfoTags>👨‍💻Software</InfoTags>
        <InfoTags>🇩🇪Berlin, Germany</InfoTags>
      </InlineContainer>
      <InlineContainer>
        <MetadataTags>#AWS</MetadataTags>
        <MetadataTags>#Docker</MetadataTags>
        <MetadataTags>#Kubernetes</MetadataTags>
      </InlineContainer>
    </div>
  </Container>
);
