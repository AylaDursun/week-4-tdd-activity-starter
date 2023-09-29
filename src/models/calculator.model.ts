import { ActionKeys } from '../enums/action-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { NumericKeys } from './../enums/numeric-keys.enum';
import { OperatorKeys } from './../enums/operator-keys.enum';

export class CalculatorModel implements ICalculatorModel {

  private _buffer: string = '';

  public pressNumericKey(key: NumericKeys): void {
    this._buffer += key;
  }

  public pressOperatorKey(key: OperatorKeys): void {
    let keyWithSpaces = " " + key + " ";
    this._buffer += keyWithSpaces;
  }

  public pressActionKey(key: ActionKeys): void {
    switch(key) { 
      case ActionKeys.CLEAR: { 
        this._buffer = '';
        break; 
      } 
      case ActionKeys.DOT: { 
         this._buffer += "."
         break; 
      } 
      case ActionKeys.EQUALS: { 
        const values: string[] = this._buffer.split(" ")
        this._buffer = this.parseValues(values).toString();
        break; 
      } 
   } 
  }

  public display(): string {
    return this._buffer;
  }

  private parseValues(values: string[]): number {
    if(values.length > 0) {
    let currentValue = this.valueToNumber(values[0]);
    for(let i = 1; i < values.length; i = i + 2) {
      currentValue = this.evaluate(currentValue, values[i+1], values[i])
    }
    return currentValue;
  } else {

  }
  }

  private valueToNumber(value: string): number {
   if(!isNaN(Number(value))) {
    return Number(value);
   } else {
    throw new Error("Invalid Equation")
   }
}

private evaluate(firstNumber: number, secondNumber: string, operator: string): number {
  switch(operator) {
    case OperatorKeys.PLUS: {
      return firstNumber + this.valueToNumber(secondNumber);
    }
    case OperatorKeys.MINUS: {
      return firstNumber - this.valueToNumber(secondNumber);
    }
    case OperatorKeys.MULT: {
      return firstNumber * this.valueToNumber(secondNumber);
    }
    case OperatorKeys.DIV: {
      return firstNumber / this.valueToNumber(secondNumber);
    }
  }
}

}