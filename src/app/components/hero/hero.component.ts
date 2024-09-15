import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SearchComponent } from '../../shared/search/search.component';
import { AboutComponent } from '../about/about.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, SearchComponent, AboutComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
