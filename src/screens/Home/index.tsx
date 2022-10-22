import React, { useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { PlusCircle } from "phosphor-react-native";

import Logo from "../../assets/Logo.png";

import { styles } from "./styles";
import { Task } from "../../components/Task";

export function Home() {
  const [task, setTask] = useState<string[]>([]);
  const [descriptionTask, setDescriptionTask] = useState("");

  function handleTaskAdd() {
    setTask((prevState) => [...prevState, descriptionTask]);
    setDescriptionTask("");
  }

  function handleTaskRemove(description: string) {
    Alert.alert("Remover", "Estas seguro de que quieres borrar este item ?", [
      {
        text: "Si",
        onPress: () =>
          setTask((prevState) =>
            prevState.filter(
              (descriptionTask) => descriptionTask !== description,
            ),
          ),
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nombre de participante'
          placeholderTextColor='#808080'
          onChangeText={setDescriptionTask}
          value={descriptionTask}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <PlusCircle size={24} color='white' />
        </TouchableOpacity>
      </View>

      <View style={styles.taskView}>
        <View style={styles.task}>
          <View style={styles.taskStateView}>
            <View>
              <Text style={styles.infoTitle}>Creadas</Text>
            </View>
            <View style={styles.countView}>
              <Text style={styles.count}>240</Text>
            </View>
          </View>

          <View style={styles.taskStateView}>
            <View>
              <Text style={styles.emptyTitle}>Concluidas</Text>
            </View>
            <View style={styles.countView}>
              <Text style={styles.count}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={task}
            keyExtractor={(item, index) => item}
            renderItem={({ item }) => (
              <Task
                key={item}
                description={item}
                onChecked={() => {}}
                onRemove={() => handleTaskRemove(item)}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => (
              <Text style={styles.listEmptyText}>
                No hay participantes? Añada participantes en su lista
              </Text>
            )}
          />
        </View>
      </View>
    </View>
  );
}
