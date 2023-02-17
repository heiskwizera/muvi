import React, { useState, useEffect } from "react";
import { StyleSheet, Image, ActivityIndicator,View } from "react-native";
import { AppText, AppButton, AppHeader, AppInputField } from "../components";
import { Formik } from "formik";
import { paths, uiProps } from "../config";
import { Feather } from "@expo/vector-icons";
import useAuth from "../auth/useAuth";
import authApi from "../api/Auth";
import validateUpdateUser from "../utils/Validator/validateUpdateUser";
function AccountEdit({ navigation }) {
  const { user,userId, updateUser } = useAuth();
  const [loading, setLoading] = useState(false);
  const [errorMessage, SetErrorMessage] = useState([]);
  const [successMessage,setSuccessMessage] = useState("");

  const handleUpdate = async (userNewData) => {
    console.log(userNewData);
    console.log(userId)
    setLoading(true);
    const result = await authApi.updateUser(userId, userNewData);
    setLoading(false);
    if (!result.ok) {
      let error = result.data.message || result.problem;
      console.log(result);
      SetErrorMessage(error);
      console.log("Error message : ", error);
      return;
    }
    SetErrorMessage("");
    setSuccessMessage("Profile Updated Successfully");
    updateUser(result);
  };


  return (
   <>
    <AppHeader />
    <View style={styles.container}>
     
      <Formik
        initialValues={{ name: user.name, email: user.email }}
        validationSchema={validateUpdateUser}
        onSubmit={(values) => handleUpdate(values)}
      >
        {({ handleChange, handleSubmit, values, errors, touched, setFieldTouched }) => (
          <>
          
           <View styles={styles.editProfileContainer}>
           <Image style={styles.logo} source={paths.PROFILE_PATH} />
            <AppText style={styles.editProfile}>Edit Profile</AppText>
            <Feather name="edit" style={styles.icon} size={24} color={uiProps.colors.accent} />
           </View>

            <AppInputField
              placeholder="Names"
              onChangeText={handleChange("name")}
              value={values.name}
              onBlur={() => setFieldTouched("name")}
              isTouch={touched.name}
              errorMessage={errors.name}

              
        
            />
            <AppInputField
              placeholder="Email"
              onChangeText={handleChange("email")}
              value={values.email}
              onBlur={() => setFieldTouched("email")}
              isTouch={touched.email}
              errorMessage={errors.email}
            />
            {loading ? (
              <ActivityIndicator size="large" color={uiProps.colors.primary} />
            ) : (
              <AppButton
                title="Update"
                onPress={handleSubmit}
                style={{
                  marginTop: 100,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor:uiProps.colors.accent
                }}
              />
            )}
            {errorMessage && (
              <AppText style={styles.error}>{errorMessage}</AppText>
            )}
            {successMessage && (
              <AppText style={styles.success}>{successMessage}</AppText>
            )}

          </>
        )}
      </Formik>
    </View>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: uiProps.colors.dark,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginTop: 50,
    backgroundColor: uiProps.colors.dark,
  },
  editProfileContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 50,
    backgroundColor: uiProps.colors.dark,
  },
  edit: {
    color: uiProps.colors.white,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 30,
  },
  icon: {
    color: uiProps.colors.accent,
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center",
    marginLeft: 5,
  },

  error: {
    color: "red",
    alignSelf: "center",
    marginTop: 20,
  },
  success: {
    color: "green",
    alignSelf: "center",
    marginTop: 20,
  },
});

export default AccountEdit;
