import { Component, OnInit } from '@angular/core';
import { Perfil } from 'src/app/models/perfil.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  perfil = {} as Perfil;

  constructor() { }

  ngOnInit() {
  }

}
