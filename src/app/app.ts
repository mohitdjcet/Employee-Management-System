import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Sidebar } from './core/layout/sidebar/sidebar';
import { Navbar } from './core/layout/navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Sidebar,Navbar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
}
