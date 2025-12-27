'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiCreditCard, FiSmartphone, FiDollarSign, FiGlobe } from 'react-icons/fi';

const Section = styled.section`
  padding: 3rem 1rem;
  background: linear-gradient(180deg, ${({ theme }) => theme.colors.surface} 0%, ${({ theme }) => theme.colors.background} 100%);

  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing.xl} ${({ theme }) => theme.spacing.md};
  }

  @media (min-width: 1024px) {
    padding: ${({ theme }) => theme.spacing.xxl} ${({ theme }) => theme.spacing.md};
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const Title = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.text};

  .gradient-text {
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.8;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const MethodCard = styled(motion.div)`
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 2px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: ${({ theme }) => theme.shadows.lg};

    &::before {
      transform: scaleX(1);
    }
  }
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}10;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MethodTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.5rem;
`;

const MethodCount = styled.p`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const LogosContainer = styled.div`
  background: white;
  padding: 2rem 1rem;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 640px) {
    padding: 2.5rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 2rem;
  }
`;

const LogosGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  gap: 1rem;
  align-items: center;
  justify-items: center;

  @media (min-width: 640px) {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;
  }
`;

const LogoBox = styled(motion.div)`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.7;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }

  svg {
    width: 100%;
    height: 50px;
  }
`;

const methods = [
  {
    icon: FiCreditCard,
    title: 'Cards',
    count: '50+ Banks',
  },
  {
    icon: FiSmartphone,
    title: 'UPI',
    count: 'All UPI Apps',
  },
  {
    icon: FiDollarSign,
    title: 'Wallets',
    count: '20+ Wallets',
  },
  {
    icon: FiGlobe,
    title: 'Net Banking',
    count: '50+ Banks',
  },
];

const PaymentMethods = () => {
  return (
    <Section id="payment-methods">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Accept All <span className="gradient-text">Payment Methods</span>
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Support 100+ payment modes to never miss a sale. Give your customers the flexibility they deserve.
          </Description>
        </Header>

        <Grid>
          {methods.map((method, index) => {
            const Icon = method.icon;
            return (
              <MethodCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <IconWrapper>
                  <Icon />
                </IconWrapper>
                <MethodTitle>{method.title}</MethodTitle>
                <MethodCount>{method.count}</MethodCount>
              </MethodCard>
            );
          })}
        </Grid>

        <LogosContainer>
          <LogosGrid>
            {/* SVG Payment Logos */}
            <LogoBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              {/* Visa Logo */}
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="4" fill="#1A1F71"/>
                <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">VISA</text>
              </svg>
            </LogoBox>

            <LogoBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              {/* Mastercard Logo */}
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="20" r="15" fill="#EB001B"/>
                <circle cx="50" cy="20" r="15" fill="#F79E1B"/>
                <text x="80" y="26" fontFamily="Arial, sans-serif" fontSize="10" fontWeight="bold" fill="#000" textAnchor="middle">Mastercard</text>
              </svg>
            </LogoBox>

            <LogoBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              {/* UPI Logo */}
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="4" fill="#097939"/>
                <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">UPI</text>
              </svg>
            </LogoBox>

            <LogoBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              {/* RuPay Logo */}
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="4" fill="#097939"/>
                <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">RuPay</text>
              </svg>
            </LogoBox>

            <LogoBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              {/* Paytm Logo */}
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="4" fill="#00BAF2"/>
                <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="14" fontWeight="bold" fill="white" textAnchor="middle">Paytm</text>
              </svg>
            </LogoBox>

            <LogoBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              {/* PhonePe Logo */}
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="4" fill="#5F259F"/>
                <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="bold" fill="white" textAnchor="middle">PhonePe</text>
              </svg>
            </LogoBox>

            <LogoBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
            >
              {/* Google Pay Logo */}
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="4" fill="white" stroke="#E8EAED"/>
                <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="12" fontWeight="500" fill="#5F6368" textAnchor="middle">Google Pay</text>
              </svg>
            </LogoBox>

            <LogoBox
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 0.7, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              {/* BHIM Logo */}
              <svg viewBox="0 0 120 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="40" rx="4" fill="#FF6B00"/>
                <text x="60" y="26" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" fill="white" textAnchor="middle">BHIM</text>
              </svg>
            </LogoBox>
          </LogosGrid>
        </LogosContainer>
      </Container>
    </Section>
  );
};

export default PaymentMethods;
