'use client';

import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiEye, FiEyeOff, FiMessageCircle, FiArrowRight } from 'react-icons/fi';
import { useAuth } from '@/lib/AuthContext';

const PageContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: linear-gradient(135deg, #FAF5FF 0%, #F3E8FF 50%, #E9D5FF 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -30%;
    right: -15%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(114, 9, 183, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const LeftPanel = styled.div`
  display: none;
  position: relative;
  overflow: hidden;
  background: linear-gradient(135deg, #7209b7 0%, #b5179e 50%, #f72585 100%);

  @media (min-width: 768px) {
    display: flex;
    width: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    color: white;
  }

  @media (min-width: 1024px) {
    width: 45%;
  }

  @media (min-width: 1280px) {
    width: 45%;
  }
`;

const DotPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.1;
  pointer-events: none;
`;

const GlowOrb1 = styled.div`
  position: absolute;
  top: 25%;
  right: -5rem;
  width: 20rem;
  height: 20rem;
  background: white;
  opacity: 0.05;
  border-radius: 50%;
  filter: blur(60px);
`;

const GlowOrb2 = styled.div`
  position: absolute;
  bottom: 25%;
  left: -5rem;
  width: 15rem;
  height: 15rem;
  background: #b5179e;
  opacity: 0.2;
  border-radius: 50%;
  filter: blur(40px);
`;

const LeftContent = styled.div`
  position: relative;
  z-index: 10;
`;

const Logo = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: -0.025em;
  color: white;
`;

const LeftBottom = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 3rem;
`;

const Badge = styled.div`
  display: inline-block;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  border: 1px solid rgba(255, 255, 255, 0.2);
  margin-bottom: 0.5rem;
  width: fit-content;
`;

const LeftTitle = styled.h1`
  font-size: 2.25rem;
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const LeftDescription = styled.p`
  font-size: 1.125rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 28rem;
`;

const LearnMore = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 0.875rem;
  font-weight: 600;
  padding-top: 1rem;
  transition: color 0.2s ease;
  cursor: pointer;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }

  svg {
    margin-left: 0.25rem;
    transition: transform 0.2s ease;
  }

  &:hover svg {
    transform: translateX(0.25rem);
  }
`;

const RightPanel = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 1rem;
  overflow-y: auto;
  min-height: 100vh;

  @media (min-width: 640px) {
    padding: 1.5rem;
  }

  @media (min-width: 768px) {
    width: 50%;
    padding: 2rem;
  }

  @media (min-width: 1024px) {
    width: 55%;
  }
`;

const RightDotPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.4;
  pointer-events: none;
  z-index: 0;
`;

const MobileLogo = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.primary};
  z-index: 10;

  @media (min-width: 640px) {
    font-size: 1.75rem;
    top: 1.5rem;
    left: 1.5rem;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;

const FormCard = styled.div`
  width: 100%;
  max-width: 28rem;
  background: white;
  padding: 1.75rem;
  border-radius: 1.25rem;
  box-shadow: 0 25px 50px -12px rgba(114, 9, 183, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 10;
  margin-top: 3rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 1.25rem 1.25rem 0 0;
  }

  @media (min-width: 640px) {
    padding: 2.25rem;
    border-radius: 1.5rem;
    margin-top: 0;

    &::before {
      border-radius: 1.5rem 1.5rem 0 0;
    }
  }

  @media (min-width: 768px) {
    padding: 3rem;
  }
`;

const FormTitle = styled.div`
  margin-bottom: 2rem;
  text-align: center;

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.secondary};
  }

  p {
    font-size: 0.9375rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 0.5rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;
  height: 3rem;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 3px ${({ theme }) => theme.colors.primary}20;
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const PasswordWrapper = styled.div`
  position: relative;

  button {
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    color: ${({ theme }) => theme.colors.textSecondary};
    background: transparent;
    border: none;
    cursor: pointer;
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.text};
    }
  }
`;

const ForgotPassword = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    font-size: 0.875rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.primary};
    transition: all 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: underline;
    }
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  font-weight: 700;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px -2px ${({ theme }) => theme.colors.primary}40;
  text-align: center;
  font-size: 1rem;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -4px ${({ theme }) => theme.colors.primary}50;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const SignupPrompt = styled.div`
  padding-top: 1rem;
  text-align: center;

  p {
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};

    a {
      font-weight: 600;
      color: ${({ theme }) => theme.colors.primary};
      transition: all 0.2s ease;

      &:hover {
        color: ${({ theme }) => theme.colors.secondary};
        text-decoration: underline;
      }
    }
  }
`;

