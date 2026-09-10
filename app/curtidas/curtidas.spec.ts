import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Curtidas } from './curtidas';

describe('Curtidas', () => {
  let component: Curtidas;
  let fixture: ComponentFixture<Curtidas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Curtidas],
    }).compileComponents();

    fixture = TestBed.createComponent(Curtidas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
