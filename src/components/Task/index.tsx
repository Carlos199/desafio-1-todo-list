import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

import Trash from "../../assets/Trash.png";
import Circle from "../../assets/Circle.png";
import Check from "../../assets/Check.png";

import { styles } from "./styles";

/* Defining the type of the props that the component will receive. */
interface Props {
  description: string;
  onRemove: () => void;
  onChecked: () => void;
}

export function Task({ description, onRemove, onChecked }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onChecked}>
        <Image source={Circle} style={styles.check} />
      </TouchableOpacity>
      <Text numberOfLines={2} style={styles.description}>
        {description}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={Trash} style={styles.trash} />
      </TouchableOpacity>
    </View>
  );
}
