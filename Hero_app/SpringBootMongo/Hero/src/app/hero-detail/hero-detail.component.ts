import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Hero } from './../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

 id: number;
 hero:Hero;
 isheroAvail=false;
  private sub: any;
  constructor(private route:Router,private routeParam: ActivatedRoute,private heroService:HeroService) { }

  ngOnInit() {
     this.sub = this.routeParam.params.subscribe(params => {
       this.id = +params['id']; // (+) converts string 'id' to a number

     this.heroService.getHero(this.id).subscribe(
        res => {
          this.hero=res.json();
          console.log("hero list",this.hero);
          this.isheroAvail=true;
        },
        err => {
          console.log("Error occured");
        
        }
      );
  });
  }

save(){
  console.log("hero in save ",this.hero)
  this.heroService.update(this.hero).subscribe(
        res => {
          res.status;
         this.route.navigate(['']);
        },
        err => {
          console.log("Error occured");
        
        }
      );;
}

like(hero:Hero){
  hero.likes=hero.likes+1;
   this.heroService.update(hero).subscribe(
        res => {
          res.status;
         this.route.navigate(['']);
        },
        err => {
          console.log("Error occured");
        
        }
      );;
}

dislike(hero:Hero){
  hero.likes=hero.likes-1;
   this.heroService.update(hero).subscribe(
        res => {
          res.status;
         this.route.navigate(['']);
        },
        err => {
          console.log("Error occured");
        
        }
      );;
}
    ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
