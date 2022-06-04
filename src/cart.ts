import { shopItemsData } from "./Data.js";
import BasketItem from "./interfaces/basketItem.interface";

const label = document.getElementById('label') as HTMLDivElement;
const shoppingCart = document.getElementById('shopping-cart') as HTMLDivElement;

const basket: BasketItem[] = JSON.parse(localStorage.getItem('data') || '[]');

const calculation = (): void => {
  const cartIcon = document.getElementById('cartAmount') as HTMLDivElement;
  let sum = 0;

  basket.map(item => sum += item.item);

  cartIcon.innerText = sum.toString();
}

const generateCartItems = (): void => {
  shoppingCart.innerHTML = '';
  label.innerHTML = '';

  if (basket.length) {
    const cartItems: HTMLDivElement[] = [];

    basket.map(item => {
      const {id, img, name, price} =
        shopItemsData.find(data => data.id === item.id);

      const cartItem = document.createElement('div');
      const cartItemImg = document.createElement('img');
      const details = document.createElement('div');
      const titlePriceX = document.createElement('div');
      const titlePriceTitle = document.createElement('h4');
      const titlePriceTitleText = document.createElement('p');
      const cartItemPrice = document.createElement('p');
      const titlePriceIcon = document.createElement('i');
      const cartButtons = document.createElement('div');
      const buttons = document.createElement('div');
      const buttonMinus = document.createElement('i');
      const quantity = document.createElement('div');
      const buttonPlus = document.createElement('i');
      const cartButtonsTitle = document.createElement('h3');
      
      cartItem.classList.add('cart-item');
      details.classList.add('details');
      titlePriceX.classList.add('title-price-x');
      cartItemPrice.classList.add('cart-item-price');
      titlePriceTitle.classList.add('title-price');
      titlePriceIcon.classList.add('bi', 'bi-x-lg');
      cartButtons.classList.add('cart-buttons');
      buttons.classList.add('buttons');
      buttonMinus.classList.add('bi', 'bi-dash-lg');
      quantity.classList.add('quantity');
      buttonPlus.classList.add('bi', 'bi-plus-lg');
      
      cartItemImg.src = img;
      titlePriceTitleText.innerText = name;
      cartItemPrice.innerText = `$${price}`;
      quantity.id = id;
      quantity.innerText = item.item.toString();
      cartButtonsTitle.innerText = `$ ${price * item.item}`;

      titlePriceIcon.onclick = () => removeItem(id);
      buttonMinus.onclick = () => decrement(id);
      buttonPlus.onclick = () => increment(id);

      cartItem.appendChild(cartItemImg);
      cartItem.appendChild(details);
      details.appendChild(titlePriceX);
      details.appendChild(cartButtons);
      details.appendChild(cartButtonsTitle);
      titlePriceX.appendChild(titlePriceTitle);
      titlePriceX.appendChild(titlePriceIcon);
      titlePriceTitle.appendChild(titlePriceTitleText);
      titlePriceTitle.appendChild(cartItemPrice);
      cartButtons.appendChild(buttons);
      buttons.appendChild(buttonMinus);
      buttons.appendChild(quantity);
      buttons.appendChild(buttonPlus);

      cartItems.push(cartItem);
    });

    shoppingCart.append(...cartItems);
  } else {
    const empty = document.createElement('h2');
    const backToShopAnchor = document.createElement('a');
    const backToShopButton = document.createElement('button');
    
    backToShopButton.classList.add('HomeBtn');

    empty.innerText = 'Cart is Empty';
    backToShopAnchor.href = 'index.html';
    backToShopButton.innerText = 'Back to home';
    shoppingCart.innerHTML = '';

    label.appendChild(empty);
    label.appendChild(backToShopAnchor);
    backToShopAnchor.appendChild(backToShopButton);
  }
}

const increment = (id: string): void => {
  const search = basket.find(item => item.id === id);

  if (search) {
    search.item++;
  } else {
    basket.push({
      id,
      item: 1,
    });
  }

  generateCartItems();
  updateLocalStorage(id);
}

const decrement = (id: string): void => {
  const search = basket.find(item => item.id === id);

  if (search?.item === 1) {
    basket.splice(basket.indexOf(search), 1);
  } else if (search) {
    search.item--;
  }
  
  generateCartItems();
  updateLocalStorage(id);
}

const updateLocalStorage = (id?: string): void => {
  localStorage.setItem('data', JSON.stringify(basket));

  update(id);
}

const update = (id?: string): void => {
  const quantity = document.getElementById(id) as HTMLDivElement;
  const search = basket.find(item => item.id === id);

  if (search) {
    quantity.innerText = search.item.toString();
  }

  calculation();
  totalAmount();
}

const removeItem = (id: string): void => {
  const search = basket.find(item => item.id === id);

  if (search) {
    basket.splice(basket.indexOf(search), 1);
    generateCartItems();
    updateLocalStorage(id);
  }
}

const clearCart = (): void => {
  basket.splice(0, basket.length);

  generateCartItems();
  updateLocalStorage();
}

const totalAmount = (): void => {
  if (!basket.length) return;

  label.innerHTML = '';

  const amount = basket.map(
    item => item.item * shopItemsData.find(data => data.id === item.id)?.price
  ).reduce((acc, curr) => acc + curr, 0);

  const labelTitle = document.createElement('h2');
  const checkout = document.createElement('button');
  const removeAll = document.createElement('button');
  
  checkout.classList.add('checkout');
  removeAll.classList.add('removeAll');

  removeAll.onclick = () => clearCart();

  labelTitle.innerText = `Total Bill: $ ${amount}`;
  checkout.innerText = 'Checkout';
  removeAll.innerText = 'Clear Cart';
  
  label.appendChild(labelTitle);
  label.appendChild(checkout);
  label.appendChild(removeAll);
}

calculation();
generateCartItems();
totalAmount();