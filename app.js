// const HeaderEl = document.querySelector("header");

// const NavbarEl = document.querySelector("nav");

// const LinksEl = document.querySelector("#links");

// const AnchorEl = document.querySelectorAll("a");

// const LogoEl = document.querySelector(".logo");

// const CounterEl = document.querySelector("#counter");
// const IncrementEl = document.querySelector("#increment");
// const DecrementEl = document.querySelector("#decrement");

// HeaderEl.style = `
// background-color: blue;
//  margin: 0;
// padding: 20px 0;

// `;
// NavbarEl.style = `

//   width: 100%;
//   max-width: 1200px;
//   margin: 0 auto;
//   padding:0 20px;
//   display:flex;
// justify-content: space-between;

// `;
// LinksEl.style = `
//  display:flex;
//  gap:20px;

// `;
// AnchorEl.forEach((item) => {
//   item.textContent =
//     item.textContent[0].toUpperCase() + item.textContent.slice(1).toLowerCase();
//   item.style = `
//   color:white;
//    text-decoration: none;
//   `;
// });

// LogoEl.textContent = LogoEl.textContent.toUpperCase();

// IncrementEl.addEventListener("click", () => {
//   //   Number(CounterEl.textContent )+= 1;

//   let count = +CounterEl.textContent;
//   count += count < 21;

//   CounterEl.textContent = count;
// });
// DecrementEl.addEventListener("click", () => {
//   //   Number(CounterEl.textContent )+= 1;

//   let count = +CounterEl.textContent;
//   count -= count > 0;
//   CounterEl.textContent = count;
// });

// let products = [
//   { id: 1, name: "iPhone 13", price: 900, inStock: true },
//   { id: 2, name: "Samsung S21", price: 800, inStock: false },
//   { id: 3, name: "Xiaomi Mi 11", price: 600, inStock: true },
//  ];

// function addProduct(id, name, price, inStock) {
//   let newId = products.length > 0 ? products[products.length - 1].id + 1 : 1;

//   // if (products.length > 0) {
//   //   return products[products.length - 1].id + 1;
//   // } else {
//   //   return 1;
//   // }

//   let newProduct = {
//     id: newId,
//     name: name,
//     price: price,
//     inStock: inStock,
//   };

//   products.push(newProduct);
// }

// function updatePrice(id, newPrice) {
//   products = products.map((product) => {
//     if (product.id === id) {
//       return { ...product, price: newPrice };
//     }
//     return product;
//   });
// }

// addProduct("iPhone 14", 1100, true);
// updatePrice(1, 85000);

// console.log(products);
