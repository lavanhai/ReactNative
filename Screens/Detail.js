import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    TextInput
} from 'react-native';
export default class Detail extends Component{
      constructor(props){
          super(props);
          this.state={
              total:1
          }
      };
      static navigationOptions = {
        title: 'Detail',
      };
    render(){
        var Product = this.props.navigation.getParam('Product');
        if(this.props.navigation.getParam('Product') != null){
            var price = (Product.price)*this.state.total;
            return(
                <View>
                    <View style={styles.container}>
                        <Image source={{uri:Product.avatar}} style={styles.img} />
                        <View style={styles.item}>
                            <Text style={styles.text}>{Product.name}</Text>
                            <Text style={styles.text}>Số lượng:</Text>                       
                            <TextInput onChangeText={(total) => this.setState({total})} style={{width:150,height:50,fontSize:15}}>{this.state.total}</TextInput>
                            <Text style={styles.price}>Giá: {price} đ</Text>
                        </View>
                    </View>
                    <View style={{marginTop:180, paddingHorizontal:30}}><Button title='Đặt hàng' onPress={()=>this.props.navigation.push('Bill',{id:Product.id,sl:this.state.total,gia:price})}></Button></View>
                </View>
            );
        }else{
            return(
                <View style={styles.nul}>
                    <Text style={styles.text}>Chưa có sản phẩm nào</Text>
                </View>
            );
        }
        
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        paddingHorizontal:10,
        paddingVertical:10,
        paddingTop:50
    },
    img:{
        height:155,
        width:155
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        paddingTop:10
    },
    price:{
        fontSize:15,
        fontWeight:'bold',
        color:'red',
    },
    item:{
        paddingLeft:20,
        paddingTop:15
    },
    nul:{
        alignItems:'center',
        paddingHorizontal:40,
        paddingVertical:40
    }
});
