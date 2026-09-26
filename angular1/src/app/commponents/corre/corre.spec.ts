import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Corre } from './corre';

describe('Corre', () => {
  let component: Corre;
  let fixture: ComponentFixture<Corre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Corre],
    }).compileComponents();

    fixture = TestBed.createComponent(Corre);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
