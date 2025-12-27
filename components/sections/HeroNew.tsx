'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiZap, FiShield, FiTrendingUp } from 'react-icons/fi';

const HeroSection = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 50%, #E9D5FF 100%);
  padding-top: 80px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 1000px;
    height: 1000px;
    background: radial-gradient(circle, rgba(114, 9, 183, 0.1) 0%, transparent 70%);
    border-radius: 50%;
    animation: float 20s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: -10%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(181, 23, 158, 0.15) 0%, transparent 70%);
    border-radius: 50%;
    animation: float 15s ease-in-out infinite reverse;
  }

  @keyframes float {
    0%, 100% { transform: translate(0, 0) rotate(0deg); }
    33% { transform: translate(30px, -30px) rotate(5deg); }
    66% { transform: translate(-20px, 20px) rotate(-5deg); }
  }
`;

const Container = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 4rem;
  align-items: center;

  @media (min-width: 1024px) {
    grid-template-columns: 1.2fr 1fr;
    gap: 6rem;
  }
`;

const LeftContent = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const Badge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.surface};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0.5rem 1.25rem;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};

  svg {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Title = styled(motion.h1)`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.2;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;

  @media (min-width: 640px) {
    font-size: 2.5rem;
  }

  @media (min-width: 768px) {
    font-size: 3.5rem;
    line-height: 1.1;
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 4.5rem;
  }
`;

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.primary};
`;

const Subtitle = styled(motion.p)`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 1.5rem;
  max-width: 600px;

  @media (max-width: 1024px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: 640px) {
    font-size: 1.125rem;
  }

  @media (min-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 2rem;
  }

  @media (min-width: 1024px) {
    font-size: 1.375rem;
    margin-bottom: 2.5rem;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 10px 25px -5px ${({ theme }) => theme.colors.primary}40;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.text};
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.surface};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const StatsRow = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 640px) {
    gap: 1.5rem;
  }

  @media (min-width: 768px) {
    gap: 2rem;
    margin-top: 3rem;
    padding-top: 3rem;
  }
`;

const StatItem = styled.div`
  text-align: center;

  @media (min-width: 1024px) {
    text-align: left;
  }
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 0.25rem;

  @media (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 1rem;
  }
`;

const RightContent = styled(motion.div)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PhoneMockup = styled.div`
  position: relative;
  width: 100%;
  max-width: 350px;
  aspect-ratio: 9 / 19;
  background: ${({ theme }) => theme.colors.surface};
  border-radius: 2.5rem;
  border: 12px solid ${({ theme }) => theme.colors.text};
  box-shadow: 0 20px 60px -15px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 25px;
    background: ${({ theme }) => theme.colors.text};
    border-radius: 0 0 1rem 1rem;
    z-index: 10;
  }
