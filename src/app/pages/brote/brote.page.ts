import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import {IndicadoresService} from "../../services/indicadores.service";

@Component({
  selector: 'app-brote',
  templateUrl: './brote.page.html',
  styleUrls: ['./brote.page.scss'],
})
export class BrotePage implements OnInit {
  display: any; //TIMER
  //Sala Brote
  gradosName:any=['25','30','35','40','45','50','BQT','PET',"TOTAL SIN PET"]
  gradosApertura:any=['25','30','35','40','45','50','55','BQT','PET',"TOTAL SIN PET"]
  gradosCloud:any=['25','30','35','40','45','50','55','BQT','PET',"TOTAL SIN PET"]
  columna1:any=[]
  columna2:any=[]
  columna3:any=[]
  columna4:any=[]
  columna5:any=[]
  columna6:any=[]
  columna7:any=[]
  columna8:any=[]
  columna9:any=[]
  fechas:any=[]
  //Apertura
  Acolumna1:any=[]
  Acolumna2:any=[]
  Acolumna3:any=[]
  Acolumna4:any=[]
  Acolumna5:any=[]
  Acolumna6:any=[]
  Acolumna7:any=[]
  Acolumna8:any=[]
  Acolumna9:any=[]
  //CLOUD
  Ccolumna1:any=[]
  Ccolumna2:any=[]
  Ccolumna3:any=[]
  Ccolumna4:any=[]
  Ccolumna5:any=[]
  Ccolumna6:any=[]
  Ccolumna7:any=[]
  Ccolumna8:any=[]
  Ccolumna9:any=[]
  //GV
  GVcolumna1:any=[]
  GVcolumna2:any=[]
  GVcolumna3:any=[]
  GVcolumna4:any=[]
  GVcolumna5:any=[]
  GVcolumna6:any=[]
  GVcolumna7:any=[]
  GVcolumna8:any=[]
  GVcolumna9:any=[]
  constructor(private router:Router,private indicadoresService: IndicadoresService) {

  }

