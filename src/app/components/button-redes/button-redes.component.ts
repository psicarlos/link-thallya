import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
    selector: 'app-button-redes',
    templateUrl: './button-redes.component.html',
    styleUrls: ['./button-redes.component.css'],
    standalone: false
})
export class ButtonRedesComponent {
  @Input() linkUrl?: string = '';
  @Input() title: string = '';
  @Input() image: string = '';
  @Input() copy: string = 'callServiceToCopy()';
}
