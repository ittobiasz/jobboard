import { Component, computed, inject, input, signal } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JobForm } from '../../components/job-form/job-form';
import { JobInput } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';

@Component({
  selector: 'app-job-edit',
  imports: [RouterLink, JobForm],
  templateUrl: './job-edit.html',
  styleUrl: './job-edit.scss',
})
export class JobEdit {
  private readonly jobService = inject(JobService);
  private readonly router = inject(Router);

  readonly id = input.required<string>();

  protected readonly job = computed(() => this.jobService.getJobById(this.id()));
  protected readonly confirmingDelete = signal(false);

  protected onSave(input: JobInput): void {
    this.jobService.updateJob(this.id(), input);
    this.router.navigate(['/jobs', this.id()]);
  }

  protected onCancel(): void {
    this.router.navigate(['/jobs', this.id()]);
  }

  protected requestDelete(): void {
    this.confirmingDelete.set(true);
  }

  protected cancelDelete(): void {
    this.confirmingDelete.set(false);
  }

  protected confirmDelete(): void {
    this.jobService.deleteJob(this.id());
    this.router.navigate(['/jobs']);
  }
}
