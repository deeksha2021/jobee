import { Button, ImageBackground,StyleSheet, Text, View , Image,TouchableOpacity,TextInput} from 'react-native';

import {CheckBox} from '@react-native-community/checkbox';
const Signup = ({ navigation }) => {
    return (
        <View style={styles.Container}>
   
        <Image style={styles.imageicon} source={require('./signupimg1.png')} />
        <Text style={styles.text}>
            Create New Account
        </Text>
        <View style={styles.ViewRow}>
                        <Image style={styles.imageicon1} source={require('./email.png')} />
                        <TextInput
                        style={styles.input}
                        onChangeText={"Email"}
                        value={"Email"}
                        placeholder="Email"
                    />
        </View>
        <View style={styles.ViewRow1}>
                        <Image style={styles.imageicon1} source={require('./lock.webp')} />
                        <TextInput
                        style={styles.input1}
                        onChangeText={"Password"}
                        value={"Password"}
                        placeholder="Password"
                    // keyboardType="numeric"
                    />
                    <Image style={styles.imageicon2} source={require('./eyehidden.webp')} />

        </View>
      
       <View style={styles.ButtonView}>
       <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Next3')}
                style={styles.roundButton1}>
                <Text style={styles.buttontext}>Sign up</Text>
              </TouchableOpacity>
       </View>
             <Text style={styles.OrText}>
                or continue with
             </Text>
        <View style={styles.ViewRow}>
            <Image style={styles.imageicon3} source={require('./fb.webp')} />
            <Image style={styles.imageicon3} source={require('./google.webp')} />
            <Image style={styles.imageicon3} source={require('./apple.webp')} />
        </View>
        <View style={styles.ViewRow2}>
            <Text style={styles.LastText} >
                Already has an account?
            </Text>
            <Text style={styles.Signin} onPress={() =>
                    navigation.navigate('Signin')}>
                Sign in
            </Text>
            </View>
        </View>
        
    );
  };
  export default Signup;
  const styles = StyleSheet.create({
  text:{
    color:"Black",
    fontSize: 32,
      lineHeight: 84,
      fontWeight: "bold",
      textAlign: "center",
  },
  input: {
    height: 40,
    width:250,
    margin: 10,
    borderWidth: 0,
    padding:10
    
  },
  input1: {
    height: 40,
    width:210,
    margin: 10,
    borderWidth: 0,
    padding:10
    
  },
  roundButton1: {
    width: 320,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingL: 20,
    borderRadius: 100,
  backgroundColor: '#0a88ff',
  margin:20,
  marginTop:2
  },
  imageicon:{
    height:200,
    width:200,
    marginLeft:70
       
  },
  ViewRow:{
    flex:1,
   flexDirection:"row"
  },
  ViewRow1:{
    flex:1,
   flexDirection:"row",
   marginTop:50
  },
  ViewRow2:{
   // flex:1,
   flexDirection:"row",
   margin:10,
   marginTop:100
  },
  imageicon1:{
    height:20,
    width:20,
    marginLeft:45,
    marginTop:15,
    paddingTop:15
    
  },
  imageicon2:{
    height:30,
    width:30,
    marginLeft:1,
    marginTop:15,
    paddingTop:15
    
  },
  imageicon3:{
    height:50,
    width:50,
    margin:20,
    marginLeft:40,
    marginBottom:1,
    paddingTop:15
    
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    height:500,
    //justifyContent: 'center',
  },
  ButtonView:{
    marginTop:80
  },
  OrText:{
    color:"gray",
    fontSize: 20,
      lineHeight: 30,
     // fontWeight: "bold",
      textAlign: "center",
  },
  buttontext:{
    color:"white",
    fontWeight:"bold",
    fontSize:20
  },
  LastText:{
    marginLeft:30,
    fontSize:15
  },
  Signin:{
  
  color:"#0a88ff",
    paddingLeft:15,
    paddingBottom:10,
    fontSize:20,
    fontWeight:"bold",
    
  }

});