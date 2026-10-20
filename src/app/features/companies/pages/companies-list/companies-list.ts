import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobService } from '../../../../core/services/job.service';
import { getCompanyMark } from '../../../../core/utils/company-mark';
import { pluralizeSk } from '../../../../core/utils/pluralize';

interface CompanySummary {
  name: string;
  mark: string;
  location: string;
  openRoles: number;
  rolesLabel: string;
}

@Component({
  selector: 'app-companies-list',
  imports: [RouterLink],
  templateUrl: './companies-list.html',
  styleUrl: './companies-list.scss',
})
export class CompaniesList {
  private readonly jobService = inject(JobService);

  protected readonly companies = computed<CompanySummary[]>(() => {
    const jobs = this.jobService.jobs();
    const counts = new Map<string, { location: string; openRoles: number }>();

    for (const job of jobs) {
      const existing = counts.get(job.company);
      if (existing) {
        existing.openRoles += 1;
      } else {
        counts.set(job.company, { location: job.location, openRoles: 1 });
      }
    }

    return Array.from(counts.entries())
      .map(([name, info]) => ({
        name,
        mark: getCompanyMark(name),
        location: info.location,
        openRoles: info.openRoles,
        rolesLabel: `${info.openRoles} ${pluralizeSk(info.openRoles, 'voľná pozícia', 'voľné pozície', 'voľných pozícií')}`,
      }))
      .sort((a, b) => a.name.localeCompare(b.name));
  });
}
