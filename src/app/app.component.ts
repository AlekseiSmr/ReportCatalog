import { Component, HostListener } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateX(0%)' })),
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateX(-100%)' })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'ReportCatalog';
  showPanel = false;
  showMiniPanel = false;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.showMiniPanel = this.showPanel = false;
  }

  onPanelToggleClick() {
    this.showPanel = !this.showPanel;
  }

  onTogglerClick() {
    this.showMiniPanel = !this.showMiniPanel;
  }
}
