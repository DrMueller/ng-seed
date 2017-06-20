import { Component, OnInit } from '@angular/core';

import { SelectComponent, SelectConfiguration, ControlPropagationStrategy } from 'app/common/widgets/select';

import { Individual } from '../../models';


@Component({
  selector: 'app-playground-select',
  templateUrl: './playground-select.component.html',
  styleUrls: ['./playground-select.component.scss']
})
export class PlaygroundSelectComponent implements OnInit {
  public individuals: Individual[] = [];
  public selectConfig = new SelectConfiguration('id', 'firstName', ControlPropagationStrategy.Object, 'placeholder');
  public individualChangedText = 'Tra';

  constructor() { }

  ngOnInit() {
    this.createIndividuals();
  }

  public individualChanged(individual: Individual | undefined): void {
    if (individual) {
      this.individualChangedText = `Individual changed to: ${individual.firstName} ${individual.lastName} with the ID ${individual.id}`;
    } else {
      this.individualChangedText = 'Individual changed to undefined!';
    }
  }

  private createIndividuals(): void {
    this.individuals = [
      new Individual('b321', 'Matthias', 'Müller'),
      new Individual('a123', 'Patrick', 'Stewart'),
      new Individual('c567', 'Stefanie', 'Heinzmann')
    ];
  }

}
