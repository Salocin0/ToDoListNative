import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text, TouchableWithoutFeedback, TouchableOpacity} from "react-native";
import RNDateTimePicker from "@react-native-community/datetimepicker";

const FormTask = ({handleTaskCreation}) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [showDatePicker, setShowDatePicker] = useState(false);

  const toggleDatePicker = () => {
    setShowDatePicker(true);
  };

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);
    if (selectedDate !== undefined) {
      setSelectedDate(selectedDate);
    }
  };

  const handleCreateTask = () => {
    if(taskTitle!==""){
      handleTaskCreation(taskTitle, selectedDate);
      setSelectedDate(null);
      setTaskTitle("");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TODO List</Text>
      <TextInput
        style={styles.input}
        placeholder="Título de la tarea"
        placeholderTextColor="black"
        value={taskTitle}
        onChangeText={(text) => setTaskTitle(text)}
      />
      <TouchableWithoutFeedback onPress={toggleDatePicker} >
        <View style={styles.input}>
          <TextInput
            style={{color:"black"}}
            editable={false}
            value={selectedDate ? selectedDate.toLocaleDateString("es-ES") : "Fecha de vencimiento"}
          />
        </View>
      </TouchableWithoutFeedback>
      {showDatePicker && (
        <RNDateTimePicker
          value={selectedDate || new Date()}
          onChange={handleDateChange}
          mode="date"
          minimumDate={new Date()}
        />
      )}
      <TouchableOpacity onPress={handleCreateTask} style={styles.button}>
        <Text style={styles.buttonText}>Crear Tarea</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#028AFF",
    marginTop: 25,
    width:"100%",
    elevation: 10,
    borderColor: "black",
    borderBottomWidth: 1
  },
  inputContainer: {
    width: "80%",
    marginVertical: 10,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    color:"black",
    borderWidth: 1,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: "white",
    marginVertical: 3,
  },
  buttonContainer: {
    width: "80%",
  },
  button: {
    borderRadius: 5,
    backgroundColor: "#0275d8",
    padding: 10,
    alignItems: "center",
    marginVertical: 3,
    borderColor:"white",
    borderWidth:1,
    width:"60%",
  },
  buttonText: {
    color: "white",
  },
  titulo: {
    fontSize: 20,
    color: "white",
  }
});

export default FormTask;
