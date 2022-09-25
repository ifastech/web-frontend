import React from "react";
import { Formik } from "formik";
import BlackHorizontalBar from "../../components/BlackHorizontalBar";
import DetailCard from "../../components/DetailCard";
import UsersTable from "../../components/UserTable";
import NotificationTestForm from "../../components/NotificationTestForm";
import { Stack, Typography, TextField, Button, styled } from "@mui/material";
import "@fontsource/inter";

const cartObjectList = [
  {
    description: "backpack",
    color: "black",
    price: 1500.0,
    shipping: "free",
    initialQuantity: 3,
  },
  {
    description: "backpack",
    color: "black",
    price: 1500.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 452.0,
    shipping: "free",
    initialQuantity: 2,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
  {
    description: "backpack",
    color: "black",
    price: 5200.0,
    shipping: "free",
    initialQuantity: 1,
  },
];



export default function Dashboard() {
  return (
    <React.Fragment>
      <Stack direction="column" spacing={8}>
        <div>
          <Stack direction="column" spacing={8}>
            <BlackHorizontalBar phrase={"Admin Dashboard"} />
            <Stack direction="row" justifyContent="center" spacing={10}>
              <DetailCard
                color="#6C63FF"
                phrase={"Total Active Desktop Users"}
                amount={200}
              ></DetailCard>
              <DetailCard
                color="#F50057"
                phrase={"Total Active Mobile Users"}
                amount={200}
              ></DetailCard>
              <DetailCard
                color="#00FF47"
                phrase={"Total Detected Intrusions"}
                amount={200}
              ></DetailCard>
            </Stack>
            <NotificationTestForm />
          </Stack>
        </div>

        <div
          style={{
            paddingLeft: 100,
            paddingRight: 100,
            paddingBottom: 100,
          }}
        >
          <UsersTable users={cartObjectList}></UsersTable>
        </div>
      </Stack>
    </React.Fragment>
  );
}
