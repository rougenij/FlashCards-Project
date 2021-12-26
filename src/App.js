import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Game from "./Pages/Game";
import api from "./Utilities/Api";
// import { InitialState } from "./Utilities/InitialState";

export default class App extends React.Component {
  state = {
    data: [],
    dataToFilter: [],
    randomQuestionIndex: 0,
    showQuestionOrAnswer: "question",
    countRights: 0,
  };

  componentDidMount = async () => {
    const data = await api.getItems();
    this.setState({
      data,
      dataToFilter: data,
      randomQuestionIndex: Math.floor(Math.random() * data.length),
      countRights: data.filter((item) => item.wasRight).length,
    });
    console.log(this.state);
  };

  handelNewCardClick = () => {
    console.log(this.state.dataToFilter);
    this.setState({
      randomQuestionIndex: Math.floor(
        Math.random() * this.state.dataToFilter.length
      ),
      showQuestionOrAnswer: "question",
    });
  };

  handelRevealAnswerClick = () => {
    this.setState({
      showQuestionOrAnswer: "answer",
    });
  };

  handelRightClick = (item) => {
    const dataToFilter = this.state.dataToFilter.filter(
      (itemData) => itemData.id !== item.id
    );
    this.setState((prevState) => ({
      countRights: prevState.countRights + 1,
      dataToFilter,
      randomQuestionIndex: Math.floor(Math.random() * dataToFilter.length),
      showQuestionOrAnswer: "question",
    }));
    console.log(this.state.dataToFilter);
  };

  handelWrongClick = () => {};

  render = () => {
    return (
      <div className="container ui">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route
              path="/"
              exact
              element={
                <Game
                  randomQuestionIndex={this.state.randomQuestionIndex}
                  state={this.state}
                  handelNewCardClick={this.handelNewCardClick}
                  handelRevealAnswerClick={this.handelRevealAnswerClick}
                  showQuestionOrAnswer={this.state.showQuestionOrAnswer}
                  handelRightClick={this.handelRightClick}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  };
}
