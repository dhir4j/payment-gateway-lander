'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiZap, FiShield, FiTrendingUp, FiDollarSign, FiCreditCard, FiGlobe } from 'react-icons/fi';

const FeaturesSection = styled.section`
  position: relative;
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.colors.surface};

  @media (min-width: 640px) {
    padding: 4rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 5rem 2rem;
  }

  @media (min-width: 1024px) {
    padding: 8rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  @media (min-width: 1024px) {
    margin-bottom: 5rem;
  }
`;

const Title = styled(motion.h2)`
  font-size: 2.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
  line-height: 1.2;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    font-size: 3.5rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Description = styled(motion.p)`
  max-width: 48rem;
  margin: 0 auto;
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;

  @media (min-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 2.5rem;
  }
`;

const FeatureCard = styled(motion.div)`
  position: relative;
  padding: 1.5rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  @media (min-width: 640px) {
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    padding: 2.5rem;
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 24px -8px rgba(0, 0, 0, 0.1);
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const IconWrapper = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.75rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;

  ${FeatureCard}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};

    svg {
      color: white;
    }
  }

  svg {
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.3s ease;
  }
`;

const FeatureTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

const FeatureDescription = styled.p`
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  font-size: 1rem;
`;

const features = [
  {
    icon: FiZap,
    title: 'Lightning Fast Payments',
    description: 'Process transactions in milliseconds with our optimized payment infrastructure.',
  },
  {
    icon: FiShield,
    title: 'Bank-Grade Security',
    description: 'PCI DSS compliant platform with end-to-end encryption and fraud detection.',
  },
  {
    icon: FiTrendingUp,
    title: '98% Success Rate',
    description: 'Industry-leading success rates with intelligent routing and retry logic.',
  },
  {
    icon: FiDollarSign,
    title: 'Instant Settlements',
    description: 'Get your money in real-time without waiting for T+2 settlement cycles.',
  },
  {
    icon: FiCreditCard,
    title: 'All Payment Methods',
    description: 'Support for UPI, cards, wallets, net banking, and international payments.',
  },
  {
    icon: FiGlobe,
    title: 'Global Reach',
    description: 'Accept payments from customers worldwide with multi-currency support.',
  },
];

const FeaturesNew = () => {
  return (
    <FeaturesSection id="features">
      <Container>
        <Header>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Everything You Need for <br />
            <Highlight>Payment Success</Highlight>
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Powerful features designed to simplify payments and accelerate your business growth.
          </Description>
        </Header>

        <Grid>
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <FeatureCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <IconWrapper>
                  <Icon />
                </IconWrapper>
                <FeatureTitle>{feature.title}</FeatureTitle>
                <FeatureDescription>{feature.description}</FeatureDescription>
              </FeatureCard>
            );
          })}
        </Grid>
      </Container>
    </FeaturesSection>
  );
};

export default FeaturesNew;
