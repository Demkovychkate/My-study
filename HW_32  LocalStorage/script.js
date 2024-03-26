const leftBlock = document.querySelectorAll('.leftBlock li');
const middleBlock = document.querySelector('.middleBlock');
const bookslist = document.querySelector('.bookslist');
const rightBlock = document.querySelector('.rightBlock');
const sale = document.querySelector('.sale');
const btn = document.querySelector('.btn');
const customerForm = document.querySelector('.customerForm');
const btnPrimary = document.querySelector('.btn-primary');
const customerInfoForm = document.querySelector('.customerInfoForm');


const booksCatalouge = {
  "Сучасна література": ["Прислуга", "Страшенно голосно і неймовірно близько", "Малавіта"],
  "Дитяча література": ["Друзяки динозаврики", "Історія про піратів", "Кнопик переможець"],
  "Методичні матеріали": ["Вчимося писати", "Вчимося читати", "Вчимося рахувати"],
};

const saleInformation = {
    "Сучасна література": "Ця книжка екранізована",
    "Дитяча література": "Бестселери в даній категорї",
    "Методичні матеріали": "Незамінна річ для вашої дитини",
  };

function displayBooksInCategory(categoryName) {
    const BookProducts = booksCatalouge[categoryName];
    bookslist.innerHTML = "";
  
    BookProducts.forEach((book) => {
      const li = document.createElement("li");
      li.textContent = book;
      li.addEventListener("click", () => {
        sale.innerHTML = " ";
        const p = document.createElement("p");
        p.textContent = saleInformation[categoryName];
        sale.appendChild(p);
        rightBlock.style.display = "block";
      });
      bookslist.appendChild(li);
    });
  
    middleBlock.style.display = "block";
    rightBlock.style.display = "none";
  }
  
  leftBlock.forEach((category) => {
    category.addEventListener("click", () => {
      const categoryName = category.textContent;
      displayBooksInCategory(categoryName);
    });
  });


function getCustomerInfo() {
  const customerName = document.querySelector('#customerName').value;
  const customerCity = document.querySelector('#customerCity').value;
  const customerDelivery = document.querySelector('#customerDelivery').value;
  const customerPayMethod = document.querySelector('#customerPayMethod').value;
  const numberofOrder = document.querySelector('#numberofOrder').value;
  const customerComment = document.querySelector('#customerComment').value;

  const customerData = {
    name: customerName,
    city: customerCity,
    delivery: customerDelivery,
    payMethod: customerPayMethod,
    numberOrder: numberofOrder,
    comment: customerComment,
  };

  return customerData;
}

btn.addEventListener('click',  async  () => {
  customerForm.style.display = "block";
  getCustomerInfo();
});


function renderCustomerForm(customerData) {
    const infoForm = document.createElement('div');
    infoForm.classList = "infoForm"; 
    customerInfoForm.appendChild(infoForm);

    const commentContent = customerData.comment?.trim() || "";
    const commentMessage = commentContent !== ""
    ? `<p>Коментар: ${commentContent}</p>`
    : "<p>Немає коментарів до замовлення</p>";
  
    customerInfoForm.innerHTML = `
      <p>Дані Вашого замовлення</p>
      <p> Замовник: ${customerData.name}</p>
      <p>Місто для відправки: ${customerData.city}</p>
      <p> Склад НП: ${customerData.delivery}</p>
      <p> Ваш метод оплати: ${customerData.payMethod}</p>
      <p> Кількіть товару в замовленні: ${customerData.numberOrder}</p>
      ${commentMessage}`;
  }

function validation(form) {
    const formElements = form.querySelectorAll('input, select');
    let isValid = true;
  
    formElements.forEach((element) => {
      if (!element.value.trim()) {
        alert('Заповніть всі дані');
        isValid = false;
      }
    });
  
    return isValid;
  }

btnPrimary.addEventListener('click', () => {
 
    const isValid = validation(customerForm);
  
    if (isValid) {
      const customerData = getCustomerInfo();
      customerInfoForm.style.display = "block";
      renderCustomerForm(customerData);
    }
  });