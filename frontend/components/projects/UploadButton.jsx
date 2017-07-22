var React = require("react");

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        this.props.postImage(results[0]);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload Project Image!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
