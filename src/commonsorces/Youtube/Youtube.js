import React, { Component } from "react";
import "../../css/bootstrap.css";
import './Youtube.css'

export class Youtube extends Component {
  constructor() {
    super();
    this.state = {
      Youtube: [],
    };
  }

  // Api = AIzaSyDhdIk8adyajv1DM1O7VHy-WOBWs9o9lPU

  // id ==UCE_M8A5yxnLfW0KghEeajjw

  // https://www.googleapis.com/youtube/v3/search?key=AIzaSyDCaGdAHhyhTvz5p-0srOdTOfaV-DdOEXI&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=10


  componentDidMount() {
    fetch(
      "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDhdIk8adyajv1DM1O7VHy-WOBWs9o9lPU&channelId=UCE_M8A5yxnLfW0KghEeajjw&part=snippet,id&order=date&maxResults=8"
    )
      .then((Response) => Response.json())
      .then((data) => {
        const Youtubes = data.items;
        this.setState({ Youtubes });
      });
    console.log(Youtube);
  }

  render() {
    return (
      <div className="videoWraper">
        <div className="container">
          <div className=" col-12 col-md-6 col-sm-3 justify-content-between">
            <div className="descriptionwrapper text-center vid ">
              <h1>you tube videos</h1>
            </div>
            <div className="Videowidth ">
              
              <div>
                <h2>vedio Two</h2>
              </div>
              <div>
                <h2>vedio Two</h2>
              </div>
              <div>
                <h2>vedio Two</h2>
              </div>
              <div>
                <h2>vedio Two</h2>
              </div>
              <div>
                <h2>vedio Two</h2>
              </div>
            
            </div>

            

          </div>
        </div>
      </div>
    );
  }
}
export default Youtube;
