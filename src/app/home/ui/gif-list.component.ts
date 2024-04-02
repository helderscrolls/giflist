import { Component, Input } from '@angular/core';
import { Gif } from '../../shared/interfaces';

@Component({
  standalone: true,
  selector: 'gl-gif-list',
  template: `
    @for (gif of gifs; track gif.permalink) {
    <div>
      {{ gif.title }}
    </div>
    }
  `,
})
export class GifListComponent {
  @Input({ required: true }) gifs!: Gif[];
}
