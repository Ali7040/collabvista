import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  searchTerm = '';
  router!: Router;

  // constructor(activatedRoute:ActivatedRoute, private router:Router){
  //   activatedRoute.params.subscribe((params)=>{
  //     if(params['searchTerm']){
  //       this.searchTerm = params['searchTerm']
  //     }
  //   })
  // }
  search(term: string): void {
    if (term) {
      this.router.navigateByUrl('/search/' + term);
    }
  }
}
