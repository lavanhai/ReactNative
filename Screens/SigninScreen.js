import React from 'react';
import {
  View,
  AsyncStorage,
  Button,
  StyleSheet,
  TextInput,
  Alert,
} from 'react-native';
import axios from 'axios';
export default class SigninScreen extends React.Component {
    static navigationOptions = {
      title: 'Đăng nhập!'
    };
    constructor(props) {
        super(props);
        this._Auth();
        this.state = { email:'' , pass:'',user:[]};
      };
      componentDidMount(){
        axios({
          method: 'get',
          url: 'http://5d9ac3fe686ed000144d17a6.mockapi.io/api/Users',
        })
          .then((response)=>{
           this.setState({
             user:response.data
           })
          }).catch((err)=>{
            console.error(err)
          });
      }
      _Auth = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        this.props.navigation.navigate(userToken ? 'TabNavigator' : 'SignIn');
      };
    render() {
      return (
        <View style={styles.container}>
        <TextInput onChangeText={(email) => this.setState({email})} placeholder="Nhập Email" style={styles.txtInput}></TextInput>
        <TextInput secureTextEntry={true} onChangeText={(pass) => this.setState({pass})} placeholder="Nhập Password" style={styles.txtInput}></TextInput>
        <View style={{flexDirection:'row'}}>
        <View style={styles.btn}><Button title="Đăng nhập" onPress={this._signInAsync}>
        </Button>
        </View>
        <View style={styles.btn}><Button title="Đăng ký" onPress={this._signUp}></Button></View>
        </View>
        </View>
      );
    }
    _signUp = async () =>{
      if(this.state.email === '' || this.state.pass === ''){
        Alert.alert('Thất bại!', 'Vui lòng kiểm tra lại thông tin!');
      }else{
        axios({
          method: 'post',
          url: 'http://5d9ac3fe686ed000144d17a6.mockapi.io/api/Users',
          data: {
            email: this.state.email,
            password: this.state.pass
          }
        });
        Alert.alert('Thành công!','Đăng ký thành công!');
        this.props.navigation.navigate('TabNavigator');
      }
    }
    _signInAsync = async () => {
      for(var i=0;i<this.state.user.length;i++){
        if(this.state.user[i].email === this.state.email &&this.state.user[i].password === this.state.pass){
          await AsyncStorage.setItem('userToken', 'true');
          this.props.navigation.navigate('TabNavigator');
          Alert.alert('Thành công!','Đăng nhập thành công!');
          break;
        }
      }
      };
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        paddingTop:50,
        backgroundColor:'pink'
    },
    txtInput:{
        backgroundColor:'#FFF',
        width:300,
        height:50,
        marginBottom:20
    },
    btn:{
        width:100,
        height:50,
        marginHorizontal:30
    }
});