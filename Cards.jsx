import React, { Component } from 'react'

export default class Cards extends Component {
  constructor(props){
    super(props);
    this.idCard = props.idCard;
    this.bodyCard = `${this.idCard}-body`;
  }

  title_card(content) {
    this.tCard = 
        <h5 className="card-title">${content}</h5>;
    return(
      $(`#${this.bodyCard}`).hide().delay(0).fadeIn(2000)
      );
  }

  text_card(content) {
      this.text = <p className="card-text">{content}</p>;
      this.agregar_BodyCard(this.text);
  }

  button_card(href, tipe_button, text) {
    this.button = 
      <a href={href} className={tipe_button}>
        {text}
      </a>;
      
    return(
      this.add_bodyCard(this.button)
    )
  }

  delete_content_bodyCard() {
    return $(`#${this.bodyCard}`).children().remove();
  }

  add_bodyCard(content) {
      return $(`#${this.bodyCard}`).append(content);
    }

  render() {
    return (
      <div id={this.idCard} className="card container-fluid ">
        <div id={this.bodyCard} className="card-body d-flex flex-column container-fluid align-items-center">
        </div>
        <div id="buttons" className="container-fluid"></div>
      </div>
    )
  }
}
