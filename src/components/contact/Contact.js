import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props)
    this.state = {
      submitted: false,
      formData: {},
      firstName: '',
      lastName: ''
    }
  }
  render() {
    console.log(this.state.firstName)
  
    return (
      <div className="Contact">
        <form>
          <div>
            <label htmlFor="">First Name</label>
            <input type="text" name="firstName" 
            value={this.state.formData.firstName} />
          </div>
          <div>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" 
            value={this.state.formData.lastName} />
          </div>
          <button>Submit Answer</button>
        </form>
      </div>
    );
  }
}

export default Contact;