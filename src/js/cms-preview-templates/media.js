import React from "react";

export default class MediaPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const heading = entry.getIn(["data", "heading"]);
    const tab = entry.getIn(["data", "tab"]);
    return (
      <section data-bg="light">
        <div class="hero is-white is-fullheight">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-centered">
                <div class="column is-half">
                  <div class="content has-text-centered">
                    <h2 class="title is-2">{heading ? heading : tab}</h2>
                  </div>
                </div>
              </div>
              <div class="columns is-centered">
                <div class="column is-three-quarters">
                  <div class="media-features columns is-vcentered is-centered is-multiline is-flex-mobile">
                    {(entry.getIn(["data", "items"]) || []).map((item) => (
                      <div class="column is-3 is-6-mobile">
                        <a href={item.get("link")} target="_blank" >
                          <figure class="image">
                            <img src={getAsset(item.get("image"))}/>
                            <figcaption class="is-overlay is-invisible has-text-white">View</figcaption>
                          </figure>
                        </a>
                      </div>
                    ))}
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
