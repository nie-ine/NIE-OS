import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { MatTable } from '@angular/material';
import { QueryEntryComponent } from '../query-entry/query-entry.component';
import { QueryAppInputMapComponent } from '../query-app-input-map/query-app-input-map.component';
import {MongoPageService} from '../../shared/nieOS/mongodb/page/page.service';
import {ActivatedRoute} from '@angular/router';
import {MongoActionService} from '../../shared/nieOS/mongodb/action/action.service';

@Component({
  selector: 'app-data-management',
  templateUrl: './data-management.component.html',
  styleUrls: ['./data-management.component.scss']
})
export class DataManagementComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  actionID: string;
  pageID: string;
  isLoading: boolean;
  displayedColumns = ['query', 'delete'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  value: string;
  openApps: Array<any> = [];
  appInputQueryMapping = [];
  queries = [];
  inputs = [
    {
      'inputName': 'textlist'
    },
    {
      'inputName': 'title'
    },
    {
      'inputName': 'description'
    }
  ];

  constructor(
    public dialogRef: MatDialogRef<DataManagementComponent>,
    @Inject(MAT_DIALOG_DATA) public openAppsInThisPage: any,
    public dialog: MatDialog,
    private actionService: MongoActionService,
    private pageService: MongoPageService,
    private route: ActivatedRoute
  ) {
    // console.log( this.openAppsInThisPage );
    for (const appType in this.openAppsInThisPage) {
      if (this.openAppsInThisPage[appType].model.length !== 0) {
        // console.log( this.openAppsInThisPage[ appType ] );
        for (const appOfSameType of this.openAppsInThisPage[appType].model) {
          this.openApps.push(appOfSameType);
          // console.log( appOfSameType );
          for (const query in this.queries) {
            // console.log( this.queries[ query ] );
            this.queries[query][appOfSameType.hash] = appOfSameType.hash;
          }
          this.columnsToDisplay.push(appOfSameType.hash);
          console.log(this.queries);
        }
        if (this.table) {
          this.table.renderRows();
        }
      }
      if (this.table) {
        this.table.renderRows();
      }
    }
    this.isLoading = false;
  }

  ngOnInit() {
    this.isLoading = true;
    this.actionID = this.route.snapshot.queryParams.actionID;
      this.actionService.getAction(this.actionID)
          .subscribe(actionData => {
              if (actionData.status === 200) {
                  if (actionData.body.action.type === 'page') {
                    this.pageID = actionData.body.action.hasPage._id;
                    this.pageService.getAllQueries(this.pageID)
                        .subscribe((data) => {
                          this.queries = data.queries;
                          this.isLoading = false;
                    });
                  }
              } else {
                this.isLoading = false;
              }
          });
  }

  delete(row: any): void {
    const index = this.queries.indexOf(row, 0);
    if (index > -1) {
      this.pageService.deleteQuery(this.pageID, row._id)
          .subscribe((data) => {
              if (data.status === 200) {
                this.queries.splice(index, 1);
                this.table.renderRows();
              } else {
                // Fehler dass query nicht gelöscht werden konnte
              }
          });
    }
  }

  addQuery(name: string) {
    this.pageService.createQuery(this.pageID, {title: name})
        .subscribe(data => {
          if (data.status === 201) {
              this.queries.push(data.body.query);
              this.table.renderRows();
          }
        });
  }

  close() {
    this.dialogRef.close();
  }

  openQueryEntry(query: any) {
    const dialogRef = this.dialog.open(QueryEntryComponent, {
      width: '100%',
      height: '100%',
      data: {query}
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('Abstract tree from query entry');
      console.log(result);
      this.updateQueryWithAbstractResponseStructure(result[1], result[0]);
    });
  }

  updateQueryWithAbstractResponseStructure(query: any, responseStructure: any) {
    let index = 0;
    for (const savedQuery of this.queries) {
      console.log(savedQuery);
      console.log(query.query);
      if (savedQuery === query.query) {
        this.queries[index].abstractResponse = responseStructure;
        this.table.renderRows();
      }
      index += 1;
    }
    console.log(this.queries);
  }

  assignInputToQuery(input: string, app: string, query: string) {
    if (!this.appInputQueryMapping[app]) {
      this.appInputQueryMapping[app] = {};
    }
    this.appInputQueryMapping[app][input] = query;
    console.log(this.appInputQueryMapping);
  }

  checkIfChosen(input: string, app: string, query: string) {
    if (this.appInputQueryMapping[app] && this.appInputQueryMapping[app][input] === query) {
      // console.log( 'true' );
      return true;
    } else {
      // console.log( 'false' );
      return false;
    }
  }

  checkIfRowIsChosen(app: string, query: string) {
    for (const input in this.appInputQueryMapping[app]) {
      if (this.appInputQueryMapping[app][input] === query) {
        return true;
      }
    }
  }

  unSelectChip( input: string, app: string, query: string ) {
    this.appInputQueryMapping[app][input] = undefined;
  }

  openQueryAppInputMapDialog( app: string, query: any ) {
    console.log( 'openQueryAppInputMapDialog' );
    const dialogRef = this.dialog.open(QueryAppInputMapComponent, {
      width: '100%',
      height: '100%',
      data: {
        mapping: this.appInputQueryMapping,
        app: app,
        query: query,
        openApps: this.openAppsInThisPage,
        abstractResponse: query.abstractResponse
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log('\n\nHier weiter: update appInputQueryMapping\n\n');
      console.log(result);
    });
  }
}
