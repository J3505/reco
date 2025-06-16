import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./landing/navbar/navbar";
import { Footer } from "./landing/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'reco';
}
