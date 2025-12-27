'use client';

import styled from 'styled-components';
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { FiCheckCircle, FiCreditCard, FiTrendingUp, FiEye, FiEyeOff, FiMessageCircle, FiInfo } from 'react-icons/fi';
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
    bottom: -30%;
    left: -15%;
    width: 800px;
    height: 800px;
    background: radial-gradient(circle, rgba(181, 23, 158, 0.1) 0%, transparent 70%);
    border-radius: 50%;
  }
`;

const TopNav = styled.nav`
  position: relative;
  z-index: 50;
  width: 100%;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1400px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  font-size: 1.875rem;
  font-weight: 700;
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: -0.025em;
  color: ${({ theme }) => theme.colors.text};
`;

const LoginPrompt = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;

  span {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  a {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const MainContent = styled.main`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem 1rem;

  @media (min-width: 640px) {
    padding: 2.5rem 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (min-width: 1024px) {
    padding: 4rem 2rem;
  }
`;

const DotPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image: radial-gradient(#CBD5E1 1px, transparent 1px);
  background-size: 24px 24px;
  opacity: 0.4;
  pointer-events: none;
  z-index: -10;
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  width: 100%;

  @media (min-width: 640px) {
    gap: 2.5rem;
  }

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }
`;

const LeftSection = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

const TitleSection = styled.div`
  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    font-family: ${({ theme }) => theme.fonts.secondary};
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
    background: ${({ theme }) => theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;

    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

const FeaturesList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FeatureItem = styled.div`
  display: flex;
  gap: 1rem;
`;

const IconWrapper = styled.div`
  flex-shrink: 0;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.25rem;

  svg {
    color: white;
    font-size: 1.25rem;
  }
`;

const FeatureContent = styled.div`
  h3 {
    font-weight: 600;
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.text};
  }

  p {
    color: ${({ theme }) => theme.colors.textSecondary};
    margin-top: 0.25rem;
  }
`;

const FormCard = styled.div`
  background: white;
  padding: 1.75rem;
  border-radius: 1.25rem;
  box-shadow: 0 25px 50px -12px rgba(114, 9, 183, 0.15);
  border: 1px solid ${({ theme }) => theme.colors.border};
  position: relative;
  z-index: 10;

  @media (min-width: 640px) {
    padding: 2.25rem;
    border-radius: 1.5rem;
  }

  @media (min-width: 768px) {
    padding: 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 3rem;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
    background: ${({ theme }) => theme.colors.gradient};
    border-radius: 1.25rem 1.25rem 0 0;

    @media (min-width: 640px) {
      border-radius: 1.5rem 1.5rem 0 0;
    }
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
  gap: 1.25rem;
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
`;

const FormGroup = styled.div``;

const Label = styled.label`
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 0.25rem;

  .required {
    color: #EF4444;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #8B5CF6;
    box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.2);
  }
`;

const PhoneInputWrapper = styled.div`
  position: relative;

  .prefix {
    position: absolute;
    left: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors.textSecondary};
    border-right: 1px solid ${({ theme }) => theme.colors.border};
    padding-right: 0.5rem;
  }

  input {
    padding-left: 3.5rem;
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
  }
`;

const PasswordHint = styled.p`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 0.25rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.5rem;
  font-weight: 700;
  color: white;
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  cursor: pointer;
  box-shadow: 0 4px 12px -2px ${({ theme }) => theme.colors.primary}40;
  margin-top: 1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: 0 8px 20px -4px ${({ theme }) => theme.colors.primary}50;
  }

  &:disabled {
    opacity: 0.6;
    transform: none;
  }
`;

const Terms = styled.p`
  font-size: 0.75rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-top: 1rem;

  a {
    color: ${({ theme }) => theme.colors.primary};
    transition: color 0.2s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.secondary};
      text-decoration: underline;
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

  &:hover {
    transform: scale(1.1);
  }
