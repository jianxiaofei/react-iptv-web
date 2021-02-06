// import React, { useState } from "react";
import { render } from "react-dom";
import { ConfigProvider } from "antd";
import NcovModule from "./nCoV-2019-report/router";
import zhCN from "antd/lib/locale/zh_CN";
import moment from "moment";
import "moment/locale/zh-cn";
import "antd/dist/antd.css";
import "./index.css";

moment.locale("zh-cn");

render(
  <ConfigProvider locale={zhCN}>
    <NcovModule />
  </ConfigProvider>,
  document.getElementById("root")
);
