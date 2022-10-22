import React from "react";
import { Image, Text, View } from "react-native";

import Clipboard from "../../assets/Clipboard.png";

import { styles } from "./styles";

export function EmptyTask() {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Image source={Clipboard} style={styles.clipboard} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.description}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
