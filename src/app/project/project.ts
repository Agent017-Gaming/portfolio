import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class ProjectComponent {
  projects = [
    { id: 1, name: 'Rock-paper-Scissor game', description: 'Just a game between you and your cpu', status: 'Completed'},
    { id: 2, name: 'Portfolio', description: 'A portfolio completely build on Angular', status: 'Working'},
    { id: 3, name: 'Calculator', description: 'A calculator which a user can get area\'s from diffrent types of shapes', status: 'Completed'}
  ];
}