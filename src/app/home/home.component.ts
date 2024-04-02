import { Component, inject } from '@angular/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list.component';

@Component({
  standalone: true,
  selector: 'gl-home',
  template: `<gl-gif-list
    [gifs]="redditService.gifs()"
    infiniteScroll
    (scrolled)="redditService.pagination$.next(redditService.lastKnownGif())"
    class="grid-container"
  ></gl-gif-list>`,
  imports: [GifListComponent, InfiniteScrollModule],
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
