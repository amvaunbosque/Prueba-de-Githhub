import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Leonardo } from './leonardo';

describe('Leonardo', () => {
  let component: Leonardo;
  let fixture: ComponentFixture<Leonardo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Leonardo],
    }).compileComponents();

    fixture = TestBed.createComponent(Leonardo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
