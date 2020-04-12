/** @jsx jsx */
import { jsx } from "theme-ui"
import { MdChangeHistory } from "react-icons/md"

export const TriangleVertical = () => {
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
