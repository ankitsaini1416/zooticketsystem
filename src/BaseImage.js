import React from "react";
import ReactDOM from "react-dom";

import FileBase64 from "react-file-base64";

class BaseImage extends React.Component {
  constructor() {
    super();
    this.state = {
      files: [],
    };
  }

  // Callback~
  getFiles(files) {
    this.setState({ files: files });
  }

  render() {
    return <FileBase64 multiple={true} onDone={this.getFiles.bind(this)} />;
  }
}

export default BaseImage;
