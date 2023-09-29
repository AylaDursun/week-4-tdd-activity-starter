
import { CalculatorModel } from './calculator.model';
import { NumericKeys } from './../enums/numeric-keys.enum';
import { ICalculatorModel } from '../interfaces/calculator-model.interface';
import { OperatorKeys } from '../enums/operator-keys.enum';
import { ActionKeys } from '../enums/action-keys.enum';
describe('CalculatorModel', (): void => {

  let calculator: ICalculatorModel;

  beforeEach((): void => {
    calculator = new CalculatorModel();
  });

  it('should contain a CalculatorModel class that implements ICalculatorModel', (): void => {

    expect(calculator).toBeDefined();

  });

  it('should have an empty display on init', (): void => {

    // Act
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('');

  });

  it('should display `1` when the `1` key is pressed', (): void => {

    // Act
    calculator.pressNumericKey(NumericKeys.ONE);
    const displayValue: string = calculator.display();

    // Assert
    expect(displayValue).toEqual('1');

  });

  it('should display `2` when the `2` key is pressed', (): void => {

    calculator.pressNumericKey(NumericKeys.TWO);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual('2');

  });

  it('should display `98` when the `9` key is pressed followed by the `8` key', (): void => {

    calculator.pressNumericKey(NumericKeys.NINE);
    calculator.pressNumericKey(NumericKeys.EIGHT);
    const displayValue: string = calculator.display();
  
    expect(displayValue).toEqual('98');
  
  });

  it('should display + when the + key is pressed', (): void => {
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    const displayValue: string = calculator.display();

    expect(displayValue).toEqual(" + ");

  });

  it('should display nothing when the clear key is pressed', (): void => {
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressActionKey(ActionKeys.CLEAR);

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual("");

  });

  it('should display . when the dot key is pressed', (): void => {
    calculator.pressActionKey(ActionKeys.DOT);

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual(".");

  });

  it('should display 5 when the equals key is pressed ans 2 + 3 has been inputted', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.PLUS);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual("5");

  });

  it('should display 1 when the equals key is pressed ans 2 - 1 has been inputted', (): void => {
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.MINUS);
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressActionKey(ActionKeys.EQUALS);

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual("1");

  });

  it('should display 21 when the equals key is pressed ans 7 * 3 has been inputted', (): void => {
    calculator.pressNumericKey(NumericKeys.SEVEN);
    calculator.pressOperatorKey(OperatorKeys.MULT);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual("21");

  });

  it('should display 4 when the equals key is pressed ans 12 / 3 has been inputted', (): void => {
    calculator.pressNumericKey(NumericKeys.ONE);
    calculator.pressNumericKey(NumericKeys.TWO);
    calculator.pressOperatorKey(OperatorKeys.DIV);
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressActionKey(ActionKeys.EQUALS);

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual("4");

  });

  it('should throw an error for an invalid equation', (): void => {
    calculator.pressNumericKey(NumericKeys.THREE);
    calculator.pressOperatorKey(OperatorKeys.DIV);
    calculator.pressNumericKey(NumericKeys.ZERO);
    calculator.pressActionKey(ActionKeys.EQUALS);

    const displayValue: string = calculator.display();

    expect(displayValue).toEqual("Infinity");

  });


});