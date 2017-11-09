import { Component } from '@angular/core';
 
@Component({
    selector: 'app-infinate-scroll',
    styles: [
        `.search-results {
            height: 20rem;
            overflow: scroll;
        }`
    ],
    template: `
        <div class="search-results"
            infinite-scroll
            [infiniteScrollDistance]="1"
            [infiniteScrollThrottle]="300"
            (scrolled)="onScroll()"
            [scrollWindow]="false">
        </div>
    `
})
export class InfinateScrollComponent {
    onScroll () {
        console.log('scrolled!!')
    }
}