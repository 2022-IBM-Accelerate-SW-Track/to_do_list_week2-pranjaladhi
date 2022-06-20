import React, { Component } from 'react';
import "./About.css";
import "../assets/PranjalPic.jpg"
import PranjalPic from "../assets/PranjalPic.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
         <div>
          <div class="split left">
            <div className="centered">
              <img 
                className="profile_image"
                src = {PranjalPic}
                alt="Profile Pic"
                ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Pranjal Adhikari </div>
              <div className="brief_description">
                  I like mangos and playing tennis
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}