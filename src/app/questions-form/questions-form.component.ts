import {Component, OnInit, Output, EventEmitter} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {ElementRef, ViewChild} from "@angular/core";

@Component({selector: "app-questions-form", templateUrl: "./questions-form.component.html", styleUrls: ["./questions-form.component.scss"]})
export class QuestionsFormComponent implements OnInit {
  @Output()onVocabularyCompleted: EventEmitter<any> = new EventEmitter();
  @ViewChild("nativeWordField")nativeWordField: ElementRef;

  words: Object = {};
  maxWordCount: number = 3;
  translationsForm: FormGroup;
  submitted: Boolean = false;

  get isVocabularyComplete(): boolean {
    return Object.keys(this.words).length >= this.maxWordCount;
  }

  get wordsCount(): number {
    return this.maxWordCount - Object.keys(this.words).length;
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
      this.onVocabularyCompleted.emit(this.words);
      return;
    }

    if (this.translationsForm.invalid) {
      return;
    }

    this.words[this.translationsForm.controls.native.value] = this.translationsForm.controls.foreign.value;
    this.resetForm();
    this.nativeWordField.nativeElement.focus();
  }

  resetForm(): void {
    this.translationsForm.controls.foreign.setValue("");
    this.translationsForm.controls.native.setValue("");
    this.submitted = false;
  }
}
