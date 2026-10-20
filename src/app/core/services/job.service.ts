import { Injectable, signal } from '@angular/core';
import { Job, JobInput } from '../models/job.model';
import { JOBS_SEED } from './jobs.mock';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  private readonly _jobs = signal<Job[]>(JOBS_SEED);

  /** Reactive snapshot of all jobs, newest first. */
  readonly jobs = this._jobs.asReadonly();

  getJobs(): Job[] {
    return this._jobs();
  }

  getJobById(id: string): Job | undefined {
    return this._jobs().find((job) => job.id === id);
  }

  addJob(input: JobInput): Job {
    const job: Job = {
      ...input,
      id: this.generateId(input.title),
      createdAt: new Date().toISOString().slice(0, 10),
    };
    this._jobs.update((jobs) => [job, ...jobs]);
    return job;
  }

  updateJob(id: string, input: JobInput): Job | undefined {
    let updated: Job | undefined;
    this._jobs.update((jobs) =>
      jobs.map((job) => {
        if (job.id !== id) {
          return job;
        }
        updated = { ...job, ...input };
        return updated;
      }),
    );
    return updated;
  }

  deleteJob(id: string): void {
    this._jobs.update((jobs) => jobs.filter((job) => job.id !== id));
  }

  private generateId(title: string): string {
    const slug = title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    const suffix = Math.random().toString(36).slice(2, 7);
    return `${slug}-${suffix}`;
  }
}
