import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.heroService.getHeros().subscribe(
      res => {
        this.heroes = res.json();
        console.log("hero list", this.heroes);
        this.heroes = this.heroes.sort((n1, n2) => {
          if (n2.likes > n1.likes) {
            return 1;
          }

          if (n2.likes < n1.likes) {
            return -1;
          }

          return 0;
        }).filter(heros => heros.likes >= 3).slice(0, 4);
      },
      err => {
        console.log("Error occured");

      }
    ); 

  }

}
