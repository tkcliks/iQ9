window.QUESTION_BANK['phase-2'] = [
  {
    id: 'p2-q1',
    q: 'What is the structural difference between Encoder-Only (e.g., BERT), Decoder-Only (e.g., GPT), and Encoder-Decoder (e.g., T5) models?',
    options: [
      'Encoder-Only uses causal masking; Decoder-Only uses bi-directional attention.',
      'Encoder-Only uses bi-directional self-attention; Decoder-Only uses causal self-attention; Encoder-Decoder combines cross-attention.',
      'Decoder-Only models do not use positional embeddings.',
      'Encoder-Decoder models cannot be fine-tuned on downstream tasks.'
    ],
    answer: 1,
    explanation: 'Encoder-only models look at context bi-directionally, decoder-only models mask future tokens for autoregressive text generation, and encoder-decoder models handle sequence-to-sequence translation.',
    subtopic: 'Transformers'
  },
  {
    id: 'p2-q2',
    q: 'How does FlashAttention achieve significant speedups during Transformer training and inference?',
    options: [
      'By pruning 50% of low-magnitude attention weights dynamically.',
      'By tiling the Softmax operation to compute attention block-by-block without writing intermediate attention matrices to high-bandwidth GPU memory (HBM).',
      'By replacing matrix multiplication with bitwise XOR operations.',
      'By quantizing key vectors to INT2 format.'
    ],
    answer: 1,
    explanation: 'FlashAttention uses I/O-aware tiling to keep intermediate values in fast GPU SRAM, avoiding HBM memory bandwidth bottlenecks.',
    subtopic: 'LLM Optimization'
  },
  {
    id: 'p2-q3',
    q: 'In Vision Transformers (ViT), how is a 2D image transformed into a 1D sequence input suitable for standard Transformer encoders?',
    options: [
      'By passing pixels sequentially through an LSTM recurrent cell.',
      'By dividing the image into non-overlapping patches, flattening each patch into a vector, and projecting them linearly into latent embeddings.',
      'By averaging pixel intensities along horizontal axes.',
      'By computing continuous Wavelet transforms across spatial dimensions.'
    ],
    answer: 1,
    explanation: 'ViT treats non-overlapping image patches as tokens and projects them linearly into embedding dimensions.',
    subtopic: 'Computer Vision'
  },
  {
    id: 'p2-q4',
    q: 'In Object Detection metrics, what defines a "True Positive" detection when evaluating bounding boxes at an IoU threshold of 0.5?',
    options: [
      'Predicted class label matches ground truth, regardless of box overlap.',
      'Predicted class label matches ground truth AND IoU >= 0.5 between predicted and ground-truth bounding boxes.',
      'Bounding box encloses 100% of image pixel area.',
      'Model classification confidence score is exactly 1.0.'
    ],
    answer: 1,
    explanation: 'A detection requires both correct categorical classification and spatial overlap meeting or exceeding the specified IoU threshold.',
    subtopic: 'Computer Vision'
  },
  {
    id: 'p2-q5',
    q: 'In latent diffusion models (e.g., Stable Diffusion), why is noise added and removed in a lower-dimensional Latent Space rather than direct Pixel Space?',
    options: [
      'Latent vectors eliminate color saturation errors during decoding.',
      'Operating in latent space reduces spatial dimensions, lowering memory consumption and computational complexity while maintaining perceptual fidelity.',
      'Pixel space calculations cannot be processed by U-Net networks.',
      'Latent space guarantees 100% deterministic generation outputs.'
    ],
    answer: 1,
    explanation: 'Direct pixel-space diffusion is computationally expensive; VAEs compress images into dense perceptual representations where diffusion runs efficiently.',
    subtopic: 'Generative AI'
  }
];
