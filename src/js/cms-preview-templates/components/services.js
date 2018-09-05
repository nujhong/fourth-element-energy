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
              <div class="card">
                <div class="card-content">
                  <div class="content">
                    <figure class="image is-96x96">
                      <img class="image" src={service.getIn(["data", "icon"])} />
                    </figure>
                    <h3 class="title is-size-6">{service.getIn(["data", "title"])}</h3>
                    {service.getIn(["widgets", "text"])}
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
