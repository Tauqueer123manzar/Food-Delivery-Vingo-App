import React from "react";
import Footer from "../components/Footer";

const menuItems = [
  {
    id: 1,
    name: "Margherita Pizza",
    price: "$12.99",
    category: "Pizza",
    rating: 4.8,
    img: "https://tse4.mm.bing.net/th/id/OIP.rzEJsE2bmMijZS-j5rL8nwHaFj?pid=Api&P=0&h=180"
  },
  {
    id: 2,
    name: "Cheese Burger",
    price: "$9.49",
    category: "Burger",
    rating: 4.6,
    img: "https://images.unsplash.com/photo-1550547660-d9450f859349"
  },
  {
    id: 3,
    name: "Chicken Biryani",
    price: "$14.49",
    category: "Indian",
    rating: 4.9,
    img: "https://tse1.mm.bing.net/th/id/OIP.GRHBsncJdSxzFtVgf4njywHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 4,
    name: "Cold Coffee",
    price: "$4.99",
    category: "Drinks",
    rating: 4.7,
    img: "https://images.unsplash.com/photo-1498804103079-a6351b050096"
  },
  {
     id: 5,
    name: "Mutton Biryani",
    price: "$8.99",
    category: "Eat",
    rating: 4.7,
    img: "https://tse3.mm.bing.net/th/id/OIP.RV0xeyi7wiSnLxFdmzuTMAHaDt?pid=Api&P=0&h=180"
  },
  {
     id: 6,
    name: "Chicken Shawarma",
    price: "$7.99",
    category: "Eat",
    rating: 4.7,
    img: "https://tse4.mm.bing.net/th/id/OIP.ETWaZrpkjtqRlbSFYqZgcQHaHa?pid=Api&P=0&h=180"
  },
  {
     id: 7,
    name: "Chicken Chilly",
    price: "$4.99",
    category: "Starter",
    rating: 4.7,
    img: "https://tse2.mm.bing.net/th/id/OIP.Wg4_nx9zmzSUn7YZ_w-NCwHaEK?pid=Api&P=0&h=180"
  },
  {
     id: 8,
    name: "Chicken Manchurian",
    price: "$3.99",
    category: "Starter",
    rating: 4.7,
    img: "https://tse1.mm.bing.net/th/id/OIP.9WdlCQogCcZbJCkcJkPnegHaE6?pid=Api&P=0&h=180"
  },
  {
     id: 9,
    name: "Chicken Lollipop",
    price: "$10.99",
    category: "Eat",
    rating: 4.7,
    img: "https://tse2.mm.bing.net/th/id/OIP.hGRHhEcSigOczFUxYWwaRQHaFj?pid=Api&P=0&h=180"
  },
  {
     id: 10,
    name: "Chicken Fried Rice",
    price: "$6.99",
    category: "Eat",
    rating: 4.7,
    img: "https://tse3.mm.bing.net/th/id/OIP.pOMmh4anxrg2a8yvpC2VAwHaE8?pid=Api&P=0&h=180"
  },
  {
     id: 11,
    name: "Chicken 65",
    price: "$7.99",
    category: "Eat",
    rating: 4.7,
    img: "https://tse2.mm.bing.net/th/id/OIP.bBifw2tt7qQ8nqPRSGXX0QHaE8?pid=Api&P=0&h=180"
  }
];

const Menu = () => {
  return (
    <>
    <div className="py-16 px-6 md:px-20 bg-gray-50 mt-10">
      <h2 className="text-4xl font-bold text-center text-orange-500 mb-4">
        Our Delicious Menu
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
        Choose from a variety of freshly prepared meals delivered hot & fast to your doorstep!
      </p>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
              />

              <span className="absolute top-3 left-3 px-3 py-1 text-sm font-semibold bg-orange-600 text-white rounded-full">
                {item.category}
              </span>
            </div>

            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>

              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_, index) => (
                  <span
                    key={index}
                    className={`text-yellow-400 ${
                      index < Math.round(item.rating) ? "opacity-100" : "opacity-40"
                    }`}
                  >
                    ★
                  </span>
                ))}
                <span className="text-sm text-gray-500 ml-1">{item.rating}</span>
              </div>

              <div className="flex items-center justify-between mt-4">
                <p className="text-xl font-bold text-orange-600">{item.price}</p>
                <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div>
        <Footer />
    </div>
    </>
  );
};

export default Menu;
