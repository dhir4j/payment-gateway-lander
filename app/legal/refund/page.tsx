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

const HighlightBox = styled.div`
  background: ${({ theme }) => theme.colors.primary}10;
  border-left: 4px solid ${({ theme }) => theme.colors.primary};
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 1.5rem 0;
`;

export default function RefundPolicyPage() {
  return (
    <PageContainer>
      <Navbar />

      <Hero>
        <Title>Refund Policy</Title>
        <Subtitle>
          Understanding refunds and cancellations for Pecify payment gateway services.
        </Subtitle>
      </Hero>

      <Content>
        <UpdateDate>Last Updated: December 28, 2024</UpdateDate>

        <Section>
          <SectionTitle>1. Overview</SectionTitle>
          <Paragraph>
            This Refund Policy outlines the procedures for refunds and cancellations related to Pecify's
            payment gateway services. Please read this policy carefully to understand your rights and obligations.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>2. Service Fees</SectionTitle>
          <Paragraph>
            <strong>Transaction Fees:</strong> Transaction fees charged by Pecify are non-refundable once a
            transaction has been processed, regardless of whether the merchant later refunds the end customer.
          </Paragraph>
          <Paragraph>
            <strong>Setup Fees:</strong> One-time setup or onboarding fees are non-refundable after account
            activation and KYC approval.
          </Paragraph>
          <Paragraph>
            <strong>Subscription Fees:</strong> Monthly or annual subscription fees are non-refundable except
            in cases of service outage exceeding 48 hours.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>3. Customer Transaction Refunds</SectionTitle>
          <Paragraph>
            For transactions processed through our gateway, merchants are responsible for their own refund policies
            with end customers. Pecify provides the tools to process refunds, but the decision to refund rests
            with the merchant.
          </Paragraph>

          <HighlightBox>
            <Paragraph style={{ marginBottom: 0 }}>
              <strong>Important:</strong> Refunds initiated by merchants to their customers typically take 5-7
              business days to reflect in the customer's account, depending on their bank or payment method.
            </Paragraph>
          </HighlightBox>
        </Section>

        <Section>
          <SectionTitle>4. Processing Customer Refunds</SectionTitle>
          <Paragraph>
            Merchants can process refunds through:
          </Paragraph>
          <List>
            <li><strong>Dashboard:</strong> Login to your Pecify dashboard and initiate refunds from the transactions page</li>
            <li><strong>API:</strong> Use our Refund API to programmatically process refunds</li>
            <li><strong>Bulk Refunds:</strong> Upload CSV files for processing multiple refunds</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>5. Types of Refunds</SectionTitle>
          <Paragraph>
            <strong>Full Refund:</strong> Return the entire transaction amount to the customer.
          </Paragraph>
          <Paragraph>
            <strong>Partial Refund:</strong> Return a portion of the transaction amount (e.g., for partial order cancellations).
          </Paragraph>
          <Paragraph>
            <strong>Note:</strong> Transaction fees charged by Pecify are not refunded to the merchant,
            even when issuing customer refunds.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>6. Refund Timeline</SectionTitle>
          <List>
            <li><strong>Credit/Debit Cards:</strong> 5-7 business days from refund initiation</li>
            <li><strong>UPI:</strong> 1-3 business days from refund initiation</li>
            <li><strong>Net Banking:</strong> 3-7 business days from refund initiation</li>
            <li><strong>Wallets:</strong> 1-3 business days from refund initiation</li>
          </List>
          <Paragraph>
            Note: Actual refund timing may vary based on the customer's bank or payment provider.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>7. Failed Refunds</SectionTitle>
          <Paragraph>
            Refunds may fail due to:
          </Paragraph>
          <List>
            <li>Invalid or closed bank account</li>
            <li>Expired or blocked payment card</li>
            <li>Technical issues with the customer's bank</li>
            <li>Incorrect refund details</li>
          </List>
          <Paragraph>
            In case of failed refunds, we will notify you and work with you to resolve the issue.
            Alternative refund methods may be required.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>8. Chargebacks</SectionTitle>
          <Paragraph>
            Chargebacks are different from refunds. A chargeback occurs when a customer disputes a charge
            with their bank. Key points:
          </Paragraph>
          <List>
            <li>Chargeback fees are non-refundable</li>
            <li>Merchants are responsible for responding to chargeback notices</li>
            <li>Funds are held pending chargeback resolution</li>
            <li>Multiple chargebacks may result in account restrictions</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>9. Service Cancellation</SectionTitle>
          <Paragraph>
            Merchants may cancel their Pecify account at any time. Upon cancellation:
          </Paragraph>
          <List>
            <li>No refund will be provided for unused subscription time</li>
            <li>Pending transactions will be processed</li>
            <li>Settlement of pending funds follows normal schedule</li>
            <li>Transaction history remains accessible for 90 days</li>
            <li>API access is immediately revoked</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>10. Exceptions and Special Cases</SectionTitle>
          <Paragraph>
            Refunds may be considered in the following exceptional circumstances:
          </Paragraph>
          <List>
            <li>System errors or technical failures on Pecify's part that directly result in financial loss</li>
            <li>Duplicate charges due to Pecify system malfunction</li>
            <li>Unauthorized charges on your Pecify account due to security breach on our end</li>
            <li>Service outage exceeding 48 continuous hours</li>
          </List>
          <Paragraph>
            Such refunds are at Pecify's sole discretion and require submission of proof.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>11. Refund Request Process</SectionTitle>
          <Paragraph>
            To request a refund for eligible cases:
          </Paragraph>
          <List>
            <li>Contact our support team at <ContactLink href="mailto:support@pecify.com">support@pecify.com</ContactLink></li>
            <li>Provide your merchant ID and transaction details</li>
            <li>Explain the reason for the refund request with supporting evidence</li>
            <li>Allow 5-7 business days for review and response</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>12. Dispute Resolution</SectionTitle>
          <Paragraph>
            If you disagree with our refund decision, you may escalate the matter to our management team
            at <ContactLink href="mailto:legal@pecify.com">legal@pecify.com</ContactLink>. We will review
            escalated cases within 14 business days.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>13. Force Majeure</SectionTitle>
          <Paragraph>
            Pecify shall not be liable for refunds or compensation in cases of service interruption caused by:
          </Paragraph>
          <List>
            <li>Natural disasters</li>
            <li>Government actions or regulations</li>
            <li>Network or infrastructure failures beyond our control</li>
            <li>Cyber attacks or security incidents affecting third parties</li>
          </List>
        </Section>

        <Section>
          <SectionTitle>14. Changes to This Policy</SectionTitle>
          <Paragraph>
            We reserve the right to modify this Refund Policy at any time. Changes will be effective
            immediately upon posting to our website. Continued use of our services after changes
            constitutes acceptance of the modified policy.
          </Paragraph>
        </Section>

        <Section>
          <SectionTitle>15. Contact Us</SectionTitle>
          <Paragraph>
            For questions about refunds or this policy, contact us at:
          </Paragraph>
          <Paragraph>
            Email: <ContactLink href="mailto:support@pecify.com">support@pecify.com</ContactLink><br />
            Phone: +91 97588 13335<br />
            Address: 7th Floor, Block E-12/8, Vrindavan Tower, Sanjay Palace, Agra, Uttar Pradesh
          </Paragraph>
        </Section>
      </Content>

      <FooterNew />
    </PageContainer>
  );
}
