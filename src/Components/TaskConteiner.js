import { StyleSheet, Text, View, FlatList, Dimensions } from "react-native";
import React, { useState, useRef, useEffect } from "react";
import FormTask from "./FormTask";
import Task from "./Task";

const TaskContainer = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      titulo: "Hacer la compra",
      fecha_creacion: "2024-02-03",
      fecha_vencimiento: null,
      completado: false,
    },
    {
      id: 2,
      titulo: "Preparar presentación",
      fecha_creacion: "2024-01-28",
      fecha_vencimiento: "2024-02-01",
      completado: false,
    },
    {
      id: 3,
      titulo: "Ir al gimnasio",
      fecha_creacion: "2024-01-20",
      fecha_vencimiento: "2024-02-03",
      completado: true,
    },
  ]);

  const handleTaskCreation = (taskTitle, selectedDate) => {
    if (selectedDate !== null) {
      selectedDate = selectedDate.toLocaleDateString("es-ES");
    }
    newTask = {
      id: tasks.length + 1,
      titulo: taskTitle,
      fecha_creacion: new Date().toLocaleDateString("es-ES"),
      fecha_vencimiento: selectedDate,
      completado: false,
    };
    setTasks([...tasks, newTask]);
  };

  const handleChangeCompleted = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completado: !task.completado } : task
      )
    );
  };

  const handledeletetask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  return (
    <View style={styles.container}>
      <FormTask handleTaskCreation={handleTaskCreation} />
      <FlatList
        style={styles.flatlist}
        data={tasks}
        renderItem={({ item }) => (
          <Task task={item} handleChangeCompleted={handleChangeCompleted} handledeletetask={handledeletetask} />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default TaskContainer;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F7F7FF",
  },
  flatlist: {
    height: Dimensions.get("window").height - 190,
  },
  separator: {
    height: 10,
  },
});
