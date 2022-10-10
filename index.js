
import {  ImageBackground,StyleSheet, Text, View , Image, Button, } from 'react-native';
export default function Home({navigation}) {
    
    return (
      
      
  <ImageBackground source={require('./laptop1.jpg')} 
  resizeMode="cover" style={styles.image}>
        <View style={styles.backgroundtitle}>
        <Text style={styles.text}>Welcome to </Text>
        <View style={styles.box}>
        <Text style={styles.text1}>Jobee!</Text> 
        <Image style={styles.imageicon} source={require('./hand-wave-y-128.webp')} />
        </View>
       
        </View>
        <View>
          <Text style={styles.bottomtext}>
            The best job finder & job portal app where 
          </Text>
          <Text style={styles.bottomtext1}>
          the best jobs will find you.
          </Text>
        </View>
        
        <Button title='WELCOME'  onPress={() =>
        navigation.navigate('Next1')}/>
      
      </ImageBackground>
     
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      height:500,
      //justifyContent: 'center',
    },
    image: {
      flex: 1,
      justifyContent: "center"
    },
    imageicon:{
      height:50,
      width:50,
      
      
    },
    box:{
            flexDirection:"row",
            height:90,
            
    },
    text: {
      color: "white",
      fontSize: 30,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
     // backgroundColor: "#000000c0",
     // borderRadius:80
  
    },
    text1: {
      color: "white",
      fontSize: 30,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
      paddingLeft:100
    
  
    },
    backgroundtitle:{
      marginTop:400,
      marginLeft:50,
      backgroundColor: "black",
      borderRadius:80
    },
    bottomtext:{
      justifyContent: "center",
      paddingLeft:50,
      paddingTop:20,
      
    },
    bottomtext1:{
      justifyContent: "center",
      paddingLeft:80,
      
    },
  
  
  });
