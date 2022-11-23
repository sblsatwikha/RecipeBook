import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { myPantry } from './my-pantry.page';

describe('myPantry', () => {
  let component: myPantry;
  let fixture: ComponentFixture<myPantry>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [myPantry],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(myPantry);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
