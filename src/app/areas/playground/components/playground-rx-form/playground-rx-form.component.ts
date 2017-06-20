import { Component, OnInit } from '@angular/core';

import * as rx from 'app/common/widgets/rx-forms';

import { FormBuilder } from './form.builder';

@Component({
  selector: 'app-playground-rx-form',
  templateUrl: './playground-rx-form.component.html',
  styleUrls: ['./playground-rx-form.component.scss'],
  providers: [rx.FormValidationService]
})
export class PlaygroundRxFormComponent implements OnInit {

  public dataForm: rx.FormWithValidation;

  constructor(
    private rxFormBuilder: rx.RxFormBuilder,
    private formValidationService: rx.FormValidationService,
    private validatorFactory: rx.ValidatorFactoryService
  ) { }

  ngOnInit() {
    this.dataForm = FormBuilder.buildForm(this.formValidationService, this.rxFormBuilder, this.validatorFactory);
  }
}
