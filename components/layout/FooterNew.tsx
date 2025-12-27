'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaShieldAlt, FaLock } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.surface};
  padding: 4rem 0 3rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (min-width: 640px) {
    padding: 0 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 0 2rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @media (min-width: 1024px) {
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
  }
`;

const LinksGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const LinkColumn = styled.div``;

const ColumnTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 1rem;
`;

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const FooterLink = styled(Link)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CompanySection = styled.div`
  padding-left: 0;

  @media (min-width: 1024px) {
    padding-left: 2rem;
    border-left: 1px solid ${({ theme }) => theme.colors.border};
  }
`;

const LogoLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const LogoText = styled.span`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  transition: color 0.3s ease;

  ${LogoLink}:hover & {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const CompanyDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;

  svg {
    color: ${({ theme }) => theme.colors.primary};
    margin-top: 0.25rem;
    flex-shrink: 0;
  }

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const SocialLink = styled.a`
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.textSecondary};
  transition: all 0.3s ease;

  &:hover {
    background: #7209b7;
    color: white;
  }

  svg {
    font-size: 0.875rem;
  }
`;

const BottomBar = styled.div`
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Copyright = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const Badges = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

const Badge = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  svg {
    font-size: 0.875rem;
  }
`;

const FooterNew = () => {
  return (
    <FooterContainer>
      <Container>
        <Grid>
          <LinksGrid>
            <LinkColumn>
              <ColumnTitle>Products</ColumnTitle>
              <LinkList>
                <li><FooterLink href="/#payment-methods">Payment Gateway</FooterLink></li>
                <li><FooterLink href="/#payment-methods">UPI Integration</FooterLink></li>
                <li><FooterLink href="/pricing">Pricing</FooterLink></li>
                <li><FooterLink href="/developers">Developer API</FooterLink></li>
              </LinkList>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Developers</ColumnTitle>
              <LinkList>
                <li><FooterLink href="/developers">Documentation</FooterLink></li>
                <li><FooterLink href="/developers/api-reference">API Reference</FooterLink></li>
                <li><FooterLink href="/developers/sdk">SDK</FooterLink></li>
                <li><FooterLink href="/developers/guides">Integration Guides</FooterLink></li>
              </LinkList>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Company</ColumnTitle>
              <LinkList>
                <li><FooterLink href="/about">About Us</FooterLink></li>
                <li><FooterLink href="/developers">Developers</FooterLink></li>
                <li><FooterLink href="/contact">Support</FooterLink></li>
              </LinkList>
            </LinkColumn>

            <LinkColumn>
              <ColumnTitle>Legal</ColumnTitle>
              <LinkList>
                <li><FooterLink href="/legal/privacy">Privacy Policy</FooterLink></li>
                <li><FooterLink href="/legal/terms">Terms of Service</FooterLink></li>
                <li><FooterLink href="/legal/refund">Refund Policy</FooterLink></li>
                <li><FooterLink href="/legal/compliance">Compliance</FooterLink></li>
              </LinkList>
            </LinkColumn>
          </LinksGrid>

          <CompanySection>
            <LogoLink href="/">
              <LogoText>Pecify</LogoText>
            </LogoLink>
            <CompanyDescription>
              Simplifying payments for businesses of all sizes. Secure, reliable, and designed to help you grow.
            </CompanyDescription>

            <ContactInfo>
              <ContactItem>
                <FaMapMarkerAlt />
                <p>
                  7th Floor, Block E-12/8, Vrindavan Tower,<br />
                  Sanjay Palace, Agra, Uttar Pradesh
                </p>
              </ContactItem>
              <ContactItem>
                <FaPhoneAlt />
                <p>+91 97588 13335</p>
              </ContactItem>
            </ContactInfo>

            <SocialLinks>
              <SocialLink href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF />
              </SocialLink>
              <SocialLink href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialLink>
              <SocialLink href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialLink>
              <SocialLink href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn />
              </SocialLink>
              <SocialLink href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialLink>
            </SocialLinks>
          </CompanySection>
        </Grid>

        <BottomBar>
          <Copyright>© 2024 Pecify. All rights reserved.</Copyright>
          <Badges>
            <Badge>
              <FaShieldAlt /> PCI DSS Compliant
            </Badge>
            <Badge>
              <FaLock /> 256-bit Encryption
            </Badge>
          </Badges>
        </BottomBar>
      </Container>
    </FooterContainer>
  );
};

export default FooterNew;
