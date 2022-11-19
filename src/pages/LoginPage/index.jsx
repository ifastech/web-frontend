import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import CircularProgress from "@mui/material/CircularProgress";
import { Formik } from "formik";
import { styled } from "@mui/system";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import LOGIN_IMAGE from "../../assets/login.svg";
import { Stack } from "@mui/material";
import HeightBox from "../../components/HeightBox";
import * as Yup from "yup";
import SnackBarComponent from "../../components/SnackBarComponent";
import BlackHorizontalBar from "../../components/BlackHorizontalBar";
import "@fontsource/inter";
import api from "../../api";
import { TOKEN, USER_DETAILS } from "../../constants";

const CustomTextField = styled(TextField)({
  width: 350,
});

const CustomButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#6C63FF",
  fontFamily: "Inter",
  fontSize: 15,
  fontWeight: 700,
  "&:hover": {
    backgroundColor: "#5C63FF",
  },
}));

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required()
    .email("Must be a valid email")
    .label("email")
    .min(3)
    .max(36),
  password: Yup.string().required().min(8).max(15).label("Password"),
});

export default function SignIn() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [snackMessage, setSnackMessage] = useState({
    type: "success",
    message: "",
  });

  async function loginUser(values) {
    try {
      setLoading(true);
      const response = await api.user.signinUser(values);
      if (response?.data?.status === 200) {
        const user = response?.data?.data?.user;
        localStorage.setItem(USER_DETAILS, JSON.stringify(user));
        localStorage.setItem(TOKEN, "Bearer " + response?.data?.data?.token);
        console.log("Response is: ", response);
        navigate("/dashboard");
      } else {
        setSnackMessage({
          type: "error",
          message: "Invalid username or password",
        });
        setOpenSnackBar(true);
      }
    } catch (error) {
      setSnackMessage({ type: "error", message: "Network error occured" });
      setOpenSnackBar(true);
    }
    setLoading(false);
  }

  return (
    <div style={{ overflowY: "hidden" }}>
      <BlackHorizontalBar phrase="Ninety Camera" />
      <SnackBarComponent
        open={openSnackBar}
        message={snackMessage.message}
        type={snackMessage.type}
        setOpen={setOpenSnackBar}
      />
      <HeightBox height={40} />
      <Stack direction="row" spacing={15}>
        <div style={{ paddingLeft: "100px", paddingTop: 50 }}>
          <h2 style={{ fontSize: 48, fontFamily: "Inter", margin: 0 }}>
            Welcome Back!
          </h2>
          <HeightBox height={30} />
          <Stack direction="column" spacing={2}>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                const data = {
                  email: values.email,
                  password: values.password,
                };
                loginUser(data);
              }}
              validationSchema={validationSchema}
            >
              {(formikProps) => {
                const { errors, handleSubmit, handleChange, touched } =
                  formikProps;

                return (
                  <React.Fragment>
                    <CustomTextField
                      label="Email"
                      variant="outlined"
                      error={errors.email && touched.email}
                      helperText={errors.email || ""}
                      onChange={(event) => handleChange("email")(event)}
                    />

                    <CustomTextField
                      label="Password"
                      variant="outlined"
                      type="password"
                      error={errors.password && touched.password}
                      helperText={errors.password || ""}
                      onChange={(event) => handleChange("password")(event)}
                    />

                    <CustomButton
                      type="submit"
                      variant="contained"
                      size="large"
                      onClick={handleSubmit}
                      disabled={loading}
                      sx={{ backgroundColor: "#6C63FF" }}
                    >
                      {loading ? <CircularProgress /> : "Sign In"}
                    </CustomButton>
                  </React.Fragment>
                );
              }}
            </Formik>
          </Stack>

          <HeightBox height={15} />
        </div>
        <div style={{ padding: 100 }}>
          <img src={LOGIN_IMAGE} alt="" style={{ width: "40vw" }} />
        </div>
      </Stack>
    </div>
  );
}
