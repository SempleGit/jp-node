const cart = (items = []) => {
  const calculateTotal = () => {
    const currentCart = getCartDetails()
    return currentCart.reduce((accumulator, element) => accumulator + Math.round(Math.ceil(element.quantity * element.price * 100)) / 100, 0);
  }

  const getCartDetails = () => {
    const cartItems = items.map((element) => {
      const obj = Object.assign(element, getShopItem(element.id))
      obj.subtotal = Math.round(Math.ceil(obj.quantity * obj.price * 100))/100;
      return obj;
    });
    return cartItems;
  }

  const addToCart = (item) => {
    const currentItem = getCartItem(item.id)
    if (currentItem)  {
      currentItem.quantity++;
    } else {
      items.push({id: item.id, quantity: 1});
    }
    // Adds item to cart or increments if there already.
    return items;
  }

  const removeOneFromCart = (item) => {
    const currentItem = getCartItem(item.id)
    if (currentItem) {
      currentItem.quantity--;
      if (currentItem.quantity < 1)  {
        items.splice(items.findIndex(element => element.id === item.id), 1);
      }
    } else {
      console.log('not found');
    }
    // Removes 1 item from the cart, if less than 1 item in the cart will call to remove completely.
  }

  const clearCart = () => {
    items.splice(0);
    // Removes all items from cart.
    }
  
  const getCartItem = (itemId) => {
      return items.find(element => itemId === element.id)
    }
  
  const getShopItem = (itemId) => {
      return shopItems.find(element => itemId == element.id);
    }
  
    return {calculateTotal, getCartDetails, addToCart, clearCart, removeOneFromCart};
  };
      
  module.exports = cart;

