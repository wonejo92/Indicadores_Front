import {Component, OnInit} from '@angular/core';
import {IndicadoresService} from "../services/indicadores.service"
import {Indicador} from "../model/Indicador";
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  // Instancia del Modelo Indicadores

  indicadores : Indicador = new Indicador()
  //Lista Fechas Camino Apertura
  listfechasApertura:any=[]
  // Variables B1 VS  B1AB
  ppesoB1:any
  ppesoB1AB:any
  b1VSB1AB:any
  //Variables B1AB VS B2
  hb1ab:any
  hb2:any
  hb1ABVShb2:any
//Listas
  listB1:any=[]
  listFechasB1:any=[]
  listB1AB:any=[]
  resultB1VSB1AB:any=[]
  //Hidratacion B1AB VS B2
  listHB1AB:any=[]
  listHB2:any=[]
  resultHB1ABVSB2:any=[]
  //Desperdicion B2 VS B3
  //BLANCO
  listDBlancoB2:any=[]
  listDBlancoB3:any=[]
  resultDBlanco:any=[]
  //TINTURADO
  listDTintB2:any=[]
  listDTintB3:any=[]
  resultDTint:any=[]
  //ARCOIRRIS
  listDArcoB2:any=[]
  listDArcoB3:any=[]
  resultDArco:any=[]
  //Camino Apertura
  listAB1:any=[]
  listAB2:any=[]
  resultAB1:any=[]
  tallosAB1:any=[]
  tallosAB2:any=[]
  resultATallos:any=[]
  // Camino Apertura B2 VS B2A
  listCAB2:any=[]
  listCAB2A:any=[]
  resultCA2:any=[]

  //Sala Brote
  gradosName:any=['25','30','35','40','45','50','BQT','PET',"TOTAL"]
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
  constructor(private indicadoresService: IndicadoresService,private router:Router) {}

  ngOnInit(): void {
    console.log("FUNCA")
    this.indicadoresService.getData().subscribe(result=>{
      console.log(result)
      const data=Object.values(result)
      // Balanza 1 VS Balanzaz 1AB
      this.ppesoB1=data[0]
      this.ppesoB1AB=data[1]
      this.b1VSB1AB=((1-(this.ppesoB1AB)/this.ppesoB1)*100).toFixed(2)

      // Balanza 1AB VS Balanza 2
      this.hb1ab=data[2]
      this.hb2=data[3]
      this.hb1ABVShb2=Math.round(((this.hb2/this.hb1ab)-1)*100).toFixed(1)
      console.log(this.hb1ab,this.hb2)
      console.log(this.hb1ABVShb2)
    })



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
      const sumc1=this.columna1.reduce((a:any, b:any) => a + b, 0)
      const sumc2=this.columna2.reduce((a:any, b:any) => a + b, 0)
      const sumc3=this.columna3.reduce((a:any, b:any) => a + b, 0)
      const sumc4=this.columna4.reduce((a:any, b:any) => a + b, 0)
      const sumc5=this.columna5.reduce((a:any, b:any) => a + b, 0)
      const sumc6=this.columna6.reduce((a:any, b:any) => a + b, 0)
      const sumc7=this.columna7.reduce((a:any, b:any) => a + b, 0)
      const sumc8=this.columna8.reduce((a:any, b:any) => a + b, 0)
      const sumc9=this.columna9.reduce((a:any, b:any) => a + b, 0)
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
      const sumc1=this.Acolumna1.reduce((a:any, b:any) => a + b, 0)
      const sumc2=this.Acolumna2.reduce((a:any, b:any) => a + b, 0)
      const sumc3=this.Acolumna3.reduce((a:any, b:any) => a + b, 0)
      const sumc4=this.Acolumna4.reduce((a:any, b:any) => a + b, 0)
      const sumc5=this.Acolumna5.reduce((a:any, b:any) => a + b, 0)
      const sumc6=this.Acolumna6.reduce((a:any, b:any) => a + b, 0)
      const sumc7=this.Acolumna7.reduce((a:any, b:any) => a + b, 0)
      const sumc8=this.Acolumna8.reduce((a:any, b:any) => a + b, 0)
      const sumc9=this.Acolumna9.reduce((a:any, b:any) => a + b, 0)
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
      const sumc1=this.Ccolumna1.reduce((a:any, b:any) => a + b, 0)
      const sumc2=this.Ccolumna2.reduce((a:any, b:any) => a + b, 0)
      const sumc3=this.Ccolumna3.reduce((a:any, b:any) => a + b, 0)
      const sumc4=this.Ccolumna4.reduce((a:any, b:any) => a + b, 0)
      const sumc5=this.Ccolumna5.reduce((a:any, b:any) => a + b, 0)
      const sumc6=this.Ccolumna6.reduce((a:any, b:any) => a + b, 0)
      const sumc7=this.Ccolumna7.reduce((a:any, b:any) => a + b, 0)
      const sumc8=this.Ccolumna8.reduce((a:any, b:any) => a + b, 0)
      const sumc9=this.Ccolumna9.reduce((a:any, b:any) => a + b, 0)
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
      const sumc1=this.GVcolumna1.reduce((a:any, b:any) => a + b, 0)
      const sumc2=this.GVcolumna2.reduce((a:any, b:any) => a + b, 0)
      const sumc3=this.GVcolumna3.reduce((a:any, b:any) => a + b, 0)
      const sumc4=this.GVcolumna4.reduce((a:any, b:any) => a + b, 0)
      const sumc5=this.GVcolumna5.reduce((a:any, b:any) => a + b, 0)
      const sumc6=this.GVcolumna6.reduce((a:any, b:any) => a + b, 0)
      const sumc7=this.GVcolumna7.reduce((a:any, b:any) => a + b, 0)
      const sumc8=this.GVcolumna8.reduce((a:any, b:any) => a + b, 0)
      const sumc9=this.GVcolumna9.reduce((a:any, b:any) => a + b, 0)
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

  }

  aceptar2() {
    if(this.indicadores.destino=="PRECLASIFICACION" || this.indicadores.destino=="GV SIN PELAR"){

      if(this.indicadores.destino=="PRECLASIFICACION"){
        this.indicadores.origen="BALANZA 1"
      }else if (this.indicadores.destino=="GV SIN PELAR"){
        this.indicadores.origen="GV SIN PELAR"
      }else{
        this.indicadores.origen="BALANZA 1"
      }
      this.indicadoresService.getB1VSB1AB(this.indicadores.fecha.substring(0,10),this.indicadores.destino,this.indicadores.variedad,this.indicadores.origen).subscribe(result=>{
        const data=Object.values(result)
        if(data[0]!="E"){
          this.listFechasB1.push(this.indicadores.fecha.substring(0,10))
          this.listB1.push(data[0].toFixed(2))
          this.listB1AB.push(data[1].toFixed(2))
          this.resultB1VSB1AB.push(((1-(data[1])/data[0])*100).toFixed(2))
        }
      })

      this.indicadoresService.getHB1VSB2(this.indicadores.fecha.substring(0,10),this.indicadores.destino,this.indicadores.variedad,this.indicadores.origen).subscribe(Hdata=>{
        const data:any=Object.values(Hdata)
        if(data[0]!="E"){
          this.listHB1AB.push(data[0].toFixed(2))
          this.listHB2.push(data[1].toFixed(2))
          this.resultHB1ABVSB2.push((((1-(data[1])/data[0])*100)*-1).toFixed(2))
        }
      })

      this.indicadoresService.getDB2VSB3(this.indicadores.fecha.substring(0,10),this.indicadores.destino,this.indicadores.variedad,this.indicadores.origen).subscribe(resultD=>{
        const data:any=Object.values(resultD)
        if(data[0]!="E"){
          //BLANCO
          this.listDBlancoB2.push(data[0].toFixed(2))
          this.listDBlancoB3.push(data[1].toFixed(2))
          this.resultDBlanco.push(((1-(data[1])/data[0])*100).toFixed(2))
          //TINT
          this.listDTintB2.push(data[2].toFixed(2))
          this.listDTintB3.push(data[3].toFixed(2))
          this.resultDTint.push(((1-(data[3])/data[2])*100).toFixed(2))
          //ARCOIRIS
          this.listDArcoB2.push(data[4].toFixed(2))
          this.listDArcoB3.push(data[5].toFixed(2))
          const resultado=((1-(data[5])/data[4])*100).toFixed(2)
          if(resultado.toString()=='-Infinity'){
            this.resultDArco.push("ERROR")
            const id="perdidaArcoiris"+this.listDArcoB3.length

            document.getElementById(id)!.style.background='red'
          }else
            this.resultDArco.push(((1-(data[5])/data[4])*100).toFixed(2))

          console.log(this.resultDArco)
        }
      })
    }else {
      this.indicadoresService.getCaminoApertura(this.indicadores.fecha.substring(0,10),this.indicadores.destino,this.indicadores.variedad,this.indicadores.origen).subscribe(result=>{
        const data:any=Object.values(result)
        console.log("CAMINO APERTURA---------->",result)
        if(data[0]!="E") {
          this.listfechasApertura.push(this.indicadores.fecha.substring(0,10))
          this.listAB1.push(data[0].toFixed(2))
          this.tallosAB1.push(data[1].toFixed(2))
          this.listAB2.push(data[2].toFixed(2))
          this.tallosAB2.push(data[3].toFixed(2))
          this.resultAB1.push((((data[2]/data[0])-1)*100).toFixed(2))
          this.resultATallos.push((((data[3]/data[1])-1)*100).toFixed(2))
        }
      })

      this.indicadoresService.getCaminoAB2VSB2A(this.indicadores.fecha.substring(0,10),this.indicadores.destino,this.indicadores.variedad,this.indicadores.origen).subscribe(result=>{
        const data:any=Object.values(result)
        if(data[0]!="E"){
          this.listCAB2.push(data[0].toFixed(2))
          this.listCAB2A.push(data[1].toFixed(2))
          this.resultCA2.push((-1*((data[1]/data[0])-1)*100).toFixed(2))
        }
      })
    }
  }

  // protected readonly fetch = fetch;
  caminoApertura() {

  }

  salaBrote() {
    this.router.navigate(['brote'])
  }
  reloadPage(){
    window.location.reload()
  }

  indicadoresSemanal() {
    this.router.navigate(['i-semanales'])
  }

  evento() {
    console.log("funca")
    if(this.indicadores.destino=="APERTURA"){
      document.getElementById("TableApertura")!.style.display='block'
      document.getElementById("TableApertura1")!.style.display='block'
      document.getElementById("preclasificacion")!.style.display='None'
      document.getElementById("preclasificacion1")!.style.display='None'
    }else if (this.indicadores.destino=="PRECLASIFICACION"){
      document.getElementById("TableApertura")!.style.display='None'
      document.getElementById("TableApertura1")!.style.display='None'
      document.getElementById("preclasificacion")!.style.display='block'
      document.getElementById("preclasificacion1")!.style.display='block'
    }else {
      document.getElementById("TableApertura")!.style.display='None'
      document.getElementById("TableApertura1")!.style.display='None'
      document.getElementById("preclasificacion")!.style.display='block'
      document.getElementById("preclasificacion1")!.style.display='block'
    }

  }
}
