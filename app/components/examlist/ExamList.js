import React, { Component } from "react";

import {
  Container,
  Header,
  Content,
  Button,
  Text,
  Body,
  Title,
  Thumbnail
} from "native-base";
import { StyleSheet } from "react-native";
import images from "../../../images";
import { Actions } from "react-native-router-flux";

class ExamList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.Container}>
        <Header>
          <Body>
            <Title>{this.props.xxa}</Title>
          </Body>
        </Header>
        <Thumbnail
          style={styles.Thumbnail}
          square
          small
          source={images.mainlogo}
        />
        <Content contentContainerStyle={styles.Content}>
          <Button
            bordered
            style={styles.Button}
            active
            onPress={() => Actions.KnowLedgeList({})}
          >
            <Text>Мэдлэг </Text>
          </Button>
          <Button bordered style={styles.Button}>
            <Text>Дасгал </Text>
          </Button>
          <Button bordered style={styles.Button}>
            <Text>Шалгалт </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  Button: {
    marginTop: 20,
    marginBottom: 1,
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
    marginTop: 85,
    marginBottom: 85,
    width: 500,
    height: 250,
    backgroundColor: "transparent"
  }
});

export default ExamList;
