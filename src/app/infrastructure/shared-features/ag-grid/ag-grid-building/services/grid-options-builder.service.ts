import { ColDef, GridOptions } from 'ag-grid';

import { ObjectUtils } from 'app/infrastructure/utils';

import { IColumnDefinitionBuilderService, IGridOptionsBuilderService } from '../interfaces';
import { IGridBuilderService } from '../interfaces/grid-builder-service.interface';
import { RowSelectionType } from '../models';
import { SetDataCallback } from '../types';
import { ColumnDefinitionBuilderService } from './column-definition-builder.service';
import { RowSelectionTypeMappingHandler } from './handlers';

export class GridOptionsBuilderService implements IGridOptionsBuilderService {
  private _colDefs: ColDef[];

  constructor(private gridBuilder: IGridBuilderService, private gridOptions: GridOptions) {
    this._colDefs = new Array();
    this.setGridOptionsDefaults();
  }

  public withAutoSizeColumns(doAutosize: boolean): IGridOptionsBuilderService {
    this.gridOptions.onGridReady = this.sizeColumnsIfReady.bind(this);
    this.gridOptions.onGridSizeChanged = this.sizeColumnsIfReady.bind(this);
    return this;
  }

  private sizeColumnsIfReady(): void {
    if (this.gridOptions.api) {
      this.gridOptions.api.sizeColumnsToFit();
    }
  }

  public startBuildingColumnDefinition(headerName: string, fieldName: string): IColumnDefinitionBuilderService {
    const colBuilder = new ColumnDefinitionBuilderService(
      this,
      this._colDefs,
      headerName,
      fieldName);
    return colBuilder;
  }

  public withAnimatedRows(doAnimate: boolean): IGridOptionsBuilderService {
    this.gridOptions.animateRows = doAnimate;
    return this;
  }

  public withRowSelectionType(type: RowSelectionType): IGridOptionsBuilderService {
    this.gridOptions.rowSelection = RowSelectionTypeMappingHandler.map(type);
    return this;
  }

  public withEnableSorting(doEnable: boolean): IGridOptionsBuilderService {
    this.gridOptions.enableSorting = doEnable;
    return this;
  }

  public withEnableColResize(doEnable: boolean): IGridOptionsBuilderService {
    this.gridOptions.enableColResize = doEnable;
    return this;
  }

  public buildGridOptions(): IGridBuilderService {
    this.gridOptions.columnDefs = this._colDefs;
    return this.gridBuilder;
  }

  private setGridOptionsDefaults(): void {
    this.gridOptions.animateRows = true;
    this.gridOptions.enableFilter = true;
    this.gridOptions.rowSelection = RowSelectionTypeMappingHandler.map(RowSelectionType.Single);
    this.gridOptions.enableSorting = true;
    this.gridOptions.enableColResize = true;
    this.gridOptions.enableServerSideSorting = false;
  }
}
