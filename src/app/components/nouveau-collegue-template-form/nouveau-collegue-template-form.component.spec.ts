import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauCollegueTemplateFormComponent } from './nouveau-collegue-template-form.component';

describe('NouveauCollegueTemplateFormComponent', () => {
  let component: NouveauCollegueTemplateFormComponent;
  let fixture: ComponentFixture<NouveauCollegueTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NouveauCollegueTemplateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauCollegueTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
