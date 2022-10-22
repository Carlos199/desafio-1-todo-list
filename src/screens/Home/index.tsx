import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { PlusCircle } from "phosphor-react-native";

import Logo from "../../assets/Logo.png";

import { styles } from "./styles";

export function Home() {
  const [participantName, setParticipantName] = useState("");
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder='Nombre de participante'
          placeholderTextColor='#808080'
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity style={styles.button}>
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
      </View>
    </View>
  );
}
