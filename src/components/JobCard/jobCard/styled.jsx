import styled from "styled-components";

const Title = styled.p`
  font-family: MaisonNeue-Bold;
  font-size: 20px;
  letter-spacing: 1.2px;
  margin: 5px 0px;
`;

const Company = styled.p`
  font-family: Karla;
  margin: 0px;
`;

const Inline = styled.div`
  display: flex;
`;

const Tags = styled.p`
  font-family: MaisonNeue-Medium;
  font-size: 12px;
  color: #000;
  letter-spacing: 0.8px;
  margin: 0px;
`;

const Info = styled(Tags)`
  padding-right: 20px;
`;

const Tag = styled(Tags)`
  padding-left: 10px;
`;

const Container = styled.div`
  width: 800px;
  margin: auto;
  padding-bottom: 30px;

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
  ${({ width }) => (width ? `width:${width}` : null)};
`;

const EyeIcon = styled.img``;

const EyeNumber = styled.p`
  font-family: MaisonNeue-Medium;
  font-size: 10px;
  color: #000;
  margin-right: 5px;
`;

export { EyeIcon, EyeNumber, Image, Container, Tag, Info, Inline, Center, Title, Company };
