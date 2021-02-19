/** @jsx jsx */
import { jsx, Button } from "theme-ui"
import { useShoppingCart } from "use-shopping-cart"
import Cart from "./cart"
import { Fragment } from "react"
import { HiOutlineShoppingBag } from "react-icons/hi"

const CartButton = () => {
  const { cartCount, handleCartClick, shouldDisplayCart } = useShoppingCart()
  const hasItems = cartCount > 0

  return (
    <Fragment>
      <div
        sx={{
          gridArea: "cartButton",
          gridColumn: "3 / 4",
          gridRow: "1 / 2",
          justifySelf: "center",
          alignSelf: "center",
        }}
      >
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
          <HiOutlineShoppingBag sx={{ fontSize: 3 }} />
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
                top: "-4px",
                right: "-2px",
              }}
            >
              {cartCount}
            </div>
          )}
        </Button>
      </div>
      {shouldDisplayCart && <Cart />}
    </Fragment>
  )
}

export default CartButton
