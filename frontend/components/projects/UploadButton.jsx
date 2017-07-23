var React = require("react");
import Dropzone from 'react-dropzone';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'bsboi6te';
const  CLOUDINARY_UPLOAD_URL = "http://res.cloudinary.com/noah-s-kang/";


class UploadButton extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      uploadedImageUrl: ''
    };
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    });

    this.handleImageUpload(files[0]);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploadedImageUrl: response.body.secure_url
        });
      }
    });
  }

  render(){
    return(
      <div id="dropzone-section">
          <div className="Dropzone">
              <Dropzone id="dropzone"
                multiple={false}
                accept="image/*"
                onDrop={this.onImageDrop.bind(this)}>
                <p>Drop an image or click to select a file to upload</p>
              </Dropzone>
          </div>
          <div>
            {this.state.uploadedImageUrl === '' ? null :
            <div>
              <p>{this.state.uploadedFile.name}</p>
              <img src={this.state.uploadedImageUrl} />
            </div>}
          </div>
      </div>
    );
  }
}

export default UploadButton;
