import { Component, effect, inject, input, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  EMPLOYMENT_TYPES,
  EmploymentType,
  Job,
  JOB_CATEGORIES,
  JobCategory,
  JobInput,
} from '../../../../core/models/job.model';

@Component({
  selector: 'app-job-form',
  imports: [ReactiveFormsModule],
  templateUrl: './job-form.html',
  styleUrl: './job-form.scss',
})
export class JobForm {
  private readonly fb = inject(FormBuilder);

  readonly initialJob = input<Job | null>(null);
  readonly submitLabel = input('Uložiť ponuku');

  readonly save = output<JobInput>();
  readonly cancel = output<void>();

  protected readonly categories = JOB_CATEGORIES;
  protected readonly employmentTypes = EMPLOYMENT_TYPES;

  protected readonly form = this.fb.nonNullable.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    company: ['', [Validators.required, Validators.minLength(2)]],
    category: this.fb.nonNullable.control<JobCategory | ''>('', Validators.required),
    location: ['', Validators.required],
    employmentType: this.fb.nonNullable.control<EmploymentType | ''>('', Validators.required),
    salary: ['', Validators.required],
    description: ['', [Validators.required, Validators.minLength(20)]],
    requirements: ['', [Validators.required, Validators.minLength(10)]],
  });

  constructor() {
    effect(() => {
      const job = this.initialJob();
      if (job) {
        this.form.setValue({
          title: job.title,
          company: job.company,
          category: job.category,
          location: job.location,
          employmentType: job.employmentType,
          salary: job.salary,
          description: job.description,
          requirements: job.requirements.join('\n'),
        });
      }
    });
  }

  protected isInvalid(controlName: string): boolean {
    const control = this.form.get(controlName);
    return !!control && control.invalid && (control.dirty || control.touched);
  }

  protected onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const value = this.form.getRawValue();
    this.save.emit({
      title: value.title.trim(),
      company: value.company.trim(),
      category: value.category as JobCategory,
      location: value.location.trim(),
      employmentType: value.employmentType as EmploymentType,
      salary: value.salary.trim(),
      description: value.description.trim(),
      requirements: value.requirements
        .split('\n')
        .map((line) => line.trim())
        .filter((line) => line.length > 0),
    });
  }

  protected onCancel(): void {
    this.cancel.emit();
  }
}
