import React from "react";
import { Carousel, Button, Image } from "antd";
import { Link } from "react-router-dom";
import { BarChartOutlined, HighlightOutlined } from "@ant-design/icons";
import wordImg from "./assets/img/world.jpg";
import chinaImg from "./assets/img/china.jpg";
import "antd/dist/antd.css";
import "./stylus/ncov.styl";

class NcOv extends React.Component {
  constructor() {
    super();
    this.time = new Date().toLocaleDateString();
  }
  render() {
    return (
      <div className="page-container">
        <p className="logo">ncov-2019</p>
        <div className="page-wrap-1">
          <Carousel autoplay effect="fade" dots={{ className: "dots" }}>
            <div>
              <Image src={chinaImg} />
            </div>
            <div>
              <Image src={wordImg} />
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
          <Button icon={<HighlightOutlined />}>
            <Link to="timePlay">疫情实播</Link>
          </Button>
          <Button icon={<BarChartOutlined />}>
            <Link to="dataStatistics">数据统计</Link>
          </Button>
          <Button icon={<HighlightOutlined />}>核酸检测疫苗接种</Button>
          <Button icon={<HighlightOutlined />}>预防及治疗</Button>
          <br />
          <Button icon={<HighlightOutlined />}>疑是感染自测</Button>
          <Button icon={<HighlightOutlined />}>隔离政策与小区信息</Button>
          <Button icon={<HighlightOutlined />}>在线咨询及服务</Button>
          <Button icon={<HighlightOutlined />}>专家图文问诊</Button>
        </div>
      </div>
    );
  }
}

export default NcOv;
