import { Component, computed, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Job } from '../../../../core/models/job.model';
import { getCompanyMark } from '../../../../core/utils/company-mark';

@Component({
  selector: 'app-job-card',
  imports: [RouterLink],
  templateUrl: './job-card.html',
  styleUrl: './job-card.scss',
})
export class JobCard {
  readonly job = input.required<Job>();
  readonly position = input<number>(1);

  protected readonly mark = computed(() => getCompanyMark(this.job().company));
  protected readonly positionLabel = computed(() => {
    const value = this.position();
    return value < 10 ? `0${value}` : `${value}`;
  });
}
