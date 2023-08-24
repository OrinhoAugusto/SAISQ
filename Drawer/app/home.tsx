import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";
export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Bem-vindo ao</Text>
        <Image source={require('../assets/textInClass.png')} style={styles.logo}></Image>
      </View>
      <View style={styles.screenSquare}>
        <Link href="reservationSolicitation"> <Text>Reservas de sala</Text></Link>
      </View>
      <View style={styles.screenSquare}>
        <Link href="calendar"> <Text>Calendario escolar</Text></Link>
      </View>
      <View style={styles.screenSquare}>
        <Link href="myReservations"> <Text>Suas reservas</Text></Link>
      </View>
      <View style={styles.screenSquare}>
        <Link href="personalData"> <Text>Dados pessoais</Text></Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  screenSquare: {

  },
  logo: {
    width: '23',
    
    height: '90px',
  }
});