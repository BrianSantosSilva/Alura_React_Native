
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  FlatList,
  TouchableOpacity,
  TextInput
} from 'react-native';



type Props = {};
export default class Likes extends Component<Props> {

  carregaIcone(likeada){

    return likeada ? require('../../resources/img/s2-checked.png') :
    require('../../resources/img/s2.png')

  }


  exibeLikes(likers) {
    if(likers.length <= 0)
      return;

    return (<Text style={styles.likes}>{likers.length} {likers.length > 1 ? 'curtidas': 'curtida'}</Text>)
  }


  render(){

    const {likeCallback} = this.props;
    const { foto} = this.props;

    return(
      <View>

        <TouchableOpacity onPress={() => {likeCallback(foto.id)}}>

          <Image
          style={styles.botaoDeLike}
          source={this.carregaIcone(foto.likeada)}/>
        </TouchableOpacity>

        {this.exibeLikes(foto.likers)}

      </View>
    );
  }
}


const styles = StyleSheet.create({
  likes:{
    fontWeight:'bold'
  },
  botaoDeLike:{
    marginBottom:10,
    height:40,
    width:40
  },
});
