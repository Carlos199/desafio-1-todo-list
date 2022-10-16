import React from "react";
import { Image, Text, View } from "react-native";

import Logo from "../../assets/Logo.png";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.task}>
        <View>
          <Text style={styles.infoTitle}>Criadas</Text>
        </View>
        <View>
          <Text style={styles.emptyTitle}>Concluidas</Text>
        </View>
      </View>
    </View>
  );
}
