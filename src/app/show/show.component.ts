import { Component } from '@angular/core';
import { SharingService } from '../sharing.service';

@Component({
  selector: 'app-show',
  standalone: false,
  templateUrl: './show.component.html',
  styleUrl: './show.component.css'
})
export class ShowComponent {
constructor( public sharing: SharingService){}
heros: any= []
 ngOnInit():void{

   this.sharing.showAllHeros().subscribe(
    res=>{
      console.log(res);
      this.heros=res
      
    },
    err=>{
      console.log(err);
      
    }
   )  

 }
}
