import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
//import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ExpensesProvider } from '../../providers/expenses/expenses';
import { Expense } from '../../models/expense';

@IonicPage()
@Component({
  selector: 'page-edit-data',
  templateUrl: 'edit-data.html',
})
export class EditDataPage {

  expense: Expense = {id:null, description:'',type:'',amount:0,date:''};

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private rest: ExpensesProvider,
    private toast: ToastController) {
      this.getCurrentData(navParams.get("id"));
  }

  getCurrentData(id) {
    this.rest.get(id)
      .then(data => {
        this.expense = data;
      });
  }

  update() {
    this.rest.update(this.navParams.get('id'), this.expense )
      .then(result => {
        console.log(result);
        let toast = this.toast.create({
            message: 'Expense was edited successfully',
            duration: 3000
          });
          toast.present();
        this.navCtrl.popToRoot();
      });
  }

}