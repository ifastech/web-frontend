import React from "react";
import { Formik } from "formik";
import BlackHorizontalBar from "../../components/BlackHorizontalBar";
import DetailCard from "../../components/DetailCard";
import UsersTable from "../../components/UserTable";
import NotificationTestForm from "../../components/NotificationTestForm";
import { Stack, Typography, TextField, Button, styled } from "@mui/material";
import "@fontsource/inter";

const users = [
  {
    userID: "1",
    email: "user1@gamil.com",
    firstName: "First",
    lastName: "Last",
  },
  {
    userID: "1",
    email: "user1@gamil.com",
    firstName: "First",
    lastName: "Last",
  },
  {
    userID: "1",
    email: "user1@gamil.com",
    firstName: "First",
    lastName: "Last",
  },
  {
    userID: "1",
    email: "user1@gamil.com",
    firstName: "First",
    lastName: "Last",
  },
  {
    userID: "1",
    email: "user1@gamil.com",
    firstName: "First",
    lastName: "Last",
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
          <UsersTable users={users}></UsersTable>
        </div>
      </Stack>
    </React.Fragment>
  );
}
