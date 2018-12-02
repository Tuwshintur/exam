import React, { Component } from "react";
import Main from "./Main";
import ExamList from "./examlist/ExamList";
import KnowLedge from "./knowledge/KnowLedge";
import KnowLedgeList from "./knowledge/KnowLedgeList";
import Exercise from "./exercise/Exercise";
import ExerciseStart from "./exercise/ExerciseStart";
import Exam from "./exam/Exam";
import ExamStart from "./exam/ExamStart";

import { Scene, Router, Tabs } from "react-native-router-flux";

class MainRouter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>
          <Tabs
            swipeEnabled
            showLabel={true}
            tabBarPosition="bottom"
            tabBarStyle={{
              backgroundColor: "graceblue"
            }}
            tabStyle={{
              justifyContent: "center",
              alignItems: "center"
            }}
            labelStyle={{
              color: "black",
              fontSize: 16,
              alignItems: "center",
              paddingBottom: 14
            }}
            activeBackgroundColor="white"
            lazy
          >
            <Scene
              key="Main"
              component={Main}
              initial
              hideNavBar
              title={"Мэдлэг"}
            />
            <Scene
              key="Exercise"
              component={Exercise}
              hideNavBar
              title={"Дасгал"}
            />
            <Scene key="Exam" component={Exam} hideNavBar title={"Шалгалт"} />
          </Tabs>
          <Scene key="ExerciseStart" component={ExerciseStart} />
          <Scene key="ExamStart" component={ExamStart} />
          <Scene key="ExamList" component={ExamList} hideNavBar />
          <Scene key="KnowLedgeList" component={KnowLedgeList} hideNavBar />
          <Scene key="KnowLedge" component={KnowLedge} hideNavBar />
        </Scene>
      </Router>
    );
  }
}

export default MainRouter;
