import React, { Component } from "react";
export default class Contact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="d-flex flex-row justify-content-center">
          <div>Contact Me</div>
        </div>
        <div className="row section-head">
          <div className="ten columns">
            <p className="lead">
              Feel free to contact me for any work or suggestions below
            </p>
          </div>
        </div>
        <div className="row">
          <aside className="eigth columns footer-widgets">
            <div className="widget"></div>
          </aside>
        </div>
      </section>
    );
  }
}
