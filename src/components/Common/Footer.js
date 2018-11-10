import React from 'react';
import Colors from './Colors';
import styled from 'styled-components';

const Footer = () => (
  <Wrapper>
    <Container>
      <TopSection>
        <LogosWrapper>Logos</LogosWrapper>
        <LinksWrapper className="content">
          <List>
            <HeadListItem>About</HeadListItem>
            <NormalListItem>
              <LinkText>About AMP</LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>Apply to List</LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>News</LinkText>
            </NormalListItem>
          </List>
          <List>
            <HeadListItem>Terms</HeadListItem>
            <NormalListItem>
              <LinkText>Terms of Use</LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>Privacy Policy</LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>Disclaimer Statement</LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>Risk Reminder</LinkText>
            </NormalListItem>
          </List>
          <List>
            <HeadListItem>Support</HeadListItem>
            <NormalListItem>
              <LinkText>FAQ</LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>Fee Schedules</LinkText>
            </NormalListItem>
          </List>
          <List>
            <HeadListItem>Contact</HeadListItem>
            <NormalListItem>customer: service@proofsuite.com</NormalListItem>
            <NormalListItem>Apply to List: apply@proofsuite.com</NormalListItem>
            <NormalListItem />
          </List>
        </LinksWrapper>
      </TopSection>
      <BottomSection>©2018 PROOFSUITE.COM All Rights Reserved</BottomSection>
    </Container>
  </Wrapper>
);
export default Footer;

const Wrapper = styled.div.attrs({
  className: 'footer',
})`
  background-color: ${Colors.DARK_GRAY4};
  width: 100%;
  color: ${Colors.LIGHT_GRAY5};
  box-shadow: 0 0 0 1px rgba(16, 22, 26, 0.2), 0 0 0 rgba(16, 22, 26, 0), 0 -1px 1px rgba(16, 22, 26, 0.4);
`;

const Container = styled.div`
  width: 70%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 40px 0px 30px;
  border-bottom: 1px solid ${Colors.GRAY2};
  margin-bottom: 15px;
`;

const BottomSection = styled.p`
  margin-bottom: 15px;
  text-align: center;
`;

const LogosWrapper = styled.div`
  width: 20%;
`;

const LinksWrapper = styled.div`
  width: 75%;
  display: flex;
  justify-content: space-between;
`;

const List = styled.ul``;

const NormalListItem = styled.li`
  margin: 10px auto;
`;

const HeadListItem = styled.li`
  color: ${Colors.GRAY2};
`;

const LinkText = styled.a`
  color: ${Colors.LIGHT_GRAY5} !important;
  &:hover {
    color: ${Colors.BLUE4} !important;
  }
`;
