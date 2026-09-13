import type { Model } from './modelTypes';

export const models: Model[] = [
  {
    slug: 'g0-nano',
    name: 'G0 Nano',
    category: 'Série G',
    description:
      'Premier modèle du laboratoire : 62 M de paramètres, from scratch sur Jetson. Seule release open source complète (poids et code d’entraînement). Chat single-turn.',
    links: [
      { kind: 'huggingface', label: 'Hugging Face · base', href: 'https://huggingface.co/AZERDSQ/G0-nano-base' },
      { kind: 'huggingface', label: 'Hugging Face · instruct', href: 'https://huggingface.co/AZERDSQ/G0-nano-instruct' },
      { kind: 'ollama', label: 'Ollama · base', href: 'https://ollama.com/azerdsq/g0-nano-base' },
      { kind: 'ollama', label: 'Ollama · instruct', href: 'https://ollama.com/azerdsq/g0-nano-instruct' },
      { kind: 'github', label: 'GitHub', href: 'https://github.com/AZERDSQ131/G0-nano' },
    ],
  },
  {
    slug: 'g1-nano',
    name: 'G1 Nano',
    category: 'Série G',
    description:
      'Même classe de taille, contexte 2 048 tokens et SFT multi-tour. Open weights. Le checkpoint recommandé pour discuter.',
    links: [
      { kind: 'huggingface', label: 'Hugging Face · base', href: 'https://huggingface.co/AZERDSQ/G1-nano-base' },
      { kind: 'huggingface', label: 'Hugging Face · instruct', href: 'https://huggingface.co/AZERDSQ/G1-nano-instruct' },
      { kind: 'ollama', label: 'Ollama · base', href: 'https://ollama.com/azerdsq/g1-nano-base' },
      { kind: 'ollama', label: 'Ollama · instruct', href: 'https://ollama.com/azerdsq/g1-nano-instruct' },
    ],
  },
  {
    slug: 'g2-nano',
    name: 'G2 Nano',
    category: 'Série G',
    description:
      'Même architecture que G1, deux fois plus de tokens, gains faibles. Open weights. Journal de labo : pour le chat, préférer G1 instruct.',
    links: [
      { kind: 'huggingface', label: 'Hugging Face · base', href: 'https://huggingface.co/AZERDSQ/G2-nano-base' },
      { kind: 'huggingface', label: 'Hugging Face · instruct', href: 'https://huggingface.co/AZERDSQ/G2-nano-instruct' },
      { kind: 'ollama', label: 'Ollama · base', href: 'https://ollama.com/azerdsq/g2-nano-base' },
      { kind: 'ollama', label: 'Ollama · instruct', href: 'https://ollama.com/azerdsq/g2-nano-instruct' },
    ],
  },
  {
    slug: 'g2-nano-safety',
    name: 'G2 Nano Safety',
    category: 'Sécurité',
    description:
      'Juge ALLOW / REDACT / BLOCK pour les messages sortants, avec filet déterministe. Open weights. Pas un chat.',
    links: [
      { kind: 'huggingface', label: 'Hugging Face', href: 'https://huggingface.co/AZERDSQ/G2-nano-safety' },
    ],
  },
];

export const getModels = (): Model[] => models;
