import React, { Component } from "react";

import { Container, Header, Content, Tab, Tabs } from "native-base";
import { StyleSheet } from "react-native";
import images from "../../../images";
import { Actions } from "react-native-router-flux";
import Tab1 from "./Rule";
import Tab2 from "./Example";

class KnowLedgeList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Container style={styles.Container}>
        <Header hasTabs />
        <Content>
          <Tabs>
            <Tab heading="Дүрэм,Тодорхойлолт">
              <Tab1 />
            </Tab>
            <Tab heading="Жишээ">
              <Tab2 />
            </Tab>
          </Tabs>
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

export default KnowLedgeList;
