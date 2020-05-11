import memoize from "memoize-one";
import React, { Component } from "react";
import ReactWebChat, {
  createDirectLine,
  createStyleSet,
} from "botframework-webchat";

class WebChat extends Component {
  constructor(props) {
    super(props);

    this.createDirectLine = memoize(() =>
      createDirectLine({
        secret: "",
        token: "",
        domain: "http://localhost:4000/directline",
        webSocket: false, // defaults to true
      })
    );

    this.state = {
      styleSet: createStyleSet({
        backgroundColor: "Transparent",
      }),
    };
  }

  componentDidMount() {
    !this.props.token && this.props.onFetchToken();
  }
  render() {
    const {
      props: { className, store },
      state: { styleSet },
    } = this;

    return (
      <ReactWebChat
        className={`${className || ""} web-chat`}
        directLine={this.createDirectLine()}
        store={store}
        styleSet={styleSet}
      />
    );
  }
}

export default WebChat;
