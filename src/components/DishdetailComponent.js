import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
  renderDish(dish) {
    return (
      <Card>
        <CardImg src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    );
  }

  renderComments(comments) {
    const Comments = comments.map((comment) => {
      return (
        <ul class="list-unstyled" key={comment.id}>
          <li class="list-item-unstyled">
            {comment.comment}
            <br />
            --{comment.author} {comment.date}
            <p></p>
          </li>
        </ul>
      );
    });
    return <ul>{Comments}</ul>;
  }
  render() {
    if (this.props.dish != null)
      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1 ml-3">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h3>Comments</h3>
            {this.renderComments(this.props.dish.comments)}
          </div>
        </div>
      );
    else return <div></div>;
  }
}
export default DishDetail;
