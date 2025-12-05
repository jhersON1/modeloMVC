import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VProgramarOferta } from "./view/VProgramarOferta";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, VProgramarOferta],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('modeloMVC');
}
