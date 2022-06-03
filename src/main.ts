import BasketItem from "./interfaces/basketItem.interface.js";

import { shopItemsData } from "./Data.js";

const shop = document.getElementById('shop') as HTMLDivElement;

const basket: BasketItem[] = JSON.parse(localStorage.getItem('data') || '[]');

const generateShop = (): HTMLDivElement[] => {
  const shopItems = [] as HTMLDivElement[];

  shopItemsData.map(({id, name, price, desc, img}) => {
    const item = document.createElement('div');
    const image = document.createElement('img');
    const details = document.createElement('div');
    const title = document.createElement('h3');
    const description = document.createElement('p');
    const priceQuantity = document.createElement('div');
    const priceItem = document.createElement('h2');
    const buttons = document.createElement('div');
    const buttonMinus = document.createElement('i');
    const quantity = document.createElement('div');
    const buttonPlus = document.createElement('i');

    item.id = `product-id-${id}`;
    item.classList.add('item');
    details.classList.add('details');
    priceQuantity.classList.add('price-quantity');
    buttons.classList.add('buttons');
    buttonMinus.classList.add('bi', 'bi-dash-lg');
    quantity.id = id;
    quantity.classList.add('quantity');
    buttonPlus.classList.add('bi', 'bi-plus-lg');

    image.src = img;
    title.innerText = name;
    description.innerText = desc;
    priceItem.innerText = `$${price}`;
    quantity.innerText = '0';
    
    buttonMinus.onclick = () => decrement(id);
    buttonPlus.onclick = () => increment(id);

    item.appendChild(image);
    item.appendChild(details);
    details.appendChild(title);
    details.appendChild(description);
    details.appendChild(priceQuantity);
    priceQuantity.appendChild(priceItem);
    priceQuantity.appendChild(buttons);
    buttons.appendChild(buttonMinus);
    buttons.appendChild(quantity);
    buttons.appendChild(buttonPlus);

    shopItems.push(item);
  });

  return shopItems;
}

const items = generateShop();

shop.append(...items);

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

  updateLocalStorage(id);
}

const decrement = (id: string): void => {
  const search = basket.find(item => item.id === id);

  if (search?.item === 1) {
    basket.splice(basket.indexOf(search), 1);
  } else if (search) {
    search.item--;
  }

  updateLocalStorage(id);
}

const updateLocalStorage = (id: string): void => {
  localStorage.setItem('data', JSON.stringify(basket));

  update(id);
}

const update = (id: string): void => {
  const quantity = document.getElementById(id) as HTMLDivElement;
  const search = basket.find(item => item.id === id);

  if (search) {
    quantity.innerText = search.item.toString();
  } else {
    quantity.innerText = '0';
  }

  calculation();
}

const calculation = (): void => {
  const cartIcon = document.getElementById('cartAmount') as HTMLDivElement;
  let sum = 0;

  basket.map(item => sum += item.item);

  cartIcon.innerText = sum.toString();
}

const retrieveData = (): void => {
  basket.map(({id}) => {
    update(id);
  });
}

retrieveData();
