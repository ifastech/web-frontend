import React, { useState } from "react";
import { Formik } from "formik";
import { Stack, Typography, TextField, Button, styled } from "@mui/material";
import "@fontsource/inter";
import CircularProgress from "@mui/material/CircularProgress";

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
  return (
    <React.Fragment>
      <Formik
        initialValues={{ deviceId: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.deviceId) {
            errors.deviceId = "Required";
          }
          if (!values.message) {
            errors.message = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
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

              <CustomTextField
                id="message"
                label="Message"
                variant="outlined"
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                error={errors.message && touched.message && errors.message}
                helperText={errors.message || ""}
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
