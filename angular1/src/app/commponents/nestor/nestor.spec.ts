import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nestor } from './nestor';

describe('Nestor', () => {
  let component: Nestor;
  let fixture: ComponentFixture<Nestor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Nestor],
    }).compileComponents();

    fixture = TestBed.createComponent(Nestor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
