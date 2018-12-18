
import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';


type Props = {};
export default class InputComentario extends Component<Props> {
  constructor() {
    super();

    this.state = {
      valorComentario : ''

    };
  }

  render(){
    return(

      <View style={styles.conteiner}>
        <TextInput style={styles.input}
          placeholder="Adicione um comentario..."
          ref={input => this.inputComentario = input}
          onChangeText={texto => this.setState({valorComentario: texto})}
          underlineColorAndroid='transparent'
        />
        <TouchableOpacity onPress={() => {
          this.props.comentarioCallback(this.props.idFoto,this.state.valorComentario,this.inputComentario)
          this.setState({valorComentario : ''})
        }}>
          <Image style={styles.icone} source={require('../../resources/img/send.png')} />
        </TouchableOpacity>
      </View>

    );
  }
}


const styles = StyleSheet.create({

    conteiner:{
      flexDirection:'row',
      alignItems:'center',
      borderBottomWidth:1,
      borderBottomColor:'#ddd',
    },
    input:{
      flex:1,
      height:40,

    },
    icone:{
      height:30,
      width:30
    }

  });
