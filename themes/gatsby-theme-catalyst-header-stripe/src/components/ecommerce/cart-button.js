/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { useShoppingCart } from "use-shopping-cart"
import Cart from "./cart"
import { HiOutlineShoppingBag } from "react-icons/hi"

const CartButton = () => {
  const { cartCount, handleCartClick, shouldDisplayCart } = useShoppingCart()
  const hasItems = cartCount > 0

  return (
    <div sx={{ gridArea: "cartButton", position: "fixed", top: 10, right: 10 }}>
      <Button
        onClick={handleCartClick}
        sx={{
          color: "text",
          bg: "transparent",
          py: 0,
          px: 2,
          display: "flex",
          alignItems: "center",
          cursor: "pointer",
          position: "relative",
        }}
      >
        <HiOutlineShoppingBag sx={{ fontSize: 4 }} />
        {hasItems && (
          <div
            sx={{
              fontSize: 0,
              height: "22px",
              width: "22px",
              borderRadius: "9999em",
              color: "white",
              bg: "primary",
              display: "grid",
              placeItems: "center",
              position: "absolute",
              top: "0px",
              right: "-2px",
            }}
          >
            {cartCount}
          </div>
        )}
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
