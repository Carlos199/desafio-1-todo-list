import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { PlusCircle } from "phosphor-react-native";
// import { PlusCircle } from "phosphor-react-native";

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
          {/* <Text style={styles.buttonText}> */}
          <PlusCircle size={24} color='white' />
          {/* </Text> */}
        </TouchableOpacity>
      </View>

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
