import React, { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/itemList";
import Footer from "./Components/TotalAmount";
import AddItem from "./Components/addItem";

function App() {
  const products = [
    {
      // img: "https://m.media-amazon.com/images/I/71VWLNXZjlL._AC_UL640_FMwebp_QL65_.jpg",
      price: 999,
      name: "Watch",
      quantity: 0,
    },
    {
      // img: "https://m.media-amazon.com/images/I/811AxL+qTpL._AC_UL640_FMwebp_QL65_.jpg",
      price: 499,
      name: "Bag",
      quantity: 0,
    },
    {
      // img: "https://m.media-amazon.com/images/I/81U3+6n3s1L._AC_UY436_FMwebp_QL65_.jpg",
      price: 299,
      name: "Book",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  };

  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((products) => {
      products.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  const removeItem = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -=
      newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      price: price,
      name: name,

      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <AddItem addItem={addItem} />
      <section className="container">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </section>
      <Footer totalAmount={totalAmount} resetQuantity={resetQuantity} />
    </>
  );
}

export default App;
