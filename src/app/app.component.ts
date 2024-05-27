import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Lista1Component } from './lista1/lista1.component';
import { Lista2Component } from './lista2/lista2.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    RouterOutlet, Lista1Component, Lista2Component,
  ],
})
export class AppComponent {
  title = 'DragDrop-2components';
}
