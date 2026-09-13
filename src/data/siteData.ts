import type { BenchScores, ModelLink } from './modelTypes';

export interface ResearchTrack {
  slug: string;
  name: string;
  status: 'en-cours' | 'termine' | 'pause';
  summary: string;
  result?: string;
  link?: ModelLink;
}

export const researchStatusLabel: Record<ResearchTrack['status'], string> = {
  'en-cours': 'En cours',
  termine: 'Terminé',
  pause: 'En pause',
};

export const researchTracks: ResearchTrack[] = [
  {
    slug: 'c1-gdn2',
    name: 'C1 : GDN2 vs Transformer',
    status: 'termine',
    summary:
      'Duel d’architectures à budget et paramètres appariés. GDN2 (Gated DeltaNet-2) gagne à ~30M paramètres sur trois seeds, mais l’avantage s’inverse à ~120M sur une seule seed.',
    result:
      'Avantage confirmé à petite échelle, provisoire à 120M. Pas une loi d’échelle établie.',
    link: {
      label: 'Kit de reproduction (GitHub)',
      href: 'https://github.com/AZERDSQ131/gdn2-vs-transformer-scaling',
    },
  },
  {
    slug: 'e21-embeddings',
    name: 'E21 : embeddings de code from scratch',
    status: 'termine',
    summary:
      'Campagne complète RTD, contrastif puis distillation pour un encodeur de code autonome, évaluée sur 23 tâches avec des seuils de victoire fixés à l’avance.',
    result:
      'Verdict officiel : pas de victoire (mean_14 = 0,4591 contre un seuil de 0,8135). Post-mortem publié dans le dépôt.',
  },
  {
    slug: 'g2-nano-plafond',
    name: 'G2-nano : 2× tokens, plafond 60M',
    status: 'termine',
    summary:
      'Même architecture que G1-nano (60M, contexte 2048), pré-entraînée sur 3,0 Md tokens contre ~1,5 Md : base +1,56 pt, instruct sous la base sur la suite QCM.',
    result:
      'Plafond mesuré à cette échelle (mean_7 instruct 40,16 % contre 42,13 % base). Publié comme journal de labo, G1-nano-instruct reste recommandé pour le chat.',
  },
  {
    slug: 'g2-nano-safety',
    name: 'G2-nano-safety : juge + filet 36/39',
    status: 'termine',
    summary:
      'Juge 60M (ALLOW / REDACT / BLOCK) + filet regex et assembleur JSON, évalué sur bench contexte 39 cas puis hold-out face à Shieldstral, GLiNER et regex.',
    result:
      'Hold-out : 153/200 devant Shieldstral Q4 (133/200), fuite 0 sur 39. Point faible : REDACT 43,9 %.',
  },
  {
    slug: 'r-experimental-screening',
    name: 'R/experimental : screening Jetson',
    status: 'termine',
    summary:
      'Ablations à budget borné sur Jetson : mémoire, optimiseurs et tokenizer comparés à protocole fixe plutôt qu’un nouveau modèle.',
    result:
      'Adam-mini : succès (-50 % mémoire d’état, loss égale). SGWM, SCALE, tokenizer 32k et HoloMLP : échecs documentés, non retenus.',
  },
];

/** G2 Nano Safety, hold-out (Jetson 12/09/2026). Source : G/G2-nano-safety/benchmark.md § hold-out 200 */
export const safetyBakeoff = {
  models: [
    { id: 'g2', name: 'G2 Nano Safety', color: 'var(--c-blue)' },
    { id: 'shieldstral', name: 'Shieldstral Q4', color: 'var(--c-green)' },
    { id: 'gliner-edge', name: 'GLiNER edge', color: 'var(--c-orange)' },
    { id: 'gliner-small', name: 'GLiNER small', color: 'var(--c-yellow)' },
    { id: 'regex', name: 'Regex naïf', color: 'var(--c-gray)' },
  ],
  groups: [
    {
      key: 'allow',
      label: 'Laisser',
      scores: { g2: 97.8, shieldstral: 13.0, 'gliner-edge': 0, 'gliner-small': 30.4, regex: 56.5 },
    },
    {
      key: 'redact',
      label: 'Masquer',
      scores: { g2: 43.9, shieldstral: 98.8, 'gliner-edge': 87.8, 'gliner-small': 75.6, regex: 0 },
    },
    {
      key: 'block',
      label: 'Bloquer',
      scores: { g2: 100, shieldstral: 63.9, 'gliner-edge': 63.9, 'gliner-small': 56.9, regex: 100 },
    },
    {
      key: 'decision',
      label: 'Décision',
      scores: { g2: 76.5, shieldstral: 66.5, 'gliner-edge': 59.0, 'gliner-small': 58.5, regex: 49.0 },
    },
  ],
} as const;

export const externalLinks = {
  huggingface: 'https://huggingface.co/AZERDSQ',
  ollama: 'https://ollama.com/azerdsq',
  githubG0: 'https://github.com/AZERDSQ131/G0-nano',
  githubC1: 'https://github.com/AZERDSQ131/gdn2-vs-transformer-scaling',
  githubAA: 'https://github.com/AZERDSQ131/aa-intelligence-index-reverse',
  gofundme: 'https://gofund.me/ffb405d89',
};

export type { BenchScores };
