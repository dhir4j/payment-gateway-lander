'use client';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import {
  FiTrendingUp,
  FiDollarSign,
  FiCheckCircle,
  FiActivity,
  FiCreditCard,
  FiShield,
  FiArrowUpRight,
  FiZap,
  FiUsers,
  FiBarChart2
} from 'react-icons/fi';
import DashboardLayout from '@/components/layout/DashboardLayout';
import { useAuth } from '@/lib/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function DashboardPage() {
  const { isAuthenticated, user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, loading, router]);

  if (loading || !isAuthenticated) {
    return null;
  }

  const stats = [
    {
      label: 'Total Revenue',
      value: '₹0.00',
      change: '+0%',
      subtitle: 'from last month',
      positive: true,
      icon: <FiDollarSign />,
      gradient: 'linear-gradient(135deg, #D946EF 0%, #EC4899 100%)',
    },
    {
      label: 'Success Rate',
      value: '0%',
      change: '+0%',
      subtitle: 'transaction success',
      positive: true,
      icon: <FiCheckCircle />,
      gradient: 'linear-gradient(135deg, #10B981 0%, #059669 100%)',
    },
    {
      label: 'Active Users',
      value: '0',
      change: '+0',
      subtitle: 'active customers',
      positive: true,
      icon: <FiUsers />,
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    },
    {
      label: 'Total Transactions',
      value: '0',
      change: '+0',
      subtitle: 'processed today',
      positive: true,
      icon: <FiActivity />,
      gradient: 'linear-gradient(135deg, #F59E0B 0%, #D97706 100%)',
    },
  ];

  const quickActions = [
    {
      title: 'Create Payment Link',
      description: 'Instantly generate secure payment links for your customers',
      icon: <FiZap />,
      href: '/dashboard/payment-links',
      gradient: 'linear-gradient(135deg, #D946EF 0%, #EC4899 100%)',
    },
    {
      title: 'Virtual Accounts',
      description: 'Manage virtual accounts and track all your transactions',
      icon: <FiCreditCard />,
      href: '/dashboard/virtual-accounts/transactions',
      gradient: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
    },
    {
      title: 'Analytics & Reports',
      description: 'Get detailed insights and export comprehensive reports',
      icon: <FiBarChart2 />,
      href: '/dashboard/reports',
      gradient: 'linear-gradient(135deg, #8B5CF6 0%, #7C3AED 100%)',
    },
  ];

  return (
    <DashboardLayout>
      <PageHeader>
        <WelcomeBadge>
          <FiZap />
          Welcome back!
        </WelcomeBadge>
        <HeaderTop>
          <HeaderContent>
            <PageTitle>Hello, {user?.full_name || 'User'}!</PageTitle>
            <PageSubtitle>
              Track your payment performance and manage your business operations from one place
            </PageSubtitle>
          </HeaderContent>
          <VerifyButton onClick={() => router.push('/dashboard/verification')}>
            <FiShield />
            Complete KYC
          </VerifyButton>
        </HeaderTop>
      </PageHeader>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            $gradient={stat.gradient}
          >
            <StatIconWrapper>
              {stat.icon}
            </StatIconWrapper>
            <StatContent>
              <StatLabel>{stat.label}</StatLabel>
              <StatValue>{stat.value}</StatValue>
              <StatFooter>
                <StatChange $positive={stat.positive}>
                  <FiTrendingUp />
                  {stat.change}
                </StatChange>
                <StatSubtitle>{stat.subtitle}</StatSubtitle>
              </StatFooter>
            </StatContent>
          </StatCard>
        ))}
      </StatsGrid>

      <SectionHeader>
        <SectionTitle>Quick Actions</SectionTitle>
        <SectionSubtitle>Get started with these common tasks</SectionSubtitle>
      </SectionHeader>

      <ActionsGrid>
        {quickActions.map((action, index) => (
          <ActionCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            onClick={() => router.push(action.href)}
            $gradient={action.gradient}
          >
            <ActionGradientBg $gradient={action.gradient} />
            <ActionIconCircle>
              {action.icon}
            </ActionIconCircle>
            <ActionTitle>{action.title}</ActionTitle>
            <ActionDescription>{action.description}</ActionDescription>
            <ActionLink>
              Get Started
              <FiArrowUpRight />
            </ActionLink>
          </ActionCard>
        ))}
      </ActionsGrid>

      <TwoColumnGrid>
        <ActivitySection>
          <SectionHeader>
            <SectionTitle>Recent Activity</SectionTitle>
            <SectionSubtitle>Your latest transactions and updates</SectionSubtitle>
          </SectionHeader>
          <ActivityCard>
            <WelcomeActivity>
              <ActivityIcon $gradient="linear-gradient(135deg, #D946EF 0%, #EC4899 100%)">
                <FiZap />
              </ActivityIcon>
              <ActivityContent>
                <ActivityTitle>Welcome to Pecify!</ActivityTitle>
                <ActivityText>Complete your KYC verification to start accepting payments</ActivityText>
                <ActivityTime>Just now</ActivityTime>
              </ActivityContent>
            </WelcomeActivity>
            <EmptyActivity>
              <EmptyIcon><FiActivity /></EmptyIcon>
              <EmptyTitle>No transactions yet</EmptyTitle>
              <EmptyText>Your payment activities and transaction history will appear here</EmptyText>
            </EmptyActivity>
          </ActivityCard>
        </ActivitySection>

        <StatusSection>
          <SectionHeader>
            <SectionTitle>Account Overview</SectionTitle>
            <SectionSubtitle>Your account status and details</SectionSubtitle>
          </SectionHeader>
          <StatusCard>
            <StatusRow>
              <StatusLabel>
                <StatusLabelIcon><FiShield /></StatusLabelIcon>
                KYC Status
              </StatusLabel>
              <StatusBadge $status="warning">Pending</StatusBadge>
            </StatusRow>
            <StatusRow>
              <StatusLabel>
                <StatusLabelIcon><FiCheckCircle /></StatusLabelIcon>
                API Status
              </StatusLabel>
              <StatusBadge $status="success">Active</StatusBadge>
            </StatusRow>
            <StatusRow>
              <StatusLabel>
                <StatusLabelIcon><FiDollarSign /></StatusLabelIcon>
                Available Balance
              </StatusLabel>
              <StatusAmount>₹0.00</StatusAmount>
            </StatusRow>
            <StatusDivider />
            <AddCreditsButton onClick={() => router.push('/dashboard/credits')}>
              <FiZap />
              Add Credits
              <FiArrowUpRight />
            </AddCreditsButton>
          </StatusCard>
        </StatusSection>
      </TwoColumnGrid>
    </DashboardLayout>
  );
}

