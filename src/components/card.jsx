import React, { Component } from "react";

class Card extends Component {
  state = {
    cardData: [
      {
        imgSrc:
          "https://www.jagranjosh.com/imported/images/E/GK/Difference-between-medical-and-health-insurance.webp",
        title: "Insurance",
        text:
          "Insurance is a means of protection from financial loss. It is a form of risk management, primarily used to hedge against the risk of a contingent or uncertain loss.There many types of insurance policies. Life, health, homeowners, and auto are the most common forms of insurance.",
        alt: "Insurance",
      },
      {
        imgSrc:
          "https://www.valueresearchonline.com/content-assets/images/32164_beginners-guide-to-mutual-funds-02__w660__.jpg",
        title: "Mutual Funds",
        text:
          "A mutual fund is a kind of investment that uses money from investors to invest in stocks, bonds or other types of investment. A fund manager decides how to invest the money, and for this he/she is paid a fee, which comes from the money in the fund. Each investor in the fund owns shares, which represent a part of these holdings.",
        alt: "Mutual Funds",
      },
      {
        imgSrc:
          "https://economictimes.indiatimes.com/wealth/plan/4-mistakes-that-can-hurt-your-retirement-planning/photo/69385062.cms",
        title: "Retirement Plans",
        text:
          "Retirement planning is the process of determining retirement income goals and the actions and decisions necessary to achieve those goals. Retirement planning includes identifying sources of income, estimating expenses, implementing a savings program, and managing assets and risk.",
        alt: "Retirement Plans",
      },
    ],
  };
  render() {
    const len = this.state.cardData.length;
    let colmd = "col-md-" + 12 / len;
    return (
      <div className="container">
        <div className="row">
          {this.state.cardData.map((data) => (
            <div className={colmd}>
              <div className="card">
                <img
                  src={data.imgSrc}
                  className="card-img-top"
                  alt={data.alt}
                />
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Card;
