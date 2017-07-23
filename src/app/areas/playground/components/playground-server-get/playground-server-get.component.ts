import { Component, OnInit } from '@angular/core';

import { PlaygroundHttpService } from '../../services';
import { Individual } from '../../models';

@Component({
  selector: 'app-playground-server-get',
  templateUrl: './playground-server-get.component.html',
  styleUrls: ['./playground-server-get.component.scss']
})
export class PlaygroundServerGetComponent implements OnInit {
  public individuals: Individual[] = [];

  constructor(private pgHttpService: PlaygroundHttpService) { }

  ngOnInit() {
    this.getIndividualsAsync();
  }

  private async getIndividualsAsync(): Promise<void> {
    const relativeUrl = 'Individual';
    this.individuals = await this.pgHttpService.getArrayAsync(relativeUrl, Individual);
  }
}
