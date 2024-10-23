import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  public srcGithubIcon: string = "../../../assets/github.svg"
  public srcLinkEdIcon: string = "../../../assets/linkedin.svg"
  public srcMailEdIcon: string = "../../../assets/mail.svg"
}
