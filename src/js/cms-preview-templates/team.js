import React from "react";

export default class TeamPreview extends React.Component {
  render() {
    const {entry, getAsset, widgetFor} = this.props;
    const heading = entry.getIn(["data", "heading"]);
    const tab = entry.getIn(["data", "tab"]);
    const image = getAsset(entry.getIn(["data", "image"]));

    return (
      <section data-bg="light">
        <div class="hero is-white is-fullheight">
          <div class="hero-body">
            <div class="container">
              <div class="content">
                <h2 class="title is-2 has-text-centered">
                  {heading ? heading : tab}
                </h2>
                <div class="columns is-centered">
                  <div class="column is-three-quarters-desktop">
                    <div class="columns is-vcentered">
                      {image && (
                        <div class="column is-half">
                          <figure class="image">
                            <img src={image} alt="Our team" />
                          </figure>
                        </div>
                      )}
                      <div class="column is-half">{widgetFor("body")}</div>
                    </div>
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
