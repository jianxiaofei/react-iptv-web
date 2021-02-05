// import React, { useState } from "react";
import { render } from "react-dom";
import { ConfigProvider } from "antd";
import NcOv from "./nCoV-2019-report/ncov";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import "./index.css";

moment.locale("zh-cn");

render(
  <ConfigProvider locale={zhCN}>
    <NcOv />
  </ConfigProvider>,
  document.getElementById("root")
);
