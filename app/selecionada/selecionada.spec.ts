import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Selecionada } from './selecionada';

describe('Selecionada', () => {
  let component: Selecionada;
  let fixture: ComponentFixture<Selecionada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selecionada],
    }).compileComponents();

    fixture = TestBed.createComponent(Selecionada);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
