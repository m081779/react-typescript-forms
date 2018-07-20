import * as React from 'react';


interface IFormState {
  firstName: string,
  lastName: string
}

export class Form extends React.Component <IFormState>{
  public state: IFormState = {
    "firstName": "",
    "lastName": ""
  }

  handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();
    let { name, value } = e.currentTarget;
    this.setState({ [name]: value});
  }

  handleFormSubmit = (e: React.FormEvent<HTMLInputElement>):void => {
    e.preventDefault();
    this.setState([
      firstName: "",
      lastName : "",
    ])
  }

  render() {
    return(
      <div>
        <div>
      <h1>Hello {this.state.firstName} {this.state.lastName}</h1>
      <form className="form">
      <input 
        value= {this.state.firstName}
        name = "firstName"
        onChange = {this.handleInputChange}
        type = "text"
        placeholder = "Enter First Name"
      />
      <input 
        value= {this.state.lastName}
        name = "lastName"
        onChange = {this.handleInputChange}
        type = "text"
        placeholder = "Enter Last Name"
      />
      <button onSubmit={this.handleFormSubmit}>Submit</button>
      </form>
    </div>
      </div>
    );
  }
}



// export default Form;