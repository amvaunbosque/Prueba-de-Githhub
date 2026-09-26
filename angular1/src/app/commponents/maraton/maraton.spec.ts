import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Maraton } from './maraton';

describe('Maraton', () => {
  let component: Maraton;
  let fixture: ComponentFixture<Maraton>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Maraton],
    }).compileComponents();

    fixture = TestBed.createComponent(Maraton);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
