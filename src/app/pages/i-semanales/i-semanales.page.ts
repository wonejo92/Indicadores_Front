import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {Indicador} from "../../model/Indicador";
import {IndicadoresService} from "../../services/indicadores.service";
@Component({
  selector: 'app-i-semanales',
  templateUrl: './i-semanales.page.html',
  styleUrls: ['./i-semanales.page.scss'],
})
export class ISemanalesPage implements OnInit {
  indicador : Indicador = new Indicador()
  fecha:any
  //Sala Brote
  gradosName:any=['25','30','35','40','45','50','BQT','PET',"TOTAL SIN PET"]
  gradosApertura:any=['25','30','35','40','45','50','55','BQT','PET',"TOTAL SIN PET"]
  gradosCloud:any=['25','30','35','40','45','50','55','BQT','PET',"TOTAL SIN PET"]
  //PRE
  columna1:any=[]
  //Apertura
  Acolumna1:any=[]
  //CLOUD
  Ccolumna1:any=[]
  //GV
  GVcolumna1:any=[]
  //COD_VARIEDAD
  cod_Variedad=""

  constructor(private route:Router,private indicadoresService: IndicadoresService) { }

  ngOnInit() {
  }

  reloadPage() {
    window.location.reload()
  }

  salaBrote() {
    this.route.navigate(['brote'])
  }

  indicadores() {
    this.route.navigate(['home'])
  }

  buscar() {
    if (this.indicador.variedad.toUpperCase() =="XLENCE") {
      this.cod_Variedad="GYPXLE"
    } else if (this.indicador.variedad.toUpperCase() =="CLOUD") {
      this.cod_Variedad="GYPCLO"
    }

    const dateTime = new Date(this.indicador.fecha);
    const dateOnly = dateTime.toISOString().split('T')[0];
    const datetodetele = dateTime.toISOString().split('T')[0].replace(/-/g, '');
    this.fecha=dateOnly

    // Consumo del service
    // PRECLASIFICACION
    this.indicadoresService.getBroteByDay(this.fecha,this.indicador.variedad,this.cod_Variedad).subscribe(result=>{
      this.columna1 = [];
      const data=Object.values(result)
      // Iterar para crear una lista
      for (let i = 0; i <data[0].length ; i++) {
        this.columna1.push(data[0][i])
      }
      const sumc1=this.sum(this.columna1)
      this.columna1.push(sumc1)
    })

    //APERTURA
    this.indicadoresService.getAperturaByDay(this.fecha,this.indicador.variedad,this.cod_Variedad).subscribe(result=>{
      this.Acolumna1=[];
      const data=Object.values(result)
      for (let i = 0; i <data[0].length ; i++) {
        this.Acolumna1.push(data[0][i])
      }
      const sumc1=this.sum(this.Acolumna1)
      this.Acolumna1.push(sumc1)
    })

    //CLOUD
    this.indicadoresService.getCloudByDay(this.fecha).subscribe(result=>{
      this.Ccolumna1=[];
      const data=Object.values(result)
      for (let i = 0; i <data[0].length ; i++) {
        this.Ccolumna1.push(data[0][i])
      }
      const sumc1=this.sum(this.Ccolumna1)
      this.Ccolumna1.push(sumc1)
    })

    //GV
    this.indicadoresService.getGvByDay(this.fecha,this.indicador.variedad,this.cod_Variedad).subscribe(result=>{
      this.GVcolumna1=[];
      const data=Object.values(result)
      console.log(data[0])
      for (let i = 0; i <data[0].length ; i++) {
        this.GVcolumna1.push(data[0][i])
      }
      const sumc1=this.sum(this.GVcolumna1)
      this.GVcolumna1.push(sumc1)
    })

  }
  limpiarListas(){
    this.columna1=""
    this.Acolumna1=""
    this.Ccolumna1=""
    this.GVcolumna1=""
  }
  sum(array:any=[]){
    let sum = 0;
    for (let i = 0; i < array.length-1; i++) {
      sum += array[i];
    }
    return sum
  }
}
