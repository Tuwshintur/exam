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
import images from "../../images";
import { Actions } from "react-native-router-flux";

class Main extends Component {
  constructor() {
    console.disableYellowBox = true;
    super();
  }
  showPopup = aa => {};

  render() {
    return (
      <Container bordered style={styles.Container}>
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
            onPress={() => Actions.KnowLedgeList({ xxa: "Математик" })}
          >
            <Text>Математик </Text>
          </Button>
          <Button
            bordered
            style={styles.Button}
            onPress={() => Actions.KnowLedgeList({ xxa: "Монгол хэл	" })}
          >
            <Text>Монгол хэл </Text>
          </Button>
          <Button
            bordered
            style={styles.Button}
            onPress={() => Actions.KnowLedgeList({ xxa: "Нийгмийн ухаан	" })}
          >
            <Text>Нийгмийн ухаан </Text>
          </Button>
          <Button
            bordered
            style={styles.Button}
            onPress={() => Actions.KnowLedgeList({ xxa: "Англи хэл	" })}
          >
            <Text>Англи хэл </Text>
          </Button>
          <Button
            bordered
            style={styles.Button}
            onPress={() => Actions.KnowLedgeList({ xxa: "Орос хэл	" })}
          >
            <Text>Орос хэл </Text>
          </Button>
          <Button
            bordered
            style={styles.Button}
            onPress={() => Actions.KnowLedgeList({ xxa: "Газарзүй	" })}
          >
            <Text>Газарзүй </Text>
          </Button>
          <Button
            bordered
            style={styles.Button}
            onPress={() => Actions.KnowLedgeList({ xxa: "Физик	" })}
          >
            <Text>Физик </Text>
          </Button>
          <Button
            bordered
            style={styles.Button}
            onPress={() => Actions.KnowLedgeList({ xxa: "Биологи	" })}
          >
            <Text>Биологи</Text>
          </Button>
          <Button
            bordered
            style={styles.Button}
            onPress={() => Actions.KnowLedgeList({ xxa: "Монгол улсын түүх		" })}
          >
            <Text>Монгол улсын түүх </Text>
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

export default Main;
