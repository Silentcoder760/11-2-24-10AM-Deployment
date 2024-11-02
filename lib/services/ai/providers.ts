interface AIProvider {
  name: string;
  apiEndpoint: string;
  canRunLocally: boolean;
  privacyLevel: 'high' | 'medium' | 'low';
  dataPolicies: {
    storesData: boolean;
    dataRetentionDays: number | null;
    canDeleteData: boolean;
  };
  features: {
    contextWindow: number;
    maxTokens: number;
    supportsFiles: boolean;
    supportsSecurity: boolean;
  };
  recommendedFor: string[];
  pricing?: {
    isFree: boolean;
    pricePerMonth?: number;
  };
}

export const AI_PROVIDERS: Record<string, AIProvider> = {
  'gpt-4': {
    name: 'GPT-4 Turbo',
    apiEndpoint: 'https://api.openai.com/v1/chat/completions',
    canRunLocally: false,
    privacyLevel: 'medium',
    dataPolicies: {
      storesData: true,
      dataRetentionDays: 30,
      canDeleteData: true
    },
    features: {
      contextWindow: 128000,
      maxTokens: 4096,
      supportsFiles: true,
      supportsSecurity: true
    },
    recommendedFor: ['complex-analysis', 'career-guidance', 'skill-translation'],
    pricing: {
      isFree: false,
      pricePerMonth: 20
    }
  },
  'gpt-3.5-turbo': {
    name: 'GPT-3.5 Turbo',
    apiEndpoint: 'https://api.openai.com/v1/chat/completions',
    canRunLocally: false,
    privacyLevel: 'medium',
    dataPolicies: {
      storesData: true,
      dataRetentionDays: 30,
      canDeleteData: true
    },
    features: {
      contextWindow: 16385,
      maxTokens: 4096,
      supportsFiles: true,
      supportsSecurity: true
    },
    recommendedFor: ['quick-answers', 'general-guidance'],
    pricing: {
      isFree: false,
      pricePerMonth: 10
    }
  },
  'mixtral-free': {
    name: 'Mixtral-8x7B',
    apiEndpoint: 'https://api.perplexity.ai/chat/completions',
    canRunLocally: false,
    privacyLevel: 'medium',
    dataPolicies: {
      storesData: true,
      dataRetentionDays: 30,
      canDeleteData: false
    },
    features: {
      contextWindow: 8192,
      maxTokens: 4096,
      supportsFiles: false,
      supportsSecurity: false
    },
    recommendedFor: ['general-analysis', 'resource-matching'],
    pricing: {
      isFree: true
    }
  }
};

export class AIServicePrivacy {
  private provider: AIProvider;

  constructor(providerKey: string) {
    this.provider = AI_PROVIDERS[providerKey];
  }

  isSuitableForSensitiveData(): boolean {
    return this.provider.privacyLevel === 'high' && this.provider.canRunLocally;
  }

  getPrivacyRecommendations(): string[] {
    const recommendations = [];
    if (!this.provider.canRunLocally) {
      recommendations.push('Data will be processed on external servers');
    }
    if (this.provider.dataPolicies.storesData) {
      recommendations.push(`Data retained for ${this.provider.dataPolicies.dataRetentionDays} days`);
    }
    if (!this.provider.dataPolicies.canDeleteData) {
      recommendations.push('Data cannot be deleted after submission');
    }
    return recommendations;
  }
}