import { Router } from '@angular/router';
import { HeroService } from './../hero.service';
import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;
  heroForm: FormGroup;
  constructor(private _fb: FormBuilder,
    private heroService: HeroService,
    private router: Router) {

    this.heroForm = this._fb.group({
      heroname: new FormControl('', [Validators.required]),
      herodesc: new FormControl('', [Validators.required]),
      heroId: new FormControl('', [Validators.required])

    });

  }

  getHeroes(): void {
    this.heroService
      .getHeros()
      .subscribe(
      result => {
       this.heroes = result.json();
        console.log("hero list", this.heroes);
        this.heroes = this.heroes.sort((n1, n2) => {
          if (n2.likes > n1.likes) {
            return 1;
          }

          if (n2.likes < n1.likes) {
            return -1;
          }

          return 0;
        })
      },
      error => {
        console.log('error happends');
      }
      );
  }

  add(name: string, desc: string, id: number): void {
    let hero: Hero = {
      id: id,
      heroId: id,
      name: name,
      description: desc,
      likes: 0
    };

    this.heroService.update(hero).subscribe(
      res => {
        res.status;
        this.router.navigate(['']);
      },
      err => {
        console.log("Error occured");

      }
    );;
    this.getHeroes();
  }

  delete(hero: Hero): void {
    this.heroService.delete(hero).subscribe(
      res => {
        res.status;
        this.router.navigate(['']);
      },
      err => {
        console.log("Error occured");

      }
    );;

  }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}

