import React from "react";
import { Image, View } from "react-native";

import Clipboard from "../../assets/Clipboard.png";

import { styles } from "./styles";

export function EmptyTask() {
  return (
    <View style={styles.container}>
      <Image source={Clipboard} />
    </View>
  );
}
