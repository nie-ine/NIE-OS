import {Component, NgModule, OnInit, VERSION} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Popup} from './popup';
import 'rxjs/add/operator/map';

declare var grapesjs: any; // Important!


@Component({
  selector: 'nie-os',
  templateUrl: `nie-OS.component.html`,
})
export class NIEOSComponent {
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
  imageViewerModel = [];
  numberOfImageViewers = 0;
  searchModel = [];
  numberOfSearches = 0;
  length: number;
  constructor() {}

  // Imageviewer
  addAnotherImageViewer() {
    this.length = this.imageViewerModel.length;
    this.imageViewerModel[this.length] = this.numberOfImageViewers + 1;
    this.numberOfImageViewers += 1;
  }
  closeImageViewer(i: number) {
    this.imageViewerModel.splice( i,1 );
  }

  // Search
  addAnotherSearch() {
    this.length = this.searchModel.length;
    this.searchModel[this.length] = this.numberOfSearches + 1;
    this.numberOfSearches += 1;
  }
  closeSearch(i: number) {
    this.searchModel.splice( i, 1 );
  }
}