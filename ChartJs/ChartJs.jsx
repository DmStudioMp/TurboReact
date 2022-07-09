import React, { Component } from 'react'


export default class ChartJs extends Component {
  contructor(props){
    super(props);
    this.type = this.props.type;

  }

  lineal(){
    this.config = {
      type: 'line',
      data: this.props.data,
      options: {
          scales: {
              y: {
                  beginAtZero: true
              }
          },
      }
  };
  return(
    this.myChart = new Chart(this.graficoDestino, this.config)
  )
  }

  donugt(){
    this.config = {
      type: 'doughnut',
      data: data,
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
              },
              title: {
                  display: true,
                  text: 'Doughnut'
              }
          }
      },
    };
    return(
      this.myChart = new Chart(this.graficoDestino, this.config)
    )
  }

  pie(){
    return (
      this.myChart = new Chart(this.graficoDestino, this.config)
    )
  }

  render() {
    switch (type) {
      case donught:
        this.graficoDestino = document.getElementById('myChart').getContext('2d');
        this.donught();
        break;
      case pie:
        this.graficoDestino = document.getElementById('myChart').getContext('2d');
        this.pie();
        break;
      default:
        this.graficoDestino = document.getElementById('myChart').getContext('2d');
        this.lineal();
        break;
    }
    return (
      <div id ='canv' class="container-fluid col-12">
        <canvas class="my-4 w-100" id="myChart" width="900" height="380"></canvas>
      </div>
    )
  }
}

