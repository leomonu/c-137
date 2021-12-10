
import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {Header,ListItem} from 'react-native-elements'
import axios from 'axios'

export default class Homescreen extends React.Component {
    constructor(){
        super()
        this.state = {
            starList:[],
            url:"http://127.0.0.1:5000/"

        }
    }
    getStarData = async()=>{
        await axios.get(this.state.url).then((response)=>{
        //    console.log(response.data.data)
            return this.setState({
                starList:response.data.data
            })
        
        })
        .catch((error)=>{
            alert(error)
        })
    }
    componentDidMount(){
        this.getStarData()
    }
    renderItem=({item,index})=>{
        return(
            <ListItem key = {index}
            title = {`Star Name:   ${item.Name}`}
             subtitle = {`Star Mass:   ${item.Mass} /n + Star Distance:  ${item.Distance}`}
             onPress ={()=>{
                 this.props.navigation.navigate("Star",{star_name:item.Name})
             }}
             bottomDivider
            >
                
            </ListItem>
        )
    }
  render(){
  return (
    <View>
      <Header
        centerComponent = {{
            text:"Star App",
            style:{fontSize:15,color:"lightblue",fontWeight:"bold"}
        }}
        
      />
      <View>
          <FlatList
            renderItem = {this.renderItem}
            keyExtractor = {this.keyExtractor}
            data = {this.state.starList}
          />
      </View>
    </View>

  );
  }
}

