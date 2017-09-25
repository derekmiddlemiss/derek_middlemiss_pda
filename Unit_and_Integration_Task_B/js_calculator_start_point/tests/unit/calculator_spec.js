var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it( 'can add numbers', function(){
    calculator.previousTotal = 1;
    calculator.add( 4 );
    assert.equal( 5, calculator.runningTotal, Number.MIN_VALUE );
  })

  it( 'can subtract numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract( 4 );
    assert.equal( 3, calculator.runningTotal, Number.MIN_VALUE );
  })

  it( 'can multiply numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply( 5 );
    assert.equal( 15, calculator.runningTotal, Number.MIN_VALUE );
  })

  it( 'can divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide( 7 );
    assert.equal( 3, calculator.runningTotal, Number.MIN_VALUE );
  })

  it( 'sets newTotal to false on number click', function(){
    calculator.numberClick( 1 );
    assert.equal( false, calculator.newTotal );
  } )

  it( 'concatenates numbers on number click', function(){
    calculator.numberClick( 1 );
    calculator.numberClick( 2 );
    assert.equal( 12, calculator.runningTotal, Number.MIN_VALUE );
  })

  it( 'sets newTotal to true on + operator click', function(){
    calculator.newTotal = false;
    calculator.operatorClick( '+' );
    assert.equal( true, calculator.newTotal );
  });
  
  it( 'sets newTotal to true on - operator click', function(){
    calculator.newTotal = false;
    calculator.operatorClick( '-' );
    assert.equal( true, calculator.newTotal );  
  });

  it( 'sets newTotal to true on * operator click', function(){
    calculator.newTotal = false;
    calculator.operatorClick( '*' );
    assert.equal( true, calculator.newTotal );  
  });

  it( 'sets newTotal to true on / operator click', function(){
    calculator.newTotal = false;
    calculator.operatorClick( '/' );
    assert.equal( true, calculator.newTotal );
  });

  it( 'sets newTotal to true on = operator click', function(){
    calculator.newTotal = false;
    calculator.operatorClick( '=' );
    assert.equal( true, calculator.newTotal );    
  });

  it( 'sets previous operator to operator on + operator click', function(){
    calculator.operatorClick( '+' );
    assert.equal( '+', calculator.previousOperator );
  });
  
  it( 'sets previous operator to operator on - operator click', function(){    
    calculator.operatorClick( '-' );
    assert.equal( '-', calculator.previousOperator );
  });

  it( 'sets previous operator to operator on * operator click', function(){
    calculator.operatorClick( '*' );
    assert.equal( '*', calculator.previousOperator );
  });

  it( 'sets previous operator to operator on / operator click', function(){
    calculator.operatorClick( '/' );
    assert.equal( '/', calculator.previousOperator );
  });

  it( 'sets previous operator to null on = operator click', function(){
    calculator.previousOperator = "+";
    calculator.operatorClick( '=' );
    assert.equal( null, calculator.previousOperator );
  });

  it( 'applies the previous + operator correctly on operator click', function(){
    calculator.previousTotal = 1;
    calculator.previousOperator = "+";
    calculator.runningTotal = 5;
    calculator.operatorClick("+");
    assert.equal( 6, calculator.runningTotal, Number.MIN_VALUE );
  });

  it( 'applies the previous - operator correctly on operator click', function(){
    calculator.previousTotal = 1;
    calculator.previousOperator = "-";
    calculator.runningTotal = 5;
    calculator.operatorClick("-");
    assert.equal( -4, calculator.runningTotal, Number.MIN_VALUE );
  });

  it( 'applies the previous * operator correctly on operator click', function(){
    calculator.previousTotal = 2;
    calculator.previousOperator = "*";
    calculator.runningTotal = 5;
    calculator.operatorClick("*");
    assert.equal( 10, calculator.runningTotal, Number.MIN_VALUE );
  });

  it( 'applies the previous / operator correctly on operator click', function(){    
    calculator.previousTotal = 6;
    calculator.previousOperator = "/";
    calculator.runningTotal = 3;
    calculator.operatorClick("/");
    assert.equal( 2, calculator.runningTotal, Number.MIN_VALUE );
  });

  it( 'sets prevTotal and prevOperator to null if runningTotal is 0 on clearClick', function(){
    calculator.previousOperator = "+";
    calculator.previousTotal = 10;
    calculator.runningTotal = 0;
    calculator.clearClick();
    assert.equal( null, calculator.previousOperator );
    assert.equal( null, calculator.previousTotal );
  })

  it( 'sets runningTotal to 0 on clearClick', function(){
    calculator.runningTotal = 5;
    calculator.clearClick();
    assert.equal( 0, calculator.runningTotal, Number.MIN_VALUE );
  })
  


});
