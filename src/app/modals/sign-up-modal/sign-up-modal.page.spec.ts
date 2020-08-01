import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SignUpModalPage } from './sign-up-modal.page';

describe('SignUpModalPage', () => {
  let component: SignUpModalPage;
  let fixture: ComponentFixture<SignUpModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SignUpModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
