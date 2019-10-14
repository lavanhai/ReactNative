import React, {Component} from 'react';
import {
    View,
    Button,
    AsyncStorage,
    StyleSheet
} from 'react-native';
export default class Setting extends Component{
    static navigationOptions = {
        title: 'Setting',
      };
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('SignIn');
      };
    render(){
        return(
            <View style={styles.container}>
                <Button title="Logout" onPress={this._signOutAsync}></Button>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        paddingVertical:30,
        paddingHorizontal:30,
        alignItems:'center',
    }
});