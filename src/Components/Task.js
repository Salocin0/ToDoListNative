import { StyleSheet, Text, View,Switch,TouchableOpacity } from 'react-native'
import React from 'react'

const Task = ({task,handleChangeCompleted,handledeletetask}) => {

  const handleCompleted =() => {
    handleChangeCompleted(task.id)
  }

  const handleDelete = () => {
    handledeletetask(task.id)
  }

  const getStatusText = () => {
    switch (true) {
      case task.completado:
        return 'Completado';
      case task.fecha_vencimiento && new Date(task.fecha_vencimiento) < new Date():
        return 'Vencido';
      default:
        return 'Pendiente';
    }
  };
  
  const getItemStyle = () => {
    switch (true) {
      case task.completado:
        return styles.labelCompletado;
      case task.fecha_vencimiento && new Date(task.fecha_vencimiento) < new Date():
        return styles.labelVencido;
      default:
        return styles.labelPendiente;
    }
  };  

  return (
    <View style={[styles.item]}>
      <Text style={styles.titulo}>{task.titulo}</Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={styles.fecha}>Creacion {new Date(task.fecha_creacion).toLocaleDateString("es-ES")}</Text>
        {task.fecha_vencimiento && (
          <Text style={styles.fecha}>Vencimiento {new Date(task.fecha_vencimiento).toLocaleDateString("es-ES")}</Text>
        )}
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={getItemStyle()}>{getStatusText()}</Text>
        <Switch value={task.completado} onValueChange={handleCompleted} />
      </View>
      <TouchableOpacity onPress={handleDelete} style={styles.button}>
        <Text style={styles.buttonText}>X</Text>
      </TouchableOpacity>
    </View>
  )
  
}

export default Task

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#fff',
    borderColor:"#D4D4D4",
    borderWidth:1,
    padding: 10,
    marginVertical:10,
    marginHorizontal: 16,
    elevation:5,
    borderRadius:5,
    position:"relative",
    height:120
  },
  labelPendiente:{
    backgroundColor:"#0275d8",
    color:"white",
    padding:10,
    marginVertical:10,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
  },
  labelVencido:{
    backgroundColor:"#f0ad4e",
    color:"white",
    padding:10,
    marginVertical:10,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
  },
  labelCompletado:{
    backgroundColor:"#5cb85c",
    color:"white",
    padding:10,
    marginVertical:10,
    borderRadius:5,
    alignItems:"center",
    justifyContent:"center",
  },
  titulo:{
    alignSelf:"center",
    fontSize:20,
    color:"black",
  },
  fecha:{
    color:"grey",
  },
  button:{
    borderRadius:5,
    color:"white",
    backgroundColor:"#d9534f",
    paddingVertical:5,
    alignItems:"center",
    position:"absolute",
    right:0,
    width:30,
    margin:5
  },
  buttonText:{
    color:"white",
  },
})