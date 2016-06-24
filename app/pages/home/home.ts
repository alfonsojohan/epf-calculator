import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {EpfCalculator} from '../../providers/epf-calculator/epf-calculator';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [EpfCalculator]
})
export class HomePage {
  
  private age:number = 33;
  private minBalance:number = 0;
  private acc1Balance:string = "100000";
  private acc1BalanceNum:number = 0;
  private investment:number = 0;

  constructor(private navController: NavController,
    private epfCalc:EpfCalculator) {
  }

  calculate() {
    console.log('In calculate function');

    try {
      this.acc1BalanceNum = parseInt(this.acc1Balance);
      this.minBalance = this.epfCalc.getBasicSavings(this.age);
      this.investment = this.epfCalc.calculate(this.age, this.acc1Balance);
    } catch (e) {
      if (e instanceof RangeError) {
        window.alert(e);
      }
    }
  }
}
