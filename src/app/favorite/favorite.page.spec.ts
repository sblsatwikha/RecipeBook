import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { favoritePage } from './favorite.page';

describe('Tab1Page', () => {
  let component: favoritePage;
  let fixture: ComponentFixture<favoritePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [favoritePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(favoritePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
