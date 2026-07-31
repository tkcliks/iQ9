window.QUESTION_BANK['phase-4'] = [
  {
    id: 'p4-q1',
    q: 'Why is Role-Based Access Control (RBAC) enforcement critical at the retrieval tier of enterprise GenAI architectures?',
    options: [
      'To format markdown tables automatically.',
      'To ensure vector query filtering restricts document retrieval strictly to items the authenticated user has explicit permissions to view.',
      'To increase maximum context window capacity.',
      'To accelerate LLM token generation rates.'
    ],
    answer: 1,
    explanation: 'Permission-aware vector metadata filtering ensures unauthorized queries cannot retrieve sensitive or restricted corporate records.',
    subtopic: 'Enterprise Security'
  },
  {
    id: 'p4-q2',
    q: 'What design strategy mitigates Prompt Injection attacks in customer-facing enterprise applications?',
    options: [
      'Converting all user inputs into uppercase characters.',
      'Dual-LLM routing/input verification proxies that sanitize inputs, isolate untrusted user data, and inspect outputs via guardrail models.',
      'Increasing system temperature to 1.5.',
      'Disabling system prompts entirely.'
    ],
    answer: 1,
    explanation: 'Untrusted user input must be structurally isolated and validated by dedicated guardrail models to prevent instruction hijacking.',
    subtopic: 'AI Security'
  },
  {
    id: 'p4-q3',
    q: 'In enterprise contexts, how does Semantic Caching reduce operational costs and response latency for LLM applications?',
    options: [
      'By saving past raw text strings and performing exact string matches only.',
      'By embedding incoming user prompts and evaluating distance similarity against cached query embeddings; returning cached responses if similarity exceeds a threshold.',
      'By caching GPU memory weights on disk drives.',
      'By compressing context prompts using Huffman coding.'
    ],
    answer: 1,
    explanation: 'Semantic caching uses vector similarity to detect semantically identical queries and return cached outputs instantly without invoking the LLM.',
    subtopic: 'System Architecture'
  },
  {
    id: 'p4-q4',
    q: 'What primary problem does vLLM (PagedAttention) address for high-concurrency LLM inference deployment?',
    options: [
      'Lowers network packet routing loss across enterprise firewalls.',
      'Resolves VRAM memory fragmentation caused by dynamic KV-cache allocation, enabling higher request batching capacity.',
      'Automatically converts unstructured PDFs into clean JSON formats.',
      'Fine-tunes model weights during real-time user inference sessions.'
    ],
    answer: 1,
    explanation: 'PagedAttention allocates KV-cache memory in non-contiguous physical pages, eliminating VRAM waste and boosting throughput.',
    subtopic: 'AIOps & Serving'
  },
  {
    id: 'p4-q5',
    q: 'Which metric monitored by an AI Ops Engineer directly reflects user-perceived responsiveness when streaming text outputs from an LLM?',
    options: ['Mean Absolute Error (MAE)', 'Time to First Token (TTFT)', 'F1-Score', 'Floating Point Operations Per Second (FLOPS)'],
    answer: 1,
    explanation: 'TTFT measures time elapsed between sending a request and receiving the initial output token.',
    subtopic: 'AIOps Metrics'
  },
  {
    id: 'p4-q6',
    q: 'An FDE deploying an AI system into an air-gapped financial environment faces strict security regulations prohibiting internet access. How should models be hosted?',
    options: [
      'Proxying requests through public cloud API endpoints.',
      'Self-hosting open-weights LLMs and vector indices inside containerized local enterprise Kubernetes clusters disconnected from public internet networks.',
      'Streaming data through encrypted public WebSockets.',
      'Training models locally on mobile devices using browser-based JavaScript.'
    ],
    answer: 1,
    explanation: 'Air-gapped deployments require self-contained operational infrastructure running local open-weights models and vector stores.',
    subtopic: 'Forward Deployed Engineering'
  },
  {
    id: 'p4-q7',
    q: 'When integrating an LLM agent into a client legacy REST API, an FDE notices parameter type mismatches. What is the fastest, reliable fix?',
    options: [
      'Adding "Please pass integers" to system prompt text.',
      'Enforcing strict structured outputs using JSON Schema / Pydantic validation with grammar-constrained decoding models.',
      'Retraining the base LLM on legacy API source code.',
      'Adding a 5-second sleep timer prior to sending API requests.'
    ],
    answer: 1,
    explanation: 'Grammar-guided constrained decoding restricts token generation probabilities at runtime, guaranteeing outputs strictly adhere to target JSON schemas.',
    subtopic: 'Forward Deployed Engineering'
  },
  {
    id: 'p4-q8',
    q: 'Which deployment monitoring pattern runs a new model version alongside the production model, processing live requests without returning outputs to users?',
    options: ['Canary Deployment', 'Shadow Deployment', 'Blue/Green Deployment', 'Rolling Update Deployment'],
    answer: 1,
    explanation: 'Shadow deployments route duplicate production traffic to a candidate model in the background for safe evaluation.',
    subtopic: 'MLOps'
  },
  {
    id: 'p4-q9',
    q: 'When evaluating Build vs. Buy for enterprise Generative AI capabilities, which scenario strongly favors self-hosting customized open-weights models?',
    options: [
      'Standard non-sensitive public web text processing with minimal budget constraints.',
      'High-volume inference workloads with strict data sovereignty/PII requirements, ultra-low latency SLAs, and need for deep domain fine-tuning.',
      'Prototyping a simple internal tool over a weekend hackathon.',
      'Generating generic public marketing blog post ideas.'
    ],
    answer: 1,
    explanation: 'Self-hosting open models offers predictable fixed hardware costs at scale, absolute data privacy, low local latency, and full weight control.',
    subtopic: 'AI Architecture'
  },
  {
    id: 'p4-q10',
    q: 'How does a Mixture of Experts (MoE) architecture maintain high model capacity while optimizing active inference compute?',
    options: [
      'By using sparse routing gates to direct each input token to a dynamic subset of specialized expert layers, activating only a fraction of parameters per forward pass.',
      'By eliminating feed-forward network layers entirely.',
      'By executing training passes on central host CPUs rather than GPUs.',
      'By processing input prompts in reverse order.'
    ],
    answer: 0,
    explanation: 'MoE models route tokens to top-k experts, achieving high reasoning capacity at a fraction of active compute cost.',
    subtopic: 'Generative AI Architecture'
  }
];
