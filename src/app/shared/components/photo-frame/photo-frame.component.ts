import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-photo-frame',
    templateUrl: './photo-frame.component.html',
    styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent {

    @Input() descricao: '';
    @Input() source: '';
    @Input() likes: 0;

    @Output() liked: EventEmitter<void> = new EventEmitter();


    like(): void {
        this.liked.emit();
    }

}
