import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Test1Component} from './test1/test1.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Test1Component],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'instagram';
}
