import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LikeWidgetComponent} from './like-widget.component';
import {LikeWidgetModule} from "./like-widget.module";

describe(LikeWidgetComponent.name, () => {

    let component: LikeWidgetComponent;
    let fixture: ComponentFixture<LikeWidgetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);

    });

    it('should create', () => {
        component = fixture.componentInstance;
        expect(component).toBeTruthy();
    });

    it('Should auto generate ID when id input property is missing', () => {
      component = fixture.componentInstance;
      expect(component.id).toBeTruthy()
    });
});
