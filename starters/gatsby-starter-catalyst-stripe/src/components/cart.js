/** @jsx jsx */
import { jsx, Themed, Button } from "theme-ui"
import { useShoppingCart } from "use-shopping-cart"

const Cart = () => {
  const {
    redirectToCheckout,
    cartCount,
    clearCart,
    cartDetails,
    formattedTotalPrice,
    handleCloseCart,
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
      <Button onClick={handleCloseCart}>Close cart</Button>
      <Themed.h2>Shopping Cart</Themed.h2>
      <Themed.p>Number of Items: {cartCount}</Themed.p>
      <Themed.p>Total: {formattedTotalPrice}</Themed.p>
      <Button onClick={handleCheckout}>Checkout</Button>
      <Button onClick={() => clearCart()}>Remove all items</Button>
    </div>
  )
}

export default Cart
