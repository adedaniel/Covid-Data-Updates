import React from "react"
import { colors } from "./styles/styles"

export const DefaultButton = ({
  children,
  text,
  color,
  padding,
  width,
  onClick,
  borderRadius,
  font,
}) => {
  return (
    <button type="button" className="btn bgDefaultButton" onClick={onClick}>
      {children || text}
      <style jsx>
        {`
          .bgDefaultButton {
            outline: none !important;
            box-shadow: none;
            border-radius: ${borderRadius || "25px"}; 
            background-color: ${color === "secondary"
            ? colors.secondary
            : colors.primary};
            color: white;
            width: ${width || "inherit"};
            padding: ${padding};
            font-size: ${font || "initial"};
          }
        `}
      </style>
    </button>
  )
}
export const OutlineButton = ({
  children,
  text,
  color,
  padding,
  width,
  onClick,
  borderRadius,
  font,
}) => {
  return (
    <button type="button" className="btn bgOutlineButton" onClick={onClick}>
      {children || text}
      <style jsx>
        {`
          .bgOutlineButton {
            outline: none !important;
            box-shadow: none;
            border-radius: ${borderRadius || "25px"}; 
            color: ${color === "secondary" ? colors.secondary : colors.primary};
            border-color: ${color === "secondary"
            ? colors.secondary
            : colors.primary};
            padding: ${padding};
            font-size: ${font || "initial"};
            width: ${width || "inherit"};
            background-color: transparent;
          }
          .bgOutlineButton:hover {
            color: ${colors.white};
            background-color: ${color === "secondary"
            ? colors.secondary
            : colors.primary};
          }
        `}
      </style>
    </button>
  )
}
