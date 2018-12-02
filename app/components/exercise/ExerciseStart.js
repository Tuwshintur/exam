import React, { Component } from "react";

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Body,
  Title
} from "native-base";
import { StyleSheet } from "react-native";

class ExerciseStart extends Component {
  constructor() {
    console.disableYellowBox = true;
    super();
  }

  render() {
    return (
      <Container bordered style={styles.Container}>
        <Header>
          <Body>
            <Title>Дасгал</Title>
          </Body>
        </Header>
        <Content contentContainerStyle={styles.Content}>
          <Text>{this.props.xxa}</Text>
          <Button bordered style={styles.Button}>
            <Text>Эхлэх</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    marginTop: 1,
    marginBottom: 10,

    width: 350,
    textAlign: "center",
    justifyContent: "center",
    fontSize: 16
  },
  Content: {
    alignSelf: "center"
  },
  Thumbnail: {
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 50,
    width: 200,
    height: 100,
    backgroundColor: "transparent"
  }
});

export default ExerciseStart;
