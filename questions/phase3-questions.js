window.QUESTION_BANK['phase-3'] = [
  {
    id: 'p3-q1',
    q: 'What is the primary role of a "Tool" or "Function Call" in an agentic framework?',
    options: [
      'To update the base LLM weights in real time.',
      'To allow the language model to execute external actions (e.g., API requests, SQL queries, code execution) and observe environment outputs.',
      'To compress system prompt contexts.',
      'To convert text strings into visual image renders.'
    ],
    answer: 1,
    explanation: 'Tools extend static language models into active agents capable of reading live databases, invoking APIs, and executing tasks.',
    subtopic: 'Agentic Frameworks'
  },
  {
    id: 'p3-q2',
    q: 'What is the main execution flow of the Plan-and-Solve agent pattern compared to standard single-step prompting?',
    options: [
      'Executing all tool calls simultaneously without evaluating user intent.',
      'Decomposing a complex user task into an explicit sequence of sub-tasks first, then systematically executing sub-tasks step-by-step.',
      'Querying multiple external search engines and returning raw HTML outputs.',
      'Routing queries directly to local fine-tuned classification models.'
    ],
    answer: 1,
    explanation: 'Plan-and-Solve mitigates reasoning errors by separating task planning from execution, preventing early step hallucinations.',
    subtopic: 'Agentic Workflows'
  },
  {
    id: 'p3-q3',
    q: 'In autonomous agent frameworks (e.g., AutoGen, LangGraph), what prevents an agent from entering infinite execution loops when tool outputs fail repeatedly?',
    options: [
      'Increasing context window token limits.',
      'Configuring execution recursion limits, state-transition exit conditions, and fallback exception handlers.',
      'Lowering model temperature parameters to absolute zero.',
      'Disabling JSON-schema validation steps.'
    ],
    answer: 1,
    explanation: 'Configuring explicit recursion limits and conditional exit guards prevents agents from endlessly retrying failing calls.',
    subtopic: 'Agent Governance'
  },
  {
    id: 'p3-q4',
    q: 'What is the core distinction between a Bi-Encoder and a Cross-Encoder in RAG retrieval pipelines?',
    options: [
      'Bi-encoders process audio inputs; cross-encoders process text inputs.',
      'Bi-encoders embed query and document independently (enabling fast vector index search); Cross-encoders process query and document together through full attention layers.',
      'Cross-encoders run faster than Bi-encoders over million-vector databases.',
      'Bi-encoders do not output numerical relevance scores.'
    ],
    answer: 1,
    explanation: 'Bi-encoders allow fast vector search over pre-indexed documents, while Cross-encoders perform joint attention for higher precision re-ranking.',
    subtopic: 'RAG Architecture'
  },
  {
    id: 'p3-q5',
    q: 'In the Model Context Protocol (MCP), what are the three foundational primitives exposed by MCP Servers to LLM Clients?',
    options: [
      'Tables, Graphs, and Matrices',
      'Prompts, Resources, and Tools',
      'Inputs, Weights, and Outputs',
      'Queries, Indexes, and Embeddings'
    ],
    answer: 1,
    explanation: 'MCP standardizes integrations via Prompts (templates), Resources (readable data files), and Tools (executable functions).',
    subtopic: 'Model Context Protocol'
  },
  {
    id: 'p3-q6',
    q: 'What problem does Contextual Retrieval solve in enterprise RAG systems?',
    options: [
      'Accelerating vector embedding quantization speeds.',
      'Loss of global document context when chunks are isolated during chunking, solved by prepending document-level context summaries to individual chunks prior to embedding.',
      'Token length limits during output text decoding.',
      'Incompatible character encoding sets across multi-lingual PDFs.'
    ],
    answer: 1,
    explanation: 'Individual document chunks lose context when detached from source files. Contextual retrieval prepends summary context to boost semantic recall.',
    subtopic: 'Enterprise RAG'
  }
];
