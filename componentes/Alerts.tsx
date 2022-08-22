import {View, Text} from "react-native";
import {StyleSheet} from "react-native";

interface alerta {
  enlace: string;
  mensaje: string;
}

export const Alerts = ({enlace, mensaje}: alerta) => {
  return (
    <View style={enlace === "" ? estilo.alerta1 : estilo.alerta2}>
      <Text>{mensaje}</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  alerta1: {
    margin: -120,
    backgroundColor: "#98FF98",
    borderRadius: 8,
    width: 150,
    textAlign: "center",
  },

  alerta2: {
    margin: -120,
    backgroundColor: "#e8f5ff",
    borderRadius: 8,
    width: 150,
    textAlign: "center",
  },
});