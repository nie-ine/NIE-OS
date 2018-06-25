import {AfterViewChecked, ChangeDetectorRef, Component, NgModule, OnInit, VERSION} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Popup} from './popup';
import 'rxjs/add/operator/map';
import { ActivatedRoute } from '@angular/router';
import { ActionService } from '../../shared/action.service';
import { ViewService } from '../apps/view/view.service';

declare var grapesjs: any; // Important!


@Component({
  selector: 'nie-os',
  templateUrl: `nie-OS.component.html`,
})
export class NIEOSComponent implements OnInit, AfterViewChecked {
  showFiller = false;
  image = {
    '@id' : 'http://rdfh.ch/kuno-raeber/Uzo2YDhzTr-8CUSg1pQL4Q/values/gJVf-AQjSbSTAo8EsU8ErQ',
    '@type' : 'knora-api:StillImageFileValue',
    'knora-api:fileValueAsUrl' :
      'https://tools.wmflabs.org/' +
      'zoomviewer/proxy.php?iiif=Lions_Family_Portrait_Masai_Mara.jpg/pct:65,81,35,15/full/0/default.jpg',
    'knora-api:fileValueHasFilename' : 'proxy.php?iiif=Lions_Family_Portrait_Masai_Mara.jpg',
    'knora-api:fileValueIsPreview' : false,
    'knora-api:stillImageFileValueHasDimX' : 5184,
    'knora-api:stillImageFileValueHasDimY' : 3456,
    'knora-api:stillImageFileValueHasIIIFBaseUrl' : 'https://tools.wmflabs.org/zoomviewer'
  };
  searchModel = [];
  grapesJSModel = [];
  textViewerModel = [];
  actionID: number;
  length: number;
  view: any;
  action: any;
  appTypes = {
    imageViewer: {
      type: 'imageViewers',
      model: []
    },
    textViewer: {
      type: 'textViewers',
      model: []
    },
    searchViewer: {
      type: 'searchViewers',
      model: []
    },
    grapesJSViewer: {
      type: 'grapesJSViewers',
      model: []
    }
  };

  constructor(
    private route: ActivatedRoute,
    private actionService: ActionService,
    private viewService: ViewService,
    private cdr: ChangeDetectorRef
  ) {
    this.route.params.subscribe(params => console.log(params));
  }


  ngAfterViewChecked() {
    this.cdr.detectChanges();
  }
  ngOnInit() {
    this.view = {};
    // console.log('Start der Arbeitsflaeche');
    // Construct fake image Viewer:
    this.actionID = this.route.snapshot.queryParams.actionID;
    this.checkIfViewExistsForThisAction( this.actionID );
  }
  checkIfViewExistsForThisAction( actionID: number ) {
    this.actionService.getById( actionID )
      .subscribe(
        data => {
          this.action = data;
          console.log('This action: ');
          console.log(this.action);
          if ( this.action && this.action.hasViews[ 0 ] ) {
            this.updateAppsInView( this.action.hasViews );
          } else {
            console.log('No views for this action yet');
            this.view.hash = this.generateHash();
            console.log(this.view);
            return undefined;
          }
        },
        error => {
          console.log(error);
          return undefined;
        });
  }
  generateHash(): string {
    console.log('generate Hash');
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (let i = 0; i < 5; i++) {
      text += possible.charAt(
        Math.floor(Math.random() * possible.length )
      );
    }
    return text;
  }

  deleteView() {
    console.log('Delete View');
  }

  updateAppCoordinates(app: any) {
    console.log('x: ' + app.x);
    console.log('y: ' + app.y);
    console.log('type: ' + app.type);
    console.log('hash: ' + app.hash );
    if( this.view[ app.hash ] === null ) {
      this.view[ app.hash ] = [];
    }
    this.view[ app.hash ] = app;
    console.log( this.view );
  }

  // Next: go through code and generalise app saving mechanism
  updateAppsInView( viewHashes: Array<any> ) {
    // console.log('updateAppsInView');
    // console.log('get views from Backend');
    this.viewService.getById( viewHashes[ 0 ] )
      .subscribe(
        data => {
          this.view = data;
          console.log(this.view);
          for ( const app in this.view ) {
            for( const appType in this.appTypes ) {
              this.initiateUpdateApp(
                data[ app ],
                this.appTypes[ appType ].type,
                this.appTypes[ appType ].model
              );
            }
          }
        },
        error => {
          console.log(error);
        });
  }
  initiateUpdateApp(
    appFromViewModel: any,
    appType: string,
    appModel: any
  ) {
    if ( appFromViewModel.type === appType ) {
      this.updateApp(
        appType,
        appModel,
        appFromViewModel
      );
    }
  }
  updateApp(
    appType: string,
    appModel: any,
    appFromViewModel: any
  ) {
    const length = appModel.length;
    appModel[ length ] = {};
    appModel[ length ].x = appFromViewModel.x;
    appModel[ length ].y = appFromViewModel.y;
    appModel[ length ].hash = appFromViewModel.hash;
    appModel[ length ].type = appType;
    console.log(appModel);
  }
  createTooltip() {
    if ( this.action ) {
      return 'Aktion: ' + this.action.title + ', Beschreibung: ' + this.action.description;
    } else {
      return null;
    }
  }

  saveView() {
    console.log('Save View');
    console.log('Action ID: ' + this.actionID);
    if ( this.action.hasViews[0] ) {
      console.log('update view for this action');
      console.log(this.action);
      console.log(this.view);
      this.viewService.update( this.view )
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          });
    } else {
      console.log('Save new View');
      console.log('1. Attach hash of this view to action model ' + this.view.hash);
      this.action.hasViews[ 0 ] = this.view.hash;
      console.log(this.view);
      console.log(this.action);
      // Update ActionService so that it contains hash of new view
      this.actionService.update(this.action)
        .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        });
      // Save new view
      this.viewService.create( this.view )
        .subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          });
    }
  }
  addAnotherApp (
    appModel: any,
    generateHash: boolean
  ): Array<any> {
    console.log('add another app');
    const length = appModel.length;
    appModel[ length ] = {};
    console.log('Add type and Id here');
    if( generateHash ) {
      appModel[ length ].hash = this.generateHash();
    }
    return appModel;
  }
  closeApp(
    appModel: Array<any>,
    i: number
  ) {
    console.log(appModel);
    console.log(this.view);
    console.log(this.view[appModel[ i ].hash]);
    delete this.view[appModel[ i ].hash];
    console.log('this.view muss upgedated werden von appModel');
    appModel.splice(
      i,
      1);
    console.log(this.view);
    console.log(this.appTypes);
  }
}
