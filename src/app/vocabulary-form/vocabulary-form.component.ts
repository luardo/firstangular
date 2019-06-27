import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ElementRef, ViewChild} from "@angular/core";

@Component({selector: "app-vocabulary-form", templateUrl: "./vocabulary-form.component.html", styleUrls: ["./vocabulary-form.component.scss"]})
export class VocabularyFormComponent implements OnInit {
  @Output()onVocabularyCompleted: EventEmitter<any> = new EventEmitter();
  @ViewChild("nativeWordField", {static: false})
  nativeWordField: ElementRef;

  vocabularyWords: Array<Object> = [];
  maxWordCount: number = 3;
  translationsForm: FormGroup;
  submitted: Boolean = false;

  get isVocabularyComplete(): boolean {
    return this.vocabularyWords.length >= this.maxWordCount;
  }

  get wordsCount(): number {
    return this.maxWordCount - this.vocabularyWords.length;
  }

  get errors() {
    return this.translationsForm.controls;
  }

  constructor(private formBuilder : FormBuilder) {}

  ngOnInit() {
    this.translationsForm = this.formBuilder.group({
      foreign: [
        "", Validators.required
      ],
      native: ["", Validators.required]
    });
  }

  submitWords(): void {
    this.submitted = true;

    if (this.isVocabularyComplete) {
      this.onVocabularyCompleted.emit(this.vocabularyWords);
      return;
    }

    if (this.translationsForm.invalid) {
      return;
    }

    this.vocabularyWords.push({
      [this.translationsForm.controls.native.value]: this.translationsForm.controls.foreign.value
    });

    this.resetForm();
    this.nativeWordField.nativeElement.focus();
  }

  resetForm(): void {
    this.translationsForm.controls.foreign.setValue("");
    this.translationsForm.controls.native.setValue("");
    this.submitted = false;
  }
}
