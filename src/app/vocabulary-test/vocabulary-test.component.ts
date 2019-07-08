import { Component, OnInit, Input } from "@angular/core";
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from "@angular/forms";
import { EvaluationService } from "../evaluation.service";

/**
 * @group Vocabulary
 * @component VocabularyTest
 * @description
 * <div>Here we see the challenge form</div>
 */

@Component({
    selector: "app-vocabulary-test",
    templateUrl: "./vocabulary-test.component.html",
    styleUrls: ["./vocabulary-test.component.scss"]
})
export class VocabularyTestComponent implements OnInit {
    @Input() vocabularyWords: Array<Object>;

    answerForm: FormGroup;
    submitted: Boolean = false;
    correct: number = 0;
    wrong: number = 0;
    currentQuestion: Object;

    constructor(
        private formBuilder: FormBuilder,
        private evaluationService: EvaluationService
    ) {}

    get question(): string {
        return Object.keys(this.currentQuestion).shift();
    }

    get answer(): string {
        return Object.values(this.currentQuestion).shift();
    }

    createNextQuestion(): void {
        this.currentQuestion = this.randomizeArray(
            this.vocabularyWords
        ).shift();
    }

    ngOnInit() {
        this.answerForm = this.formBuilder.group({
            answer: ["", Validators.required]
        });

        this.createNextQuestion();
    }

    randomizeArray(arr): Array<object> {
        const newArr = arr.slice();
        for (let i = newArr.length - 1; i > 0; i--) {
            const rand = Math.floor(Math.random() * (i + 1));
            [newArr[i], newArr[rand]] = [newArr[rand], newArr[i]];
        }
        return newArr;
    }

    resetForm(): void {
        this.answerForm.controls.foreign.setValue("");
        this.answerForm.controls.native.setValue("");
        this.submitted = false;
    }

    submitAnswer(): void {
        this.submitted = true;

        if (this.answerForm.invalid) {
            return;
        }

        if (this.answer === this.answerForm.controls.answer.value) {
            this.correct++;
        } else {
            this.wrong++;
        }

        this.resetForm();
        this.createNextQuestion();
    }
}
