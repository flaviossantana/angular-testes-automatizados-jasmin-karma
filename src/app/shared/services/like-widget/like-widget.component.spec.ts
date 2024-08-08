import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LikeWidgetComponent} from './like-widget.component';
import {UniqueIdService} from "../unique-id/unique-id.service";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";

describe('LikeWidgetComponent', () => {

  let component: LikeWidgetComponent;
  let fixture: ComponentFixture<LikeWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LikeWidgetComponent ],
      providers: [UniqueIdService],
      imports: [FontAwesomeModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LikeWidgetComponent);

  });

  it('should create', () => {
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
