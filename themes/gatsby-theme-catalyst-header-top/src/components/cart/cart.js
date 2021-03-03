/** @jsx jsx */
import { jsx, Styled, Button } from "theme-ui"
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
    <div
      sx={{
        height: "100vh",
        width: "300px",
        position: "fixed",
        top: 0,
        right: 0,
        zIndex: "10000",
        bg: "background",
      }}
    >
      <Button onClick={handleCloseCart}>Close cart</Button>
      <Styled.h2>Shopping Cart</Styled.h2>
      <Styled.p>Number of Items: {cartCount}</Styled.p>

      <Styled.p>Total: {formattedTotalPrice}</Styled.p>
      <Button onClick={handleCheckout}>Checkout</Button>
      <Button onClick={() => clearCart()}>Remove all items</Button>
    </div>
  )
}

export default Cart
