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

  it('Validate email error path', () => {
    let responseError = 'Tu correo no contiene un @';
    component.signUpData.user = 'unitTesting';

    expect(component.checkEmail());
    expect(component.validEmail).toBeFalsy();
    expect(component.message).toEqual(responseError);
  });

  it('Validate email happy path', () => {
    component.signUpData.user = 'unitTesting@gmail.com';

    expect(component.checkEmail());
    expect(component.validEmail).toBeTruthy();
  });

  it('Validate Password error path', () => {
    component.signUpData.password = 'Test1';
    let messageResponse = 'La contraseña es menor de 6 digitos'

    expect(component.validatePassword());
    expect(component.validPassword).toBeFalsy();
    expect(component.message).toEqual(messageResponse);
  });


  it('Validate Password happy path', () => {
    component.signUpData.password = 'Test11';

    expect(component.validatePassword());
    expect(component.validPassword).toBeTruthy();
  });

});
