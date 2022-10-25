import { Image, Text, TouchableOpacity, View } from "react-native";

import Trash from "../../assets/Trash.png";
import Circle from "../../assets/Circle.png";
import Check from "../../assets/check.png";

import { styles } from "./styles";

/* Defining the type of the props that the component will receive. */
interface Props {
  description: string;
  finished: boolean;
  onRemove: () => void;
  onChecked: () => void;
}

export function Task({ description, finished, onRemove, onChecked }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onChecked}>
        {finished ? (
          <Image source={Check} style={styles.check} />
        ) : (
          <Image source={Circle} style={styles.circle} />
        )}
      </TouchableOpacity>
      <Text
        numberOfLines={2}
        style={[finished ? styles.descriptionDecoration : styles.description]}>
        {description}
      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={Trash} style={styles.trash} />
      </TouchableOpacity>
    </View>
  );
}