`;

const PhoneScreen = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #f8f9fa 0%, #e9ecef 100%);
  padding: 3rem 1.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const PhoneCard = styled.div`
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  p {
    font-size: 1.75rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TransactionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: white;
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 0.75rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.text};

  svg {
    flex-shrink: 0;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FloatingCard = styled(motion.div)`
  position: absolute;
  background: white;
  border-radius: 0.75rem;
  padding: 0.75rem 1rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};

  @media (min-width: 768px) {
    padding: 1rem 1.5rem;
    border-radius: 1rem;
    gap: 0.75rem;
  }
`;

const IconCircle = styled.div<{ color: string }>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ color }) => color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    width: 14px;
    height: 14px;
  }

  @media (min-width: 768px) {
    width: 2.5rem;
    height: 2.5rem;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

const FloatingText = styled.div`
  h4 {
    font-size: 0.625rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-bottom: 0.125rem;
  }
  p {
    font-size: 0.875rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
  }

  @media (min-width: 768px) {
    h4 {
      font-size: 0.75rem;
      margin-bottom: 0.25rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

const SVGContainer = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 640px) {
    height: 400px;
  }

  @media (min-width: 768px) {
    height: 500px;
  }
`;

const HeroNew = () => {
  return (
    <HeroSection>
      <Container>
        <ContentWrapper>
          <LeftContent>
            <Badge
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <FiCheck size={16} /> Trusted by 1,600+ businesses
            </Badge>

            <Title
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Payments Made <br />
              <Highlight>Seamless & Smart</Highlight>
            </Title>

            <Subtitle
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Transform your business with India's most powerful payment infrastructure. Accept payments instantly with 100+ payment modes and best-in-class success rates.
            </Subtitle>

            <ButtonGroup
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <PrimaryButton href="/register">
                Start Free Trial
                <FiArrowRight />
              </PrimaryButton>
              <SecondaryButton href="/developers">
                Explore APIs
              </SecondaryButton>
            </ButtonGroup>

            <StatsRow
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <StatItem>
                <StatValue>99.5%</StatValue>
                <StatLabel>Uptime</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>₹100Cr+</StatValue>
                <StatLabel>Monthly TPV</StatLabel>
              </StatItem>
              <StatItem>
                <StatValue>24/7</StatValue>
                <StatLabel>Support</StatLabel>
              </StatItem>
            </StatsRow>
          </LeftContent>

          <RightContent
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SVGContainer>
              {/* Main Payment SVG Illustration */}
              <svg width="100%" height="100%" viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Background Circle */}
                <motion.circle
                  cx="250"
                  cy="250"
                  r="200"
                  fill="url(#gradient1)"
                  opacity="0.1"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />

                {/* Credit Card */}
                <motion.g
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <rect x="120" y="180" width="260" height="160" rx="16" fill="url(#cardGradient)" />
                  <rect x="140" y="200" width="60" height="40" rx="8" fill="white" opacity="0.3" />
                  <line x1="140" y1="260" x2="280" y2="260" stroke="white" strokeWidth="3" opacity="0.5" />
                  <line x1="140" y1="280" x2="220" y2="280" stroke="white" strokeWidth="3" opacity="0.5" />
                  <circle cx="340" cy="210" r="20" fill="white" opacity="0.3" />
                  <circle cx="360" cy="210" r="20" fill="white" opacity="0.3" />
                </motion.g>

                {/* Floating Coins */}
                <motion.circle
                  cx="100"
                  cy="150"
                  r="30"
                  fill="#F59E0B"
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <motion.text
                  x="100"
                  y="160"
                  textAnchor="middle"
                  fill="white"
                  fontSize="24"
                  fontWeight="bold"
                >
                  ₹
                </motion.text>

                <motion.circle
                  cx="420"
                  cy="180"
                  r="25"
                  fill="#10B981"
                  animate={{ y: [5, -5, 5] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.text
                  x="420"
                  y="189"
                  textAnchor="middle"
                  fill="white"
                  fontSize="20"
                  fontWeight="bold"
                >
                  ₹
                </motion.text>

                {/* Success Checkmark */}
                <motion.g
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                >
                  <circle cx="380" cy="320" r="35" fill="#7209b7" />
                  <motion.path
                    d="M365 320 L375 330 L395 310"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ delay: 1.5, duration: 0.5 }}
                  />
                </motion.g>

                {/* UPI Icon */}
                <motion.g
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  style={{ transformOrigin: "80px 320px" }}
                >
                  <rect x="50" y="290" width="60" height="60" rx="12" fill="#FF6B6B" />
                  <text x="80" y="330" textAnchor="middle" fill="white" fontSize="16" fontWeight="bold">UPI</text>
                </motion.g>

                {/* Gradient Definitions */}
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7209b7" />
                    <stop offset="100%" stopColor="#b5179e" />
                  </linearGradient>
                  <linearGradient id="cardGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#7209b7" />
                    <stop offset="50%" stopColor="#b5179e" />
                    <stop offset="100%" stopColor="#f72585" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Floating Status Cards */}
              <FloatingCard
                style={{ top: '50px', left: '-20px' }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <IconCircle color="#10B981">
                  <FiZap size={18} />
                </IconCircle>
                <FloatingText>
                  <h4>Instant</h4>
                  <p>Real-time</p>
                </FloatingText>
              </FloatingCard>

              <FloatingCard
                style={{ top: '150px', right: '-30px' }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 }}
              >
                <IconCircle color="#7209b7">
                  <FiShield size={18} />
                </IconCircle>
                <FloatingText>
                  <h4>Secure</h4>
                  <p>PCI DSS</p>
                </FloatingText>
              </FloatingCard>

              <FloatingCard
                style={{ bottom: '80px', left: '10px' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <IconCircle color="#F59E0B">
                  <FiTrendingUp size={18} />
                </IconCircle>
                <FloatingText>
                  <h4>Success</h4>
                  <p>99.5%</p>
                </FloatingText>
              </FloatingCard>
            </SVGContainer>
          </RightContent>
        </ContentWrapper>
      </Container>
    </HeroSection>
  );
};

export default HeroNew;
