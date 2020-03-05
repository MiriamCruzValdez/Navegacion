import React,{Component} from 'react';
import {StyleSheet, ActivityIndicator,Modal,View} from 'react-native';
import { Container, Content, Card, CardItem, Text, Body,Button,Item,Input,Icon } from 'native-base';
/*constructor(props){
    super(props);
    this.state = {
      user: 'Miri',
      pass: 'mcv1130',
      entrar: 1,
    }
  } *///END CONSTRUCTOR
class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      nombre:'',
      password:'',
      isloading: true
    }
  }
  ShowHideActivityIndicator = () =>{
    const navegar=this.props.navigation;
    if(this.state.isLoading == true)
    {
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
      setTimeout(() => {
        navegar.navigate('Informacion',{nombres:this.state.nombre,pass:this.state.password});
        this.setState({isLoading: false})
      },2000);
    }
  }
 
    

render(){
  const navegar=this.props.navigation;
  return (
    <Container>
        
        <View style={styles.MainContainer}>
        {
        this.state.isLoading ?  
        <Modal            // Dentro del modal, configuraremos lo que realmente queremos que el usuario vea.
        transparent = {true}    
        animationType = {'none'} 
        visible = {this.state.isloading}> 
      


          <View style = {styles.modalBackground}> 
            <View style = {styles.activityIndicatorWrapper}> 
              <ActivityIndicator style={{padding: 70}} /> 
            </View> 
          </View> 
        </Modal> : null
        }
        </View>
        <Content padder contentContainerStyle ={styles.content}>
          <Card>
            <CardItem header bordered>
              <Text style={styles.textCenter}>Inicio de sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name='user'></Icon>
                  <Input placeholder='Nombre de usuario' value={this.state.nombre} onChangeText={(nombre)=> this.setState({nombre})} />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' value={this.state.password} onChangeText={(password)=> this.setState({password})} secureTextEntry={true} />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style={styles.boton} onPress={this.ShowHideActivityIndicator}>
            
            <Text> Entrar </Text></Button>
            </CardItem>
          </Card>
          <Text style={styles.textCenter}></Text>
          <Button onPress={() => {navegar.navigate('Registro',{titulo:'Registro de usuarios'});}}><Text  style={styles.textCenter}>Registrate</Text></Button>
        </Content>
      </Container>
  );
}
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton:{
    marginLeft: '70%',
    backgroundColor: 'black'
  },
  boton2:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer :{
    justifyContent: 'center',
  },
  modalBackground : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#00000040'
  } ,
  activityIndicatorWrapper : {
    backgroundColor : '#FFFFFF' ,
    height : 100 ,
    width : 100 ,
    borderRadius : 10 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  }
});

//AppRegistry.registerComponent('Login', () => Login);
export default Login;