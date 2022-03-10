import axios from "axios";
export const GET_SHOPS = "GET_SHOPS";
export const GET_DETAIL_PRODUCT = "GET_DETAIL_PRODUCT";
export const SEARCH_BY_NAME = "SEARCH_BY_NAME";
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_PRODUCTS_SHOP = "GET_PRODUCTS_SHOP";
export const RESET = "RESET";
export const LOADING = "LOADING";
export const POST_REVIEW = "POST_REVIEW";
export const POST_PRODUCTS = "POST_PRODUCTS";
export const FILTER_BY_CATEGORIES = 'FILTER_BY_CATEGORIES'
export const FILTER_BY_DISCOUNT = 'FILTER_BY_DISCOUNT'
export const POST_NEW_SHOP = "POST_NEW_SHOP";


export const getShops = () => async (dispatch) => {
  try {
    const allShops = await axios.get("https://back-end-prueba.herokuapp.com/shops");
    dispatch({
      type: GET_SHOPS,
      payload: allShops.data,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getallproducts = (page) => async (dispatch) => {
  try {
    const allproducts = await axios.get(
      `https://back-end-prueba.herokuapp.com/products?page=${page}`
    );
    // console.log(allproducts);

    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: allproducts.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDetailProduct = (id) => async (dispatch) => {
  try {
    const detailProduct = await axios.get(
      `https://back-end-prueba.herokuapp.com/products?id=${id}`
    );
    dispatch({
      type: GET_DETAIL_PRODUCT,
      payload: detailProduct.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const searchByName = (nameoffood) => async (dispatch) => {
  try {
    const found_product = await axios.get(
      `https://back-end-prueba.herokuapp.com/products?name=${nameoffood}`
    );
    dispatch({
      type: SEARCH_BY_NAME,
      payload: found_product.data,
    });
    // console.log(found_product.data);
  } catch (error) {
    console.log(error);
  }
};

export const postproducts = (input) => {
  return async () => {
    try {
      await axios.post(`https://back-end-prueba.herokuapp.com/product`, input);
    } catch (error) {
      console.log(error);
    }
  };
};
export const NewCategory = () => {
  return async () => {
    const name = prompt("save New Category ");
    await axios.post("https://back-end-prueba.herokuapp.com/category", {
      name,
    });
  };
};

export const postNewShop = (newShop) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://back-end-prueba.herokuapp.com/shop",
      newShop
    );
    dispatch({
      type: POST_NEW_SHOP,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(
      "https://back-end-prueba.herokuapp.com/categories"
    );
    dispatch({
      type: GET_CATEGORIES,
      payload: categories.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getProductShop = (id) => async (dispatch) => {
  try {
    const products = await axios.get(
      `https://back-end-prueba.herokuapp.com/productShop/${id}`
    );
    dispatch({
      type: GET_PRODUCTS_SHOP,
      payload: products.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const reset = () => (dispatch) => {
  dispatch({
    type: RESET,
  });
};

export const loading = () => (dispatch) => {
  dispatch({
    type: LOADING,
  });
};

//  - - - - POST/REVIEWS - - - -
export const postReview = (review) => async (dispatch) => {
  try {
    const response = await axios.post(
      "https://back-end-prueba.herokuapp.com/review",
      review
    );
    dispatch({
      type: POST_REVIEW,
      payload: response.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export function filterProductsByCategories(payload) {
  return {
    type: FILTER_BY_CATEGORIES,
    payload,
  };
}
export function filterByDiscount(payload) {
  return {
    type: FILTER_BY_DISCOUNT,
    payload
  }
}

export const deleteProduct = (id) => async () => {
  try {
    await axios.delete(
      `https://back-end-prueba.herokuapp.com/product/delete/${id}`
    );
  } catch (error) {
    console.error(error);
  }
};
