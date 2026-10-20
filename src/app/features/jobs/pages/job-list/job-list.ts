import { Component, computed, effect, inject, input, signal } from '@angular/core';
import { Job } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';
import { pluralizeSk } from '../../../../core/utils/pluralize';
import { JobCard } from '../../components/job-card/job-card';

type SortOption = 'newest' | 'title' | 'salary';

@Component({
  selector: 'app-job-list',
  imports: [JobCard],
  templateUrl: './job-list.html',
  styleUrl: './job-list.scss',
})
export class JobList {
  private readonly jobService = inject(JobService);

  /** Optional incoming search term, bound from the ?q= query param (e.g. from Companies). */
  readonly q = input<string>('');

  private readonly allJobs = this.jobService.jobs;

  protected readonly searchTerm = signal('');
  protected readonly selectedCategory = signal('');
  protected readonly selectedLocation = signal('');
  protected readonly sortBy = signal<SortOption>('newest');

  constructor() {
    effect(() => {
      const incoming = this.q();
      if (incoming) {
        this.searchTerm.set(incoming);
      }
    });
  }

  protected readonly categories = computed(() =>
    Array.from(new Set(this.allJobs().map((job) => job.category))).sort(),
  );

  protected readonly locations = computed(() =>
    Array.from(new Set(this.allJobs().map((job) => job.location))).sort(),
  );

  protected readonly hasActiveFilters = computed(
    () => !!this.searchTerm() || !!this.selectedCategory() || !!this.selectedLocation(),
  );

  protected readonly filteredJobs = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    const category = this.selectedCategory();
    const location = this.selectedLocation();

    const result = this.allJobs().filter((job) => {
      const matchesTerm =
        !term ||
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.category.toLowerCase().includes(term);
      const matchesCategory = !category || job.category === category;
      const matchesLocation = !location || job.location === location;
      return matchesTerm && matchesCategory && matchesLocation;
    });

    return this.sortJobs(result);
  });

  protected readonly resultsLabel = computed(() => {
    const count = this.filteredJobs().length;
    return `${count} ${pluralizeSk(count, 'príležitosť', 'príležitosti', 'príležitostí')}`;
  });

  protected onSearchInput(event: Event): void {
    this.searchTerm.set((event.target as HTMLInputElement).value);
  }

  protected onCategoryChange(event: Event): void {
    this.selectedCategory.set((event.target as HTMLSelectElement).value);
  }

  protected onLocationChange(event: Event): void {
    this.selectedLocation.set((event.target as HTMLSelectElement).value);
  }

  protected onSortChange(event: Event): void {
    this.sortBy.set((event.target as HTMLSelectElement).value as SortOption);
  }

  protected clearFilters(): void {
    this.searchTerm.set('');
    this.selectedCategory.set('');
    this.selectedLocation.set('');
  }

  private sortJobs(jobs: Job[]): Job[] {
    const sorted = [...jobs];
    switch (this.sortBy()) {
      case 'title':
        return sorted.sort((a, b) => a.title.localeCompare(b.title));
      case 'salary':
        return sorted.sort((a, b) => this.parseSalary(b.salary) - this.parseSalary(a.salary));
      case 'newest':
      default:
        return sorted.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
    }
  }

  private parseSalary(salary: string): number {
    const matches = salary.match(/\d[\d,.\s]*/g);
    if (!matches) {
      return 0;
    }
    return Math.max(...matches.map((value) => Number(value.replace(/[^\d]/g, ''))));
  }
}
