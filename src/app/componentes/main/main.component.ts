import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  public userImage: string = "../../../assets/userUnknow.jpg"
  public cvSvg: string = "../../../assets/cv.svg"
}
