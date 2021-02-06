import { Router, Route, Redirect } from "react-router-dom";
import NcOv from "./ncov";
import TimePlay from "./views/timePlay";
import DataStatistics from "./views/dataStatistics";

const NcovRouter = () => {
  return (
    <Router history={require("history").createHashHistory()}>
      <Route path="/" render={() => <Redirect to="/ncov" />} />
      <Route path="/ncov" component={NcOv} />
      <Route path="/timePlay" component={TimePlay} />
      <Route path="/dataStatistics" component={DataStatistics} />
    </Router>
  );
};

export default NcovRouter;
