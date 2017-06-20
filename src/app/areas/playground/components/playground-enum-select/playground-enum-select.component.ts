import { Component, OnInit } from '@angular/core';

import { JsObjUtilities } from 'app/common/utilities';

import { Country } from '../../models';

@Component({
  selector: 'app-playground-enum-select',
  templateUrl: './playground-enum-select.component.html',
  styleUrls: ['./playground-enum-select.component.scss']
})
export class PlaygroundEnumSelectComponent implements OnInit {

  public countryChangedText: string;
  public selectedCountry: any;

  public get country(): any {
    return Country;
  }

  constructor() { }

  ngOnInit() {
  }

  public setSwitzerlandClicked(): void {
    this.selectedCountry = Country.England;
  }

  public countryChanged(country: Country | undefined): void {
    if (JsObjUtilities.isNullOrUndefined(country)) {
      this.countryChangedText = 'Country changed to undefined!';
    } else {
      this.countryChangedText = `Country changed to: ${Country[country!]}.`;
    }
  }
}
