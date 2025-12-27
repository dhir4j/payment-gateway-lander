'use client';

import styled from 'styled-components';
import Navbar from '@/components/layout/Navbar';
import FooterNew from '@/components/layout/FooterNew';
import Link from 'next/link';
import { FiShield, FiLock, FiCheckCircle, FiFileText } from 'react-icons/fi';

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
  max-width: 1200px;
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
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;
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

const ComplianceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin: 3rem 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const ComplianceCard = styled.div`
  padding: 2rem;
  background: white;
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 10px 30px rgba(114, 9, 183, 0.1);
  }
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    font-size: 2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const CardDescription = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.primary}10;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
`;

export default function CompliancePage() {
  return (
    <PageContainer>
      <Navbar />

      <Hero>
        <Title>Compliance & Security</Title>
        <Subtitle>
          Committed to the highest standards of security, compliance, and data protection.
        </Subtitle>
      </Hero>

      <Content>
        <UpdateDate>Last Updated: December 28, 2024</UpdateDate>

        <Section>
          <Paragraph>
            At Pecify, we prioritize security and compliance to ensure the safety of your transactions and data.
            We adhere to international and Indian regulatory standards to provide a secure and trustworthy
            payment gateway service.
          </Paragraph>
        </Section>

        <ComplianceGrid>
          <ComplianceCard>
            <IconWrapper>
              <FiShield />
            </IconWrapper>
            <CardTitle>PCI DSS</CardTitle>
            <CardDescription>
              Level 1 PCI DSS certified, meeting the highest security standards for payment card processing.
            </CardDescription>
          </ComplianceCard>

          <ComplianceCard>
            <IconWrapper>
              <FiLock />
            </IconWrapper>
            <CardTitle>256-bit Encryption</CardTitle>
            <CardDescription>
              All data transmissions protected with bank-grade SSL/TLS encryption technology.
            </CardDescription>
          </ComplianceCard>

          <ComplianceCard>
            <IconWrapper>
              <FiCheckCircle />
            </IconWrapper>
            <CardTitle>RBI Compliant</CardTitle>
            <CardDescription>
              Fully compliant with Reserve Bank of India guidelines for payment aggregators.
            </CardDescription>
          </ComplianceCard>

          <ComplianceCard>
            <IconWrapper>
              <FiFileText />
            </IconWrapper>
            <CardTitle>ISO Certified</CardTitle>
            <CardDescription>
              ISO 27001 certified for information security management systems.
            </CardDescription>
          </ComplianceCard>
        </ComplianceGrid>

        <Section>
          <SectionTitle>1. PCI DSS Compliance</SectionTitle>
          <Paragraph>
            The Payment Card Industry Data Security Standard (PCI DSS) is a set of security standards designed
            to ensure that all companies that accept, process, store, or transmit credit card information
            maintain a secure environment.
          </Paragraph>
          <Paragraph>
            Pecify is PCI DSS Level 1 certified, which means:
          </Paragraph>
          <List>
            <li>Regular security audits by qualified security assessors</li>
            <li>Secure network architecture and firewall protection</li>
            <li>Encrypted storage and transmission of cardholder data</li>
            <li>Strict access control measures</li>
            <li>Continuous monitoring and testing of security systems</li>
            <li>Regular vulnerability scans and penetration testing</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>2. Reserve Bank of India (RBI) Compliance</SectionTitle>
          <Paragraph>
            As a payment aggregator operating in India, we comply with all RBI guidelines including:
          </Paragraph>
          <List>
            <li>KYC (Know Your Customer) and AML (Anti-Money Laundering) regulations</li>
            <li>Payment and Settlement Systems Act, 2007</li>
            <li>Guidelines on regulation of payment aggregators and payment gateways</li>
            <li>Two-factor authentication for card-not-present transactions</li>
            <li>Settlement and reconciliation requirements</li>
            <li>Data localization norms - all payment data stored within India</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Data Protection and Privacy</SectionTitle>
          <Paragraph>
            We are committed to protecting your data in compliance with:
          </Paragraph>
          <List>
            <li>Information Technology Act, 2000 and its amendments</li>
            <li>Reasonable Security Practices and Procedures Rules, 2011</li>
            <li>GDPR principles for international transactions</li>
            <li>Industry best practices for data privacy</li>
          </List>
          <HighlightBox>
            <Paragraph style={{ marginBottom: 0 }}>
              <strong>Data Localization:</strong> In compliance with RBI guidelines, all payment data is
              stored exclusively on servers located within India.
            </Paragraph>
          </HighlightBox>
        </Section>

        <Section>
          <SectionTitle>4. Security Measures</SectionTitle>
          <Paragraph>
            We implement multiple layers of security to protect your transactions:
          </Paragraph>
          <List>
            <li><strong>Tokenization:</strong> Sensitive card data replaced with non-sensitive tokens</li>
            <li><strong>Encryption:</strong> 256-bit AES encryption for data at rest and in transit</li>
            <li><strong>3D Secure:</strong> Additional authentication layer for card transactions</li>
            <li><strong>Fraud Detection:</strong> AI-powered real-time fraud monitoring and prevention</li>
            <li><strong>Secure APIs:</strong> OAuth 2.0 and JWT-based authentication</li>
            <li><strong>DDoS Protection:</strong> Advanced protection against denial-of-service attacks</li>
            <li><strong>Web Application Firewall:</strong> Protection against common web vulnerabilities</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. KYC and AML Compliance</SectionTitle>
          <Paragraph>
            To prevent fraud and money laundering, we implement strict KYC procedures:
          </Paragraph>
          <List>
            <li>Verification of business registration documents</li>
            <li>Director/owner identity verification with government-issued IDs</li>
            <li>Address verification through utility bills or bank statements</li>
            <li>PAN and GST verification</li>
            <li>Bank account verification</li>
            <li>Ongoing monitoring of transaction patterns</li>
            <li>Suspicious transaction reporting to FIU-IND (Financial Intelligence Unit)</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>6. Audit and Certification</SectionTitle>
          <Paragraph>
            Pecify undergoes regular third-party audits and maintains current certifications:
          </Paragraph>
          <List>
            <li>Annual PCI DSS compliance audit by Qualified Security Assessor (QSA)</li>
            <li>Quarterly vulnerability scans by Approved Scanning Vendor (ASV)</li>
            <li>ISO 27001:2013 information security management certification</li>
            <li>SOC 2 Type II audit for service organization controls</li>
            <li>Regular penetration testing by certified ethical hackers</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>7. Incident Response</SectionTitle>
          <Paragraph>
            We maintain a comprehensive incident response plan that includes:
          </Paragraph>
          <List>
            <li>24/7 security monitoring and alerting</li>
            <li>Dedicated security incident response team</li>
            <li>Documented incident response procedures</li>
            <li>Notification protocols for affected parties</li>
            <li>Post-incident analysis and remediation</li>
            <li>Compliance with data breach notification requirements</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. Merchant Responsibilities</SectionTitle>
          <Paragraph>
            While we provide a secure platform, merchants must also:
          </Paragraph>
          <List>
            <li>Maintain PCI DSS compliance for their own systems if storing card data</li>
            <li>Implement secure authentication for dashboard access</li>
            <li>Use HTTPS/SSL on payment collection pages</li>
            <li>Regularly update and patch their applications</li>
            <li>Train staff on security best practices</li>
            <li>Report suspicious activities immediately</li>
            <li>Comply with all applicable regulations in their industry</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>9. Transparency and Reporting</SectionTitle>
          <Paragraph>
            We believe in transparency regarding our security and compliance:
          </Paragraph>
          <List>
            <li>Regular security updates and advisories</li>
            <li>Annual compliance reports available to merchants</li>
            <li>Transparent disclosure of security incidents when required</li>
            <li>Clear documentation of our security practices</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>10. International Standards</SectionTitle>
          <Paragraph>
            For international transactions, we comply with:
          </Paragraph>
          <List>
            <li>GDPR (General Data Protection Regulation) for EU customers</li>
            <li>PSD2 (Payment Services Directive 2) requirements</li>
            <li>Strong Customer Authentication (SCA) mandates</li>
            <li>Local data protection laws in applicable jurisdictions</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>11. Continuous Improvement</SectionTitle>
          <Paragraph>
            Security and compliance are ongoing commitments. We continuously:
          </Paragraph>
          <List>
            <li>Monitor emerging threats and vulnerabilities</li>
            <li>Update security controls and technologies</li>
            <li>Train our team on latest security practices</li>
            <li>Review and update policies and procedures</li>
            <li>Participate in industry security forums and working groups</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>12. Contact Our Security Team</SectionTitle>
          <Paragraph>
            For security-related inquiries or to report a security issue:
          </Paragraph>
          <Paragraph>
            Email: <ContactLink href="mailto:security@pecify.com">security@pecify.com</ContactLink><br />
            For general compliance questions: <ContactLink href="mailto:compliance@pecify.com">compliance@pecify.com</ContactLink><br />
            Phone: +91 97588 13335<br />
            Address: 7th Floor, Block E-12/8, Vrindavan Tower, Sanjay Palace, Agra, Uttar Pradesh
          </Paragraph>
        </Section>

        <HighlightBox>
          <Paragraph style={{ marginBottom: 0 }}>
            <strong>Security Bug Bounty:</strong> We welcome responsible disclosure of security vulnerabilities.
            Contact our security team for details about our bug bounty program.
          </Paragraph>
        </HighlightBox>
      </Content>

      <FooterNew />
    </PageContainer>
  );
}
