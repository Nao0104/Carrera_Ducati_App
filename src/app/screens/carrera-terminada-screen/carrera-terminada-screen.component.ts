import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrera-terminada-screen',
  templateUrl: './carrera-terminada-screen.component.html',
  styleUrls: ['./carrera-terminada-screen.component.scss']
})
export class CarreraTerminadaScreenComponent implements OnInit{
  public isLoading:boolean = false;

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  public goInicio(){
    this.router.navigate(['home']);
  }

   public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return "interior-mobile";
    }else{
      return "interior-normal";
    }
  }

}
