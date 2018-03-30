import { Component, OnInit } from '@angular/core';

import { ToastService } from 'app/infrastructure/core-services/toast';
import {
    Grid, GridBuilderService
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';

import { LearningSessionsNavigationService } from '../../app-services';
import { LearningSessionsDataService } from '../../domain-services';
import { LearningSession } from '../../models';
import { GridBuilder } from './handlers';

@Component({
  selector: 'app-learning-sessions-overview',
  templateUrl: './learning-sessions-overview.component.html',
  styleUrls: ['./learning-sessions-overview.component.scss']
})

export class LearningSessionsOverviewComponent implements OnInit {
  public grid: Grid<LearningSession>;

  public constructor(
    private gridBuilder: GridBuilderService,
    private navigationService: LearningSessionsNavigationService,
    private dataService: LearningSessionsDataService,
    private toastService: ToastService
  ) { }

  public async ngOnInit(): Promise<void> {
    this.grid = GridBuilder.buildGrid(this.gridBuilder);
    this.grid.gridOptions.onCellDoubleClicked = (event) => this.gridCellDoubleclicked(event);

    await this.loadGridDataAsync();
  }

  public async reloadLearningSessionClicked(): Promise<void> {
    await this.loadGridDataAsync();
  }

  public createLearningSessionClicked() {
    this.navigationService.navigateToEdit('-1');
  }

  public deleteLearningSessionClicked() {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    selectedNodes.forEach(d => {
      const selectedFact = <LearningSession>d.data;
      this.dataService.deleteLearningSessionAsync(selectedFact.id!);
    });

    this.grid.gridOptions.api!.removeItems(selectedNodes);
  }

  public editLearningSessionClicked() {
    const selectedNodes = this.grid.gridOptions.api!.getSelectedNodes();
    if (selectedNodes.length > 0) {
      const entry = <LearningSession>selectedNodes[0].data;
      this.navigationService.navigateToEdit(entry.id!);
    }
  }

  private async loadGridDataAsync(): Promise<void> {
    this.toastService.showInfoToast('Loading Facts..');
    var facts = await this.dataService.loadAllLearningSessionsAsync();

    this.grid.entries.splice(0, this.grid.entries.length);
    this.grid.entries.push(...facts);
  }

  private gridCellDoubleclicked($event: any): void {
    const entry = <LearningSession>$event.data;
    this.navigationService.navigateToEdit(entry.id!);
  }
}