const ChatButton = styled.button`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 50;
  background: #1F2937;
  color: white;
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);

    svg {
      transform: rotate(12deg);
    }
  }

  svg {
    font-size: 1.5rem;
    transition: transform 0.3s ease;
  }
`;

const ErrorMessage = styled.div`
  padding: 0.875rem;
  background: ${({ theme }) => theme.colors.error}10;
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.error};
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const success = await login(email, password);
      if (success) {
        router.push('/dashboard');
      } else {
        setError('Invalid email or password');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageContainer>
      <LeftPanel>
        <DotPattern />
        <GlowOrb1 />
        <GlowOrb2 />

        <LeftContent style={{ textAlign: 'center', zIndex: 10 }}>
          <Logo style={{ fontSize: '3rem', marginBottom: '2rem' }}>Pecify</Logo>

          {/* SVG Illustration */}
          <svg width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ margin: '2rem auto' }}>
            {/* Secure Lock */}
            <circle cx="150" cy="120" r="80" fill="white" opacity="0.1"/>
            <rect x="120" y="130" width="60" height="70" rx="8" fill="white" opacity="0.9"/>
            <path d="M135 130 V110 Q135 95 150 95 Q165 95 165 110 V130" stroke="white" strokeWidth="6" fill="none" opacity="0.9"/>
            <circle cx="150" cy="155" r="8" fill="#7209b7"/>
            <rect x="147" y="155" width="6" height="20" rx="3" fill="#7209b7"/>

            {/* Checkmark */}
            <circle cx="190" cy="180" r="25" fill="#10B981"/>
            <path d="M180 180 L185 185 L200 170" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none"/>

            {/* Shield */}
            <path d="M110 190 L110 210 Q110 230 130 240 Q110 230 110 210 Z" fill="white" opacity="0.8"/>
            <path d="M110 190 Q110 185 115 185 L125 185 Q130 185 130 190 L130 210 Q130 230 110 240 Q130 230 130 210 Z" fill="white" opacity="0.8"/>
          </svg>

          <LeftTitle style={{ marginTop: '2rem', fontSize: '2rem' }}>
            Secure Login
          </LeftTitle>
          <LeftDescription>
            Your data is protected with bank-grade 256-bit encryption and PCI DSS compliance.
          </LeftDescription>
        </LeftContent>
      </LeftPanel>

      <RightPanel>
        <RightDotPattern />
        <MobileLogo>Pecify</MobileLogo>

        <FormCard>
          <FormTitle>
            <h2>Welcome Back</h2>
            <p>Login to your Pecify account</p>
          </FormTitle>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="password">Password</Label>
              <PasswordWrapper>
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </PasswordWrapper>
            </FormGroup>

            <ForgotPassword>
              <Link href="#">Forgot Password?</Link>
            </ForgotPassword>

            <SubmitButton type="submit" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </SubmitButton>

            <SignupPrompt>
              <p>
                Don't have an account with Pecify? <Link href="/register">Sign Up</Link>
              </p>
            </SignupPrompt>
          </Form>
        </FormCard>
      </RightPanel>

      <ChatButton>
        <FiMessageCircle />
      </ChatButton>
    </PageContainer>
  );
}
