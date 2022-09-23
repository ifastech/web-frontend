import React from "react";
import { Formik } from "formik";
import { Stack, Typography, TextField, Button } from "@mui/material";
import "@fontsource/inter";

export default function NotificationTestForm() {
  return (
    <div className="NotificatonTestForm">
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
              <TextField
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

              <TextField
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

              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                // sx={{ width: "50%", left: "25%", top: "" }}
                sx={{
                  background: "#6C63FF",
                  width: "20%",
                  height: 55,
                }}
                onClick={handleSubmit}
              >
                {" "}
                Send Notification
              </Button>
            </Stack>
          </form>
        )}
      </Formik>
    </div>
  );
}
