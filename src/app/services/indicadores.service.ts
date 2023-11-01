import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  constructor(private http: HttpClient) { }

  getData(){
    return this.http.get("back/indicadorDiario")
  }
  getIndicadorFecha1_1AB(fecha:any,destino:any,variedad:any,origen:any){
    return this.http.get("back/indicadorFecha1-1AB?fecha="+fecha+"&destino="+destino+"&variedad="+variedad+"&origen="+origen)
  }
  getB1VSB1AB(fecha:String,destino:any,variedad:any,origen:any){
    return this.http.get("back/indicadorFecha1-1AB?fecha="+fecha+"&destino="+destino+"&variedad="+variedad+"&origen="+origen)
  }
  getHB1VSB2(fecha:String,destino:any,variedad:any,origen:any){
    return this.http.get("back/indicador1AB-B2?fecha="+fecha+"&destino="+destino+"&variedad="+variedad+"&origen="+origen)
  }

  getDB2VSB3(fecha:String,destino:any,variedad:any,origen:any){
    return this.http.get("back/indicadorB2VSB3?fecha="+fecha+"&destino="+destino+"&variedad="+variedad+"&origen="+origen)
  }

  getCaminoApertura(fecha:String,destino:any,variedad:any,origen:any){
    return this.http.get("back/caminoApertura?fecha="+fecha+"&destino="+destino+"&variedad="+variedad+"&origen="+origen)
  }

  getCaminoAB2VSB2A(fecha:String,destino:any,variedad:any,origen:any){
    return this.http.get("back/caminoAperturaB2VSB2a?fecha="+fecha+"&destino="+destino+"&variedad="+variedad+"&origen="+origen)
  }

  getSalaBrote(){
    return this.http.get("back/Brote")
  }

  getSalaBroteApertura(){
    return this.http.get("back/Brote/CaminoApertura")
  }
  getSalaBroteCloud(){
    return this.http.get("back/Brote/cloud")
  }
  getSalaBroteGV(){
    return this.http.get("back/Brote/gv")
  }
}
