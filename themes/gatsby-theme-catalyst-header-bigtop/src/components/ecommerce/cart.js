/** @jsx jsx */
import { jsx, Button } from "theme-ui"

const Cart = () => {
  return (
    <div sx={{ gridArea: "cart" }}>
      <Button
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
      </Button>
    </div>
  )
}

export default Cart
