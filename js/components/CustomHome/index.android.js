'use strict';

import React, {Component} from 'react';

import { TouchableOpacity, Image,View,ScrollView,StyleSheet, ActivityIndicator, PanResponder, Animated,Platform} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Container ,Content , Text, Card, CardItem, DeckSwiper, Thumbnail,Grid ,Row,Button, Right, Body } from 'native-base';
import PhotoCard from '../PhotoCard';


var Dimensions=require('Dimensions');
var {width,height}=Dimensions.get('window');


export default class CustomHome extends Component {
  constructor(props){
    super(props);
    this.state = {
      page:'md-flame',
      show: false
    };
  }
  componentDidMount() {
    setTimeout(() => {this.setState({show: true})}, 1000)
  }
  render() {
    if(!this.state.show) {
        return (
          <View style={{flex: 1}}>
            <ActivityIndicator size="large" color='#50e3a9' style={{top: height/2.2}} />
          </View>
              )
          }
      else {
        return (
          <View style={styles.container}>
            <View style={styles.tabStyle}>
              <View style={styles.tab}>

                  <View style={{flex:1,justifyContent: 'center',alignItems: 'flex-end'}}>
                    <TouchableOpacity onPress={() => Actions.customprofile()}>
                    <Image source={require('../../../img/Assets/User.png')} style={{width: 40, height: 40}}/>
                    </TouchableOpacity>
                  </View>


                  <View  style={{flex:1,justifyContent: 'center',alignItems: 'center',left: 10}}>
                  <TouchableOpacity onPress={() => Actions.nomatch()}>
                    <Image source={require('../../../img/Assets/Like_Btn_sel.png')} style={{width: 70, height: 70}}/>
                  </TouchableOpacity>
                  </View>


                  <View  style={{flex:1,justifyContent: 'center',alignItems: 'center',right: 10}}>
                  <TouchableOpacity onPress={() => Actions.custommatch()}>
                    <Image source={require('../../../img/Assets/Message.png')}  style={{width: 70, height: 70}}/>
                  </TouchableOpacity>
                  </View>


                  <View  style={{flex:1,justifyContent: 'center',alignItems: 'flex-start'}}>
                  <TouchableOpacity onPress={() => Actions.customanalytics()}>
                    <Image source={require('../../../img/Assets/Graph.png')} style={{width: 40, height: 40}} />
                  </TouchableOpacity>
                  </View>

              </View>
            </View>
            <View style={styles.mainConatiner}>
              {/*<View style={{flex: 1,justifyContent: 'center',alignItems: 'flex-start',backgroundColor: 'red'}}>
                <Image source={require('../../../img/Assets/Dislike.png')} style={{height: 250,width: 60}} />
              </View>*/}

              {/*<View style={{flex: 1,justifyContent: 'center',alignItems: 'center',backgroundColor: 'transparent'}}>
              </View>*/}


                <PhotoCard/>

                  <View style={{flex: 1,justifyContent: 'center',alignItems: 'flex-end',backgroundColor: 'transparent',}}>
                      <Image source={require('../../../img/Assets/Like.png')} style={{height: 250,width: 60}} />
                    </View>
            {/* <View style={{flex: 1,justifyContent: 'center',alignItems: 'flex-end',backgroundColor: 'transparent',}}>
                <Image source={require('../../../img/Assets/Like.png')} style={{height: 250,width: 60}} />
              </View>*/}

            </View>

          </View>
        )
        }
        }

        }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  tabStyle:{
    flex: 0.2,
    backgroundColor: 'transparent',
  },overlayImages:{
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
  },
  mainConatiner:{
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
  },
  tab: {
    flexDirection: 'row',
    flex: 4,
    backgroundColor: 'transparent',
  }
});
