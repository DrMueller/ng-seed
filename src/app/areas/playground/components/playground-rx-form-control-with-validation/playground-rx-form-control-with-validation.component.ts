import { Component, OnInit } from '@angular/core';

import * as rx from 'app/common/widgets/rx-forms';
import { SelectConfiguration } from 'app/common/widgets/select';

import { Individual, Country } from '../../models';

import { FormBuilder } from './form.builder';

@Component({
  selector: 'app-playground-rx-form-control-with-validation',
  templateUrl: './playground-rx-form-control-with-validation.component.html',
  styleUrls: ['./playground-rx-form-control-with-validation.component.scss']
})
export class PlaygroundRxFormControlWithValidationComponent implements OnInit {
  public dataForm: rx.FormWithValidation;
  public individuals = Individual.createSome();
  public individualSelectConfig = new SelectConfiguration('id', 'firstName');

  constructor(
    private rxFormBuilder: rx.RxFormBuilder,
    private formValidationService: rx.FormValidationService,
    private validatorFactory: rx.ValidatorFactoryService
  ) { }

  ngOnInit() {
    this.dataForm = FormBuilder.buildForm(this.formValidationService, this.rxFormBuilder, this.validatorFactory);
  }
}
