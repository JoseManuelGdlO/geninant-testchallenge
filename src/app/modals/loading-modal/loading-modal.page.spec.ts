import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoadingModalPage } from './loading-modal.page';

describe('LoadingModalPage', () => {
  let component: LoadingModalPage;
  let fixture: ComponentFixture<LoadingModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadingModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
