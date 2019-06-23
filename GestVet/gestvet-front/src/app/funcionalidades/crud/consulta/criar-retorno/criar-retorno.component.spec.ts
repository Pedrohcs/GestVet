import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarRetornoComponent } from './criar-retorno.component';

describe('CriarRetornoComponent', () => {
  let component: CriarRetornoComponent;
  let fixture: ComponentFixture<CriarRetornoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarRetornoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarRetornoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
