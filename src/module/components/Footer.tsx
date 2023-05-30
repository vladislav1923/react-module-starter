import React, { ReactElement } from 'react';
import styled from 'styled-components';
import WebpackLogo from '@/icons/webpack-logo.svg';

const Footer = (): ReactElement => {
  return (
    <FooterContainer>
      <FooterImage src="assets/images/react-logo.png" />
      <FooterWebpackLogo />
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const FooterImage = styled.img`
  height: 60px;
`;

const FooterWebpackLogo = styled(WebpackLogo)`
  height: 100px;
`;

export default Footer;
