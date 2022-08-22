// se hace uso de avatar un componente de react native, para ello se debe ejucutar el siguiente comando:
// npm i react-native-user-avatar
import {useState} from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {Alerts} from "./Alerts";
import UserAvatar from "react-native-user-avatar";

export const MiAvatar = () => {
  const [nombres, setNombres] = useState("");
  const [enlace, setEnlace] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [actualizar, setActualizar] = useState("");

  const Avatars = () => {
    if (actualizar === "") {
      setMensaje("Default Alerts");
      setEnlace(actualizar);
    } else {
      setMensaje("Success Alerts");
      setEnlace(actualizar);
    }
  };

  const Nombre = (texto: string) => {
    setNombres(texto);
  };

  return (
    <View style={estilos.contenedor}>
      <Text style={estilos.texto}>Bienvenido al Avatar</Text>

      <View style={estilos.subContenedor}>
        <View>
          <UserAvatar rounded style={estilos.avatar} name={nombres} />
        </View>

        <Image
          source={{uri: enlace}}
          style={estilos.Imagen}
          defaultSource={require("../assets/estandar.png")}
        />

        <Text style={estilos.nombre}> Anny Oyes </Text>

        <TextInput
          placeholder="Nombre y apellido"
          style={estilos.entradaTexto}
          onChangeText={(texto) => Nombre(texto)}
        />

        <TextInput
          placeholder="url"
          onChangeText={setActualizar}
          style={estilos.entrada}
        />

        <TouchableOpacity style={estilos.button} onPress={() => Avatars()}>
          <Text style={estilos.buttonText}>Cambiar</Text>
        </TouchableOpacity>
      </View>
      <Alerts enlace={enlace} mensaje={mensaje} />
    </View>
  );
};

const estilos = StyleSheet.create({
  contenedor: {
    alignItems: "center",
    paddingTop: 20,
  },

  texto: {
    textAlign: "center",
    fontSize: 20,
    margin: 20,
  },

  subContenedor: {
    borderWidth: 3,
    borderColor: "#c5c6c8",
    width: 300,
    height: 600,
    backgroundColor: "#b2e2f2",
    margin: 0,
    paddingBottom: 0,
    marginEnd: 0,
    alignItems: "center",
  },

  nombre: {
    textAlign: "center",
    fontSize: 20,
    margin: -20,
    position: "relative",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 100,
    padding: 50,
    margin: 30,
    borderWidth: 5,
    borderColor: "#D3D3D3",
    borderLeftColor: "#7CBEB7",
    borderRightColor: "#FBBDBC",
    borderBottomColor: "#FCDCDB",
  },

  Imagen: {
    width: 40,
    height: 40,
    borderRadius: 100,
    padding: 50,
    margin: 30,
    borderWidth: 5,
    borderColor: "#D3D3D3",
    borderLeftColor: "#7CBEB7",
    borderRightColor: "#FBBDBC",
    borderBottomColor: "#FCDCDB",
  },

  entradaTexto: {
    height: 40,
    width: "50%",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    margin: 40,
    padding: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    marginBottom: 15,
    fontSize: 15,
    borderColor: "#FBBDBC",
  },

  entrada: {
    height: 40,
    width: "50%",
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderTopWidth: 2,
    borderLeftWidth: 2,
    borderBottomWidth: 2,
    borderRightWidth: 2,
    marginBottom: 15,
    fontSize: 15,
    borderColor: "#FBBDBC",
  },

  button: {
    height: 45,
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
    margin: 35,
    backgroundColor: "#FBBDBC",
  },

  buttonText: {
    height: 20,
    width: "60%",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 20,
  },
});
