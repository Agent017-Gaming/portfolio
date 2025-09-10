import { Component, signal } from '@angular/core';
import { ProjectComponent } from './project/project';
import { ProfileComponent } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [ ProfileComponent, ProjectComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Developer Portfolio';
}
