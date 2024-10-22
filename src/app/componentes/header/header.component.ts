import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  public srcGithubIcon: string = "../../../assets/github.svg"
  public srcLinkEdIcon: string = "../../../assets/linkedin.svg"
  public srcMailEdIcon: string = "../../../assets/mail.svg"
}
