export interface BenchScores {
  lambada?: number;
  piqa?: number;
  winogrande?: number;
  arcEasy?: number;
  arcChallenge?: number;
  hellaswag?: number;
  sciq?: number;
  mean6?: number;
  mean7?: number;
}

export type LinkKind = 'huggingface' | 'ollama' | 'github';

export interface ModelLink {
  label: string;
  href: string;
  kind: LinkKind;
}

export interface Model {
  slug: string;
  name: string;
  category: 'Série G' | 'Sécurité';
  description: string;
  links: ModelLink[];
}
