import { Component } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-add',
  standalone: false,
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  hero= {
    name :'',
    Power : 0,
    imageURL : ''
 }
 


 ajout(){
   
  this.sharing.CreateNewHero(this.hero)
  .subscribe(
    res=>{
       console.log(res);
       
  this.hero= {
    name :'',
    Power : 0,
    imageURL : ''
 }
       
    },
    err=>{
   console.log(err);
   
    }
  )
 }
 constructor( public sharing:SharingService){}
}
