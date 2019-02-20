import {Component, OnInit} from '@angular/core';
import {KnoraRequestService} from '../../../query-engine/knora/knora-request.service';
import {SparqlRequestService} from '../../../query-engine/sparql/sparql-request.service';
import {ResultToTextMapperService} from './result-to-text-mapper.service';
import {text} from './test-data';

@Component({
  selector: 'app-text-view',
  templateUrl: './text-view.component.html',
  styleUrls: ['./text-view.component.scss']
})
export class TextViewComponent implements OnInit {

  testData = text;

  constructor(knoraRequestService: KnoraRequestService,
              sparqlRequestService: SparqlRequestService,
              resultToTextMapperService: ResultToTextMapperService) {
  }

  ngOnInit() {
  }

}