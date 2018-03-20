import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class LearningSessionsNavigationService {
  public navigateToEdit(learningSessionId: string): void {
    this.router.navigate(['/learning-sessions', learningSessionId]);
  }

  public navigateToOverview(): void {
    this.router.navigate(['/learning-sessions']);
  }

  constructor(private router: Router) { }
}
