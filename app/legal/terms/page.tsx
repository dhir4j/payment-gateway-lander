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

export default function TermsOfServicePage() {
  return (
    <PageContainer>
      <Navbar />

      <Hero>
        <Title>Terms of Service</Title>
        <Subtitle>
          Please read these terms carefully before using Pecify payment gateway services.
        </Subtitle>
      </Hero>

      <Content>
        <UpdateDate>Last Updated: December 28, 2024</UpdateDate>

        <Section>
          <SectionTitle>1. Agreement to Terms</SectionTitle>
          <Paragraph>
            By accessing or using Pecify's payment gateway services ("Services"), you agree to be bound by these
            Terms of Service ("Terms"). If you disagree with any part of these terms, you may not access our Services.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Eligibility</SectionTitle>
          <Paragraph>
            To use our Services, you must:
          </Paragraph>
          <List>
            <li>Be at least 18 years of age</li>
            <li>Have the legal capacity to enter into binding contracts</li>
            <li>Operate a legitimate business registered in India</li>
            <li>Provide accurate and complete registration information</li>
            <li>Comply with all applicable laws and regulations</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>3. Account Registration</SectionTitle>
          <Paragraph>
            To access our Services, you must create an account. You agree to:
          </Paragraph>
          <List>
            <li>Provide accurate, current, and complete information during registration</li>
            <li>Maintain the security of your account credentials</li>
            <li>Promptly notify us of any unauthorized use of your account</li>
            <li>Accept responsibility for all activities that occur under your account</li>
            <li>Complete KYC verification as required by applicable regulations</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>4. Use of Services</SectionTitle>
          <Paragraph>
            You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
          </Paragraph>
          <List>
            <li>Process payments for prohibited goods or services</li>
            <li>Engage in fraudulent or deceptive practices</li>
            <li>Violate any applicable laws or regulations</li>
            <li>Interfere with or disrupt the Services or servers</li>
            <li>Attempt to gain unauthorized access to our systems</li>
            <li>Use the Services to transmit malware or harmful code</li>
            <li>Reverse engineer or copy any part of our technology</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Fees and Payment</SectionTitle>
          <Paragraph>
            You agree to pay all applicable fees for using our Services:
          </Paragraph>
          <List>
            <li>Transaction fees as agreed in your merchant agreement</li>
            <li>Setup fees (if applicable)</li>
            <li>Any additional charges for premium features</li>
            <li>Chargeback fees and dispute resolution costs</li>
          </List>
          <Paragraph>
            Fees are non-refundable except as required by law. We reserve the right to modify our fee structure
            with 30 days' notice.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Transaction Processing</SectionTitle>
          <Paragraph>
            We will use commercially reasonable efforts to process transactions promptly. However, we do not guarantee:
          </Paragraph>
          <List>
            <li>100% transaction success rate</li>
            <li>Specific processing times</li>
            <li>Uninterrupted service availability</li>
          </List>
          <Paragraph>
            Settlement times depend on your bank and payment method used.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Chargebacks and Disputes</SectionTitle>
          <Paragraph>
            You are responsible for handling customer disputes and chargebacks. You agree to:
          </Paragraph>
          <List>
            <li>Maintain adequate records of all transactions</li>
            <li>Respond promptly to chargeback notifications</li>
            <li>Provide necessary documentation to contest invalid chargebacks</li>
            <li>Accept liability for valid chargebacks</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>8. Reserve Account</SectionTitle>
          <Paragraph>
            We may establish a reserve account or hold funds to protect against potential losses due to:
          </Paragraph>
          <List>
            <li>Chargebacks and refunds</li>
            <li>Suspected fraudulent activity</li>
            <li>High-risk business categories</li>
            <li>Regulatory requirements</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>9. Compliance and KYC</SectionTitle>
          <Paragraph>
            You must comply with all applicable laws including:
          </Paragraph>
          <List>
            <li>Anti-Money Laundering (AML) regulations</li>
            <li>Know Your Customer (KYC) requirements</li>
            <li>Payment Card Industry Data Security Standard (PCI DSS)</li>
            <li>Reserve Bank of India (RBI) guidelines</li>
            <li>Income Tax regulations</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>10. Prohibited Activities</SectionTitle>
          <Paragraph>
            The following activities are strictly prohibited:
          </Paragraph>
          <List>
            <li>Illegal goods or services</li>
            <li>Adult content and escort services</li>
            <li>Gambling and betting (without proper licensing)</li>
            <li>Counterfeit goods</li>
            <li>Multi-level marketing schemes</li>
            <li>Cryptocurrency trading (unless authorized)</li>
            <li>Tobacco and alcohol (without proper licensing)</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>11. Intellectual Property</SectionTitle>
          <Paragraph>
            All content, features, and functionality of our Services are owned by Pecify and protected by
            intellectual property laws. You may not:
          </Paragraph>
          <List>
            <li>Use our trademarks without written permission</li>
            <li>Copy, modify, or distribute our software</li>
            <li>Create derivative works based on our Services</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>12. Limitation of Liability</SectionTitle>
          <Paragraph>
            To the maximum extent permitted by law, Pecify shall not be liable for:
          </Paragraph>
          <List>
            <li>Indirect, incidental, or consequential damages</li>
            <li>Loss of profits, revenue, or data</li>
            <li>Service interruptions or errors</li>
            <li>Third-party actions or failures</li>
          </List>
          <Paragraph>
            Our total liability shall not exceed the fees paid by you in the past 12 months.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>13. Indemnification</SectionTitle>
          <Paragraph>
            You agree to indemnify and hold Pecify harmless from any claims, damages, or expenses arising from:
          </Paragraph>
          <List>
            <li>Your use of the Services</li>
            <li>Your violation of these Terms</li>
            <li>Your violation of any laws or third-party rights</li>
            <li>Your business practices or products/services sold</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>14. Termination</SectionTitle>
          <Paragraph>
            We may suspend or terminate your account at any time for:
          </Paragraph>
          <List>
            <li>Violation of these Terms</li>
            <li>Suspected fraudulent activity</li>
            <li>Excessive chargebacks</li>
            <li>Non-compliance with regulations</li>
            <li>Any other reason at our discretion with notice</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>15. Changes to Terms</SectionTitle>
          <Paragraph>
            We reserve the right to modify these Terms at any time. We will notify you of material changes
            via email or through the Services. Continued use of the Services after changes constitutes acceptance.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>16. Governing Law</SectionTitle>
          <Paragraph>
            These Terms shall be governed by the laws of India. Any disputes shall be subject to the exclusive
            jurisdiction of courts in Agra, Uttar Pradesh.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>17. Contact Information</SectionTitle>
          <Paragraph>
            For questions about these Terms, please contact us at:
          </Paragraph>
          <Paragraph>
            Email: <ContactLink href="mailto:legal@pecify.com">legal@pecify.com</ContactLink><br />
            Phone: +91 97588 13335<br />
            Address: 7th Floor, Block E-12/8, Vrindavan Tower, Sanjay Palace, Agra, Uttar Pradesh
          </Paragraph>
        </Section>
      </Content>

      <FooterNew />
    </PageContainer>
  );
}
