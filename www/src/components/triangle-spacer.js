/** @jsx jsx */
import { jsx } from "theme-ui"
import { MdChangeHistory } from "react-icons/md"

const Triangle = () => {
  return (
    <div
      sx={{
        my: 4,
        display: "grid",
        placeItems: "center",
        fontSize: 4,
      }}
    >
      <MdChangeHistory />
    </div>
  )
}

export default Triangle
