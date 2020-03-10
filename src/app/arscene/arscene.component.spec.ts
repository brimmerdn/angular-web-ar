import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARSceneComponent } from './arscene.component';

describe('ARSceneComponent', () => {
  let component: ARSceneComponent;
  let fixture: ComponentFixture<ARSceneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARSceneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARSceneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
