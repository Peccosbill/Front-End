import {
  GET_SHOPS,
  GET_DETAIL_PRODUCT,
  SEARCH_BY_NAME,
  GET_ALL_PRODUCTS,
  GET_CATEGORIES,
  GET_PRODUCTS_SHOP,
  RESET,
  LOADING,
  POST_NEW_SHOP,
  GET_DATA_USER,
  GET_SHOPS_ID,
  GET_ALL_USERS,
  LOADING_PANEL,
  GET_NAME_OF_SHOP,
} from "../actions";

const initialStore = {
  shop: [],
  shops: [],
  productsloaded: [],
  allproducts: [],
  detailProduct: [],
  categories: [],
<<<<<<< HEAD
  postnewShop: [],
=======
  productShop: [],
  postnewShop: [],
  dataUser: {},
  allUser: [],
  nameOfShop: "",
>>>>>>> 40165b75c64ac26cf3230a2cf0225626c6f874cd
  isLoading: true,
  loadingPanel: true,
};

export default function reducer(state = initialStore, { type, payload }) {
  switch (type) {
<<<<<<< HEAD
=======
    case GET_SHOPS:
      return {
        ...state,
        shops: payload,
        isLoading: false,
      };
    case GET_SHOPS_ID:
      return {
        ...state,
        shop: payload,
      };
>>>>>>> 40165b75c64ac26cf3230a2cf0225626c6f874cd
    case GET_ALL_PRODUCTS:
      return {
        ...state,
        productsloaded: payload,
        isLoading: false,
      };
    case GET_DATA_USER:
      return {
        ...state,
        dataUser: payload.user,
        loadingPanel: false,
      };
    case GET_NAME_OF_SHOP:
      return {
        ...state,
        nameOfShop: payload,
      };
    case GET_DETAIL_PRODUCT:
      return {
        ...state,
        detailProduct: payload,
        isLoading: false,
      };
    case SEARCH_BY_NAME:
      return {
        ...state,
        productsloaded: payload,
      };
    case POST_NEW_SHOP:
      return {
        ...state,
        postnewShop: payload,
      };
    case GET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case GET_PRODUCTS_SHOP:
      return {
        ...state,
        productShop: payload,
        isLoading: false,
      };
    case GET_ALL_USERS:
      return {
        ...state,
        allUser: payload,
        isLoading: false,
        loadingPanel: false,
      }
    case RESET:
      return {
        ...state,
        detailProduct: [],
        isLoading: true,
      };
    case LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case LOADING_PANEL:
      return {
        ...state,
        loadingPanel: true,
      }
    default:
      return state;
  }
}
