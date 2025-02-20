import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "./modules/sharedComponent/side-bar/side-bar.component";
import { TabBordComponent } from "./modules/DASH/component/tab-bord/tab-bord.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SideBarComponent, TabBordComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Gestionnaire_team';
}
