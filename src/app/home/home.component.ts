import { Component, inject } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list.component';
import { SearchBarComponent } from './ui/search-bar.component';

@Component({
  standalone: true,
  selector: 'gl-home',
  template: `
    <gl-search-bar
      [subredditFormControl]="redditService.subredditFormControl"
    ></gl-search-bar>

    @if (redditService.loading()) {
    <mat-progress-spinner mode="indeterminate" diameter="50" />
    } @else {
    <gl-gif-list
      [gifs]="redditService.gifs()"
      infiniteScroll
      (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
      class="grid-container"
    ></gl-gif-list>
    }
  `,
  imports: [
    SearchBarComponent,
    GifListComponent,
    InfiniteScrollModule,
    MatProgressSpinnerModule,
  ],
  styles: [
    `
      mat-progress-spinner {
        margin: 2rem auto;
      }
    `,
  ],
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
