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

import { Task } from "../../components/Task";
import { EmptyTask } from "../../components/EmptyTask";

import Logo from "../../assets/Logo.png";

import { styles } from "./styles";

export function Home() {
  const [task, setTask] = useState<any[]>([]);
  const [descriptionTask, setDescriptionTask] = useState("");

  function handleTaskAdd() {
    setTask((prevState: any[]) => [
      ...prevState,
      { description: descriptionTask, finished: false },
    ]),
      setDescriptionTask("");
  }

  function handleTaskRemove(taskId: number) {
    Alert.alert("Remover", "Estas seguro de que quieres borrar este task ?", [
      {
        text: "Si",
        onPress: () => {
          const newTask = task.filter((item, key) => {
            return key !== taskId;
          });
          setTask(newTask);
        },
      },
      {
        text: "No",
        style: "cancel",
      },
    ]);
  }

  function handledFinished(taskId: number) {
    const newTask = task.map((item, key) => {
      if (key === taskId) {
        return { ...item, finished: !item.finished };
      }
      return item;
    });

    setTask(newTask);
  }

  /* Counting the number of finished tasks. */
  let count = 0;
  task.map((item) => {
    if (item.finished) {
      count = count + 1;
    }
  });

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
              <Text style={styles.count}>{task.length - count}</Text>
            </View>
          </View>

          <View style={styles.taskStateView}>
            <View>
              <Text style={styles.emptyTitle}>Concluidas</Text>
            </View>
            <View style={styles.countView}>
              <Text style={styles.count}>{count}</Text>
            </View>
          </View>
        </View>
        <View style={styles.flatList}>
          <FlatList
            data={task}
            keyExtractor={(item) => item.description}
            renderItem={({ item, index }) => (
              <Task
                key={index}
                description={item.description}
                onChecked={() => handledFinished(index)}
                onRemove={() => handleTaskRemove(index)}
                finished={item.finished}
              />
            )}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={() => <EmptyTask />}
          />
        </View>
      </View>
    </View>
  );
}
