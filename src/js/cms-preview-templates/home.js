import React from "react";

export default class HomePreview extends React.Component {
  render() {
    const {entry, getAsset} = this.props;
    const image = getAsset(entry.getIn(["data", "image"]));
    return (
      <div class="hero is-fullheight is-dark" style={{backgroundImage: `url(${image.toString()})`}}>
        <div class="hero-body">
          <div class="container">
            <div class="columns is-tablet is-centered">
              <div class="column is-half">
                <div class="has-text-centered content">
                  <h1 class="title is-1">{entry.getIn(["data", "title"])}</h1>
                  <p class="has-text-white">{entry.getIn(["data", "text"])}</p>
                  <div class="buttons is-centered" style={{marginTop:"3rem"}}>
                    {(entry.getIn(["data", "buttons"]) || []).map((button, i) => <a class="button is-info is-medium"><span class="is-size-6">{button.get("text")}</span></a>)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
