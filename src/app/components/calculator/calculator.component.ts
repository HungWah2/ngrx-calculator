import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Calculator } from '../../models/calculator.model';
import * as CalculatorActions from '../../actions/calculator.action';
import { MatButtonModule } from '@angular/material/button'

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  currentNumber$: Observable<Calculator>;

  constructor(private store: Store<{ calculator: Calculator }>) {
    this.currentNumber$ = store.select('calculator');
  }
  ngOnInit(): void {
    this.currentNumber$.subscribe((data) => {
      console.log(data);
    });
  }

  enterKey(key: string,type: string) {
    this.store.dispatch(
      CalculatorActions.EnterKey({ key: key, keyType: type })
    );
  }
}