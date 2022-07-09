import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(){
        super(props);
        this.idFormulario = props.idFormulario;
        this.id = $(`#${this.idFormulario}`);
    }

    text_input(id, text_label, text){
        this.text_container = 
        <div id={id} className="form-floating container-fluid">
            <input  type="text" class="form-control" id="floatingInput" placeholder={text}>
            </input>
            <label for="floatingInput">${text_label}</label>
        </div>
        $(`#${this.idFormulario}`).prepend(this.text_container);
    }

    options_input(id, text_label, options){
        this.options_container = 
        <div className="container-fluid m-2">
            
            <label for={id} className="form-label">{text_label}</label>

            <select id={id} class="form-select">
                <option selected></option>
                {options.map(item =>{
                        return(<option>${item}</option>)
                        }
                    )
                }
            </select>
      </div>
      return (
        $(`#${this.idFormulario}`).prepend(this.options_container)
      )
    }

    number_input(id, text_label, text_input){
        this.number_container = 
            <div id={id} class="form-floating container-fluid">

                <input  type="password" class="form-control" id="floatingPassword" placeholder={text_input}>
                </input>

                <label for="floatingPassword">${text_label}</label>

            </div>;
        return(
            $(`#${this.idFormulario}`).prepend(this.number_container)
        )
    }

    email_input(id){
        this.email_container = 
        <div id={id} className="form-floating container-fluid">
            
            <input  type="email"
            class="form-control" id="floatingInput" placeholder="name@example.com">
            </input>

            <label for="floatingInput">Email</label>
        </div>;
        return(
            $(`#${this.idFormulario}`).prepend(this.email_container)
        )
    }

    password_input(id,text_label, text){
        this.password_container = 
            <div id={id} className="form-floating container-fluid">
                
                <input  type="password" class="form-control" id="floatingPassword" placeholder={text}>
                </input>
                
                <label for="floatingPassword">{text_label}</label>
            
            </div>;

        return(
            $(`#${this.idFormulario}`).prepend(this.email_container)
        )
    }

    image_input(img){
        this.image = 
            <img className="mb-4 d-flex rounded-circle" src={img} alt="" width="72" height="57">
            </img>;
        
        return (
            $(`#${this.idFormulario}`).prepend(this.image)
        ) 
    }

    title_container(text){
        this.title = 
        <h1 class="h3 mb-3 fw-normal">${text}</h1>
        return (
            $(`#${this.idFormulario}`).prepend(this.title)
       )
    
    }

    submit_button(id, text){
        this.button = 
            <button id={id} class="w-100 btn btn-lg btn-dark m-1" type="submit">{text}</button>
        
        return(
            $(`#${this.idFormulario}`).prepend(this.button)
        )
    }


  render() {
    return (
        <main class="form-signin col-6 container d-flex justify-content-center align-items-center" >
            <form id={this.idFormulario}  class=" m-4 p-1 d-flex flex-column container-fluid align-items-center justify-content-center">
            
                <p class="mt-5 mb-3 text-muted">&copy; 2021-2022</p>
            </form>
        </main>
    )
  }
}
