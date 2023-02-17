import React, {useState, useEffect} from "react";
import { StyleSheet, View, TouchableOpacity,ScrollView, ActivityIndicator } from "react-native";
import { Formik } from "formik";
import { uiProps, paths } from "../config";

import {
  AppLogo,
  AppText,
  AppInputField,
  AppButton,
  Screen,
  AppError
} from "../components";


import { validateLogin } from "../utils/Validator";
import authApi from "../api/Auth";
import useAuth from "../auth/useAuth";
import useAsyncTask from "../utils/Hooks/useAsyncTask";


function Login({ navigation}) {
  const auth = useAuth(); 
  const [loginFailed, setLoginFailed] = useState(false);
  const [isLoadingProcess, setIsLoadingProcess] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async (userCredentials) => {
    console.log(userCredentials);
    setIsLoadingProcess(true);
    const result = await authApi.login(userCredentials);
    setIsLoadingProcess(false);
    if (!result.ok) {
      setLoginFailed(true);
      let error = result.data.message || result.data.error || "An unexpected error occurred.";
      setErrorMessage(error);
      console.log('Error message : ', result.data.message)
      return;
    }
    setLoginFailed(false);
    auth.logIn(result);
  };
  useEffect(() => {
    console.log("isLoadingProcess", isLoadingProcess);
  }, [isLoadingProcess]);



  return (
    <Screen>
      <ScrollView style={styles.loginContainer}>
        <AppLogo logo={paths.LOGO_PATH} style={{ marginTop: -30 }} />

        <View style={styles.titleContainer}>
          <AppText style={styles.title}>
            Please Login to enjoy more benefits and we won't let you down.
          </AppText>
          <AppError isError={loginFailed} error={errorMessage} />
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validateLogin}
            onSubmit={handleLogin}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
              isSubmitting,
            }) => (
              <>
                <AppInputField
                  label="Email Address"
                  icon="mail-outline"
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                  autoCapitalize="none"
                  keyboardType="email-address"
                  errorMessage={errors.email}
                  isTouch={touched.email}
                />
                <AppInputField
                  label="Password"
                  icon="lock-closed-outline"
                  onBlur={() => setFieldTouched("password")}
                  onChangeText={handleChange("password")}
                  secureTextEntry
                  autoCapitalize="none"
                  errorMessage={errors.password}
                  isTouch={touched.password}
                />

                <TouchableOpacity>
                  <AppText style={styles.subtext}>Forget Password ?</AppText>
                </TouchableOpacity>
                <AppButton title="Get Started" onPress={handleSubmit}
                />

                {isLoadingProcess && (
                  <ActivityIndicator
                    size="small"
                    color={uiProps.colors.accent}
                  />
                )}

              </>
            )}
          </Formik>

          <View style={styles.btnSection}>
            <AppText>Or simply login with</AppText>
            <View style={{ marginTop: 0 }}>
              <AppButton
                title="Login with Apple"
                style={styles.btnIcon}
                logo="apple"
                bgIcon={uiProps.colors.white}
                textStyle={styles.textApple}
              />
              <AppButton
                title="Login with Google"
                style={styles.lightBtnIcon}
                logo="google"
                bgIcon={uiProps.colors.black}
              />
            </View>

            <View style={styles.alternative}>
              <AppText>Don't have an account ?</AppText>
              <TouchableOpacity onPress={()=>{
                navigation.navigate(paths.SIGNUP)
              }}>
                <AppText style={styles.subtext}>Sign Up</AppText>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: uiProps.colors.primary,
  },
  titleContainer: {
    marginTop: -45,
  },
  title: {
    color: uiProps.colors.white,
    fontSize: uiProps.fontSizes.medium,
    textAlign: "center",
  },
  subtext: {
    color: uiProps.colors.accent,
    textAlign: "right",
  },
  btnIcon: {
    color: uiProps.colors.white,
    flexDirection: "row",
    backgroundColor: uiProps.colors.black,
  },
  lightBtnIcon: {
    color: uiProps.colors.black,
    flexDirection: "row",
    backgroundColor: uiProps.colors.white,
  },
  btnSection: {
    marginTop: 5,
  },
  alternative: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 1,
  },
  textApple: {
    color: uiProps.colors.white,
  },
});

export default Login;