`;

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await register({
      email,
      password,
      full_name: fullName,
      company_name: companyName,
      phone,
    });

    if (success) {
      router.push('/dashboard');
    }
    setLoading(false);
  };

  return (
    <PageContainer>
      <TopNav>
        <Logo href="/">Pecify</Logo>
        <LoginPrompt>
          <span>Already have an account?</span>
          <Link href="/login">Login</Link>
        </LoginPrompt>
      </TopNav>

      <MainContent>
        <DotPattern />
        <ContentGrid>
          <LeftSection>
            <TitleSection>
              <h1>Why choose Pecify for payments</h1>
              <p>Join thousands of businesses scaling their revenue with our seamless payment stack.</p>
            </TitleSection>

            <FeaturesList>
              <FeatureItem>
                <IconWrapper><FiCheckCircle /></IconWrapper>
                <FeatureContent>
                  <h3>Instant Onboarding</h3>
                  <p>Get started with 100% digital KYC and go live within 24 hours.</p>
                </FeatureContent>
              </FeatureItem>

              <FeatureItem>
                <IconWrapper><FiCreditCard /></IconWrapper>
                <FeatureContent>
                  <h3>100+ Payment Modes</h3>
                  <p>Accept UPI, Cards, Net Banking, Wallets, and international payments.</p>
                </FeatureContent>
              </FeatureItem>

              <FeatureItem>
                <IconWrapper><FiTrendingUp /></IconWrapper>
                <FeatureContent>
                  <h3>99.5% Success Rate</h3>
                  <p>Best-in-class success rates with intelligent payment routing.</p>
                </FeatureContent>
              </FeatureItem>
            </FeaturesList>

            {/* SVG Illustration */}
            <svg width="100%" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ marginTop: '2rem' }}>
              {/* Growth Chart */}
              <path d="M20 160 L80 140 L140 100 L200 80 L260 50 L320 30 L380 10" stroke="url(#lineGradient)" strokeWidth="4" strokeLinecap="round" fill="none"/>

              {/* Data Points */}
              <circle cx="80" cy="140" r="6" fill="#7209b7"/>
              <circle cx="140" cy="100" r="6" fill="#b5179e"/>
              <circle cx="200" cy="80" r="6" fill="#f72585"/>
              <circle cx="260" cy="50" r="8" fill="#7209b7"/>
              <circle cx="320" cy="30" r="8" fill="#10B981"/>

              {/* Grid Lines */}
              <line x1="20" y1="40" x2="380" y2="40" stroke="#E5E7EB" strokeWidth="1" opacity="0.5"/>
              <line x1="20" y1="80" x2="380" y2="80" stroke="#E5E7EB" strokeWidth="1" opacity="0.5"/>
              <line x1="20" y1="120" x2="380" y2="120" stroke="#E5E7EB" strokeWidth="1" opacity="0.5"/>
              <line x1="20" y1="160" x2="380" y2="160" stroke="#E5E7EB" strokeWidth="1" opacity="0.5"/>

              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#7209b7" />
                  <stop offset="50%" stopColor="#b5179e" />
                  <stop offset="100%" stopColor="#10B981" />
                </linearGradient>
              </defs>
            </svg>
          </LeftSection>

          <FormCard>
            <FormTitle>
              <h2>Create your Pecify account</h2>
              <p>Start accepting payments in minutes</p>
            </FormTitle>

            <Form onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label>Full Name <span className="required">*</span></Label>
                  <Input
                    type="text"
                    placeholder="John Doe"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </FormGroup>

                <FormGroup>
                  <Label>Phone Number <span className="required">*</span></Label>
                  <PhoneInputWrapper>
                    <span className="prefix">+91</span>
                    <Input
                      type="tel"
                      placeholder="98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </PhoneInputWrapper>
                </FormGroup>
              </FormRow>

              <FormGroup>
                <Label>Email Address <span className="required">*</span></Label>
                <Input
                  type="email"
                  placeholder="name@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Company Name <span className="required">*</span></Label>
                <Input
                  type="text"
                  placeholder="Acme Inc."
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  required
                />
              </FormGroup>

              <FormGroup>
                <Label>Password <span className="required">*</span></Label>
                <PasswordWrapper>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <FiEyeOff /> : <FiEye />}
                  </button>
                </PasswordWrapper>
                <PasswordHint>
                  <FiInfo /> Must be at least 8 characters long
                </PasswordHint>
              </FormGroup>

              <SubmitButton type="submit" disabled={loading}>
                {loading ? 'Creating Account...' : 'Create Account'}
              </SubmitButton>

              <Terms>
                By clicking "Create Account", you agree to our{' '}
                <Link href="/legal/terms">Terms of Service</Link> and{' '}
                <Link href="/legal/privacy">Privacy Policy</Link>.
              </Terms>
            </Form>
          </FormCard>
        </ContentGrid>
      </MainContent>

      <ChatButton>
        <FiMessageCircle />
      </ChatButton>
    </PageContainer>
  );
}
