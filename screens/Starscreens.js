
import React from 'react';
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import {Header,ListItem,Card} from 'react-native-elements'
import axios from 'axios'
export default class Starscreen extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            
            starList:[],
            url:`http://127.0.0.1:5000/stars?Name=${this.props.navigation.getParam("star_name")}`

        }
    }
    getStarData = async()=>{
        await axios.get(this.state.url).then((response)=>{
           console.log(response.data.data)
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
  render(){
  return (
    <View>
      <Card>
          <Text>
              {`Star Name:  ${this.state.starList.Name}`}
          </Text>
          <Text>
              {`Star Distance:  ${this.state.starList.Distance}`}
          </Text>
          <Text>
              {`Star Mass:  ${this.state.starList.Mass}`}
          </Text>
          <Text>
              {`Star Radius:  ${this.state.starList.Radius}`}
          </Text>
          <Text>
              {`Star Gravity:  ${this.state.starList.Gravity}`}
          </Text>
          <Image></Image>
      </Card>
    </View>
  );
  }
}
