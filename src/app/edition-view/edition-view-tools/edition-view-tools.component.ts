import {Component, OnInit} from '@angular/core';
import {CanvasOptionsService} from '../canvas-options.service';
import {FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-edition-view-tools',
  templateUrl: './edition-view-tools.component.html',
  styleUrls: ['./edition-view-tools.component.scss']
})
export class EditionViewToolsComponent implements OnInit {

  toolbox: FormGroup;

  matcher = new MyErrorStateMatcher();

  constructor(public canvasOptionsService: CanvasOptionsService, private formBuilder: FormBuilder) {
    this.toolbox = formBuilder.group({
      nightView: false,
      fontSize: [100, [Validators.required, Validators.max(500), Validators.min(25)]],
      find: ''
    });
    this.toolbox.get('nightView').valueChanges.subscribe(v => canvasOptionsService.toggleNightView());
    this.toolbox.get('fontSize').valueChanges.subscribe(size => canvasOptionsService.changeFontSize(size));
    this.toolbox.get('find').valueChanges.subscribe(term => {
      if (term.length >= 3) {
        this.canvasOptionsService.find(term);
      }
    });
    this.toolbox.get('clearFind').valueChanges.subscribe(x => this.canvasOptionsService.clearFind());
    this.toolbox.get('previousFind').valueChanges.subscribe(prev => this.canvasOptionsService.prevFind());
    this.toolbox.get('nextFind').valueChanges.subscribe(next => this.canvasOptionsService.nextFind());
  }

  ngOnInit() {
  }

}
