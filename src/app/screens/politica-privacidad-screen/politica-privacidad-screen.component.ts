import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-politica-privacidad-screen',
  templateUrl: './politica-privacidad-screen.component.html',
  styleUrls: ['./politica-privacidad-screen.component.scss'],
  standalone: false,
})
export class PoliticaPrivacidadScreenComponent  implements OnInit{
  constructor(){}

  ngOnInit(): void {

  }

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }

}
