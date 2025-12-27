'use client';

import styled from 'styled-components';
import Navbar from '@/components/layout/Navbar';
import FooterNew from '@/components/layout/FooterNew';
import Link from 'next/link';

const PageContainer = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.colors.background};
`;

const Hero = styled.section`
  padding: 8rem 2rem 4rem;
  background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 100%);
  text-align: center;
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto;
`;

const Content = styled.section`
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const Section = styled.div`
  margin-bottom: 3rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.primary};
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const List = styled.ul`
  list-style: disc;
  margin-left: 2rem;
  margin-bottom: 1rem;

  li {
    font-size: 1rem;
    line-height: 1.8;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.5rem;
  }
`;

const UpdateDate = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-style: italic;
  margin-bottom: 2rem;
`;

const ContactLink = styled(Link)`
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: underline;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

export default function PrivacyPolicyPage() {
  return (
    <PageContainer>
      <Navbar />

      <Hero>
        <Title>Privacy Policy</Title>
        <Subtitle>
          Your privacy is important to us. Learn how we collect, use, and protect your information.
        </Subtitle>
      </Hero>

      <Content>
        <UpdateDate>Last Updated: December 28, 2024</UpdateDate>

        <Section>
          <SectionTitle>1. Introduction</SectionTitle>
          <Paragraph>
            Pecify Infra Payment Solution Pvt Ltd ("Pecify," "we," "us," or "our") is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our
            payment gateway services and website.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Information We Collect</SectionTitle>
          <Paragraph>We collect several types of information to provide and improve our services:</Paragraph>

          <List>
            <li><strong>Personal Information:</strong> Name, email address, phone number, company name, and business details</li>
            <li><strong>Financial Information:</strong> Bank account details, payment card information (processed securely through PCI DSS compliant systems)</li>
            <li><strong>Transaction Data:</strong> Details of payments processed through our gateway</li>
            <li><strong>Technical Information:</strong> IP address, browser type, device information, and usage data</li>
            <li><strong>KYC Information:</strong> Government-issued ID, business registration documents, and other verification documents</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. How We Use Your Information</SectionTitle>
          <Paragraph>We use the collected information for the following purposes:</Paragraph>

          <List>
            <li>To provide, maintain, and improve our payment gateway services</li>
            <li>To process transactions and send transaction notifications</li>
            <li>To verify your identity and comply with KYC/AML regulations</li>
            <li>To detect and prevent fraud and security incidents</li>
            <li>To communicate with you about your account and our services</li>
            <li>To comply with legal obligations and regulatory requirements</li>
            <li>To analyze usage patterns and improve user experience</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Data Security</SectionTitle>
          <Paragraph>
            We implement industry-standard security measures to protect your information:
          </Paragraph>

          <List>
            <li>256-bit SSL encryption for all data transmission</li>
            <li>PCI DSS Level 1 compliance for payment card data</li>
            <li>Tokenization of sensitive payment information</li>
            <li>Regular security audits and penetration testing</li>
            <li>Restricted access to personal information on a need-to-know basis</li>
            <li>Secure data centers with physical and digital access controls</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Information Sharing</SectionTitle>
          <Paragraph>We may share your information with:</Paragraph>

          <List>
            <li><strong>Service Providers:</strong> Third-party vendors who assist in operating our services (payment processors, fraud detection services, etc.)</li>
            <li><strong>Banking Partners:</strong> Financial institutions involved in processing your transactions</li>
            <li><strong>Legal Authorities:</strong> When required by law or to protect our rights and comply with legal processes</li>
            <li><strong>Business Transfers:</strong> In connection with any merger, acquisition, or sale of assets</li>
          </List>

          <Paragraph>
            We never sell your personal information to third parties for marketing purposes.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Data Retention</SectionTitle>
          <Paragraph>
            We retain your information for as long as necessary to provide our services and comply with legal obligations.
            Transaction data is retained for a minimum of 7 years as required by financial regulations.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Your Rights</SectionTitle>
          <Paragraph>You have the right to:</Paragraph>

          <List>
            <li>Access your personal information</li>
            <li>Correct inaccurate or incomplete data</li>
            <li>Request deletion of your data (subject to legal obligations)</li>
            <li>Object to or restrict processing of your information</li>
            <li>Data portability</li>
            <li>Withdraw consent where processing is based on consent</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. Cookies and Tracking</SectionTitle>
          <Paragraph>
            We use cookies and similar technologies to enhance your experience, analyze usage, and prevent fraud.
            You can control cookie settings through your browser preferences.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>9. International Data Transfers</SectionTitle>
          <Paragraph>
            Your information may be transferred to and processed in countries other than your country of residence.
            We ensure appropriate safeguards are in place to protect your data during international transfers.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>10. Children's Privacy</SectionTitle>
          <Paragraph>
            Our services are not intended for individuals under 18 years of age. We do not knowingly collect
            information from children.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>11. Changes to This Policy</SectionTitle>
          <Paragraph>
            We may update this Privacy Policy from time to time. We will notify you of any material changes by
            posting the new policy on our website and updating the "Last Updated" date.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>12. Contact Us</SectionTitle>
          <Paragraph>
            If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at:
          </Paragraph>
          <Paragraph>
            Email: <ContactLink href="mailto:privacy@pecify.com">privacy@pecify.com</ContactLink><br />
            Phone: +91 97588 13335<br />
            Address: 7th Floor, Block E-12/8, Vrindavan Tower, Sanjay Palace, Agra, Uttar Pradesh
          </Paragraph>
        </Section>
      </Content>

      <FooterNew />
    </PageContainer>
  );
}
