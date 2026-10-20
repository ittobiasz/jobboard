export type EmploymentType = 'Plný úväzok' | 'Čiastočný úväzok' | 'Kontrakt' | 'Stáž';

export type JobCategory = 'Vývoj' | 'Dizajn' | 'Produkt' | 'Dáta' | 'Marketing' | 'Zákaznícka podpora';

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  employmentType: EmploymentType;
  salary: string;
  category: JobCategory;
  description: string;
  requirements: string[];
  createdAt: string;
}

export type JobInput = Omit<Job, 'id' | 'createdAt'>;

export const JOB_CATEGORIES: JobCategory[] = ['Vývoj', 'Dizajn', 'Produkt', 'Dáta', 'Marketing', 'Zákaznícka podpora'];

export const EMPLOYMENT_TYPES: EmploymentType[] = ['Plný úväzok', 'Čiastočný úväzok', 'Kontrakt', 'Stáž'];

