import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
@Component({
  selector: 'app-i-semanales',
  templateUrl: './i-semanales.page.html',
  styleUrls: ['./i-semanales.page.scss'],
})
export class ISemanalesPage implements OnInit {

  constructor(private route:Router) { }

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
}
