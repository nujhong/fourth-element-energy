import React from "react";
import Services from "./components/services";

export default class PurposePreview extends React.Component {
  render() {
    const {entry, widgetsFor} = this.props;
    const heading = entry.getIn(["data", "heading"]);
    const title = entry.getIn(["data", "title"]);
    const services = widgetsFor("services");
    return (
      <section data-bg="light">
        <div class="hero is-white is-fullheight">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-centered">
                <div class="column is-three-quarters">
                  <div class="content has-text-centered">
                    <h2 class="title is-2">{heading ? heading : title}</h2>
                    <p>{entry.getIn(["data", "text"])}</p>
                    <Services services={services} />
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
