/*
 * @Author: 简小飞
 * @Date: 2021-02-05 15:15:00
 * @LastEditTime: 2021-02-05 22:16:46
 * @FilePath: /react-iptv-web/src/nCoV-2019-report/ncov.js
 */
import React from "react";
import { Carousel } from "antd";
import "antd/dist/antd.css";
import wordImg from "./assets/img/world.png";
import chinaImg from "./assets/img/china.png";
import "./ncov.css";

class NcOv extends React.Component {
  render() {
    return (
      <div className="page-container">
        <p className="logo">ncov-2019</p>
        <div>
          <div className="page-wrap-1">
            <Carousel autoplay>
              <div>
                <img src={chinaImg} alt="" />
              </div>
              <div>
                <img src={wordImg} alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    );
  }
}

export default NcOv;
