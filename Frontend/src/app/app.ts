import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MATERIAL_IMPORTS } from './material-imports';

@Component({
  selector: 'app-root',
  standalone: true,                 
  imports: [RouterOutlet, 
            RouterLink, 
            RouterLinkActive, 
            ...MATERIAL_IMPORTS],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']          
})
export class App {
  protected readonly title = signal('Frontend');
}
