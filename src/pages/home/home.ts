import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	countries: any;
	errorMsg: string;

	descending: boolean = false;
	order: number;
	column: string = 'name';
	terms: string;

  constructor(public navCtrl: NavController, public restProv: RestProvider) {

  }

  ionViewDidLoad() {
    this.getCountries();
  }

  getCountries() {
    this.restProv.getCountries()
       .subscribe(
         countries => this.countries = countries,
         error =>  this.errorMsg = <any>error);
  }

  sort(){
	  this.descending = !this.descending;
	  this.order = this.descending ? 1 : -1;
	}

}
