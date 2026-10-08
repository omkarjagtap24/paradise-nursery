import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./CartSlice";

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 24.99,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    name: "Peace Lily",
    price: 19.99,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    name: "Rubber Plant",
    price: 22.99,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1597055181300-e3633a917c4d?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 4,
    name: "Fiddle Leaf Fig",
    price: 29.99,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 5,
    name: "Snake Plant",
    price: 18.99,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1593482892290-f54927ae2e8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 6,
    name: "Calathea Orbifolia",
    price: 26.99,
    category: "Indoor Plants",
    image:
      "https://images.unsplash.com/photo-1601985705806-5b1c0f9b3f7f?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 7,
    name: "Aloe Vera",
    price: 14.99,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 8,
    name: "Echeveria",
    price: 12.99,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 9,
    name: "Haworthia",
    price: 13.99,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1520412099551-62b6bafebc8c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 10,
    name: "Jade Plant",
    price: 16.99,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1497250681960-ef046c08a56e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 11,
    name: "Zebra Haworthia",
    price: 15.99,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 12,
    name: "String of Pearls",
    price: 17.99,
    category: "Succulents",
    image:
      "https://images.unsplash.com/photo-1459156212016-c812468e2115?auto=format&fit=crop&w=600&q=80",
  },

  {
    id: 13,
    name: "Spider Plant",
    price: 17.99,
    category: "Air-Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1572688484438-313a6e50c333?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 14,
    name: "Boston Fern",
    price: 21.99,
    category: "Air-Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1595231712325-9f4f6d6f3e34?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 15,
    name: "Bamboo Palm",
    price: 27.99,
    category: "Air-Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1525498128493-380d1990a112?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 16,
    name: "Chinese Evergreen",
    price: 23.99,
    category: "Air-Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 17,
    name: "Dracaena",
    price: 25.99,
    category: "Air-Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 18,
    name: "Areca Palm",
    price: 28.99,
    category: "Air-Purifying Plants",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=600&q=80",
  },
];

function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(products.map((product) => product.category))];

  const isInCart = (productId) =>
    cartItems.some((item) => item.id === productId);

  return (
    <main className="product-page">
      <h1>Our Plants</h1>

      {categories.map((category) => (
        <section className="product-category" key={category}>
          <h2>{category}</h2>

          <div className="product-grid">
            {products
              .filter((product) => product.category === category)
              .map((product) => (
                <article className="product-card" key={product.id}>
                  <img src={product.image} alt={product.name} />

                  <div className="product-card-content">
                    <h3>{product.name}</h3>
                    <p>${product.price.toFixed(2)}</p>

                    <button
                      onClick={() => dispatch(addToCart(product))}
                      disabled={isInCart(product.id)}
                    >
                      {isInCart(product.id) ? "Added to Cart" : "Add to Cart"}
                    </button>
                  </div>
                </article>
              ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
