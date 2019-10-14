import React, {Component} from 'react';
import {
  FlatList,
  View,
  StyleSheet
} from 'react-native';
import ProductsListItem from '../Components/ProductsListItem';
import axios from 'axios';
export default class Home extends Component{
  constructor(props){
    super(props);
    this.state={
     Products:[]
    };
  }
  componentDidMount(){
   axios({
     method:'GET',
     url:'http://5d9ac3fe686ed000144d17a6.mockapi.io/api/Products',
     data:null
   }).then(res =>{
     this.setState({
       Products:res.data
     });
   }).catch(err =>{
     console.log(err);
   });
  }
  render(){
    return(
        <FlatList style={styles.container}
      data = {this.state.Products}
      numColumns={2}
      renderItem = {({item}) => 
      <View style={styles.customItem}>
        <ProductsListItem
          Product = {item}
          _onPress={() => this.props.navigation.push('Detail',
          {
            Product:item
          }
          )}
         />
      </View>
    }
    keyExtractor = {item => item.id}
       />
    );
  }
}
const styles = StyleSheet.create({
  container:{
    paddingHorizontal:10,
    paddingVertical:10
  },
  customItem:{
    paddingHorizontal:8,
    paddingVertical:8
  }
});
