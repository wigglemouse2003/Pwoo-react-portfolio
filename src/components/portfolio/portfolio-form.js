import axios from "axios";
import React, { Component } from "react";

export default class PortfolioForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      description: "",
      category: "eCommerce",
      position: "",
      url: "",
      thumb_image: "",
      banner_image: "",
      logo: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.buildForm = this.buildForm.bind(this);
  }

  buildForm() {
    let formData = new FormData();

    formData.append("portfolio_item[name]", this.state.name);
    formData.append("portfolio_item[description]", this.state.description);
    formData.append("portfolio_item[url]", this.state.url);
    formData.append("portfolio_item[category]", this.state.category);
    formData.append("portfolio_item[position]", this.state.position);

    return formData;
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  handleSubmit(event) {
    axios
      .post(
        "https://pwoo.devcamp.space/portfolio/portfolio_items",
        this.buildForm(),
        { withCredentials: true }
      )
      .then((response) => {
        console.log("response", response);
      })
      .catch((error) => {
        console.log("portfolio form handleSubmit error", error);
      });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>PortfolioForm</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Portfolio Item name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              name="url"
              placeholder="URL"
              value={this.state.url}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <input
              type="text"
              name="position"
              placeholder="Position"
              value={this.state.position}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <select
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
            >
              <option value="eCommerce">eCommerce</option>
              <option value="Scheduling">Scheduling</option>
              <option value="Enterprise">Enterprise</option>
            </select>
          </div>

          <div>
            <textarea
              type="text"
              name="description"
              placeholder="Description"
              value={this.state.description}
              onChange={this.handleChange}
            />
          </div>

          <div>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}
