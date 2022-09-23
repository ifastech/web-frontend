import React from "react";
import { Stack } from "@mui/material";
import "@fontsource/inter";

export default function DetailCard(props) {
  const bgColor = props.color;
  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: 200,
        width: 400,
        color: "White",
        borderRadius: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Stack direction="column" spacing={2}>
        <div
          style={{
            width: "100%",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: 25,
            justifyContent: "center",
          }}
        >
          {props.phrase}
        </div>
        <div
          style={{
            width: "100%",
            fontFamily: "Inter",
            fontStyle: "normal",
            fontWeight: 700,
            fontSize: 40,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {props.amount}
        </div>
      </Stack>
    </div>
  );
}
