import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Generar una constante que permita definir las pantallas donde se navegara 

const stack = createNativeStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen
        name="Home" //  Alias de la pantalla 
        component={HomeScreen}
        options={{title:'Inicio'}}
        />
        <stack.Screen
        name="Profile" 
        component={profileScreen}
        options={{title:"Perfil del usuario"}}
        />
        <stack.Screen
        name="Dashboard" 
        component={DashboardScreen}
        options={{title:"Tablero principal"}}
        />
      </stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = ({ navigation })=>{
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{backgroundColor: 'green', padding:10, borderRadius:10, marginTop: 10}}
        onPress={() =>{
          navigation.navigate('Profile', {name: 'Pepe Perez', username:'pperez', rol:1});
        }}
      >
      <Text style={{ color: "white", fontSize:20 }}>Perfil del usuario</Text>
      </TouchableOpacity>
      </View>
  );
}

const profileScreen = ({ navigation, route }) =>{
  return (
    <View style={styles.container}>
      <Text>Este es el usuario {route.params.username}, con nombre {route.params.name}</Text>
    <TouchableOpacity
    style={{backgroundColor: 'green', padding:10, borderRadius:10, marginTop: 10}}
    onPress={() =>{
      route.params.rol == 1 ? navigation.navigate('Dashboard') : navigation.navigate('Home')
    }}
  >
  <Text style={{ color: "white", fontSize:20 }}>Ingresar al panel de Control</Text>
  </TouchableOpacity>
  </View>
    
  );
}

const DashboardScreen = ({navigation})=>{
  return (
    <View style={styles.container}>
      <Text> Estas como usuario admistrador del sistema</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
