/*
 * @Author: 简小飞
 * @Date: 2021-02-05 15:15:00
 * @LastEditTime: 2021-02-06 02:21:40
 * @FilePath: /react-iptv-web/src/nCoV-2019-report/ncov.js
 */
import React from "react";
import { Carousel, Button } from "antd";
import { VideoCameraOutlined, HighlightOutlined } from "@ant-design/icons";
import wordImg from "./assets/img/world.png";
import chinaImg from "./assets/img/china.png";
import "antd/dist/antd.css";
import "./ncov.styl";

class NcOv extends React.Component {
  render() {
    return (
      <div className="page-container">
        <p className="logo">ncov-2019</p>
        <div className="page-wrap-1">
          <Carousel autoplay>
            <div>
              <img src={chinaImg} alt="" />
            </div>
            <div>
              <img src={wordImg} alt="" />
            </div>
          </Carousel>
          <section className="report-detail">
            <h3 className="des-title">截止：2021-02-05 17:01:00 数据来源： 各地区卫健委</h3>
            <div>
              <h3>国内疫情情况</h3>
              <ul>
                <li>
                  较昨日<span style={{ color: "#fb8c81" }}>-141</span>
                </li>
                <li style={{ color: "#fb8c81" }}>2030</li>
                <li>现存确诊</li>
              </ul>
              <ul>
                <li>
                  较昨日<span style={{ color: "#f7c577" }}>+14</span>
                </li>
                <li style={{ color: "#f7c577" }}>4772</li>
                <li>境外输入</li>
              </ul>
              <ul>
                <li>
                  较昨日<span style={{ color: "#5497e7" }}>+44</span>
                </li>
                <li style={{ color: "#5497e7" }}>101228</li>
                <li>累计确诊</li>
              </ul>
              <h3>国外疫情情况</h3>
              <ul>
                <li>
                  较昨日<span style={{ color: "#994855" }}>+37019</span>
                </li>
                <li style={{ color: "#994855" }}>25997037</li>
                <li>现存确诊</li>
              </ul>
              <ul>
                <li>
                  较昨日 <span style={{ color: "#bd4f56" }}>+521107</span>
                </li>
                <li style={{ color: "#bd4f56" }}>105476211</li>
                <li>累计确诊</li>
              </ul>
              <ul>
                <li>
                  较昨日<span style={{ color: "#989ea5" }}>+16379</span>
                </li>
                <li style={{ color: "#989ea5" }}>2290060</li>
                <li>累计死亡</li>
              </ul>
            </div>
          </section>
        </div>
        <div className="page-wrap-2">
          <Button size="large">
            <VideoCameraOutlined />
            疫情实播
          </Button>
          <Button size="large">
            <HighlightOutlined />
            疫情实播
          </Button>
          <Button size="large">
            <HighlightOutlined />
            疫情实播
          </Button>
          <Button size="large">
            <HighlightOutlined />
            疫情实播
          </Button>
          <br />
          <Button size="large">
            <HighlightOutlined />
            疫情实播
          </Button>
          <Button size="large">
            <HighlightOutlined />
            疫情实播
          </Button>
          <Button size="large">
            <HighlightOutlined />
            疫情实播
          </Button>
          <Button size="large">
            <HighlightOutlined />
            疫情实播
          </Button>
        </div>
      </div>
    );
  }
}

export default NcOv;
