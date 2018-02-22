import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ExpensesProvider } from '../../providers/expenses/expenses';
import { ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-data',
  templateUrl: 'add-data.html',
})
export class AddDataPage {

  data = { date:"", type:"", description:"", amount:0 };

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private rest: ExpensesProvider,
    private toast: ToastController) {}

  save() {
    this.rest.add(this.data)
      .then((result) => {
        console.log(result);
          let toast = this.toast.create({
            message: 'Expense was added successfully',
            duration: 3000
          });
          toast.present();
          this.navCtrl.popToRoot();
      }, (err) => {
        console.log(err);
        /**this.toast.show(err, '5000', 'center').subscribe(
            toast => {
              console.log(toast);
            }
          );*/
      });
  }

}