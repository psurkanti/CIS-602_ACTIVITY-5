
const calculateCommissionFunction = require('../CalculateComission');

describe('calculateCommissionFunction', () => {

  test('Checking input boundaries', () => {
    expect(calculateCommissionFunction(1, 1, 1)).toEqual([100, 5.5]); //If Inputs are at Min
    expect(calculateCommissionFunction(2, 1, 1)).toEqual([145, 10]);
    expect(calculateCommissionFunction(1, 2, 1)).toEqual([130, 8.5]);
    expect(calculateCommissionFunction(1, 1, 2)).toEqual([125, 8]);
    expect(calculateCommissionFunction(35, 40, 45)).toEqual([3900, 775.5]); //Midpoint
    expect(calculateCommissionFunction(70, 80, 90)).toEqual([7800, 1555.5]); //If inputs are at Max
    expect(calculateCommissionFunction(69, 80, 90)).toEqual([7755, 1546.5]); 
    expect(calculateCommissionFunction(70, 79, 90)).toEqual([7770, 1549.5]); 
    expect(calculateCommissionFunction(70, 80, 89)).toEqual([7775, 1550.5]); 
    expect(calculateCommissionFunction(71, 80, 90)).toEqual("Sales quantities exceed maximum limits."); 
    expect(calculateCommissionFunction(70, 81, 90)).toEqual("Sales quantities exceed maximum limits."); 
    expect(calculateCommissionFunction(70, 80, 91)).toEqual("Sales quantities exceed maximum limits."); 
    
  });

  test('Checking some equivalence classes', () => {
    expect(calculateCommissionFunction(0,0,0)).toEqual('Err Msg: Invalid Input'); //When input is 0
    expect(calculateCommissionFunction(-1,20,40)).toEqual('Err Msg: Invalid Input'); //When 1 is negative
    expect(calculateCommissionFunction(-1,-1,40)).toEqual('Err Msg: Invalid Input'); //When 2 are negative
    expect(calculateCommissionFunction(-1,-1,40)).toEqual('Err Msg: Invalid Input'); //When 2 are negative
    expect(calculateCommissionFunction(20,500,30)).toEqual('Sales quantities exceed maximum limits.'); //When 1 is out of bounds
    expect(calculateCommissionFunction(25,50,30)).toEqual([3375, 670.5]); //When all classes are valid and not at midpoint
  });
  
  test('should error when invalid inputs are given', () => {
      expect(calculateCommissionFunction(0, 10, 10)).toEqual('Err Msg: Invalid Input'); //If Locks is Invalid

      expect(calculateCommissionFunction(10, 0, 10)).toEqual('Err Msg: Invalid Input'); //If Stocks is invalid

      expect(calculateCommissionFunction(10, 10, 0)).toEqual('Err Msg: Invalid Input'); //If Barrels is invalid

      expect(calculateCommissionFunction(-1, 10, 10)).toEqual('Err Msg: Invalid Input'); //If Locks is Invalid

      expect(calculateCommissionFunction(10, -1, 10)).toEqual('Err Msg: Invalid Input'); //If Stocks is invalid

      expect(calculateCommissionFunction(10, 10, -1)).toEqual('Err Msg: Invalid Input'); //If Barrels is invalid

      expect(calculateCommissionFunction("s", 10, 10)).toEqual('Err Msg: Invalid Input'); //If Locks is Invalid

      expect(calculateCommissionFunction(10, "s", 10)).toEqual('Err Msg: Invalid Input'); //If Stocks is invalid

      expect(calculateCommissionFunction(10, 10, "s")).toEqual('Err Msg: Invalid Input'); //If Barrels is invalid

      
      
  });
});
  