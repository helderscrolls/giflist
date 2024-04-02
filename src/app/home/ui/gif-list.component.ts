import { Component, Input } from '@angular/core';
import { Gif } from '../../shared/interfaces';
import { GifPlayerComponent } from './gif-player.component';

@Component({
  standalone: true,
  selector: 'gl-gif-list',
  template: `
    @for (gif of gifs; track gif.permalink) {
    <div>
      <gl-gif-player
        [src]="gif.src"
        [thumbnail]="gif.thumbnail"
      ></gl-gif-player>
    </div>
    }
  `,
  imports: [GifPlayerComponent],
})
export class GifListComponent {
  @Input({ required: true }) gifs!: Gif[];
}
