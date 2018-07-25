import * as React from 'react';

export interface IFormState {
  firstName: string;
  lastName: string;
}

class Form extends React.Component<{}, IFormState>{
  public state: IFormState = {
    firstName: "",
    lastName: ""
  }

  public handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    e.preventDefault();

    const { name, value } = e.currentTarget;
    const setObj: {} = {
      [name]: value
    }
    this.setState(setObj);
  }

  public handleFormSubmit = (event: any):void => {
    event.preventDefault();
    this.setState({
      firstName: "",
      lastName : "",
    })
  }

  public render() {
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

export default Form;
