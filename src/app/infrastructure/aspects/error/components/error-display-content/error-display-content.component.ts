import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { ErrorInformation } from '../../models';

@Component({
  selector: 'app-error-display-content',
  templateUrl: './error-display-content.component.html',
  styleUrls: ['./error-display-content.component.scss']
})

export class ErrorDisplayContentComponent implements OnInit {
  public errorInformation: ErrorInformation = ErrorInformation.createEmpty();

  constructor(private activeModal: NgbActiveModal) { }

  public initialize(errorInformation: ErrorInformation): void {
    this.errorInformation = errorInformation;
  }

  public closeModal(): void {
    this.activeModal.close();
  }

  ngOnInit() {
  }
}
