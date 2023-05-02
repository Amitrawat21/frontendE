import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";

const Container = styled.div`
  padding: 2zzzzzz0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Products = ({ cat, filters, sort }) => {
  
  console.log(cat, filters, sort);
  const [products, setproducts] = useState([]);
  const [filterproducts, setfilterproducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setproducts(res.data);
        console.log(products , "this is unique car")
      } catch (err) {}
    };
    getProducts();
  }, [cat]);
  // console.log(products , "this is product")


  useEffect(() => {
    cat &&
      setfilterproducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [cat, filters, products]);
  console.log(filterproducts , "this  is filterproduct")


  useEffect(() => {
    if (sort === "newest") {
      setfilterproducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setfilterproducts((prev) => [...prev].sort((a, b) => a.price - b.price));
    } else {
      setfilterproducts((prev) => [...prev].sort((a, b) => b.price - a.price));
    }
  }, [sort]);

  return (
    <Container>
      {cat
        ? filterproducts.map((item) => <Product item={item} key={item.id} />)
        : products
            .slice(0, 8)
            .map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;
