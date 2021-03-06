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

class Example extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.Container}>
        <Thumbnail
          style={styles.Thumbnail}
          square
          small
          source={images.mainlogo}
        />
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

export default Example;
