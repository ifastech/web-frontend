import React, { useState } from "react";
import { Formik } from "formik";
import { Stack, Typography, TextField, Button, styled } from "@mui/material";
import "@fontsource/inter";
import CircularProgress from "@mui/material/CircularProgress";
import api from "../../api";
import SnackBarComponent from "../../components/SnackBarComponent";

const CustomTextField = styled(TextField)({
  width: 350,
});

const CustomButton = styled(Button)(({ theme }) => ({
  fontSize: 15,
  fontWeight: 700,
  fontFamily: "Inter",
  backgroundColor: "#6C63FF",
  "&:hover": {
    backgroundColor: "#5C63FF",
  },
}));

export default function NotificationTestForm() {
  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "",
  });

  async function sendNotification(token) {
    const tokens = [token];
    setLoading(true);

    try {
      const response = await api.system.sendNotification(tokens);

      if (response?.status === 200) {
        setSnackMessage({
          type: "success",
          message: "Notification sended succesfully",
        });
        setOpenSnackBar(true);
      } else {
        setSnackMessage({
          type: "error",
          message: "Error occured in sending the notification",
        });
        setOpenSnackBar(true);
      }
    } catch (error) {
      setSnackMessage({
        type: "error",
        message: "Error occured in sending the notification",
      });
      setOpenSnackBar(true);
    }
    setLoading(false);
  }

  return (
    <React.Fragment>
      <SnackBarComponent
        open={openSnackBar}
        message={snackMessage.message}
        type={snackMessage.type}
        setOpen={setOpenSnackBar}
      />
      <Formik
        initialValues={{ deviceId: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.deviceId) {
            errors.deviceId = "Required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          sendNotification(values.deviceId);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <Stack direction="row" justifyContent="center" spacing={2}>
              <Typography
                sx={{
                  height: 55,
                  fontSize: 30,
                  fontWeight: 700,
                  borderRadius: 1,
                  fontFamily: "Inter",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Notification Test
              </Typography>
              <CustomTextField
                id="deviceId"
                label="Device Id"
                variant="outlined"
                type="text"
                name="deviceId"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.deviceId}
                error={errors.deviceId && touched.deviceId && errors.deviceId}
                helperText={errors.deviceId || ""}
              />

              <CustomButton
                type="submit"
                variant="contained"
                onClick={handleSubmit}
                disabled={loading}
                sx={{
                  background: "#6C63FF",
                  width: "20%",
                  height: 55,
                }}
              >
                {loading ? <CircularProgress /> : "Send Notification"}
              </CustomButton>
            </Stack>
          </form>
        )}
      </Formik>
    </React.Fragment>
  );
}
