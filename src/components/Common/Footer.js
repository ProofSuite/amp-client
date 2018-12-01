import React from 'react';
import Colors from './Colors';
import styled from 'styled-components';
import Indent from './Indent'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faDiscord, faMedium, faFacebook, faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons'


const Footer = () => (
  <Wrapper>
    <Container>
      <TopSection>
        <LogosWrapper>
        <img src="amp_black.png" class="Profile-image" width="120" height="120" />
        <FooterText>The community-owned trading platform</FooterText>
        </LogosWrapper>
        <LinksWrapper className="content">
          <List>
            <HeadListItem>About</HeadListItem>
            <NormalListItem>
                <LinkText>
                  <a href="https://www.proofsuite.com/#about" target="_blank">
                    Proof Suite
                  </a>
                </LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>
                <a href="https://www.proofsuite.com/#apps" target="_blank">
                    Products
                  </a>
              </LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>
                <a href="https://www.proofsuite.com/#terms" target="_blank">
                  Terms
                </a>
              </LinkText>
            </NormalListItem>
          </List>
          <List>
            <HeadListItem>Platforms</HeadListItem>
            <NormalListItem>
              <LinkText>
                <a href="https://www.proofsuite.com/#amp" target="_blank">
                  AMP
                </a>
              </LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>
                <a href="https://www.proofsuite.com/#avocado" target="_blank">
                  Avocado
                </a>
              </LinkText>
            </NormalListItem>
            <NormalListItem>
              <LinkText>
                <a href="https://www.proofsuite.com/#togen" target="_blank">
                  Togen
                </a>
              </LinkText>
            </NormalListItem>
          </List>
          <List>
            <HeadListItem>Links</HeadListItem>
            <NormalListItem>
              <a href="https://twitter.com/proofsuite" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
                <Indent />
                <LinkText>Twitter</LinkText>
              </a>
            </NormalListItem>
            <NormalListItem>
              <a href="https://discordapp.com/invite/eChaHFk" target="_blank">
                <FontAwesomeIcon icon={faDiscord} />
                <Indent />
                <LinkText>Discord</LinkText>
              </a>
              </NormalListItem>
            <NormalListItem>
              <a href="https://facebook.com/proofsuite" target="_blank">
                <FontAwesomeIcon icon={faFacebook} />
                <Indent />
                <LinkText>Facebook</LinkText>
              </a>
            </NormalListItem>
            <NormalListItem>
              <a href="https://medium.com/proof-of-fintech" target="_blank">
                <FontAwesomeIcon icon={faMedium} />
                <Indent />
                <LinkText>Medium</LinkText>
              </a>
            </NormalListItem>
            <NormalListItem>
              <a href="https://github.com/proofsuite" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
                <Indent />
                <LinkText>Github</LinkText>
              </a>
            </NormalListItem>
            <NormalListItem>
              <a href="https://www.youtube.com/channel/UCKDNphVF9TItP7PP9wJPM6g" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />            
                <Indent />
                <LinkText>Youtube</LinkText>
              </a>
            </NormalListItem>
          </List>
          <List>
            <HeadListItem>Contact</HeadListItem>
            <NormalListItem>Support: support@proofsuite.com</NormalListItem>
            <NormalListItem>Careers: careers@proofsuite.com</NormalListItem>
            <NormalListItem />
          </List>
        </LinksWrapper>
      </TopSection>
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
  margin-bottom: 15px;
`;

const BottomSection = styled.p`
  margin-bottom: 15px;
  text-align: center;
`;

const LogosWrapper = styled.div`
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
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

const FooterText = styled.p`
  color: ${Colors.GRAY5};
  text-align: center;
`;

const LinkText = styled.a`
`;
