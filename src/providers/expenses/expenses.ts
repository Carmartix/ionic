import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Expense } from '../../models/expense';
/*
  Generated class for the ExpensesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ExpensesProvider {

	private apiUrl = 'http://127.0.0.1:8000/api/expenses';
	private httpOptions = {  headers: new HttpHeaders().set('Content-Type', 'application/json'), };

  constructor(public http: HttpClient) {
    console.log('Hello ExpensesProvider Provider');
  }

  all() {
	  return new Promise((resolve,reject) => {
	    this.http.get(this.apiUrl).subscribe(data => {
	      resolve(data);
	    }, err => {
	      console.log(err);
	      reject(err);
	    });
	  });
	}

	get(id) {
	  return new Promise((resolve,reject) => {
	    this.http.get(this.apiUrl+'/'+id)
	    .subscribe(res => {
		      resolve(res);
		    }, err => {
		      console.log(err);
		      reject(err);
		    });
	  });
	}

	add(data) {
	  return new Promise((resolve, reject) => {
	    this.http.post(this.apiUrl, JSON.stringify(data) , this.httpOptions)
	      .subscribe(res => {
	        resolve(res);
	      }, (err) => {
		      console.log(err);
	        reject(err);
	      });
	  });
	}

	update(id, data) {
	  return new Promise((resolve, reject) => {
		this.http.put(this.apiUrl+'/'+id, JSON.stringify(data), this.httpOptions)
		  .subscribe(res => {
		    resolve(res);
		  }, (err) => {
		      console.log(err);
		    reject(err);
		  });
  		});
  	}

  	delete(id) {
	  return new Promise((resolve, reject) => {
		this.http.delete(this.apiUrl+'/'+id, this.httpOptions)
		  .subscribe(res => {
		    resolve(res);
		  }, (err) => {
		      console.log(err);
		    reject(err);
		  });
  		});
  	}
  
}
