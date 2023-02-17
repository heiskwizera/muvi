import React from 'react';
import { StyleSheet,TextInput,View,TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";


function SearchBar({handle,nextFunc,placeholder,isIcon, ...props}) {
    return (
        <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder={placeholder}
          placeholderTextColor={"#999999"}
          placeholderStyle={{ fontSize: 12 }}
          {...props}
          
        />
        <TouchableOpacity style={styles.searchButton} onPress={handle}>
          <Feather name={isIcon} size={30} color="#f9bf02" />
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#132037",
        padding: 2,
        marginBottom: 10,
        width: "100%",
      },
      searchInput: {
        flex: 1,
        color: "#fff",
        fontSize: 15,
        marginLeft: 10,
        height: 40,
      },
})

export default SearchBar;