const menu = [
  {
    id: 1,
    title: "Shawarma",
    category: "Shawarma",
    price: 2200,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 2,
    title: "Shawarma Grande",
    category: "Shawarma",
    price: 2700,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto. `,
  },
  {
    id: 3,
    title: "Shawarma Al Plato",
    category: "Shawarma",
    price: 3000,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 4,
    title: "Shawarma Al Salchicha",
    category: "Shawarma",
    price: 2000,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto. `,
  },
  {
    id: 5,
    title: "Shawarma Al Salchicha Grande",
    category: "Shawarma",
    price: 2300,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 6,
    title: "Choripán",
    category: "Vegan",
    price: 1500,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 7,
    title: "Sándwich De Bondiola",
    category: "Vegan",
    price: 1700,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 8,
    title: "Sándwich De Pollo",
    category: "Vegan",
    price: 1600,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 9,
    title: "Hamburguesa De Casa",
    category: "Hamburguesas",
    price: 1700,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 10,
    title: "Hamburguesa De Shawarma",
    category: "Hamburguesas",
    price: 1800,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 11,
    title: "Papas Fritas",
    category: "Entrantes",
    price: 1000,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 12,
    title: "Papas Fritas Con Salchica",
    category: "Entrantes",
    price: 1300,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 13,
    title: "Gaseosa",
    category: "Bebidas",
    price: 600,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 14,
    title: "Cerveza Lata",
    category: "Bebidas",
    price: 900,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
  {
    id: 15,
    title: "Botella De Vino",
    category: "Bebidas",
    price: 2000,
    img:
      "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
    desc: `Carne, Pollo, Mixto.`,
  },
];

const btnContainerDOM = document.querySelector(".btn-container");
const menuContainerDOM = document.querySelector(".section-center", ".row");
const btnList = ['All', 'Shawarma', 'Vegan', 'Hamburguesas', 'Entrantes', 'Bebidas'];

// Adding Menu Buttons - with createElement
btnList.forEach((value) => {
  let button = document.createElement("button");
  button.innerHTML = value;
  button.classList.add("btn", "btn-outline-dark", "btn-item", "col-sm-3", "ms-1","mt-1");
  button.setAttribute("data-id", value);
  button.addEventListener('click', buttonClick);
  btnContainerDOM.append(button);
});

// Clicking Menu Buttons 
function buttonClick(){
  const result = (this.getAttribute("data-id") == "All") ? menu : menu.filter((item) => {
    return item.category == this.getAttribute("data-id");
  });
  addMenu(result);
};

// Adding Menu Items - with Template literals
function addMenu(showMenu) {
  menuContainerDOM.innerHTML = ""; // container clear
  for (let item in showMenu) {
    let menuItem = document.createElement("div");
    menuItem.classList.add("menu-items", "col-lg-6", "col-sm-12");
    menuItem.innerHTML = `<img src="${showMenu[item].img}" alt="${showMenu[item].title}" class="photo">
    <div class="menu-info">
      <div class="menu-title">
        <h4>${showMenu[item].title}</h4>
        <h4 class="price">${showMenu[item].price}$</h4>
      </div>
      <div class="menu-text">
      ${showMenu[item].desc}
      </div>
    </div>`
    menuContainerDOM.append(menuItem);
  }
};

// Show all items at startup
addMenu(menu);