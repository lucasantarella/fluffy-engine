export interface Feature {
  title: string;
  description: string;
  icon: string;
  highlighted?: boolean;
}

export const features: Feature[] = [
  {
    title: 'Instant Story Review',
    description:
      'Review any Jira Epic, Story, Task, or Bug in seconds. Get a structured scorecard with dimension-level scores, specific findings, and a letter grade.',
    icon: '⚡',
    highlighted: true,
  },
  {
    title: 'Your Standards, Not Ours',
    description:
      'Evaluate against your standards — Confluence pages, Definition of Ready checklists, or custom rubrics. Adjust dimensions, weights, and rubrics to match your workflow.',
    icon: '📐',
    highlighted: true,
  },
  {
    title: 'Auto-Review on Transition',
    description:
      'Trigger reviews automatically when stories move to "Ready for Dev" or any status you choose. Every story gets a quality check before it enters a sprint.',
    icon: '🔄',
    highlighted: true,
  },
  {
    title: 'AI-Powered Rewriting',
    description:
      'Don\'t just find problems — fix them. AI PM drafts an improved version of the story that meets your standards, with explanations of what changed and why.',
    icon: '✍️',
  },
  {
    title: 'Bulk Sprint Review',
    description:
      'Review every story in a sprint in one click. Get a summary scorecard showing which stories are ready, which need work, and cross-cutting patterns.',
    icon: '📊',
  },
  {
    title: 'Native Jira Integration',
    description:
      'AI PM lives where you work. An issue panel shows the scorecard right on the Jira issue. An action button triggers reviews. No context switching.',
    icon: '🔌',
  },
  {
    title: 'Bring Your Own LLM',
    description:
      'Use our managed AI or bring your own API key from Anthropic, OpenAI, Azure OpenAI, or AWS Bedrock. Your keys, your account, your data policy.',
    icon: '🤖',
  },
  {
    title: 'Enterprise Security',
    description:
      'SOC 2 Type II, ISO 27001, GDPR compliant. HIPAA BAA available. Issue content never stored. Customer-managed encryption keys. Data residency controls.',
    icon: '🛡️',
  },
  {
    title: 'Knowledge-Aware Reviews',
    description:
      'Connect your Confluence docs, architecture decisions, and domain glossaries. AI PM uses them as context so reviews understand your domain.',
    icon: '🧠',
  },
];
