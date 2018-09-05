import React from "react";

export default class ServicesPreview extends React.Component {
  render() {
    const {services} = this.props;
    return (
      <div class="columns">
        {services.map((service, index) => {
          if (!service) {
            return null;
          }
          return (
            <div class="column" key={index}>
              <div class="card">
                <img class="image" src={service.getIn(["data", "icon"])} />
                <div class="service_text">{service.getIn(["data", "title"])}</div>
                {service.getIn(["widgets", "text"])}
                <span class="card-link"><i class="fa fa-caret-right mr-1" aria-hidden="true"></i>Learn More</span>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
