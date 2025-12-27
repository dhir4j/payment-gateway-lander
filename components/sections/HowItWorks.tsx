'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FiUserPlus, FiCode, FiCheckCircle, FiTrendingUp } from 'react-icons/fi';

const Section = styled.section`
  padding: 3rem 1rem;
  background: ${({ theme }) => theme.colors.background};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(114, 9, 183, 0.05) 0%, transparent 70%);
    border-radius: 50%;
  }

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
  position: relative;
  z-index: 1;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const Badge = styled(motion.span)`
  display: inline-block;
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary}20;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
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

const StepsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-top: 4rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }
`;

const StepCard = styled(motion.div)`
  position: relative;
  padding: 2rem 1.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  text-align: center;
  transition: all 0.3s ease;

  @media (min-width: 768px) {
    padding: 2.5rem 2rem;
  }

  &:hover {
    transform: translateY(-8px);
    box-shadow: ${({ theme }) => theme.shadows.lg};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const StepNumber = styled.div`
  position: absolute;
  top: -15px;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.125rem;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary}40;
`;

const IconWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.primary}15;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  svg {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  ${StepCard}:hover & {
    background: ${({ theme }) => theme.colors.primary};
    transform: scale(1.1);

    svg {
      color: white;
    }
  }
`;

const StepTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.75rem;
`;

const StepDescription = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
`;

const ConnectorLine = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: calc(100% + 2rem);
    height: 2px;
    background: linear-gradient(to right,
      ${({ theme }) => theme.colors.primary}60 0%,
      ${({ theme }) => theme.colors.primary}60 50%,
      transparent 50%
    );
    background-size: 20px 2px;
    transform: translateY(-50%);
    pointer-events: none;
    z-index: -1;
  }
`;

const steps = [
  {
    number: 1,
    icon: FiUserPlus,
    title: 'Sign Up',
    description: 'Create your account in minutes with our quick and easy registration process.',
  },
  {
    number: 2,
    icon: FiCode,
    title: 'Integrate',
    description: 'Add our payment gateway to your website or app with simple API integration.',
  },
  {
    number: 3,
    icon: FiCheckCircle,
    title: 'Get Approved',
    description: 'Complete KYC verification and get approved within 24 hours.',
  },
  {
    number: 4,
    icon: FiTrendingUp,
    title: 'Start Earning',
    description: 'Begin accepting payments and watch your business grow.',
  },
];

const HowItWorks = () => {
  return (
    <Section id="how-it-works">
      <Container>
        <Header>
          <Badge
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            SIMPLE PROCESS
          </Badge>
          <Title
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Get Started in <span className="gradient-text">4 Easy Steps</span>
          </Title>
          <Description
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From signup to your first transaction, we've made it incredibly simple to start accepting payments
          </Description>
        </Header>

        <StepsContainer>
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <StepCard
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {index < 3 && <ConnectorLine />}
                <StepNumber>{step.number}</StepNumber>
                <IconWrapper>
                  <Icon />
                </IconWrapper>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>{step.description}</StepDescription>
              </StepCard>
            );
          })}
        </StepsContainer>
      </Container>
    </Section>
  );
};

export default HowItWorks;
