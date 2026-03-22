export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: 'Does Proompt store my Jira issues?',
    answer:
      'No. Issue content is fetched from Jira, sent to the AI for review, and the result is returned to you. We don\'t store issue content. Usage metadata (which issue was reviewed, when, scores) is stored for billing and analytics — but never the actual ticket text.',
  },
  {
    question: 'Can I use my own AI provider?',
    answer:
      'Yes. Bring Your Own Key (BYOK) mode lets you supply your own Anthropic, OpenAI, Azure OpenAI, or AWS Bedrock credentials. AI costs go to your account. We only charge for platform seats.',
  },
  {
    question: 'How long does a review take?',
    answer:
      '10–15 seconds for a single story. Bulk reviews of an entire sprint take 1–3 minutes depending on the number of stories.',
  },
  {
    question: 'Can I customize the scoring criteria?',
    answer:
      'Completely. Adjust dimensions, weights, and rubric definitions per issue type. Add custom dimensions for your domain (e.g., "HIPAA Impact Assessment" for healthcare teams). Import existing standards from Confluence.',
  },
  {
    question: 'Does it work with Jira Data Center (on-premise)?',
    answer:
      'Not yet. Proompt currently supports Jira Cloud only. Jira Data Center support is on our roadmap.',
  },
  {
    question: 'Is there a free tier?',
    answer:
      'Yes. The Free plan supports up to 3 seats and 50 AI reviews per month. No credit card required.',
  },
  {
    question: 'What AI models are used?',
    answer:
      'By default, Claude Sonnet 4 by Anthropic — the best balance of quality and cost for structured analysis. Claude Opus 4 is available for maximum quality reviews. GPT-4o is supported via OpenAI or Azure. You can also use Claude Haiku 4.5 for fast, lightweight scoring.',
  },
];
