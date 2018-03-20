import {
    Grid, GridBuilderService, RowSelectionType
} from 'app/infrastructure/shared-features/ag-grid/ag-grid-building';

import { Fact } from '../../../models';

export class GridBuilder {
  public static buildGrid(gridBuilder: GridBuilderService): Grid<Fact> {
    const result = gridBuilder
      .startBuildingOptions()
      .withRowSelectionType(RowSelectionType.Multiple)
      .withAutoSizeColumns(true)
      .startBuildingColumnDefinition('Created', 'creationDate')
      .startBuildingColumnSize()
      .withWidth(150)
      .withSuppressSorting(true)
      .buildColumnDefinition()
      .startBuildingColumnDefinition('Question', 'questionText')
      .startBuildingColumnSize()
      .withFitSoSize()
      .withSuppressMenu(false)
      .buildColumnDefinition()
      .buildGridOptions()
      .buildGrid<Fact>();

    return result;
  }
}
