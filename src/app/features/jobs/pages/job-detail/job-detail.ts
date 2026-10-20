import { Component, computed, inject, input, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { JobService } from '../../../../core/services/job.service';
import { getCompanyMark } from '../../../../core/utils/company-mark';

@Component({
  selector: 'app-job-detail',
  imports: [RouterLink],
  templateUrl: './job-detail.html',
  styleUrl: './job-detail.scss',
})
export class JobDetail {
  private readonly jobService = inject(JobService);

  readonly id = input.required<string>();

  protected readonly job = computed(() => this.jobService.getJobById(this.id()));
  protected readonly mark = computed(() => {
    const job = this.job();
    return job ? getCompanyMark(job.company) : '';
  });

  protected readonly applied = signal(false);

  protected applyNow(): void {
    this.applied.set(true);
  }
}
