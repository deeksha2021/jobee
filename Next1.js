import { Button, ImageBackground,StyleSheet, Text, View , Image, TouchableOpacity } from 'react-native';


// const Next1 = ({ navigation }) => {
//     return (
//         <View>
//  <Image style={styles.imageicon} source={require('./Next1.js')} />
//         </View>
       
//       <Button
//         title="Next"
//         onPress={() =>
//           navigation.navigate('Next2')
//         }
//       />
//     );
//   };
//   export default Next1;
export default function Next1({ navigation }) {
  return (
    
<View>
   
<Image style={styles.imageicon} source={require('./signup.jpg')} />
<Text style={styles.text}>
    We are the best job  portal platform
</Text>
<Text style={styles.text1}>
    Lorem ipsum dolar sit armet , consectetur adipiscing elit, 
    sed do eiusmod tempar
</Text>
{/* <Button style={styles.Button}
        title="Next"
        onPress={() =>
          navigation.navigate('Next2')
        }
      /> */}
      <TouchableOpacity
        onPress={() =>
            navigation.navigate('Next2')}
        style={styles.roundButton1}>
        <Text style={styles.buttontext}>Next</Text>
      </TouchableOpacity>
</View>
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
      height:400,
      width:500,
      
      
    },
    box:{
            flexDirection:"row",
            height:90,
            
    },
    text: {
      color: "#0a88ff",
      fontSize: 30,
     
      fontWeight: "bold",
      textAlign: "center",
      paddingLeft:5,
      paddingRight:5,
    paddingBottom:5
    },
    text1: {
        color: "black",
        fontSize: 10,
       
        textAlign: "center",
        paddingLeft:10,
        paddingRight:10
       
    
      },
    Button:{

        borderBottomStartRadius:10,
        paddingLeft:10
    },
    roundButton1: {
        width: 320,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        paddingL: 20,
        borderRadius: 100,
      backgroundColor: '#0a88ff',
      margin:20
      },
  buttontext:{
    color:'white',
    fontWeight: "bold",
  }
  
  });
  