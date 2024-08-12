import React, { useContext } from "react";
import "./SingleProduct.css";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import {
  AiFillStar,
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
} from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SingleProduct = () => {
  const {
    state: { store, cart },
    dispatch,
  } = useContext(CartContext);
  const location = useLocation();
  const navigate = useNavigate();

  let getId = location.pathname.split("/")[2];
  const id = parseInt(getId);

  const product = store.find((s) => s.id === id);

  console.log(product);

  const checkProIncart = cart.findIndex((item) => item.id === product.id);

  let availableQty = null;

  if (checkProIncart !== -1) {
    for (const ca of cart) {
      if (ca.id === id) {
        availableQty = ca.qty;
        break;
      }
    }
  }

  const AddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });
    notify();
  };

  function notify() {
    toast("Item added to the Cart");
  }

  return (
    <section className="products-section">
      <div className="single_product-main_container">
        <div className="single_product_container">
          <button className="back-button" onClick={() => navigate(-1)}>
            Go Back
          </button>
          <div className="product-main-details">
            <div className="product-img">
              <img src={product.image} alt="" />
            </div>
            <div className="main-details">
              <p className="pro-name">{product.title}</p>
              <div className="price-starRate">
                <p className="pro-price">${product.price}</p>
                <div className="star-rate">
                  {[...Array(5)].map((_, i) =>
                    product.rating > i ? (
                      <AiFillStar key={i} className="single-start-icons" />
                    ) : (
                      <AiOutlineStar key={i} className="single-start-icons" />
                    )
                  )}
                </div>
              </div>
              <p className="pro-desc">{product.description}</p>
              <div className="product-options">
                <div className="quantity-changer-container">
                  <button
                    className="decress"
                    onClick={() => {
                      dispatch({
                        type: "DECRESS_QTY",
                        proId: product.id,
                      });
                    }}
                  >
                    <AiOutlineMinus />
                  </button>
                  <input
                    type="text"
                    className="quantity"
                    name="value"
                    value={checkProIncart === -1 ? `1` : availableQty}
                    min="1"
                    max="10"
                    readOnly
                  />
                  <button
                    className="incress"
                    onClick={() => {
                      dispatch({
                        type: "INCRESS_QTY",
                        proId: product.id,
                      });
                    }}
                  >
                    <AiOutlinePlus />
                  </button>
                </div>
                <button className="add-cart-btn" onClick={AddToCart}>
                  ADD TO CART
                </button>
                <ToastContainer
                  position="top-right"
                  autoClose={500}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="dark"
                />
              </div>
              <hr />
              <p className="pro-cat">Category : {product.category}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
