import { Component, OnInit } from '@angular/core';
import {PresentationService} from "../presentation.service";
import {Presentation} from "../presentation";

@Component({
  selector: 'app-presentations',
  templateUrl: './presentations.component.html',
  styleUrls: ['./presentations.component.css']
})
export class PresentationsComponent implements OnInit {

  formShowing: boolean = false;
  newPresentation: Presentation;
  presentations: Presentation[];

  constructor(private presentationService: PresentationService) {
    this.presentations = presentationService.getPresentations();
  }

  ngOnInit() {
    this.newPresentation = { title: "", presenter: "", description: "", image: "" };
  }

  attending(title) {
    alert('You have been registered for attending ' + title);
  }

  addPresentation(model: Presentation) {
    alert('Presentation ' + model.title + ' added');
    this.presentationService.addPresentation(model);
    this.newPresentation = { title: "", presenter: "", description: "", image: "" };
    this.formShowing = false;
  }

}
