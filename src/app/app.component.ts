import { Component } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: false
})
export class AppComponent {
  title = 'My links';
  constructor(private _clipboardService: ClipboardService) {}

  callServiceToCopy() {
    this._clipboardService.copy('14856583735');
    window.alert('Chave copiada!');
  }
}
