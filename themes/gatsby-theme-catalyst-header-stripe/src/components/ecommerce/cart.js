/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { useShoppingCart } from "use-shopping-cart"
import { motion } from "framer-motion"

const Cart = () => {
  const {
    redirectToCheckout,
    cartCount,
    clearCart,
    cartDetails,
    formattedTotalPrice,
    handleCloseCart,
    shouldDisplayCart,
  } = useShoppingCart()

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  }

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
    <motion.div
      animate={{ x: -300, opacity: 1 }}
      sx={{
        height: "100vh",
        width: "300px",
        position: "fixed",
        top: "0",
        right: "-300px",
        zIndex: "10000",
        bg: "background",
        opacity: "0",
      }}
    >
      <button onClick={handleCloseCart}>Close cart</button>
      <Styled.h2>Cart</Styled.h2>
      <p>Number of Items: {cartCount}</p>
      <p>Total: {formattedTotalPrice}</p>
      <button onClick={handleCheckout}>Checkout</button>
      <button onClick={() => clearCart()}>Remove all items</button>
    </motion.div>
  )
}

export default Cart
