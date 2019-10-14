import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert
} from 'react-native';
import axios from 'axios';
export default class Bill extends Component{
    constructor(props){
        super(props);
        this.state={
            name:'',address:'',phone:'',idproduct:this.props.navigation.getParam('id'),total:this.props.navigation.getParam('sl'),price:this.props.navigation.getParam('gia')}
    }
    render(){
        const {Id} = this.props;
        return(
            <View style={styles.container}>
                <View style={styles.item}>
                    <Text style={styles.txt}>Họ Tên:</Text>
                    <TextInput onChangeText={(name) => this.setState({name})} placeholder="Nguyễn Văn A" style={styles.txtIn}></TextInput>
                </View>
                <View style={styles.item}>
                    <Text style={styles.txt}>Địa Chỉ:</Text>
                    <TextInput onChangeText={(address) => this.setState({address})} placeholder="Số nhà 20 - Tp Thái Nguyên" style={styles.txtIn}></TextInput>
                </View>
                <View style={styles.item}>
                    <Text style={styles.txt}>Số Điện Thoại:</Text>
                    <TextInput onChangeText={(phone) => this.setState({phone})} placeholder="0987654321" style={styles.txtIn}></TextInput>
                </View>
                <Button title='Gửi' onPress={()=>{
                    if(this.state.name === '' || this.state.address === '' || this.state.phone === ''){
                        Alert.alert('Thất bại!', 'Vui lòng kiểm tra lại thông tin!');
                      }else{
                        axios({
                          method: 'post',
                          url: 'http://5d9ac3fe686ed000144d17a6.mockapi.io/api/Bills',
                          data: {
                            name: this.state.name,
                            address: this.state.address,
                            phone: this.state.phone,
                            idproduct: this.state.idproduct,
                            total:this.state.total,
                            price:this.state.price
                          }
                        });
                        Alert.alert('Thành công!','Đặt hàng thành công!');
                        this.props.navigation.navigate('TabNavigator');
                      }
                }}></Button>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    item:{
        flexDirection:'row'
    },
    container:{
        flex:1,
        marginHorizontal:20,
        marginVertical:20,
        paddingTop:50
    },
    txt:{
        paddingTop:12,
        fontSize:20,
    },
    txtIn:{
        width:300,
        height:50,
        fontSize:20,
        paddingLeft:20
    },
});