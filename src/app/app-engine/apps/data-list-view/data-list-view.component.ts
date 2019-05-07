import { Component, Input, OnInit } from '@angular/core';
import { DataService } from './resources.service';

@Component({
  selector: 'data-list-view',
  templateUrl: './data-list-view.component.html',
  providers: [DataService]
})

export class DataListView implements OnInit {
  @Input() queryResponse: any;
  @Input() query: any;
  @Input() settings: any;

  resData: any;

  // TODO: Store/load SETTINGS on/from MongoDB:
  dataListSettings = {
    "inputMode":  "query",
    "columns":{
      "manualColumnDefinition": true,
      "displayedColumns": ["indexed_thing", "label", "occurence"],
      "stickyColumn": 0,
      },
    "filter": {   "showFilter": true,
      "filteredColumns": ["indexed_thing", "label"],
      "caseSensitive" : false},
    "paginator":{ "pageIndex": "0",
      "pageSize": "5",
      "pageSizeOptions": [5, 10, 25, 50, 100, 250]},
    "export": {   "showExport": true},
    "sort":{      "disallowSorting": false},
    "styles": {
      "cellStyle": {"cursor" : "pointer"},
    },
    "actions":{
      "actions": true,
      "_comment": { "cursorstyle": "use custom css properties",
                    "intLink":"opens another app",
                    "extLink": "opens another webpage"},
      "actionMode": "object",
      "actionType": "dialog",
      "actionRange": "cell",
      "baseUrl": "http://localhost:4200/page?actionID=5c8a6300b4438759d237b246",
      "urlParams": {  "label" : "label.value",
        "highlight" : "authorsname.value"}
    }
  };

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    console.log(this.queryResponse)
    this.onGetData();
  }

  // GET the data - either from running a query itself or by the input from another app/service (jsonResponse)
  private onGetData() {
    console.log('Inputmode: ' + this.dataListSettings.inputMode);
    if (this.dataListSettings.inputMode === 'query') {
      console.log('getting data by sending a query passed by input.');
      this.dataService.getData().subscribe(data => {
        this.resData = data;
      });
    }
    if (this.dataListSettings.inputMode === 'queryResponse') {
      console.log('getting data by a queryResonse input.');
      this.resData = this.queryResponse;
    } else {
        console.log('missing or wrong settings definition for data source.');
      }
    }
}
