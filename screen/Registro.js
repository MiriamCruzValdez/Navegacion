import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Content, Card, CardItem, Text, Body,Button,Item, Icon,Input } from 'native-base';

class Registro extends Component{
render(){
  const navegar = this.props.navegation;
  return (
    <Container>

        <Content padder contentContainerStyle ={styles.content}>
          <Card>
            <CardItem header bordered>
              <Text>{this.props.route.params.titulo}</Text>
            </CardItem>
            <CardItem>
            <Icon type = 'Ionicons' name = 'logo-facebook'></Icon>
              <Text>Facebook</Text>
              <Icon type = 'FontAwesome' name = 'twitter-square'></Icon>
              <Text>Twitter</Text>
            </CardItem>
            
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                    <Input placeholder='Nombre' />
                </Item>
                <Item inlineLabel>
                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                    <Input placeholder='Apellido' />
                </Item>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name = 'user'></Icon>
                  <Input placeholder='Nombre de usuario' />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'MaterialCommunityIcons' name = 'email-open'></Icon>
                  <Input type='email' placeholder='Correo' />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style={styles.boton}><Text> Registrar </Text></Button>
            </CardItem>
            <CardItem style={styles.boton2}>
              <Item inlineLabel last>
                
              </Item>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
}

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
    marginLeft: '27%',
    backgroundColor: 'black'
  },
  boton2 : {
    margin: '0%',
  },
});

export default Registro;