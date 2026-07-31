window.QUESTION_BANK['phase-1'] = [
  {
    id: 'p1-q1',
    q: 'Which subset of Artificial Intelligence enables machines to learn directly from data without being explicitly programmed?',
    options: ['Expert Systems', 'Machine Learning', 'Rule-Based Systems', 'Deterministic Parsing'],
    answer: 1,
    explanation: 'Machine Learning algorithms build mathematical models based on sample data to make predictions or decisions without explicit rule programming.',
    subtopic: 'ML Fundamentals'
  },
  {
    id: 'p1-q2',
    q: 'What type of machine learning technique uses labeled datasets to train algorithms?',
    options: ['Unsupervised Learning', 'Reinforcement Learning', 'Supervised Learning', 'Self-Organizing Maps'],
    answer: 2,
    explanation: 'Supervised learning relies on paired input-output training data where ground truth labels guide weight updates.',
    subtopic: 'Supervised Learning'
  },
  {
    id: 'p1-q3',
    q: 'What is the primary objective of a Loss Function in machine learning?',
    options: [
      'To normalize feature scales across input vectors.',
      'To measure the discrepancy between predicted values and actual ground-truth target values.',
      'To compress model parameters for edge deployment.',
      'To increase the learning rate during training.'
    ],
    answer: 1,
    explanation: 'The loss function quantifies model error, providing a scalar cost value that optimization algorithms minimize.',
    subtopic: 'Optimization'
  },
  {
    id: 'p1-q4',
    q: 'What phenomenon occurs when a model performs exceptionally well on training data but poorly on unseen test data?',
    options: ['Underfitting', 'Overfitting', 'High Bias', 'Vanishing Gradient'],
    answer: 1,
    explanation: 'Overfitting occurs when a model memorizes noise and sample specifics from the training set rather than learning generalizable patterns.',
    subtopic: 'Generalization'
  },
  {
    id: 'p1-q5',
    q: 'Which optimization algorithm updates parameters in the direction of the steepest descent of the loss function?',
    options: ['Gradient Descent', 'K-Nearest Neighbors', 'Principal Component Analysis', 'Decision Trees'],
    answer: 0,
    explanation: 'Gradient descent iteratively moves parameters in the opposite direction of the loss function gradient to reach a minimum.',
    subtopic: 'Optimization'
  },
  {
    id: 'p1-q6',
    q: 'Which metric is best suited for evaluating a model on an imbalanced binary dataset where false negatives are extremely costly (e.g., medical diagnosis)?',
    options: ['Accuracy', 'Recall (Sensitivity)', 'Specificity', 'Mean Squared Error'],
    answer: 1,
    explanation: 'Recall measures how many actual positive cases were correctly captured by the model.',
    subtopic: 'Metrics'
  },
  {
    id: 'p1-q7',
    q: 'What does the hyperparameter "Learning Rate" control in neural network training?',
    options: [
      'The number of hidden layers in the architecture.',
      'The batch size of input data processed at once.',
      'The step size taken toward minimizing the loss function during gradient updates.',
      'The dropout rate applied between layers.'
    ],
    answer: 2,
    explanation: 'The learning rate determines how drastically weights are modified relative to calculated loss gradients at each iteration.',
    subtopic: 'Hyperparameters'
  },
  {
    id: 'p1-q8',
    q: 'What type of machine learning agent learns by interacting with an environment through trial-and-error to maximize cumulative rewards?',
    options: ['Supervised Learning', 'Unsupervised Learning', 'Reinforcement Learning', 'Semi-supervised Learning'],
    answer: 2,
    explanation: 'Reinforcement learning relies on Markov Decision Processes where agents receive state feedback and rewards based on executed actions.',
    subtopic: 'Reinforcement Learning'
  },
  {
    id: 'p1-q9',
    q: 'Which technique randomly deactivates a fraction of neurons during training to prevent co-adaptation and overfitting?',
    options: ['Batch Normalization', 'Dropout', 'Weight Decay', 'Data Augmentation'],
    answer: 1,
    explanation: 'Dropout randomly zeroes out activation outputs of selected units during forward propagation in training, improving model generalization.',
    subtopic: 'Regularization'
  },
  {
    id: 'p1-q10',
    q: 'What is the term for converting raw categorical strings into numerical vectors with 1 for the active class and 0 elsewhere?',
    options: ['Label Encoding', 'One-Hot Encoding', 'Vector Quantization', 'Feature Scaling'],
    answer: 1,
    explanation: 'One-Hot Encoding transforms categorical variables into binary indicator vectors equal to the number of unique categories.',
    subtopic: 'Feature Engineering'
  },
  {
    id: 'p1-q11',
    q: 'What does the "Bias-Variance Tradeoff" describe in supervised learning models?',
    options: [
      'The balance between GPU memory consumption and CPU compute speed.',
      'The trade-off between error from overly simplistic assumptions (Bias) and sensitivity to training data fluctuations (Variance).',
      'The relationship between dataset size and feature dimensionality.',
      'The ratio of supervised training data to unsupervised unlabeled data.'
    ],
    answer: 1,
    explanation: 'High bias leads to underfitting, while high variance leads to overfitting.',
    subtopic: 'Model Evaluation'
  },
  {
    id: 'p1-q12',
    q: 'What is the primary difference between a generative model and a discriminative model?',
    options: [
      'Generative models estimate the joint probability distribution P(X, Y); discriminative models estimate conditional probability P(Y|X).',
      'Generative models only process images; discriminative models only process text.',
      'Generative models use decision trees; discriminative models use backpropagation.',
      'Discriminative models run without objective loss functions.'
    ],
    answer: 0,
    explanation: 'Generative models capture how data is generated enabling synthesis, whereas discriminative models learn decision boundaries.',
    subtopic: 'Model Taxonomy'
  },
  {
    id: 'p1-q13',
    q: 'In decision tree models, what metric measures the impurity or disorder of a set of data items?',
    options: ['Mean Absolute Error', 'Entropy (or Gini Impurity)', 'Cosine Distance', 'Euclidean Distance'],
    answer: 1,
    explanation: 'Entropy and Gini impurity measure dataset homogeneity; decision tree splits maximize Information Gain.',
    subtopic: 'Decision Trees'
  },
  {
    id: 'p1-q14',
    q: 'Which ensemble learning strategy builds multiple decision trees sequentially, where each new tree targets the residual errors of prior trees?',
    options: ['Bagging (e.g., Random Forest)', 'Boosting (e.g., Gradient Boosted Decision Trees / XGBoost)', 'Stacking', 'Voting Classifiers'],
    answer: 1,
    explanation: 'Boosting fits sequential weak learners to residual errors of preceding models, building a strong predictive ensemble.',
    subtopic: 'Ensemble Learning'
  },
  {
    id: 'p1-q15',
    q: 'What fundamental condition causes Covariate Shift in production machine learning systems?',
    options: [
      'The relationship between input features X and target outputs Y changes.',
      'The marginal input feature distribution shifts over time P(X), while conditional distribution P(Y|X) remains unchanged.',
      'Model parameter weights convert from positive to negative values during deployment.',
      'Hardware processor types change between training GPUs and deployment CPUs.'
    ],
    answer: 1,
    explanation: 'Covariate shift occurs when input distributions shift over time even though the real-world conditional mapping stays the same.',
    subtopic: 'MLOps & Drift'
  }
];
