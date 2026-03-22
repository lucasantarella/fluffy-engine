export interface PricingTier {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: { text: string; included: boolean }[];
  cta: string;
  ctaStyle: 'primary' | 'secondary';
  highlighted?: boolean;
  badge?: string;
}

export const platformTiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    description: 'For individuals and small teams getting started.',
    features: [
      { text: 'Up to 3 seats', included: true },
      { text: '50 AI reviews / month (included)', included: true },
      { text: 'Built-in baseline standards', included: true },
      { text: 'Auto-review', included: false },
      { text: 'API access', included: false },
      { text: 'Audit logging', included: false },
      { text: 'SSO / SAML', included: false },
    ],
    cta: 'Get Started Free',
    ctaStyle: 'secondary',
  },
  {
    name: 'Pro',
    price: '$15',
    period: '/seat/month',
    description: 'For teams that ship every sprint.',
    features: [
      { text: 'Up to 25 seats', included: true },
      { text: 'All standards sources', included: true },
      { text: 'Auto-review on transition', included: true },
      { text: 'API access', included: true },
      { text: '99.5% SLA', included: true },
      { text: 'Email support (48h)', included: true },
      { text: 'Audit logging', included: false },
    ],
    cta: 'Start Free Trial',
    ctaStyle: 'primary',
    highlighted: true,
    badge: 'Most Popular',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For organizations with advanced security and compliance needs.',
    features: [
      { text: 'Unlimited seats', included: true },
      { text: 'Custom integrations', included: true },
      { text: 'Audit logging', included: true },
      { text: 'SSO / SAML', included: true },
      { text: 'HIPAA BAA', included: true },
      { text: '99.9% SLA', included: true },
      { text: 'Dedicated support (4h response)', included: true },
    ],
    cta: 'Contact Sales',
    ctaStyle: 'secondary',
  },
];

export interface CreditPlan {
  name: string;
  reviews: string;
  price: string;
}

export const creditPlans: CreditPlan[] = [
  { name: 'Starter', reviews: '~200', price: '$29/mo' },
  { name: 'Growth', reviews: '~1,000', price: '$99/mo' },
  { name: 'Scale', reviews: '~5,000', price: '$349/mo' },
  { name: 'Unlimited', reviews: 'Uncapped', price: 'Custom' },
];
