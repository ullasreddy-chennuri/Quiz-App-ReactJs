import React,{Component,Fragment} from 'react';
import {Helmet} from 'react-helmet';
import M from 'materialize-css';
import Icon from '@mdi/react';
import {mdiAlarm} from '@mdi/js';
import isEmpty from '../../utils/is-empty';

import questions from '../../../src/questions.json';




class Play extends Component{
        constructor (props) {
            super(props); 
            this.state = {
              questions,
              currentQuestion: {},
              nextQuestion:{},
              previousQuestion: {},
              answer: '',
              numberOfQuestions: 0,
              numberOfAnsweredQuestions:0,
              currentQuestionIndex:0,
              score:0,
              correctAnswers:0,
              wrongAnswers:0,
              time:{}
            };
        }

        componentDidMount(){
          const {questions,currentQuestion,nextQuestion,previousQuestion} = this.state;
          this.displayQuestions(questions,currentQuestion,nextQuestion,previousQuestion);
        }
      
        displayQuestions = (questions = this.state.questions, currentQuestion , nextQuestion, previousQuestion) =>{

          let {currentQuestionIndex} = this.state;
          if(!isEmpty(this.state.questions)){
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            previousQuestion = questions[currentQuestionIndex-1];
            nextQuestion = questions[currentQuestionIndex+1];
            const answer = currentQuestion.answer;
            this.setState({
              currentQuestion,
              nextQuestion,
              previousQuestion,
              numberOfQuestions: questions.length,
              answer
            });
          }
        };

        handleNextButtonClick = ()=>{
          if(this.state.nextQuestion !== undefined){
            this.setState(prevState =>({
              currentQuestionIndex: prevState.currentQuestionIndex+1,
              
            }),()=>{
              this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
            });
        }
      }

      handlePrevButtonClick = ()=>{
        if(this.state.previousQuestion !== undefined){
          this.setState(prevState =>({
            currentQuestionIndex: prevState.currentQuestionIndex-1,
            
          }),()=>{
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
          });
      }
    }

    handleQuitButtonClick =()=>{
      
    }





        handleOptionClick = (e) =>{
          if(e.target.innerHTML.toLowerCase() === this.state.answer.toLowerCase()){
            this.correctAnswer();
          }else{
            this.wrongAnswer();
          }
        }

        correctAnswer =()=>{
          M.toast({
            html: "Correct Answer :)",
            classes: 'toast-valid',
            displayLength: 1500
          });
          this.setState(prevState =>({
            score: prevState.score+1,
            correctAnswers: prevState.correctAnswers+1,
            currentQuestionIndex: prevState.currentQuestionIndex+1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
          }), ()=>{
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
          });
        }

        wrongAnswer =()=>{
          navigator.vibrate(1000);
          M.toast({
            html: "Wrong Answer :(",
            classes: 'toast-invalid',
            displayLength: 1500
          });
          this.setState(prevState =>({
            wrongAnswers: prevState.wrongAnswers+1,
            currentQuestionIndex: prevState.currentQuestionIndex+1,
            numberOfAnsweredQuestions: prevState.numberOfAnsweredQuestions+1
          }), ()=>{
            this.displayQuestions(this.state.questions,this.state.currentQuestion,this.state.nextQuestion,this.state.previousQuestion);
          });
        }
    

    render(){
      const {currentQuestion , currentQuestionIndex, numberOfQuestions} = this.state
        return (
         
          //console.log(questions);
          <Fragment>
            <Helmet><title>Quiz-Questions</title></Helmet>
            
            <div className="questions">
            <h3>Tech Quiz!!</h3>
              <div>
                <span className="left">{currentQuestionIndex+1} out of {numberOfQuestions}</span>
                <span className="right">1:00<Icon path={mdiAlarm} size={1}/></span>
              </div>
              <h4>{currentQuestion.question}</h4>
              <div className="options-container">
                <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionA}</p>
                <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionB}</p>
              </div>
              <div className="options-container">
                <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionC}</p>
                <p onClick={this.handleOptionClick} className="option">{currentQuestion.optionD}</p>
              </div>
              <div className="button-container">
                <button onClick={this.handlePrevButtonClick}>Previous</button>
                <button onClick={this.handleNextButtonClick}>Next</button>
                <button onClick={this.handleQuitButtonClick}>Quit</button>
              </div>
            </div>
          </Fragment>
        );
    };
};

export default Play;
