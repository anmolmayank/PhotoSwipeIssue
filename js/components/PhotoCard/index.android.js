'use strict';

import React, {Component} from 'react';

import { Image, View, StyleSheet, PanResponder, Animated, TouchableOpacity,Platform} from 'react-native'
import { Container ,Content , Text, Card, CardItem, DeckSwiper, Thumbnail,Grid ,Row, Icon,Button, Right, Body} from 'native-base';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
import styles from './style';
import Swiper from 'react-native-swiper';

let users = [
    {
        name: 'Scarlet Johnson',
        age:35,
        college: 'Asst Engineer, Apple',
        image: require('../../../img/Assets/Swipe1.png'),

    },
    {
        name: 'Megan Fox',
        age: 24,
        college: 'Student,MIT',
        image: require('../../../img/Assets/randomuser.jpg'),
        num: 1076
    },
    {
        name: 'Emma Watson',
        age:22,
        college: 'CRM, Infosys',
        image: require('../../../img/Assets/randomuser2.jpg'),
        num: 836
    },
    {
        name: 'Rachel McAdams',
        age:26,
        college: 'Front End Developer, ZUSA',
        image: require('../../../img/Assets/randomuser3.jpg'),
        num: 763
    },
    {
        name: 'Brian James',
        age:28,
        college: 'Graphic Designer, Skenix',
        image: require('../../../img/Assets/randomuser4.jpg'),
        num: 763
    },
    {
        name: 'Joe Turner',
        age:25,
        college: 'Chef, KunixSoft',
        image: require('../../../img/Assets/randomuser5.jpg'),
        num: 763
    }
];

export default class PhotoCard extends Component {

  constructor(props){
    super(props);
    this.state = {
      direction: null,
      opac: 0
    };
  }

  handleImageClick () {
    this.props.pushRoute({ key: 'photoCardDetails', index: 1 }, this.props.navigation.key);
  }

  render() {
        return (
          <Container style={styles.wrapper}>
            <Image source={require('../../../img/Back-Img.png')} style={{height: height/1.3,width: width}}>
            <View style={{ flex: 4,width: width,height: height,paddingTop: 20}}>

              <DeckSwiper activeOpacity={1} dataSource={users}
                  ref={(mr) => this._deckSwiper = mr}

                  onSwiping={(dir,opa) => this.setState({direction: dir,opac: opa})}
                  renderTop={(item)=>

                      <Card activeOpacity={1}>

                          <CardItem style={{  overflow: 'hidden', }} activeOpacity={1} cardBody onPress={() => Actions.customcarddetail()}>
                              <Image style={styles.cardMain} source={item.image}>
                                  {(this.state.direction === 'left') &&
                                  <View style={{opacity: (-this.state.opac/150),position: 'absolute',right: -10,justifyContent: 'center',alignItems: 'center',transform: [{rotate: '0deg'}]}}>
                                    <Image source={require('../../../img/Assets/Disliked.png')} style={{width: 150,height: 150}}/>
                                  </View>
                                  }
                                  {(this.state.direction === 'right') &&
                                  <View style={{opacity: this.state.opac/150,position: 'absolute',justifyContent: 'center',alignItems: 'center',transform: [{rotate: '0deg'}]}}>
                                    <Image source={require('../../../img/Assets/rightLike.png')} style={{width: 150,height: 150}}/>
                                  </View>
                                  }
                                  <View style={{flex: 1,justifyContent: 'flex-end',paddingLeft: 20}}>
                                    <Text style={{backgroundColor: 'transparent'}}>
                                      <Text style={{backgroundColor: 'transparent',color: '#ffffff',fontSize: 24,fontFamily: 'Nunito-Regular'}}>{item.name}, {item.age}{'\n'}</Text>
                                      <Text style={{backgroundColor: 'transparent',color: '#ffffff',fontSize: 18,fontFamily: 'Nunito-Light'}}>{item.college}</Text>
                                    </Text>
                                  </View>
                              </Image>
                          </CardItem>

                      </Card>
                  }
                  renderBottom={(item)=>
                      <Card>
                          <CardItem style={{ overflow: 'hidden'}} cardBody >
                              <Image  style={styles.cardMain} source={item.image}>
                                  <View style={{flex: 1,justifyContent: 'flex-end',backgroundColor: 'transparent',paddingLeft: 20}}>
                                    <Text style={{backgroundColor: 'transparent'}}>
                                      <Text style={{backgroundColor: 'transparent',color: '#ffffff',fontSize: 24,fontFamily: 'Nunito-Regular'}}>{item.name}, {item.age}{'\n'}</Text>
                                      <Text style={{backgroundColor: 'transparent',color: '#ffffff',fontSize: 18,fontFamily: 'Nunito-Light'}}>{item.college}</Text>
                                    </Text>
                                  </View>
                              </Image>
                          </CardItem>
                      </Card>
                  }>

            </DeckSwiper>

          </View>
        </Image>
        </Container>

        );
    }
}



function bindActions(dispatch) {
  return {
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});