// Styled Components - Unique Pecify Design
const PageHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const WelcomeBadge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  border-radius: 100px;
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: ${({ theme }) => theme.spacing.md};
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary}30;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 968px) {
    flex-direction: column;
  }
`;

const HeaderContent = styled.div`
  flex: 1;
`;

const PageTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  background: ${({ theme }) => theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const PageSubtitle = styled.p`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.7;
  max-width: 650px;
`;

const VerifyButton = styled.button`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  border: none;
  border-radius: 100px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px ${({ theme }) => theme.colors.primary}40;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 30px ${({ theme }) => theme.colors.primary}50;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const StatCard = styled(motion.div)<{ $gradient: string }>`
  background: white;
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.xl};
  position: relative;
  overflow: hidden;
  border: 2px solid transparent;
  background-image: linear-gradient(white, white), ${({ $gradient }) => $gradient};
  background-origin: border-box;
  background-clip: padding-box, border-box;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`;

const StatIconWrapper = styled.div`
  width: 56px;
  height: 56px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  svg {
    width: 28px;
    height: 28px;
  }
`;

const StatContent = styled.div``;

const StatLabel = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const StatValue = styled.div`
  font-size: 2.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
`;

const StatFooter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const StatChange = styled.div<{ $positive: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.875rem;
  color: ${({ $positive, theme }) => ($positive ? theme.colors.success : theme.colors.error)};
  font-weight: 700;

  svg {
    width: 16px;
    height: 16px;
  }
`;

const StatSubtitle = styled.div`
  font-size: 0.8125rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const SectionHeader = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const SectionSubtitle = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
`;

const ActionsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  margin-bottom: ${({ theme }) => theme.spacing.xxl};
`;

const ActionCard = styled(motion.div)<{ $gradient: string }>`
  background: white;
  border-radius: 24px;
  padding: ${({ theme }) => theme.spacing.xxl};
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 2px solid ${({ theme }) => theme.colors.border};

  &:hover {
    transform: translateY(-8px);
    border-color: transparent;
    box-shadow: 0 20px 40px rgba(217, 70, 239, 0.2);
  }
`;

const ActionGradientBg = styled.div<{ $gradient: string }>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 6px;
  background: ${({ $gradient }) => $gradient};
  opacity: 0;
  transition: all 0.3s ease;

  ${ActionCard}:hover & {
    opacity: 1;
    height: 100%;
    opacity: 0.05;
  }
`;

const ActionIconCircle = styled.div`
  width: 64px;
  height: 64px;
  background: ${({ theme }) => theme.colors.gradient};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  svg {
    width: 32px;
    height: 32px;
  }
`;

const ActionTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const ActionDescription = styled.p`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const ActionLink = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 600;
  font-size: 0.9375rem;

  svg {
    width: 18px;
    height: 18px;
    transition: transform 0.3s ease;
  }

  ${ActionCard}:hover & svg {
    transform: translate(4px, -4px);
  }
`;

const TwoColumnGrid = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
  }
`;

const ActivitySection = styled.div``;
const StatusSection = styled.div``;

const ActivityCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.xl};
  border: 2px solid ${({ theme }) => theme.colors.border};
  min-height: 400px;
