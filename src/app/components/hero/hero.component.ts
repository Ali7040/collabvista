import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { SearchComponent } from '../../shared/search/search.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [HeaderComponent, SearchComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
})
export class HeroComponent {}
