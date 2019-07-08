import { async, ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

import { VocabularyFormComponent } from "./vocabulary-form.component";

describe("QuestionsFormComponent", () => {
    let component: VocabularyFormComponent;
    let fixture: ComponentFixture<VocabularyFormComponent>;

    beforeEach(async(() => {
        /**
         * @uijar VocabularyFormComponent
         */
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [VocabularyFormComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VocabularyFormComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /** @uijarexample Create vocabulary form component */

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
