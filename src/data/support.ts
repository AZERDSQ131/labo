/**
 * Snapshot public de la cagnotte GoFundMe (pas d'API publique pour les
 * campagnes perso : chiffres relevés sur la page publique, à remettre à
 * jour à la main ou via le payload __NEXT_DATA__ de gofund.me/ffb405d89).
 */
export const support = {
  raisedEur: 181,
  goalEur: 5000,
  donations: 5,
  updated: '2026-09-13',
};

/**
 * Donateurs publics (noms + montants visibles par tous sur la page
 * GoFundMe, aucun anonyme). Relevé le 2026-09-13, trié par montant.
 */
export const donors: Array<{ name: string; eur: number }> = [
  { name: 'William Osborne', eur: 86 },
  { name: 'Olivier Krzeszowiak', eur: 50 },
  { name: 'Ahmet Ipkin', eur: 20 },
  { name: 'Teunis Mulder', eur: 20 },
  { name: 'Piotr Andruszkow', eur: 5 },
];
