import React, { Component } from "react";
import Display from "../display/Display";
//import our service
import JeopardyService from "../../jeopardyService";
class Jeopardy extends Component {
  //set our initial state and set up our service as this.client on this component
  constructor(props) {
    super(props);
    this.client = new JeopardyService();
    this.state = {
      data: {},
      score: 0,
      submitted: false,
      userAnswer: "",
    };
  }
  //get a new random question from the API and add it to the data object in state
  getNewQuestion() {
    return this.client.getQuestion().then((result) => {
      this.setState({
        data: result.data
      });
    });
  }
  //when the component mounts, get a the first question
  componentDidMount() {
    this.getNewQuestion();
  }

//   user() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <div>
//           <label htmlFor="">What is...</label>
//           <input
//             type="text"
//             name="userAnswer"
//             value={this.state.userAnswer}
//             onChange={this.handleChange}
//           />
//         </div>
//         <div>
//           <button>Submit Answer</button>
//         </div>
//       </form>
//     );
//   }
  handleChange = (event) => {
    this.setState({ userAnswer: event.target.value 
    });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    let score = this.state.score;
    this.setState.submitted = true;
    if (
      this.state.userAnswer.toLowerCase() ===
      this.state.data[0].answer.toLowerCase()
    ) {
      score += this.state.data[0].value;
    } else {
      score -= this.state.data[0].value;
    }
    this.setState({ score });
    this.getNewQuestion();
    this.setState({ userAnswer: "" });
  };
  //display the results on the screen
  render() {
    let display = <div>No data found</div>;
    let category = this.state.data.category && this.state.data.category
    // if (this.state.data && Array.isArray(this.state.data)) {
    //   display = this.state.data.map((value) => {
    // return (
    //   <ul key={value.id + "ul"}>
    //     <li key={value.id + "question"}>The answer is: {value.question}</li>
    //     <li key={value.id + "category"}>
    //       Category: {value.category.title}
    //     </li>
    //     <li key={value.id + "value"}>Value: {value.value}</li>
    //   </ul>
    //     );
    //   });

    return (
      <Display
        question={this.state.data.question}
        category={category}
        value={this.state.data.value}
        score={this.state.score}
        userAnswer={this.state.userAnswer}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
      // {display}
      // {this.user()}
      // <div>
      //   <strong>Score:</strong> {this.state.score}
      // </div>
      // {JSON.stringify(this.state.data)}
    );
  }
}
export default Jeopardy;
