import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {

  }

  public perfil = {
    nombre: 'Ixchel Naomi',
    apellido: 'Cortés Montaño',
    correo: 'ixchelnaomic@gmail.com',
    telefono: '2711093577',
    edad: 23
  };

  public isMobile(){
    if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)){
      return true;
    }else{
      return false;
    }
  }
}
