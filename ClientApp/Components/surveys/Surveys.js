import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import SpeakersHeader from './SpeakersHeader';
//import SpeakerList from './SpeakerList';
//import axios from 'axios';
import Quiz from './Quiz';
import Result from './Result';

import { connect } from 'react-redux';
import { surveysFetchData } from ".././../../redux/actions/surveys";

class Surveys extends Component {

    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
          questionId: 1,
          question: '',
          answerOptions: [],
          answer: '',
          answersCount: {
            Nintendo: 0,
            Microsoft: 0,
            Sony: 0
          },
          result: ''
        };

        this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
    }

  



    componentDidMount() {

        this.props.surveysFetchData();
      

        // axios.get('/data/speakers.json')
        //     .then((result)=> {
        //         this.setState({
        //             appData: result.data,
        //             isLoading: false
        //         });
        //     })
        //     .catch(error => {
        //         if (error.response) {
        //             console.log(error.responderEnd);
        //         }
        //     });
    }

    shuffleArray(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < this.props.surveys.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: state.answersCount[answer] + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: this.props.surveys[counter].question,
      answerOptions: this.props.surveys[counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {

    const shuffledAnswerOptions = this.props.surveys.map(question =>
      this.shuffleArray(question.answers)
    );

   
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={shuffledAnswerOptions[0]}
        questionId={this.state.questionId}
        question={this.props.surveys[0].question}
        questionTotal={this.props.surveys.length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }

  renderResult() {
    return <Result quizResult={this.state.result} />;
  }


    render() {

        if (this.props.isLoading) {
            return <span><i>Loading...</i></span>
        }
        else if (this.props.hasErrored) {
            return <span><b>Failed to load data: {this.props.errorMessage}</b></span>
        }
        else {  

                     
              return(    <div> {this.state.result ? this.renderResult() : this.renderQuiz()} </div>
                );
           
        }

        // if (this.state.isLoading) {
        //     return <span><i>Loading...</i></span>
        // }
        // else {
        //     return (
        //         <div>
        //             <SpeakersHeader/>
        //             <SpeakerList speakers={this.state.appData} />
        //             {/*<span>{JSON.stringify(this.state.appData)}</span>*/}
        //         </div>
        //     );
        // }
    }
}



Surveys.propTypes = {};
Surveys.defaultProps = {};


const mapStateToProps = (state) => {

    return {
        surveys: state.surveys.data,
        hasErrored: state.surveys.hasErrored,
        isLoading: state.surveys.isLoading,
        errorMessage: state.surveys.errorMessage
    };
};


//export default Speakers;

export default connect(mapStateToProps,
    { surveysFetchData })(Surveys)


// import React from 'react';
// import SpeakersHeader from './SpeakersHeader';
//
// export default function Speakers(props) {
//
//
//
//
//     return (
//         <div>
//             <SpeakersHeader/>
//         </div>
//     );
// }