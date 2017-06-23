import { Component, OnInit } from '@angular/core';

import * as rx from 'app/common/widgets/rx-forms';
import { SelectConfiguration, ControlPropagationStrategy } from 'app/common/widgets/select';

import { Individual, Country } from '../../models';

import { FormBuilder } from './form.builder';

@Component({
  selector: 'app-playground-rx-form',
  templateUrl: './playground-rx-form.component.html',
  styleUrls: ['./playground-rx-form.component.scss'],
  providers: [rx.FormValidationService]
})
export class PlaygroundRxFormComponent implements OnInit {
  public individuals = Individual.createSome();

  public individualSelectConfig = new SelectConfiguration('id', 'firstName', ControlPropagationStrategy.Object, 'Placeholder-Text');
  public dataForm: rx.FormWithValidation;
  public get countryEnum(): any {
      return Country;
  }

  public formData: string;

  constructor(
    private rxFormBuilder: rx.RxFormBuilder,
    private formValidationService: rx.FormValidationService,
    private validatorFactory: rx.ValidatorFactoryService
  ) { }

  ngOnInit() {
    this.dataForm = FormBuilder.buildForm(this.formValidationService, this.rxFormBuilder, this.validatorFactory);
  }

  public fillFormClicked(): void {
    const patrickStewart = this.individuals.find(f => f.firstName === 'Patrick');

    this.dataForm.formGroup.patchValue({
      emailControl: 'hello-there@gmx.ch',
      individualControl: patrickStewart,
      countryControl: 4
    });
  }

  public showDataClicked(): void {
    this.formData = JSON.stringify(this.dataForm.formGroup.value);
  }
}
