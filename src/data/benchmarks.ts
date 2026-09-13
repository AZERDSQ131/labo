import type { BenchScores } from './modelTypes';

/**
 * Source unique des scores de la page Benchmarks.
 *
 * Tous les chiffres ci-dessous sont des `acc` bruts (%), mesurés par le
 * laboratoire avec `lm-evaluation-harness` 0.4.11, zero-shot, jeux complets,
 * une tâche à la fois, sur Jetson (CUDA) — sauf mention contraire.
 * Détail et logs : G/G2-nano/benchmark.md, G/G2-nano/adversaries.md,
 * G/G0-nano/benchmark.md, G/G1-nano/benchmark.md.
 */

export interface BenchTask {
  key: keyof BenchScores;
  label: string;
  chance: string;
}

export const benchTasks: BenchTask[] = [
  { key: 'lambada', label: 'LAMBADA', chance: '≈ 0 %*' },
  { key: 'piqa', label: 'PIQA', chance: '≈ 50 %' },
  { key: 'winogrande', label: 'WinoGrande', chance: '≈ 50 %' },
  { key: 'arcEasy', label: 'ARC-E', chance: '≈ 25 %' },
  { key: 'arcChallenge', label: 'ARC-C', chance: '≈ 25 %' },
  { key: 'hellaswag', label: 'HellaSwag', chance: '≈ 25 %†' },
  { key: 'sciq', label: 'SciQ', chance: 'biaisé‡' },
  { key: 'mean7', label: 'Moy. 7', chance: '—' },
];

export interface BenchRow {
  label: string;
  params: string;
  paramsM: number;
  date: string;
  scores: BenchScores;
  highlight?: boolean;
}

/** Modèles du laboratoire, suite 7 complète (mean_7 comparable). */
export const labRows: BenchRow[] = [
  {
    label: 'G2-nano-base',
    params: '60 M',
    paramsM: 60,
    date: '2026-09-08',
    scores: {
      lambada: 24.37, piqa: 58.6, winogrande: 51.46, arcEasy: 44.11,
      arcChallenge: 19.11, hellaswag: 27.36, sciq: 69.9, mean7: 42.13,
    },
    highlight: true,
  },
  {
    label: 'G0-nano-base',
    params: '62 M',
    paramsM: 62.11,
    date: '2026-08-02',
    scores: {
      lambada: 19.39, piqa: 58.98, winogrande: 52.17, arcEasy: 45.66,
      arcChallenge: 18.17, hellaswag: 27.21, sciq: 66.7, mean7: 41.18,
    },
    highlight: true,
  },
  {
    label: 'G0-nano-instruct',
    params: '62 M',
    paramsM: 62.11,
    date: '2026-07-29',
    scores: {
      lambada: 18.34, piqa: 59.09, winogrande: 51.7, arcEasy: 43.31,
      arcChallenge: 20.99, hellaswag: 27.21, sciq: 66.8, mean7: 41.06,
    },
    highlight: true,
  },
  {
    label: 'G1-nano-base',
    params: '60 M',
    paramsM: 60.03,
    date: '2026-09-08',
    scores: {
      lambada: 22.9, piqa: 59.25, winogrande: 51.54, arcEasy: 42.26,
      arcChallenge: 18.34, hellaswag: 27.03, sciq: 63.9, mean7: 40.75,
    },
    highlight: true,
  },
  {
    label: 'G2-nano-instruct',
    params: '60 M',
    paramsM: 60,
    date: '2026-09-11',
    scores: {
      lambada: 24.72, piqa: 58.71, winogrande: 50.99, arcEasy: 39.1,
      arcChallenge: 21.25, hellaswag: 27.47, sciq: 58.9, mean7: 40.16,
    },
    highlight: true,
  },
];

/**
 * Références externes remesurées par le labo, même protocole, campagne
 * Jetson du 2026-09-12 (tmux `g2_refs`). Seules valeurs comparables aux
 * lignes ci-dessus — ne pas les mélanger aux chiffres des model cards
 * d'origine (agrégats et normalisations différents).
 */
