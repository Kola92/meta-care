import { Layout } from "antd";
import "antd/dist/antd.css";
import React, { useState } from "react";
import "./App.css";
import { Card, Typography, Row, Col, Divider, DatePicker } from "antd";
import LineChartBox1 from "./components/LineChartBox1";
import LineChartBox2 from "./components/LineChartBox2";
import LineChartBox3 from "./components/LineChartBox3";
import LineChartBox4 from "./components/LineChartBox4";
import SideMenu from "./components/SideMenu";
import TopNav from "./components/TopNav";

// import { chartData } from "./constants/Data";

const { Header, Sider, Content } = Layout;

const { Title } = Typography;

const monthFormat = "YYYY/MM";

function App() {
  // const [chartDatasets, setChartData] = useState({
  //   labels: chartData.map((data) => data.month),
  //   datasets: [
  //     {
  //       label: "High Priority",
  //       data: chartData.map((data) => data.responseTime),
  //       // borderWidth:'2px',
  //       borderColor: "#F05D23",
  //       pointBackgroundColor:'#fff',
  //       pointBorderWidth:1,
  //       pointRadius:4,
  //       backgroundColor:"#F05D23"
  //     },
  //   ],
  // });

  return (
    <Layout>
      <Sider className="sidebar">
        <SideMenu />
      </Sider>
      <Layout>
        <Header>
          <TopNav />
        </Header>
        <Content>
          <Row className="chart-box">
            <Col span={18}>
              <div className="date-picker">
                <Divider type="vertical" />
                <DatePicker
                  placeholder="This Month"
                  format={monthFormat}
                  picker="month"
                />
              </div>

              <LineChartBox1 />
            </Col>
            <Col span={6}>
              <div className="data-display-box">
                <div>
                  <Card title="Average Replies">
                    <Title>30 Mins</Title>
                  </Card>
                </div>

                <div>
                  <Card title="Response Time">
                    <Title>1 Hour 30 Mins</Title>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="chart-box">
            <Col span={18}>
            <div className="date-picker">
                <Divider type="vertical" />
                <DatePicker
                  placeholder="This Month"
                  format={monthFormat}
                  picker="month"
                />
              </div>
              <LineChartBox2 />
            </Col>
            <Col span={6}>
              <div className="data-display-box">
                <div>
                  <Card title="Average Response Time">
                    <Title>30 Mins</Title>
                  </Card>
                </div>

                <div>
                  <Card title="Response Time">
                    <Title>1 Hour 30 Mins</Title>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="chart-box">
            <Col span={18}>
            <div className="date-picker">
                <Divider type="vertical" />
                <DatePicker
                  placeholder="This Month"
                  format={monthFormat}
                  picker="month"
                />
              </div>
              <LineChartBox3 />
            </Col>
            <Col span={6}>
              <div className="data-display-box">
                <div>
                  <Card title="Average Resolution Rate">
                    <Title>30 Mins</Title>
                  </Card>
                </div>

                <div>
                  <Card title="Response Time">
                    <Title>1 Hour 30 Mins</Title>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>

          <Row className="chart-box">
            <Col span={18}>
            <div className="date-picker">
                <Divider type="vertical" />
                <DatePicker
                  placeholder="This Month"
                  format={monthFormat}
                  picker="month"
                />
              </div>
              <LineChartBox4 />
            </Col>
            <Col span={6}>
              <div className="data-display-box">
                <div>
                  <Card title="Average Contact Rate">
                    <Title>30 Mins</Title>
                  </Card>
                </div>

                <div>
                  <Card title="Response Time">
                    <Title>1 Hour 30 Mins</Title>
                  </Card>
                </div>
              </div>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
