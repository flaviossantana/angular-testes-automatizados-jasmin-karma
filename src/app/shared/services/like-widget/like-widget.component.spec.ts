import {ComponentFixture, TestBed} from '@angular/core/testing';

import {LikeWidgetComponent} from './like-widget.component';
import {LikeWidgetModule} from './like-widget.module';

describe(LikeWidgetComponent.name, () => {

    let component: LikeWidgetComponent;
    let fixture: ComponentFixture<LikeWidgetComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LikeWidgetModule]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LikeWidgetComponent);
        component = fixture.componentInstance;

    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('Should auto-generate ID during ngOnInput when (@Input id) is not assigned', () => {
      fixture.detectChanges();
      expect(component.id).toBeTruthy();
    });

    it('Should NOT auto-generate ID during ngOnInit when (@Input id) is assigned', () => {
        const someID = 'someID';
        component.id = someID;
        fixture.detectChanges();
        expect(component.id).toBe(someID);
    });

    it(`#${LikeWidgetComponent.prototype.like.name} should trigger (@Output liked) when called`,  () => {
        spyOn(component.liked, 'emit');
        fixture.detectChanges();
        component.like();
        expect(component.liked.emit).toHaveBeenCalled();
    });

});
