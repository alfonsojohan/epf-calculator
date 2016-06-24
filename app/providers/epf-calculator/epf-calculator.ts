import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the EpfCalculator provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EpfCalculator {
  
  public static get MIN_AGE() : number {
    return 18;
  }
  
  public static get MAX_AGE() : number {
    return 55;
  }
  
  public static get MIN_INVESTMENT() : number {
    return 1000;
  }
  
  private savingsTable = [{
    age: 18,
    savings: 1000
  }, {
    age: 19,
    savings: 2000
  }, {
    age: 20,
    savings: 4000
  }, {
    age: 21,
    savings: 5000
  }, {
    age: 22,
    savings: 7000
  }, {
    age: 23,
    savings: 9000
  }, {
    age: 24,
    savings: 11000
  }, {
    age: 25,
    savings: 13000
  }, {
    age: 26,
    savings: 15000
  }, {
    age: 27,
    savings: 18000
  }, {
    age: 28,
    savings: 21000
  }, {
    age: 29,
    savings: 24000
  }, {
    age: 30,
    savings: 27000
  }, {
    age: 31,
    savings: 30000
  }, {
    age: 32,
    savings: 34000
  }, {
    age: 33,
    savings: 37000
  }, {
    age: 34,
    savings: 41000
  }, {
    age: 35,
    savings: 46000
  }, {
    age: 36,
    savings: 50000
  }, {
    age: 37,
    savings: 54000
  }, {
    age: 38,
    savings: 59000
  }, {
    age: 39,
    savings: 64000
  }, {
    age: 40,
    savings: 69000
  }, {
    age: 41,
    savings: 76000
  }, {
    age: 42,
    savings: 81000
  }, {
    age: 43,
    savings: 88000
  }, {
    age: 44,
    savings: 95000
  }, {
    age: 45,
    savings: 102000
  }, {
    age: 46,
    savings: 109000
  }, {
    age: 47,
    savings: 117000
  }, {
    age: 48,
    savings: 125000
  }, {
    age: 49,
    savings: 134000
  }, {
    age: 50,
    savings: 143000
  }, {
    age: 51,
    savings: 153000
  }, {
    age: 52,
    savings: 163000
  }, {
    age: 53,
    savings: 174000
  }, {
    age: 54,
    savings: 185000
  }, {
    age: 55,
    savings: 196800
  }];

  constructor() {
  }

  public calculate(age, acc1Balance) {
    console.log('EpfCalculator.calculate', age, this.getBasicSavings(age), acc1Balance);
    var investment = (acc1Balance - this.getBasicSavings(age)) * .2;
    return Math.floor((investment < EpfCalculator.MIN_INVESTMENT ? 0 : investment));
  }

  public getBasicSavings(age) {
    if (age < EpfCalculator.MIN_AGE) {
      throw new RangeError('Age cannot be less than ' + EpfCalculator.MIN_AGE);
    }
    if (age > EpfCalculator.MAX_AGE) {
      throw new RangeError('Age cannot be more than ' + EpfCalculator.MAX_AGE);
    }
    return this.savingsTable[age - EpfCalculator.MIN_AGE].savings;
  }
}

