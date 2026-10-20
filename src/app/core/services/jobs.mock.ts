import { Job } from '../models/job.model';

export const JOBS_SEED: Job[] = [
  {
    id: 'frontend-vyvojar-techflow',
    title: 'Frontend vývojár',
    company: 'TechFlow',
    location: 'Žilina, Slovensko',
    employmentType: 'Plný úväzok',
    salary: '2 000 € – 3 000 €',
    category: 'Vývoj',
    description:
      'Hľadáme frontend vývojára, ktorý rád tvorí rýchle, prístupné a premyslené digitálne produkty. Budete úzko spolupracovať s dizajnérmi a backend vývojármi na funkciách, ktoré si naši zákazníci skutočne všimnú. Náš stack je moderný, kód je čistý a záleží nám na detailoch, ktoré väčšina tímov prehliada.',
    requirements: [
      '2+ roky skúseností s vývojom produkčných webových aplikácií',
      'Silná znalosť TypeScriptu a komponentovej architektúry',
      'Skúsenosti s Angularom, Reactom alebo podobným frameworkom',
      'Cit pre detail v rozostupoch, pohybe a interakčnom dizajne',
      'Dobré písomné vyjadrovanie pre asynchrónnu spoluprácu',
    ],
    createdAt: '2026-10-15',
  },
  {
    id: 'produktovy-dizajner-arcadia-studio',
    title: 'Produktový dizajnér',
    company: 'Arcadia Studio',
    location: 'Na diaľku',
    employmentType: 'Plný úväzok',
    salary: '2 200 € – 3 000 €',
    category: 'Dizajn',
    description:
      'Arcadia Studio je malé nezávislé produktové štúdio spolupracujúce so zakladateľmi, ktorým záleží na remesle. Hľadáme produktového dizajnéra, ktorý dokáže surový nápad premeniť na niečo ucelené a dotiahnuť ho až do kódu. Ide o rolu s veľkou mierou samostatnosti bez zbytočných komisií.',
    requirements: [
      'Portfólio so skutočnými odoslanými produktmi, nie len koncepty',
      'Silné základy v typografii, layoute a interakčnom dizajne',
      'Skúsenosti s prácou vo Figme s produkčným dizajn systémom',
      'Schopnosť robiť rozhodnutia samostatne a vysvetliť svoje uvažovanie',
      'Aspoň základné chápanie toho, ako sa dizajn premieta do kódu',
    ],
    createdAt: '2026-10-12',
  },
  {
    id: 'datovy-analytik-northfield-analytics',
    title: 'Dátový analytik',
    company: 'Northfield Analytics',
    location: 'Brno, Česko',
    employmentType: 'Plný úväzok',
    salary: '1 900 € – 2 600 €',
    category: 'Dáta',
    description:
      'Northfield Analytics pomáha obchodníkom pochopiť, prečo zákazníci nakupujú, vracajú tovar alebo odchádzajú. Ako dátový analytik premeníte neprehľadné transakčné dáta na jasné a použiteľné reporty pre tímy, ktoré samy nie sú dátoví špecialisti. Pre nás je zrozumiteľnosť dôležitejšia než zložitosť.',
    requirements: [
      'Silné znalosti SQL a práce s rozsiahlymi dátovými sadami',
      'Skúsenosti s tvorbou dashboardov v Looker, Power BI alebo podobne',
      'Schopnosť jasne vysvetliť zistenia netechnickým kolegom',
      'Základné znalosti štatistiky (korelácia, významnosť, trendy)',
      'Dôraz na detail pri overovaní kvality dát',
    ],
    createdAt: '2026-10-09',
  },
  {
    id: 'marketingovy-specialista-loopwave',
    title: 'Marketingový špecialista',
    company: 'Loopwave',
    location: 'Na diaľku',
    employmentType: 'Kontrakt',
    salary: '1 700 € – 2 300 €',
    category: 'Marketing',
    description:
      'Loopwave pomáha nezávislým hudobníkom distribuovať a propagovať hudbu online. Hľadáme marketingového špecialistu, ktorý povedie kampane na sociálnych sieťach a v e-mailoch tak, aby naozaj zneli ako my — nie ako ďalšia generická SaaS značka.',
    requirements: [
      '2+ roky vedenia platených aj organických kampaní na sociálnych sieťach',
      'Silné písanie s výrazným a sebavedomým tónom',
      'Schopnosť rýchlo analyzovať výkon kampaní a prispôsobiť stratégiu',
      'Skúsenosti s nástrojmi na e-mailový marketing (Klaviyo, Mailchimp alebo podobne)',
      'Skutočný záujem o hudbu a kultúru nezávislých umelcov',
    ],
    createdAt: '2026-10-06',
  },
];
