var React = require('react');
var PropTypes = React.PropTypes;

var UploadButton = React.createClass({
  upload: function(){
    cloudinary.openUploadWidget(window.cloudinary_options, function(error, images)){
      if(error === null){

      } else {
        
      }
    }
  },

  render: function() {
    return (
      {this.upload}
    );
  }

});

module.exports = ;
