/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { useShoppingCart } from "use-shopping-cart"
import Cart from "./cart"

const CartButton = () => {
  const { cartCount, handleCartClick, shouldDisplayCart } = useShoppingCart()

  return (
    <div sx={{ gridArea: "cart", position: "fixed", top: 10, right: 10 }}>
      <Button
        onClick={handleCartClick}
        sx={{
          color: "text",
          bg: "transparent",
          py: 0,
          px: 2,
          display: "flex",
          alignItems: "center",
        }}
      >
        Cart
        <span
          sx={{
            bg: "text",
            color: "background",
            borderRadius: "9999em",
            width: "26px",
            height: "26px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            ml: 1,
          }}
        >
          {cartCount}
        </span>
      </Button>
      {shouldDisplayCart && (
        <div
          sx={{
            bg: "muted",
            position: "absolute",
            top: 50,
            right: 0,
            zIndex: "10000",
            width: "300px",
          }}
        >
          <Cart />
        </div>
      )}
    </div>
  )
}

export default CartButton
