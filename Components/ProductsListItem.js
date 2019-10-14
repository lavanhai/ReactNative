import React, {Component} from 'react';
import {
    View,
    Text,TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';
export default function ProductsListItem(props){
    const {Product, _onPress} = props;
    return(
           <TouchableOpacity onPress={_onPress}>
               <Image source={{uri:Product.avatar}} style={styles.img} />
            <View>
                <Text style={styles.text}>{Product.name}</Text>
            </View>
            <View>
                <Text style={{color:'red',marginLeft:15, fontSize:15, fontWeight:'bold'}}>Giá: {Product.price} đ</Text>
            </View>
           </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    img:{
        height:155,
        width:155
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
    }
});