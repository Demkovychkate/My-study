const calculateButton = document.querySelector('#calculateButton');
const resultPrice = document.querySelector('.resultPrice');
const resultCalories = document.querySelector('.resultCalories');
const resultPriceWithSauce = document.querySelector('.resultPriceWithSauce');

const sizePrices = {
  small: 50,
  large: 100,
};

const stuffingPrices = {
  chese: 10,
  salat: 20,
  potato: 15,
};

const toppingPrices = {
  seasoning: 15,
  mayo: 20,
};

const sizeCalories = {
  small: 20,
  large: 40,
};

const stuffingCalories = {
  chese: 20,
  salat: 5,
  potato: 10,
};

const toppingCalories = {
  seasoning: 0,
  mayo: 5,
};


class Hamburger {
  constructor(size, stuffing) {
    this.size = size;
    this.stuffing = stuffing;
    this.toppings = [];
  }

  addTopping(topping) {
    this.toppings.push(topping);
  }

  calculatePrice() {
    const sizePrice = sizePrices[this.size];
    const stuffingPrice = stuffingPrices[this.stuffing];

    const toppingTotalPrice = this.toppings.reduce((total, topping) => {
      return total + toppingPrices[topping];
    }, 0);

    return sizePrice + stuffingPrice + toppingTotalPrice;
  }

  calculateCalories() {
    const sizeCalorie = sizeCalories[this.size];
    const stuffingCalorie = stuffingCalories[this.stuffing];

    const toppingTotalCalories = this.toppings.reduce((total, topping) => {
      return total + toppingCalories[topping];
    }, 0);

    return sizeCalorie + stuffingCalorie + toppingTotalCalories;
  }
}

calculateButton.addEventListener("click", function() {

let selectedSize = "";
let selectedStuffing = "";
let selectedToppings = [];

  selectedSize = document.querySelector('input[name="size"]:checked').value;
  selectedStuffing = document.querySelector('input[name="stuffing"]:checked').value;
  selectedToppings = [...document.querySelectorAll('input[name="topping"]:checked')].map(input => input.value);

  const hamburger = new Hamburger(selectedSize, selectedStuffing);
  selectedToppings.forEach(topping => hamburger.addTopping(topping));

  const calories = hamburger.calculateCalories();
  const price = hamburger.calculatePrice();

  resultCalories.textContent = "Кількість калорій у Вашому гамбургері становить " + calories;
  resultPrice.textContent = "Вартість Вашого гамбургеру " + price;
  resultPriceWithSauce.textContent = "Вартість з додаванням соусу " + hamburger.calculatePrice();
});

