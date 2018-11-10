import React from "react";
import styled from "styled-components";

import FB_Logo from "../../assets/fb_logo.png";
import Eye_Icon from "../../assets/eye-icon.svg";

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
`;

const Tags = styled.p`
  font-family: MaisonNeue-Medium;
  font-size: 10px;
  color: #000;
  letter-spacing: 0.8px;
  margin: 0px;
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
  padding-bottom: 20px;

  display: flex;
`;

const Image = styled.img`
  height: 60px;
  align-self: center;
  padding-right: 25px;
`;

const Center = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EyeIcon = styled.img``;

const EyeNumber = styled.p`
  font-family: MaisonNeue-Medium;
  font-size: 10px;
  color: #000;
  margin-right: 5px;
`;

export default ({ withEye = false }) => (
  <Container>
    <Image alt="Facebook Logo" src={FB_Logo} />
    <div style={{ width: 500 }}>
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
    <Center>
      {withEye ? (
        <InlineContainer>
          <EyeNumber>44</EyeNumber>
          <EyeIcon alt="Eye Icon" src={Eye_Icon} />
        </InlineContainer>
      ) : null}
    </Center>
  </Container>
);
