import { Router } from '@angular/router';
import { Response } from '@angular/http';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
heroes: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  constructor(private heroService: HeroService,private router: Router) { }

  ngOnInit() {

   

      
  }

  search(term:string){
   //  this.heroes=this.heroService.search(term);
       this.heroService.search(term).subscribe(
        res => {
          console.log('Json is',res.json());
         this.heroes= res.json();
        
        },
        err => {
          console.log("Error occured");
        
        }
      );;
  }

  gotoDetail(hero:Hero){
        this.router.navigate(['/detail', hero.id]);
  }

}
