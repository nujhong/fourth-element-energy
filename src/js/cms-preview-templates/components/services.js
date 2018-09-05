import React from "react";

export default class ServicesPreview extends React.Component {
  render() {
    const {services} = this.props;
    return (
      <div class="columns is-centered">
        {services.map((service, index) => {
          if (!service) {
            return null;
          }
          return (
            <div class="column" key={index}>
              <div class="card" style={{height: "100%"}}>
                <div class="card-content">
                  <div class="content has-text-centered">
                    <figure class="image is-96x96" style={{margin: "0 auto"}}>
                      <img class="image" src={service.getIn(["data", "icon"])} />
                    </figure>
                    <h3 class="title is-size-5">{service.getIn(["data", "title"])}</h3>
                  </div>
                  <div class="has-text-centered">
                    <ul>
                      {(service.getIn(["data", "list"]) || []).map((text) => <li>{text}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
