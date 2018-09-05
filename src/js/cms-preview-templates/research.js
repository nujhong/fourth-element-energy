import React from "react";

export default class ResearchPreview extends React.Component {
  render() {
    const {entry} = this.props;
    const heading = entry.getIn(["data", "heading"]);
    const tab = entry.getIn(["data", "tab"]);
    const text = entry.getIn(["data", "text"]);
    const link = entry.getIn(["data", "link"]);
    return (
      <section data-bg="light">
        <div class="hero is-white is-fullheight">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-centered">
                <div class="column is-half">
                  <div class="content has-text-centered">
                    <h2 class="title is-2">{heading ? heading : tab} </h2>
                    <p>{text}</p>
                    <a class="button is-info" target="_blank" href={link}>
                      Find out more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