`;

const WelcomeActivity = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.lg};
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 16px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ActivityIcon = styled.div<{ $gradient: string }>`
  width: 48px;
  height: 48px;
  background: ${({ $gradient }) => $gradient};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;

  svg {
    width: 24px;
    height: 24px;
  }
`;

const ActivityContent = styled.div`
  flex: 1;
`;

const ActivityTitle = styled.div`
  font-size: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const ActivityText = styled.div`
  font-size: 0.875rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
  line-height: 1.5;
`;

const ActivityTime = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  font-weight: 600;
`;

const EmptyActivity = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.spacing.xxl} 0;
  text-align: center;
`;

const EmptyIcon = styled.div`
  width: 80px;
  height: 80px;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: ${({ theme }) => theme.spacing.lg};

  svg {
    width: 40px;
    height: 40px;
  }
`;

const EmptyTitle = styled.div`
  font-size: 1.125rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const EmptyText = styled.div`
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.textSecondary};
  max-width: 300px;
`;

const StatusCard = styled.div`
  background: white;
  border-radius: 20px;
  padding: ${({ theme }) => theme.spacing.xl};
  border: 2px solid ${({ theme }) => theme.colors.border};
`;

const StatusRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${({ theme }) => theme.spacing.lg} 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  &:last-of-type {
    border-bottom: none;
  }
`;

const StatusLabel = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};
  font-size: 0.9375rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 600;
`;

const StatusLabelIcon = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  svg {
    width: 18px;
    height: 18px;
  }
`;

const StatusBadge = styled.div<{ $status: string }>`
  padding: 0.5rem 1rem;
  border-radius: 100px;
  font-size: 0.8125rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  background: ${({ $status, theme }) =>
    $status === 'success' ? theme.colors.success + '20' :
    $status === 'warning' ? theme.colors.warning + '20' :
    theme.colors.error + '20'};
  color: ${({ $status, theme }) =>
    $status === 'success' ? theme.colors.success :
    $status === 'warning' ? theme.colors.warning :
    theme.colors.error};
`;

const StatusAmount = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.secondary};
`;

const StatusDivider = styled.div`
  height: 1px;
  background: ${({ theme }) => theme.colors.border};
  margin: ${({ theme }) => theme.spacing.lg} 0;
`;

const AddCreditsButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};
  background: ${({ theme }) => theme.colors.gradient};
  color: white;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px ${({ theme }) => theme.colors.primary}30;

  svg {
    width: 20px;
    height: 20px;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px ${({ theme }) => theme.colors.primary}40;
  }
`;
