import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clases',
  templateUrl: './clases.component.html',
  styles: [
     `
     button {
       margin-right: 8px;
     }
     `
  ]
})
export class ClasesComponent implements OnInit {

  alerta: string = "alert-danger";
  loading: boolean = false;
  classes: string[];
  
  danger: boolean = false;

  propiedades: Object = {
      danger: false
  }

  constructor() { }

  ngOnInit() {
   
    
  }

  ejecutar() {

    this.loading = !this.loading;

    
    setTimeout ( ()=> this.loading = false, 3000 );

  }

}
