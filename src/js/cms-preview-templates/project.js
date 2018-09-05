import React from "react";

export default class ProjectPreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const title = entry.getIn(["data", "title"]);
    const image = getAsset(entry.getIn(["data", "image"]));
    const overlay = entry.getIn(["data", "overlay"]);
    const description = entry.getIn(["data", "description"]);
    return (
      <section data-bg="dark">
        <div data-name="{{ .Params.title }}">
          <div class="hero is-dark is-fullheight" style={{
            backgroundImage: `${overlay ? "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), " : ""}url(${image})`,
            backgroundPosition: "center center",
            backgroundSize: "cover"
          }}>
            <div class="hero-body">
              <div class="container">
                <div class="columns is-centered">
                  <div class="column is-half">
                    <div class="content has-text-centered">
                      <h2 class="title is-uppercase">
                        {title.toUpperCase()}
                      </h2>
                      <p>{description}</p>
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
