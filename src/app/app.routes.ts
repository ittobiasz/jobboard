import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'jobs', pathMatch: 'full' },
  {
    path: 'jobs',
    loadComponent: () => import('./features/jobs/pages/job-list/job-list').then((m) => m.JobList),
    title: 'JobBoard — Príležitosti',
  },
  {
    path: 'jobs/new',
    loadComponent: () => import('./features/jobs/pages/job-create/job-create').then((m) => m.JobCreate),
    title: 'JobBoard — Pridať ponuku',
  },
  {
    path: 'jobs/:id/edit',
    loadComponent: () => import('./features/jobs/pages/job-edit/job-edit').then((m) => m.JobEdit),
    title: 'JobBoard — Upraviť príležitosť',
  },
  {
    path: 'jobs/:id',
    loadComponent: () => import('./features/jobs/pages/job-detail/job-detail').then((m) => m.JobDetail),
    title: 'JobBoard — Príležitosť',
  },
  {
    path: 'companies',
    loadComponent: () =>
      import('./features/companies/pages/companies-list/companies-list').then((m) => m.CompaniesList),
    title: 'JobBoard — Firmy',
  },
  {
    path: 'about',
    loadComponent: () => import('./features/about/pages/about/about').then((m) => m.About),
    title: 'JobBoard — O nás',
  },
  {
    path: '**',
    loadComponent: () => import('./shared/components/not-found/not-found').then((m) => m.NotFound),
    title: 'JobBoard — Stránka nenájdená',
  },
];
