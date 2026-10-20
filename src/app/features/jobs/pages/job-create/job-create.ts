import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { JobForm } from '../../components/job-form/job-form';
import { JobInput } from '../../../../core/models/job.model';
import { JobService } from '../../../../core/services/job.service';

@Component({
  selector: 'app-job-create',
  imports: [RouterLink, JobForm],
  templateUrl: './job-create.html',
  styleUrl: './job-create.scss',
})
export class JobCreate {
  private readonly jobService = inject(JobService);
  private readonly router = inject(Router);

  protected onSave(input: JobInput): void {
    const job = this.jobService.addJob(input);
    this.router.navigate(['/jobs', job.id]);
  }

  protected onCancel(): void {
    this.router.navigate(['/jobs']);
  }
}
