import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoRegistroComponent } from './listado-registro.component';

describe('ListadoRegistroComponent', () => {
  let component: ListadoRegistroComponent;
  let fixture: ComponentFixture<ListadoRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
