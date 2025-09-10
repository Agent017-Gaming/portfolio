import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  imports: [],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class ProjectComponent {
  projects = [
    { id: 1, name: 'E-commerce Site', description: 'An online store with product listings, shopping cart, and checkout functionality.', status: 'Completed'},
    { id: 2, name: 'Blog Platform', description: 'A CMS-driven blog platform supporting multiple users and posts.', status: 'Working'},
    { id: 3, name: 'Weather App', description: 'A web app displaying real-time weather data using external API.', status: 'Working'}
  ];
}