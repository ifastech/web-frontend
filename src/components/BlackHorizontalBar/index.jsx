import React from "react";
import { Button } from "@mui/material";
import "@fontsource/inter";
import { useNavigate } from "react-router-dom";
import { TOKEN } from "../../constants";
//
export default function BlackHorizontalBar(props) {
  const navigate = useNavigate();
  const { phrase } = props;
  return (
    <div
      style={{
        height: 70,
        backgroundColor: "#2F2E41",
        color: "white",
        fontSize: 30,
        fontFamily: "inter",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: 48,
        paddingLeft: 50,
        display: "flex",
        alignItems: "center",
        position: "sticky",
        top: "0%",

        // justifyContent: "center",
      }}
    >
      {phrase}
      <div style={{ flex: 1, flexDirection: "row" }} />
      {localStorage.getItem(TOKEN) && (
        <Button
          variant="contained"
          sx={{
            background: "#6C63FF",
            width: "8%",
            height: "60%",
            align: "right",
          }}
          onClick={() => {
            localStorage.clear();
            navigate("/");
          }}
        >
          Log out
        </Button>
      )}
      <div style={{ width: 50 }} />
    </div>
  );
}
