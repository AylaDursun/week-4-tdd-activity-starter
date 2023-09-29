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
    this._buffer += key;
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
        const values: string[] = this._buffer.split()
        break; 
      } 
   } 
  }

  public display(): string {
    return this._buffer;
  }

}