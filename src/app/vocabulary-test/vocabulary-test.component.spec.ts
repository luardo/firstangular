import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { VocabularyTestComponent } from "./vocabulary-test.component";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";

describe("VocabularyTestComponent", () => {
    let component: VocabularyTestComponent;
    let fixture: ComponentFixture<VocabularyTestComponent>;

    beforeEach(async(() => {
        /**
         * @uijar VocabularyTestComponent
         */
        TestBed.configureTestingModule({
            imports: [ReactiveFormsModule, FormsModule],
            declarations: [VocabularyTestComponent]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(VocabularyTestComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    /** @uijarexample add a value here */

    it("should create", () => {
        expect(component).toBeTruthy();
    });
});
