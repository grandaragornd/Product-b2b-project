import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AspectscoresComponent } from './aspectscores.component';

describe('AspectscoresComponent', () => {
  let component: AspectscoresComponent;
  let fixture: ComponentFixture<AspectscoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AspectscoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AspectscoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