  ngOnInit() {

    this.indicadoresService.getSalaBrote().subscribe(result=>{
      const data=Object.values(result)
      console.log(data)
      console.log(data[1][1])
      this.fechas=data[0]
      this.columna1=data[1][0]
      this.columna2=data[1][1]
      this.columna3=data[1][2]
      this.columna4=data[1][3]
      this.columna5=data[1][4]
      this.columna6=data[1][5]
      this.columna7=data[1][6]
      this.columna8=data[1][7]
      this.columna9=data[1][8]
      const sumc1=this.sum(this.columna1)
      // const sumc1=this.columna1.reduce((a:any, b:any) => a + b, 0)
      const sumc2=this.sum(this.columna2)
      const sumc3=this.sum(this.columna3)
      const sumc4=this.sum(this.columna4)
      const sumc5=this.sum(this.columna5)
      const sumc6=this.sum(this.columna6)
      const sumc7=this.sum(this.columna7)
      const sumc8=this.sum(this.columna8)
      const sumc9=this.sum(this.columna9)
      this.columna1.push(sumc1)
      this.columna2.push(sumc2)
      this.columna3.push(sumc3)
      this.columna4.push(sumc4)
      this.columna5.push(sumc5)
      this.columna6.push(sumc6)
      this.columna7.push(sumc7)
      this.columna8.push(sumc8)
      this.columna9.push(sumc9)

    })


    //Apertura sala en brote
    this.indicadoresService.getSalaBroteApertura().subscribe(result=>{
      const data=Object.values(result)
      console.log(data)
      console.log(data[1][1])
      // this.fechas=data[0]
      this.Acolumna1=data[1][0]
      this.Acolumna2=data[1][1]
      this.Acolumna3=data[1][2]
      this.Acolumna4=data[1][3]
      this.Acolumna5=data[1][4]
      this.Acolumna6=data[1][5]
      this.Acolumna7=data[1][6]
      this.Acolumna8=data[1][7]
      this.Acolumna9=data[1][8]
      const sumc1=this.sum(this.Acolumna1)
      const sumc2=this.sum(this.Acolumna2)
      const sumc3=this.sum(this.Acolumna3)
      const sumc4=this.sum(this.Acolumna4)
      const sumc5=this.sum(this.Acolumna5)
      const sumc6=this.sum(this.Acolumna6)
      const sumc7=this.sum(this.Acolumna7)
      const sumc8=this.sum(this.Acolumna8)
      const sumc9=this.sum(this.Acolumna9)
      this.Acolumna1.push(sumc1)
      this.Acolumna2.push(sumc2)
      this.Acolumna3.push(sumc3)
      this.Acolumna4.push(sumc4)
      this.Acolumna5.push(sumc5)
      this.Acolumna6.push(sumc6)
      this.Acolumna7.push(sumc7)
      this.Acolumna8.push(sumc8)
      this.Acolumna9.push(sumc9)

    })

    //CLOUD sala en brote
    this.indicadoresService.getSalaBroteCloud().subscribe(result=>{
      const data=Object.values(result)
      console.log("---CLOUD-----")
      console.log("FUNCAAAAAAA---------------")
      console.log(data)
      console.log(data[1][1])
      // this.fechas=data[0]
      this.Ccolumna1=data[1][0]
      this.Ccolumna2=data[1][1]
      this.Ccolumna3=data[1][2]
      this.Ccolumna4=data[1][3]
      this.Ccolumna5=data[1][4]
      this.Ccolumna6=data[1][5]
      this.Ccolumna7=data[1][6]
      this.Ccolumna8=data[1][7]
      this.Ccolumna9=data[1][8]
      const sumc1=this.sum(this.Ccolumna1)
      const sumc2=this.sum(this.Ccolumna2)
      const sumc3=this.sum(this.Ccolumna3)
      const sumc4=this.sum(this.Ccolumna4)
      const sumc5=this.sum(this.Ccolumna5)
      const sumc6=this.sum(this.Ccolumna6)
      const sumc7=this.sum(this.Ccolumna7)
      const sumc8=this.sum(this.Ccolumna8)
      const sumc9=this.sum(this.Ccolumna9)
      this.Ccolumna1.push(sumc1)
      this.Ccolumna2.push(sumc2)
      this.Ccolumna3.push(sumc3)
      this.Ccolumna4.push(sumc4)
      this.Ccolumna5.push(sumc5)
      this.Ccolumna6.push(sumc6)
      this.Ccolumna7.push(sumc7)
      this.Ccolumna8.push(sumc8)
      this.Ccolumna9.push(sumc9)
    })

    //GV sala en Brote
    this.indicadoresService.getSalaBroteGV().subscribe(result=>{
      const data=Object.values(result)
      console.log(data)
      console.log(data[1][1])
      // this.fechas=data[0]
      this.GVcolumna1=data[1][0]
      this.GVcolumna2=data[1][1]
      this.GVcolumna3=data[1][2]
      this.GVcolumna4=data[1][3]
      this.GVcolumna5=data[1][4]
      this.GVcolumna6=data[1][5]
      this.GVcolumna7=data[1][6]
      this.GVcolumna8=data[1][7]
      this.GVcolumna9=data[1][8]
      const sumc1=this.sum(this.GVcolumna1)
      const sumc2=this.sum(this.GVcolumna2)
      const sumc3=this.sum(this.GVcolumna3)
      const sumc4=this.sum(this.GVcolumna4)
      const sumc5=this.sum(this.GVcolumna5)
      const sumc6=this.sum(this.GVcolumna6)
      const sumc7=this.sum(this.GVcolumna7)
      const sumc8=this.sum(this.GVcolumna8)
      const sumc9=this.sum(this.GVcolumna9)
      this.GVcolumna1.push(sumc1)
      this.GVcolumna2.push(sumc2)
      this.GVcolumna3.push(sumc3)
      this.GVcolumna4.push(sumc4)
      this.GVcolumna5.push(sumc5)
      this.GVcolumna6.push(sumc6)
      this.GVcolumna7.push(sumc7)
      this.GVcolumna8.push(sumc8)
      this.GVcolumna9.push(sumc9)
    })
    // this.timer(5)

  }

  reloadPage() {
    window.location.reload()
  }

  indicadores() {
    this.router.navigate(['home'])
  }

  indicadoresSemanales() {
    this.router.navigate(['i-semanales'])
  }

  timer(minute:any) {
    // let minute = 1;
    let seconds: number = minute * 60;
    let textSec: any = "0";
    let statSec: number = 60;

    const prefix = minute < 10 ? "0" : "";

    const timer = setInterval(() => {
      seconds--;
      if (statSec != 0) statSec--;
      else statSec = 59;

      if (statSec < 10) {
        textSec = "0" + statSec;
      } else textSec = statSec;

      this.display = `${prefix}${Math.floor(seconds / 60)}:${textSec}`;

      if (seconds == 0) {
        clearInterval(timer);
        const ruta=this.router.url
        if(ruta=="/brote"){
          console.log("Se debe actualizar")
          window.location.reload()
        }
      }
    }, 1000);
  }

  update() {
    window.location.reload()
  }
  sum(array:any=[]){
    let sum = 0;
    for (let i = 0; i < array.length-1; i++) {
      console.log(array[i])
      sum += array[i];
    }
    console.log(sum)
    return sum
  }
}
