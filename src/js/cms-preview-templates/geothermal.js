import React from "react";

export default class GeothermalPreview extends React.Component {
  render() {
    const {entry, widgetFor, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));

    return (
      <section data-bg="light">
        <div class="hero is-light is-fullheight">
          <div class="hero-body">
            <div class="container">
              <div class="columns is-centered">
                <div class="column is-half">
                  <div class="content has-text-centered">
                    <h2 class="title is-2">{entry.getIn(["data", "title"])}</h2>
                    {image && <figure class="image is-marginless">
                      <img src={image}/>
                    </figure>}
                    <p>{widgetFor("body")}</p>
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
