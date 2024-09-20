import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Subject} from 'rxjs';
import {debounceTime, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-photo-frame',
    templateUrl: './photo-frame.component.html',
    styleUrls: ['./photo-frame.component.scss']
})
export class PhotoFrameComponent implements OnInit, OnDestroy {

    @Input() source = '';
    @Input() likes = 0;
    @Input() descricao = '';

    @Output() liked: EventEmitter<void> = new EventEmitter();

    debouncedSubject: Subject<void> = new Subject();
    unSubscribe: Subject<void> = new Subject();

    ngOnInit(): void {
        this.debouncedSubject
            .asObservable()
            .pipe(debounceTime(500))
            .pipe(takeUntil(this.unSubscribe))
            .subscribe(debounced => this.liked.emit(debounced));
    }

    ngOnDestroy(): void {
        this.unSubscribe.next();
        this.unSubscribe.complete();
    }

    like(): void {
        this.debouncedSubject.next();
    }

}
