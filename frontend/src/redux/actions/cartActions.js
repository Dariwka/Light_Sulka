import * as actionTypes from "../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty, total) => async (dispatch, getState) => {
  const { data } = await axios.get(
    `https://shielded-anchorage-73785.herokuapp.com/api/products/${id}`,
    {
      headers: {
        accessToken: true,
        "Access-Control-Allow-Headers": "*",
      },
    }
  );
  console.log("total", total);

  dispatch({
    type: actionTypes.ADD_TO_CART,
    payload: {
      product: data._id,
      name: data.name,
      calories: data.calories,
      imageUrl: data.imageUrl,
      countInStock: data.countInStock,
      qty,
      total,
    },
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cart", JSON.stringify(getState().cart.cartItems));
};
