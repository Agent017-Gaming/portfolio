import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  imports: [ NgOptimizedImage ]
})
export class ProfileComponent{
  name: string = "Abid Hossain";
role: string = "IT Student";
location: string = "Perugia, Italy";
linkedinUrl: string = "https://www.linkedin.com/in/agent017-gaming/";
githubUrl: string = "https://github.com/Agent017-Gaming";
profileImage: string = 'assets/my-photo.jpg';

}