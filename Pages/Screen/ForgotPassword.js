import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    TouchableHighlight,
    Image, ScrollView, Alert
} from 'react-native';
import Card from './Components/Card'
import CardSection from './Components/CardSection'
import { DatePicker, CheckBox } from 'native-base';
import Users from '../../model/users';
import axios from 'axios';

const ForgotPassword = ({ navigation }) => {

    const [data, setData] = React.useState({
        email: '',
        check_textInputChange: false,
        secureTextEntry: true,
       // isValidUser: true,
       // isValidPassword: true,
      });
      const textInputChange = (val) => {
        if (val.trim().length >= 4) {
          setData({
            ...data,
            email: val,
            check_textInputChange: true,
          //  isValidUser: true
          });
        } else {
          setData({
            ...data,
            email: val,
            check_textInputChange: false,
          //  isValidUser: false
          });
        }
      }
      const forgotpassword = () => {
        alert(data.email)
         axios.defaults.baseURL = 'https://appleskool.com/preview/appleskool_code/api';
         axios.defaults.headers.post['Content-Type'] =
           'application/json;charset=utf-8';
         axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
         axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';
     
         axios
           .post('/forgot-password', {
             "jsonrpc": "2.0",
             "params": {
                "email":data.email,
             }
         })
           .then(
             response => {
                //  alert(JSON.stringify(response.data.error));
                if (response.data) {
                  alert(JSON.stringify(response.data))
                }
                else if(response.data){
                  alert(JSON.stringify(response.data.success.message))
                  navigation.navigate('ForgotPassword_Varifecation')
                }
              },
             error => {
                Alert.alert('Enter valid email details!! ');
                console.log(error);
              },
           );
       };
     
    return (
        <View style={styles.container}>
            <Image source={require('../../icon/login-background.png')} style={styles.backgroundImage} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: 50, width: '100%', height: 70, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontWeight: 'bo400ld', fontSize: 25, fontFamily: 'roboto-bold', }}>Forgot Password</Text>
                    <Image source={require('../../icon/border.png')} style={{ width: '30%', height: 4, marginBottom: 10, marginTop: 5 }} />
                    <Text style={{ fontWeight: '200', fontFamily: 'roboto-regular', }}>Fillup the below fields to access your account!</Text>
                </View>
                <View style={styles.loginForm}>
                    <View style={styles.inputContainer}>
                        <Image source={require('../../icon/name-icon.png')} size={15} style={styles.inputIconPlace} />
                        <TextInput style={styles.inputs}
                            placeholder="Email"
                            autoCapitalize="none"
                            // keyboardType="email-address"
                            onChangeText={(val) => textInputChange(val)}
                        // onEndEditing={(e)=>handleValidUser(e.nativeEvent.text)}
                        />
                    </View>
                    {/* <View style={styles.inputContainer}>
                        <Image source={require('../../icon/password-icon.png')} size={15} style={styles.inputIconPlace} />
                        <TextInput style={styles.inputs}
                            placeholder="New Password"
                            autoCapitalize="none"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            // secureTextEntry={true}
                           // onChangeText={(val) => handlePasswordChange(val)}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Image source={require('../../icon/password-icon.png')} size={15} style={styles.inputIconPlace} />
                        <TextInput style={styles.inputs}
                            placeholder="Confermation Password"
                            autoCapitalize="none"
                            secureTextEntry={data.secureTextEntry ? true : false}
                            // secureTextEntry={true}
                           // onChangeText={(val) => handlePasswordChange(val)}
                        />
                    </View> */}
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingLeft: 2, width: 320, marginTop: 15 }}>

            <CheckBox style={{ backgroundColor: '#d73c5e', marginLeft: -14 }} checked={data.checked} color={data.checked == true ? '#d73c5e' : '#ffff'}
              onPress={() => setData({ checked: !data.checked })} />
            <Text style={{ marginRight: 50, marginLeft: -35, fontSize: 13, marginBottom: 2, fontFamily: 'roboto-regular', }}>Remember me</Text>

            <TouchableOpacity style={{}} onPress={() => navigation.navigate('NewPassword')}
            >
              <Text style={{ fontFamily: 'roboto-regular', fontSize: 13 }}>New password!</Text>
            </TouchableOpacity>
          </View>
                    <TouchableOpacity 
                    style={[styles.buttonContainer, styles.loginButton]} 
                    onPress={() => navigation.navigate('ForgotPassword_Varifecation')}
                     // onPress={() =>forgotpassword()}
                    >
                        <Text style={styles.loginText}>CONFIRM</Text>
                    </TouchableOpacity>
                   
                    
                    <TouchableOpacity style={[styles.buttonContainerBottom,]} onPress={() => navigation.navigate('Login')}>
                        <Text style={{}}> have an account? <Text style={{ fontWeight: 'bold' }}>Log in</Text> </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View >
    )
};

export default ForgotPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    backgroundImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: "center",
        position: 'absolute',
    },
    buttonContainer: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 35,
        width: 320,
        marginTop: 20,
        borderRadius: 3
    },
    buttonContainer2: {
        height: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:20,
        width: 290,
        padding: 10
    },
    loginButton: {
        backgroundColor: "#d73c5e",
        alignItems: 'center'
    },
    loginText: {
        color: 'white',
        fontWeight: 'bold'
    },
    loginTextFacebook: {
        textAlign: 'center',
        //marginTop:5,
        //paddingTop:5,
        fontFamily: 'roboto-regular',
    },
    buttonContainerFacebook: {
        height: 55,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // marginBottom:20,
        width: 320,
        marginTop: 20,
        //  borderColor: '#ddd',
        //  borderTopWidth: 0,
        //shadowColor: "#000",
        // shadowOffset: {
        //   width: 0,
        //   height: 3,
        // },
        shadowOpacity: 0.0,
        shadowRadius: 1.22,
        elevation: 3,
        //  borderWidth: 1,
        borderRadius: 3,
    },
    loginForm: {
        marginTop: 30,
        lineHeight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        //  backgroundColor:'white'
    },
    inputContainer: {
        borderBottomWidth: 1,
        width: 320,
        height: 45,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    buttonContainerBottom: {
        width: 320,
        height: 50,
        marginTop: 100,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 100
    },
    inputs: {
        height: 45,
        marginLeft: 10,
        borderBottomColor: '#3c3b37',
        flex: 1,
        marginBottom: 15,
        fontFamily: 'roboto-regular',
    },
    inputIconPlace: {
        marginBottom: 15,
        width: 20,
        height: 20,
        marginLeft: 1,
        justifyContent: 'center'
    },
    inputIcon: {
        width: 32,
        height: 32,
        marginLeft: 1,

        justifyContent: 'center'
    },
    orLine: {
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: 2,
        marginBottom: 8,
        width: '35%'
    }
});
