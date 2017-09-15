import {StyleSheet, Platform} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');
export default {
  wrapper:{
    flex:4,
    backgroundColor: '#ffffff',
    marginTop: 1
  },
  imageView: {
    marginTop:10,
    alignItems: 'center',
    overflow:'hidden',
    marginLeft:12,
    marginRight:12,
    paddingBottom: 0,
    elevation:1.5,
  },
  image: {

  },

  cardMain: {
    height: (width < 330) ? ((Platform.OS === 'ios') ? (height / 1.4) : (height / 1.4)) : ((Platform.OS === 'ios') ? (height / 1.4) : (height / 1.4)),
    resizeMode: 'cover',
    flex: 1,
    width: width,
    padding: 10,
  },
  subtextLeft: {
    fontSize: 13,
    color:'#393E40',
    fontWeight:'600',
    opacity:0.879,
    fontFamily: 'arial'
  },
  textLeft: {
    fontSize: 16,
    color:'#393E40',
    fontWeight:'600',
    opacity:0.879,
    fontFamily: 'arial'
  },
  subText: {
    // flex:1,
    backgroundColor: '#FFFFFF',
    padding: 10,
    paddingBottom:15,
    marginLeft:10,
    marginRight:10,
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10,
    shadowOpacity: 0.125,
    shadowRadius: 3,
    shadowOffset: {
        height: 1,
        width: 0
      },
  },
  bottomGrid:{
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
  },
  workplace: {
    backgroundColor: 'red',
    alignSelf: 'center',
    // width: width - 20,
    justifyContent: 'space-between',
    marginTop:-10,
    paddingLeft:10,
    elevation:2
  },



};
