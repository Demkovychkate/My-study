const btn = document.querySelector('#submit');
const firstNumber = document.querySelector('.firstNumber');
const znak = document.querySelector('.znak');
const secondNumber = document.querySelector('.secondNumber');
const result = document.querySelector('.result');

class SuperMath {
   
    operations = {
        '+': (X, Y) => X + Y,
        '-': (X, Y) => X - Y,
        '/': (X, Y) => X / Y,
        '*': (X, Y) => X * Y,
    };

    input() {
        this.x = Number(firstNumber.value);
        this.znak = znak.value;
        this.y = Number(secondNumber.value);
    }

    check() {
        const resultValue = this.operations[this.znak](this.x, this.y);
        result.value = resultValue;
    }

    getOperation() {
        return Object.keys(this.operations).join(', ');
    }
}

const superMath = new SuperMath();

btn.addEventListener('click', function (e) {
    e.preventDefault();
    superMath.input();
    superMath.check();
});