import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";

import { VictoryChart, VictoryBar, VictoryTheme } from "victory-native";
import data from "./data";

const { width, height } = Dimensions.get("screen");

export default function App() {
  return (
    <View style={styles.container}>
      <VictoryChart theme={VictoryTheme.material}>
        <VictoryBar
          style={{ data: { fill: "orange", width: 15 } }}
          barWidth={15}
          width={width / 1.05}
          animate
          data={data}
          x="month"
          y="earnings"
        />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
