import React from 'react'
import { FaChevronRight } from "react-icons/fa";
import { MdDownloadForOffline } from "react-icons/md";
import { chartData } from './chartsData';
import './charts.css'

const Charts = () => {
  return (
    <div className="container">
      <div className="hotlist-title">
        <h4>Charts</h4>
        <span>
          More <FaChevronRight />
        </span>
      </div>
      <div className="chart-wrapper">
        <div className="chart-container">
          <div className="chart-item">
            <div className="chart-title">
              <h4>Top 100 Nigeria</h4>
              <span>
                More
                <FaChevronRight />
              </span>
            </div>
            <div className="chart-content">
              {chartData?.map((item, index) => {
                const { title, artist, artwork } = item;
                return (
                  <article key={index} className="main-items">
                    <img src={artwork} alt="artist image" />
                    <div>
                      <p>{title}</p>
                      <p>{artist}</p>
                    </div>
                    <MdDownloadForOffline className="downloadForOffline" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
        <div className="chart-container">
          <div className="chart-item">
            <div className="chart-title">
              <h4>Top 100 Africa</h4>
              <span>
                More
                <FaChevronRight />{" "}
              </span>
            </div>
            <div className="chart-content">
              {chartData?.map((item, index) => {
                const { title, artist, artwork } = item;
                return (
                  <article key={index} className="main-items">
                    <img src={artwork} alt="artist image" />
                    <div>
                      <p>{title}</p>
                      <p>{artist}</p>
                    </div>
                    <MdDownloadForOffline className="downloadForOffline" />
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Charts