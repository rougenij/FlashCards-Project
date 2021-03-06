import React from "react";

export default class Game extends React.Component {
  render = () => {
    return (
      <>
        {this.props.state.dataToFilter.length > 0 &&
          this.props.state.data.length > 0 && (
            <div className="ui container">
              <div className="ui centered card width-standard">
                <div className="content center-text">
                  {console.log(this.props.state.showQuestionOrAnswer)}
                  <div className="header">
                    {
                      this.props.state.dataToFilter[
                        this.props.state.randomQuestionIndex
                      ][this.props.state.showQuestionOrAnswer]
                    }
                  </div>
                </div>
              </div>
              <div className="ui centered center-text">
                <div>
                  <button
                    className="ui button"
                    onClick={this.props.handelNewCardClick}
                  >
                    New Card
                  </button>
                  <button
                    className="ui button"
                    onClick={this.props.handelRevealAnswerClick}
                  >
                    Reveal Answer
                  </button>
                </div>
                <div
                  className={`${
                    this.props.state.showQuestionOrAnswer === "question" &&
                    "display-none"
                  }`}
                >
                  <div>Did you Get it Right?</div>
                  <div>
                    <button
                      className="ui button"
                      onClick={() =>
                        this.props.handelRightClick(
                          this.props.state.dataToFilter[
                            this.props.state.randomQuestionIndex
                          ]
                        )
                      }
                    >
                      YES
                    </button>
                    <button
                      className="ui button"
                      onClick={this.props.handelNewCardClick}
                    >
                      NO
                    </button>
                  </div>
                </div>
                <div>Completed</div>
                <p>
                  {this.props.state.countRights} /{" "}
                  {this.props.state.data.length}
                </p>
              </div>
            </div>
          )}
        {this.props.state.dataToFilter.length <= 0 &&
          this.props.state.data.length > 0 && (
            <div className="ui container">
              <div className="ui centered card width-standard">
                <div className="content center-text">
                  <div className="header">Done!!!</div>
                </div>
              </div>
              <div className="ui centered center-text">
                <div>Completed</div>
                <p>
                  {this.props.state.countRights} /{" "}
                  {this.props.state.data.length}
                </p>
                <p>You have completed all flash cards</p>
                <button onClick={() => window.location.reload(false)} className="ui button">Reshuffle Again</button>
              </div>
            </div>
          )}
      </>
    );
  };
}
