import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { Formik } from "formik";

import { uiProps, paths } from "../config";
import { validateRegister } from "../utils/Validator";
import authApi from "../api/Auth";

import {
  AppLogo,
  AppText,
  AppInputField,
  AppButton,
  Screen,
} from "../components";
import { useContext } from "react";
import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import useAuth from "../auth/useAuth";

function SignUp({ navigation }) {
  const auth = useAuth();
  const [signUpFailed, SetError] = useState(false);
  const [isLoadingProcess, setIsLoadingProcess] = useState(false);
  const [errorMessage, SetErrorMessage] = useState([]);
  

  const handleSubmit = async (userInfo) => {
    console.log(userInfo)
    setIsLoadingProcess(true);
    const result = await authApi.signUp(userInfo);
    setIsLoadingProcess(false);
    if (!result.ok) {
      SetError(true);
      let error = result.data.message || "User Already Exists.";
      console.log(result)
      SetErrorMessage(error);
      console.log("Error message : ", error);
      return;
    }
    SetError(false);
    auth.signUp(result);


  };

  return (
    <Screen>
      <ScrollView style={styles.signUpcontainer}>
        <AppLogo logo={paths.LOGO_PATH} style={{ marginTop: -40 }} />

        <View style={{ marginTop: -45, marginBottom: 3 }}>
          <AppText style={styles.text}>
            Sign up to discover all our movies, series, originals and enjoy our
            features.
          </AppText>

          {signUpFailed && (
            <AppText style={{ color: uiProps.colors.danger }}>
              {errorMessage}
            </AppText>
          )}

          <Formik
            initialValues={{ email: "", password: "", name: "" }}
            validationSchema={validateRegister}
            onSubmit={handleSubmit}
          >
            {({
              handleChange,
              handleSubmit,
              errors,
              setFieldTouched,
              touched,
            }) => (
              <>
                <AppInputField
                  label="Names"
                  icon="person-outline"
                  onBlur={() => setFieldTouched("name")}
                  isTouch={touched.name}
                  onChangeText={handleChange("name")}
                  errorMessage={errors.name}
                />
                <AppInputField
                  label="Email Address"
                  icon="mail-outline"
                  onBlur={() => setFieldTouched("email")}
                  onChangeText={handleChange("email")}
                  errorMessage={errors.email}
                  isTouch={touched.email}
                />
                <AppInputField
                  label="Password"
                  icon="lock-closed-outline"
                  onBlur={() => setFieldTouched("password")}
                  isTouch={touched.password}
                  secureTextEntry={true}
                  onChangeText={handleChange("password")}
                  errorMessage={errors.password}
                />

                <View style={styles.btnSection}>
                  <AppButton title="Sign Up" onPress={handleSubmit} />
                </View>
              </>
            )}
          </Formik>

          <View style={styles.alternative}>
            <AppText style={{ fontSize: uiProps.fontSizes.small }}>
              By signing up I accept
            </AppText>

            <AppText style={styles.subtext}>terms of use</AppText>

            <AppText
              style={{ fontSize: uiProps.fontSizes.small, marginLeft: -13 }}
            >
              and
            </AppText>
            <AppText style={styles.subtext}>privacy policy</AppText>
          </View>
          <AppText style={{ marginBottom: 10 }}>Or simply sign up with</AppText>

          <View style={styles.btnSection}>
            <View style={{ marginTop: -20 }}>
              <AppButton
                title="Login with Apple"
                style={styles.btnIcon}
                textStyle={styles.textApple}
                logo="apple"
                bgIcon={uiProps.colors.white}
              />
              <AppButton
                title="Login with Google"
                style={styles.lightBtnIcon}
                logo="google"
                bgIcon={uiProps.colors.black}
              />
            </View>

            <View style={styles.alternative}>
              <AppText>Already have an account ?</AppText>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(paths.LOGIN);
                }}
              >
                <AppText style={styles.subtext}>Sign In</AppText>
              </TouchableOpacity>
            </View>
            {isLoadingProcess && (
              <ActivityIndicator size="small" color={uiProps.colors.accent} />
            )}
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  signUpcontainer: {
    flex: 1,
    backgroundColor: uiProps.colors.primary,
  },
  text: {
    color: uiProps.colors.white,
    fontSize: uiProps.fontSizes.medium,
    textAlign: "center",
    marginBottom: -13,
  },
  btnSection: {
    alignItems: "center",
    marginTop: 10,
  },
  alternative: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  subtext: {
    color: uiProps.colors.accent,
    textAlign: "right",
    fontSize: uiProps.fontSizes.small,
    marginLeft: -10,
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
  textApple: {
    color: uiProps.colors.white,
  },
});

export default SignUp;
