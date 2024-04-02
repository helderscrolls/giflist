import { Component, inject } from '@angular/core';
import { RedditService } from '../shared/data-access/reddit.service';
import { GifListComponent } from './ui/gif-list.component';

@Component({
  standalone: true,
  selector: 'gl-home',
  template: `<gl-gif-list [gifs]="redditService.gifs()"></gl-gif-list>`,
  imports: [GifListComponent],
})
export default class HomeComponent {
  redditService = inject(RedditService);
}
