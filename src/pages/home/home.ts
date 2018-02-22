import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AddDataPage } from '../add-data/add-data';
import { EditDataPage } from '../edit-data/edit-data';
import { ExpensesProvider } from '../../providers/expenses/expenses';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	expenses: any = [];
  totalIncome = 0;
  totalExpense = 0;
  balance = 0;

  constructor(public navCtrl: NavController,
    private rest: ExpensesProvider,
    private toast: ToastController) {

  }

  ionViewDidLoad() {
    this.getData();
  }

  ionViewWillEnter() {
    this.getData();
  }

  getData() {
    this.rest.all()
      .then(data => {
        this.expenses = data;
        console.log(this.expenses);
      });
  }

  addData() {
    this.navCtrl.push(AddDataPage);
  }

  editData(id) {
    this.navCtrl.push(EditDataPage, {
      id:id
    });
  }

  deleteData(id) {
    this.rest.delete(id)
      .then(result => {
        console.log('borrado'+result);
        let toast = this.toast.create({
            message: 'Expense was deleted successfully',
            duration: 3000
          });
          toast.present();
        this.getData();
      });
  }

}
