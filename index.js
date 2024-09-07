function calculate(value1, operation, value2) {
    switch(operation) {
      case 'plus':
        return value1 + value2;
      case 'minus':
        return value1 - value2;
      case 'multiply':
        return value1 * value2;
      case 'divide':
        return value1 / value2;
      default:
        return 'Invalid operation';
    }
  }

  console.log(calculate(2, 'minus', 3));
