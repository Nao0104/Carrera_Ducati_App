import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-juego-moto-screen',
  templateUrl: './juego-moto-screen.component.html',
  styleUrls: ['./juego-moto-screen.component.scss']
})
export class JuegoMotoScreenComponent implements OnInit{

  constructor(
    private router: Router
  ){}

  ngOnInit(): void {

  }

  public goCarreraTerminada(){
    this.router.navigate(['carrera-terminada']);
  }
}
