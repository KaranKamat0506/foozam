/* eslint-disable no-console */
/* eslint-disable template-tag-spacing */
/* eslint-disable eol-last */
import {
  LitElement,
  html,
} from '@polymer/lit-element';

export default class RestaurantInfo extends LitElement {
  static get properties() {
    return {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      cuisines: {
        type: String,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
      address: {
        type: String,
      },
      userRating: {
        type: Object,
      },
      image: {
        type: String,
      },
      defaultImage: {
        type: String,
      },
    };
  }

  knowMore() {
    console.log(this);
  }

  render() {
    return html `
      <head>
        <link href="./assets/css/black-dashboard.css?v=1.0.0" rel="stylesheet" />
      </head>
      <div class="row" style="text-align: center">
        <div class="col-lg-6 col-md-12">
          <img src="${this.image || this.defaultImage}" alt="Restaurant Image" />
        </div>
        <div class="col-lg-6 col-md-12 pt-3">
          <h4 class="card-title">${this.name}</h4>
          <button
            type="button"
            id="know-more"
            class="btn btn-warning btn-simple"
            @click="${this.knowMore}"
          >
            Know More
          </button>
        </div>
      </div>
    `;
  }
}