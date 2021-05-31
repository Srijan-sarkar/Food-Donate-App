import React,{Component} from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableOpacity,
  Alert} from 'react-native';
import db from '../config';
import firebase from 'firebase';
import MyHeader from '../components/MyHeader'

export default class RequestPickupScreen extends Component{
  constructor(){
    super();
    this.state ={
      userId : firebase.auth().currentUser.email,
      itemName :'',
      quantity : '',
      name:''
    }
  }

  createUniqueId(){
    return Math.random().toString(36).substring(7);
  }



  addRequest =(name, itemName,quantity)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('requsted_pickup').add({
        "user_id": userId,
        "user_name": name,
        "item_name":itemName,
        "quantity":quantity,
        "request_id"  : randomRequestId,
    })

    this.setState({
        itemName :'',
        quantity : '',
        name:''
    })

    return Alert.alert("Pickup Requested Successfully")
  }


  render(){
    return(
        <View style={{flex:1}}>
          <MyHeader title="Request for pickup" navigation ={this.props.navigation}/>
            <KeyboardAvoidingView style={styles.keyBoardStyle}>
              <TextInput
                style ={styles.formTextInput}
                placeholder={"Enter your name"}
                onChangeText={(text)=>{
                    this.setState({
                        name:text
                    })
                }}
                value={this.state.name}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                multiline
                numberOfLines ={3}
                placeholder={"Item Name"}
                onChangeText ={(text)=>{
                    this.setState({
                        itemName:text
                    })
                }}
                value ={this.state.itemName}
              />
              <TextInput
                style ={[styles.formTextInput,{height:300}]}
                placeholder={"Quantity"}
                onChangeText ={(text)=>{
                    this.setState({
                        quantity:text
                    })
                }}
                value ={this.state.quantity}
              />
              <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.addRequest(this.state.name,this.state.itemName,this.state.quantity )}}
                >
                <Text>Request Pickup</Text>
              </TouchableOpacity>
            </KeyboardAvoidingView>
        </View>
    )
  }
}

const styles = StyleSheet.create({
  keyBoardStyle : {
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  formTextInput:{
    width:"75%",
    height:35,
    alignSelf:'center',
    borderColor:'#ffab91',
    borderRadius:10,
    borderWidth:1,
    marginTop:20,
    padding:10,
  },
  button:{
    width:"75%",
    height:50,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:10,
    backgroundColor:"#ff5722",
    shadowColor: "#000",
    shadowOffset: {
       width: 0,
       height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop:20
    },
  }
)
