import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({selector: "app-vocabulary-test", templateUrl: "./vocabulary-test.component.html", styleUrls: ["./vocabulary-test.component.scss"]})
export class VocabularyTestComponent implements OnInit {
  answerForm: FormGroup;

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.answerForm = this.formBuilder.group({
      answer: ["", Validators.required]
    });
  }
}
