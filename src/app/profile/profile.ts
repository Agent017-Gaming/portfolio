import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.html',
  styleUrl: './profile.css',
  imports: [ NgOptimizedImage ]
})
export class ProfileComponent{
  name: string = "Arjun Singh";
role: string = "Software Developer";
location: string = "Bengaluru, India";
linkedinUrl: string = "https://www.linkedin_profile_url.com";
githubUrl: string = "https://github_profile_url.com";
imageUrl="https://static-assets.codecademy.com/Courses/learn-angular/01-angular-introduction/images/profile-picture.jpg"
}