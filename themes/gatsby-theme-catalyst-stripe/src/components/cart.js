/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useShoppingCart, formatCurrencyString } from "use-shopping-cart"

const Cart = () => {
  const {
    redirectToCheckout,
    cartCount,
    clearCart,
    cartDetails,
    formattedTotalPrice,
  } = useShoppingCart()

  const handleCheckout = async (event) => {
    event.preventDefault()

    const response = await fetch("/.netlify/functions/create-session", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cartDetails),
    })
      .then((res) => {
        return res.json()
      })
      .catch((error) => console.log(error))

    redirectToCheckout({ sessionId: response.sessionId })
  }

  return (
    <div>
      <Styled.h2>Cart</Styled.h2>
      <p>Number of Items: {cartCount}</p>
      <p>Total: {formattedTotalPrice}</p>
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={() => clearCart()}>Remove all items</button>
    </div>
  )
}

export default Cart
