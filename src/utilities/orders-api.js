import { getToken } from './users-services';


const BASE_URL = "/api/orders"


  export function getCart() {
      return fetch(`${BASE_URL}/cart`, getOptionsGet()).then(res => res.json())
  }

  export function addItemToCart(itemId) {
      const option = getOptionsPost()
      return fetch(`${BASE_URL}/cart/items/${itemId}`, option).then(res => res.json())
  }

  export function setItemQtyInCart(itemId, newQty) {
      const options = getOptionsPut()
      options.body = JSON.stringify({ itemId, newQty })
      return fetch(`${BASE_URL}/cart/qty`, options).then(res => res.json())
  }

  export function checkout() {
      const options = getOptionsPost()
      return fetch(`${BASE_URL}/cart/checkout`, options).then(res => res.json())
  }

  export function getOrderHistory() {
      const options = getOptionsGet()
      return fetch(`${BASE_URL}/history`, options).then(res => res.json())
  }

  // Helper Functions

function getOptionsGet() {
    return {
      headers: {
        Authorization: `Bearer ${getToken()}`
      }
    };
  }
  
  function getOptionsPost() {
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
      }
    };
  }
  
  function getOptionsPut() {
    return {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
      }
    };
  }
  
  