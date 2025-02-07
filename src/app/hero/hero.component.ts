import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  hero= {
     name :'',
     Power : 0,
     imageURL : ''
  }
  
  heros:any[]=[]

  ajout(){
    this.heros.push(this.hero)
    this.hero= {
      name :'',
      Power : 0,
      imageURL : ''
   }
  }

}
