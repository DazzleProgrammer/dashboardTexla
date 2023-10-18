import React from "react";
import "./Content.css";
import { Donut } from "./Donut";
import Table from "./Table";

function Content() {
  return (
    <div className="content">
      <div className="title">
        <h3> Client Management </h3>
      </div>

      <div className="sub__title">
        <p className="active">Dashboard</p>
        <p>Clients Details</p>
      </div>

      <div className="count">
        <div className="count__box">
          <div className="count__title">
            <p>Key Performance Indicator</p>
          </div>

          <div className="count__status">
            <div className="box__1">
              <p className="box__para">Client Retention Rate</p>
              <p className="box__num1">55%</p>
            </div>

            <div className="box__2">
              <p className="box__para">Client Satisfaction</p>
              <p className="box__num2">55%</p>
            </div>

            <div className="box__3">
              <p className="box__para">Revenue Generated</p>
              <p className="box__num3">55%</p>
            </div>
          </div>
        </div>

        <div className="count__box">
          <div className="count__title">
            <p>Companies Status</p>
          </div>

          <div className="count__status">
            <div className="box__1">
              <p className="box__para">Total</p>
              <p className="box__num1">20</p>
            </div>

            <div className="box__2">
              <p className="box__para">Active</p>
              <p className="box__num2">15</p>
            </div>

            <div className="box__3">
              <p className="box__para">New</p>
              <p className="box__num3">3</p>
            </div>
          </div>
        </div>

        <div className="count__box">
          <div className="count__title">
            <p>Active User Base</p>
          </div>

          <div className="active__status">
            <div className="full__box">
              <div className="active__section1">
                <div className="circle1"></div>
                <p>89% App User</p>
              </div>

              <div className="active__section2">
                <div className="circle2"></div>
                <p>11% Web User</p>
              </div>
            </div>

            <div className="bar">
              <div className="bar1"></div>
              <div className="bar2"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="main">
        <Table />
        <Donut /> 
      </div>
    </div>
  );
}

export default Content;