export const peerRows: BenchRow[] = [
  {
    label: 'Pythia-160M',
    params: '162 M',
    paramsM: 162.3,
    date: '2026-09-12',
    scores: {
      lambada: 32.97, piqa: 62.4, winogrande: 51.54, arcEasy: 43.43,
      arcChallenge: 19.45, hellaswag: 28.39, sciq: 74.3, mean7: 44.64,
    },
  },
  {
    label: 'Ronan-125M',
    params: '125 M',
    paramsM: 125,
    date: '2026-09-12',
    scores: {
      lambada: 23.15, piqa: 61.04, winogrande: 49.41, arcEasy: 46.72,
      arcChallenge: 20.31, hellaswag: 27.88, sciq: 68.1, mean7: 42.37,
    },
  },
  {
    label: 'Ronan-1.3-125M',
    params: '125 M',
    paramsM: 125,
    date: '2026-09-12',
    scores: {
      lambada: 26.04, piqa: 62.13, winogrande: 52.33, arcEasy: 47.18,
      arcChallenge: 20.56, hellaswag: 28.09, sciq: 71.0, mean7: 43.91,
    },
  },
  {
    label: 'Ronan-1.3-75M',
    params: '77 M',
    paramsM: 77.4,
    date: '2026-09-12',
    scores: {
      lambada: 18.28, piqa: 59.58, winogrande: 51.7, arcEasy: 43.86,
      arcChallenge: 19.28, hellaswag: 27.2, sciq: 66.8, mean7: 40.96,
    },
  },
  {
    label: 'Pythia-70M',
    params: '70 M',
    paramsM: 70,
    date: '2026-09-12',
    scores: {
      lambada: 4.83, piqa: 55.11, winogrande: 50.12, arcEasy: 29.5,
      arcChallenge: 19.45, hellaswag: 26.67, sciq: 35.5, mean7: 31.6,
    },
  },
  {
    label: 'Pythia-70M-deduped',
    params: '70 M',
    paramsM: 70,
    date: '2026-09-12',
    scores: {
      lambada: 19.0, piqa: 58.81, winogrande: 47.67, arcEasy: 38.22,
      arcChallenge: 15.61, hellaswag: 26.6, sciq: 60.1, mean7: 38.0,
    },
  },
];

/** G1-nano-instruct : pas de HellaSwag, donc mean_6 uniquement, non comparable aux mean_7. */
export const g1InstructMean6 = {
  label: 'G1-nano-instruct',
  date: '2026-08-02',
  scores: {
    lambada: 23.09, piqa: 60.34, winogrande: 52.57, arcEasy: 42.13,
    arcChallenge: 20.48, sciq: 63.8, mean6: 43.74,
  },
};

export const benchProtocol = {
  harness: 'lm-evaluation-harness 0.4.11',
  shots: 'zero-shot',
  coverage: 'jeux complets, une tâche à la fois',
  metric: 'acc brut (acc_norm en complément quand disponible)',
  machine: 'Jetson Orin Nano, CUDA',
};

export interface TaskFigure {
  key: keyof BenchScores;
  title: string;
  desc: string;
  reading: string;
  chanceValue: number | null;
  chanceLabel: string;
}

/** Une illustration par tâche : description courte + lecture honnête en une ligne. */
export const taskFigures: TaskFigure[] = [
  {
    key: 'lambada', title: 'LAMBADA', desc: 'Prédire le dernier mot d’un passage — génération libre, pas un QCM.',
    reading: 'G2-instruct devant d’un cheveu, mais la perplexité se dégrade (105 → 124) : même justesse, moins de confiance.',
    chanceValue: 0, chanceLabel: 'hasard ≈ 0 %',
  },
  {
    key: 'piqa', title: 'PIQA', desc: 'Sens commun physique, 2 choix : quelle solution est la bonne ?',
    reading: 'Tous les Nano entre 58,6 et 59,3 % : le SFT et les tokens doublés n’y changent rien.',
    chanceValue: 50, chanceLabel: 'hasard 50 %',
  },
  {
    key: 'winogrande', title: 'WinoGrande', desc: 'Résoudre une coréférence ambiguë, 2 choix.',
    reading: '51–52 % partout, collés au hasard : aucun Nano ne comprend vraiment la tâche.',
    chanceValue: 50, chanceLabel: 'hasard 50 %',
  },
  {
    key: 'arcEasy', title: 'ARC-Easy', desc: 'QCM de sciences niveau école, 4 choix.',
    reading: 'Notre meilleur terrain structuré — mais le SFT G2 y perd 5 pt : l’instruct casse le rappel scolaire.',
    chanceValue: 25, chanceLabel: 'hasard 25 %',
  },
  {
    key: 'arcChallenge', title: 'ARC-Challenge', desc: 'QCM de sciences difficiles, 4 choix.',
    reading: 'Seul vrai gain du SFT (+2,1 pt) — à relativiser : 590 questions, bruit élevé.',
    chanceValue: 25, chanceLabel: 'hasard 25 %',
  },
  {
    key: 'hellaswag', title: 'HellaSwag', desc: 'Choisir la fin d’histoire la plus plausible, 4 choix.',
    reading: '27–28 % pour tout le monde, modèles externes inclus : à 60M, c’est du bruit, pas du sens commun.',
    chanceValue: 25, chanceLabel: 'hasard 25 %',
  },
  {
    key: 'sciq', title: 'SciQ', desc: 'QCM de sciences avec un fort biais de distribution.',
    reading: '69,9 % en base, 58,9 % après SFT (−11 pt) : la chute la plus nette, et la preuve que le SFT écrase le factuel.',
    chanceValue: null, chanceLabel: 'biaisé : partiellement résolvable à l’aveugle',
  },
];

/** Couleur fixe par modèle du labo, partagée par toutes les illustrations. */
export const labColors: Record<string, string> = {
  'G2-nano-base': 'var(--c-blue)',
  'G2-nano-instruct': 'var(--c-orange)',
  'G1-nano-base': 'var(--c-yellow)',
  'G0-nano-base': 'var(--c-green)',
  'G0-nano-instruct': 'var(--c-gray)',
};
