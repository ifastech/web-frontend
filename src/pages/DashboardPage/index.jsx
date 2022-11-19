import React, { useState, useEffect } from "react";
import BlackHorizontalBar from "../../components/BlackHorizontalBar";
import DetailCard from "../../components/DetailCard";
import UsersTable from "../../components/UserTable";
import NotificationTestForm from "../../components/NotificationTestForm";
import { Stack } from "@mui/material";
import "@fontsource/inter";
import api from "../../api";
import { TOKEN } from "../../constants";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const naviagte = useNavigate();
  const [totalDesktopUsers, setTotalDesktopUsers] = useState(0);
  const [totalMobileUsers, setTotalMobileUsers] = useState(0);
  const [totalIntrusions, setTotalIntrusions] = useState(0);
  const [users, setAllUsers] = useState([]);

  async function getData() {
    try {
      const responseDesktop = await api.system.getAllDesktopUsers();
      if (responseDesktop?.data?.status === 200) {
        setTotalDesktopUsers(responseDesktop?.data?.data);
      }
      const responseMobile = await api.system.getAllMobileUsers();
      if (responseMobile?.data?.status === 200) {
        setTotalMobileUsers(responseMobile?.data?.data);
      }
      const responseIntrusion = await api.system.getAllIntrusionCount();
      if (responseIntrusion?.data?.status === 200) {
        setTotalIntrusions(responseIntrusion?.data?.data);
      }
      const allUserRes = await api.system.getAllUsersWithDetails();
      if (allUserRes?.data?.status === 200) {
        setAllUsers(allUserRes?.data?.data);
      }
    } catch (error) {}
  }

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    const value = localStorage.getItem(TOKEN);
    if (!value) {
      naviagte("/");
    }
  }, []);

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
                amount={totalDesktopUsers}
              ></DetailCard>
              <DetailCard
                color="#F50057"
                phrase={"Total Active Mobile Users"}
                amount={totalMobileUsers}
              ></DetailCard>
              <DetailCard
                color="#5df57e"
                phrase={"Total Detected Intrusions"}
                amount={totalIntrusions}
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
