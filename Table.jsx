import React, { Component } from 'react'

export default class Table extends Component {
  constructor(props){
    super(props);
    this.id = props.idTable;
    this.data = props.data;
    this.label= props.label;
  }

  labels(){
    this.labels_container = 
        <tr>
            {this.label.map(labe => {
              return(
                <th>{labe}</th>
              )
            })}  
        </tr>;
    return(
      $('#labelsTable').append(this.labels_container).hide().fadeIn(600)
    )
  }

  Metadata(){
    this.data.map(varian => {
      this.row = 
        <tr >
            <td scope="row"> ${varian.date} </td>
            <td > ${varian.nombre} </td>
            <td> ${varian.tipo} </td>
            <td> $ ${varian.valor} </td>
        </tr>;
      return(
        $('#tbody').append(this.row).hide().fadeIn(800)
      )
      
  });
    
  }

  color_table(color){
    return(
      $("tr:nth-child(2n)").css(
        "backgroundColor", {color})
    )
  }

  button_table(ref, text_button){
    this.button =
        <a id='newElement' href={ref} type="button" className="btn-dark btn-outline-light me-2 container-fluid p-2 m-1 text-center">
          {text_button}
        </a>
        
    return(
      $('#table_container').append(this.button).hide().fadeIn(900)
      )    
  }


  render() {
    return (
      <div id='table_container' className="container-fluid card col-12 w-100">
            <table id='table'
                className="table table-striped|sm|bordered|hover|inverse table-inverse table-responsive">
                
                <thead id="labelsTable" className="thead-inverse|thead-default">
                  {this.labels}
                </thead>

                <tbody id="tbody">
                  {this.Metadata}
                </tbody>
            </table>
        </div>
    )
  }
}
