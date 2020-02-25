import React, { Component, lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import HighchartsMenu from "./components/navigation/presentation/HighchartsMenu";
const DashboardHome = lazy(() =>
  import("./components/dashboards/container/DashboardHome")
);
const DailyStocks = lazy(() =>
  import("./components/stocks/container/DailyStocks")
);

const WeeklyStocks = lazy(() =>
  import("./components/stocks/container/WeeklyStocks")
);

const MonthlyStocks = lazy(() =>
  import("./components/stocks/container/MonthlyStocks")
);

const MonthlyStocksComparison = lazy(() =>
  import("./components/stocks/container/MonthlyStocksComparison")
);

const DailyForex = lazy(() =>
  import("./components/forex/container/DailyForex")
);

const WeeklyForex = lazy(() =>
  import("./components/forex/container/WeeklyForex")
);

export default class MainLayout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let loading = "../images/loading.png";
    return (
      <div>
        <HighchartsMenu />
        <main>
          <Suspense
            fallback={
              <div style={{ textAlign: "center", marginTop: "10%" }}>
                <h5>Loading...</h5>
              </div>
            }
          >
            <Switch>
              <Route path="/" component={DashboardHome} exact />
              <Route
                path="/home"
                render={props => <DashboardHome {...props} />}
                exact
              />
              <Route
                path="/stocks/daily"
                render={props => <DailyStocks {...props} />}
              />
              <Route
                path="/stocks/weekly"
                render={props => <WeeklyStocks {...props} />}
              />
              <Route
                path="/stocks/monthly"
                render={props => <MonthlyStocks {...props} />}
              />
              <Route
                path="/stocks/comparison"
                render={props => <MonthlyStocksComparison {...props} />}
              />
              <Route
                path="/forex/daily"
                render={props => <DailyForex {...props} />}
              />
              <Route
                path="/forex/weekly"
                render={props => <WeeklyForex {...props} />}
              />
            </Switch>
          </Suspense>
        </main>
      </div>
    );
  }
}
