import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { uiProps } from "../config";

import { ResMovies } from "../components/AppMovieCards";
function MyList({ categories }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        <ResMovies
          styles={styles.list}
          key="123"
          poster="https://www.vibe.com/wp-content/uploads/2022/10/BlackPanther-WakandaForever_Payoff_1-Sht_v10_lg-e1665517283161.jpg"
          title="Wakanda Forever"
          description="Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum"
          date="2022"
          vote="8+"
          overview="Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum"
        />
        <ResMovies
        styles={styles.list}
          key="231"
          poster="https://www.vibe.com/wp-content/uploads/2022/10/BlackPanther-WakandaForever_Payoff_1-Sht_v10_lg-e1665517283161.jpg"
          title="Wakanda Forever"
          description="Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum"
          date="2022"
          vote="8+"
          overview="Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum"
        />
        <ResMovies
        styles={styles.list}
          key="4311"
          poster="https://www.vibe.com/wp-content/uploads/2022/10/BlackPanther-WakandaForever_Payoff_1-Sht_v10_lg-e1665517283161.jpg"
          title="Wakanda Forever"
          description="Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum"
          date="2022"
          vote="8+"
          overview="Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum"
        />
        <ResMovies
        styles={styles.list}
          key="421241"
          poster="https://www.vibe.com/wp-content/uploads/2022/10/BlackPanther-WakandaForever_Payoff_1-Sht_v10_lg-e1665517283161.jpg"
          title="Wakanda Forever"
          description="Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum"
          date="2022"
          vote="8+"
          overview="Lorem ipsum lorem ipsum  Lorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsumLorem ipsum lorem ipsum"
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: uiProps.colors.dark,
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        },
    list: {
        width: "100%",
        backgroundColor:uiProps.colors.primary,
        borderRadius:10
    }
});

export default MyList;
