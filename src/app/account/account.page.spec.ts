import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { account } from './account.page';

describe('Tab3Page', () => {
  let component: account;
  let fixture: ComponentFixture<account>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [account],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(account);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
