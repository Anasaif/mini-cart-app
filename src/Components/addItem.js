import React from "react";

class AddItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }
  render() {
    return (
      <form
        className="add-item"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="add-item-name">
          <label htmlFor="inputName" className="add-item-label">
            Name:
          </label>
          <input
            type="text"
            className="add-item-form-control"
            id="inputName"
            placeholder="Item Name"
            aria-describedby="name"
            name="productName"
            onChange={(e) => {
              this.setState({ productName: e.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="add-item-price">
          <label htmlFor="inputPrice" className="add-item-label">
            Price:
          </label>
          <input
            type="number"
            className="add-item-form-control"
            placeholder="Item Price"
            id="price"
            name="productPrice"
            onChange={(e) => {
              this.setState({ productPrice: e.currentTarget.value });
            }}
            value={this.state.productPrice}
          />
        </div>

        <button type="submit" className="add-item-button">
          Add
        </button>
      </form>
    );
  }
}

export default AddItem;
