import React from "react"

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      href="https://fonts.googleapis.com/css2?family=Sen&display=swap"
      rel="stylesheet"
    />,
  ])
}
