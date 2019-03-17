import React, {Component} from 'react';
import * as Survey from "survey-react";

import { connect } from 'react-redux';
import { updateAdvancedsurvey } from ".././../../redux/actions/advancedsurvey";
import {surveyFetchData} from ".././../../redux/actions/survey";
import SurveyResult from './SurveyResult';


class Advancedsurvey extends Component {
   
 //Define Survey JSON
 //Here is the simplest Survey with one text question
 json = {
    title: "Product Feedback Survey Example",
    showProgressBar: "top",
    pages: [
      {
        elements: [
          {
            type: "barrating",
            name: "barrating1",
            ratingTheme: "css-stars",
            title: "Please rate the movie you've just watched",
            choices: ["1", "2", "3", "4", "5"]
          },
          {
            type: "imagepicker",
            name: "choosepicture",
            title: "What animal would you like to see first ?",
            choices: [
              {
                value: "lion",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
              },
              {
                value: "giraffe",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
              },
              {
                value: "panda",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
              },
              {
                value: "camel",
                imageLink:
                  "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
              }
            ]
          },
          {
            type: "bootstrapslider",
            name: "bootstrapslider"
          },
          {
            type: "dropdown",
            renderAs: "select2",
            choicesByUrl: {
              url: "https://restcountries.eu/rest/v1/all"
            },
            name: "countries",
            title: "Please select the country you have arrived from:"
          },
          {
            type: "signaturepad",
            name: "sign",
            title: "Please enter your signature"
          },
          {
            type: "sortablelist",
            name: "lifepriopity",
            title: "Life Priorities ",
            isRequired: true,
            colCount: 0,
            choices: ["family", "work", "pets", "travels", "games"]
          },
          {
            name: "date",
            type: "datepicker",
            inputType: "date",
            title: "Your favorite date:",
            dateFormat: "mm/dd/yy",
            isRequired: true
          }
        ]
      },
      {
        questions: [
          {
            type: "signaturepad",
            width: "500px",
            name: "Signature Pad - you can enter your signature here:"
          },
          {
            type: "matrix",
            name: "Quality",
            title:
              "Please indicate if you agree or disagree with the following statements",
            columns: [
              {
                value: 1,
                text: "Strongly Disagree"
              },
              {
                value: 2,
                text: "Disagree"
              },
              {
                value: 3,
                text: "Neutral"
              },
              {
                value: 4,
                text: "Agree"
              },
              {
                value: 5,
                text: "Strongly Agree"
              }
            ],
            rows: [
              {
                value: "affordable",
                text: "Product is affordable"
              },
              {
                value: "does what it claims",
                text: "Product does what it claims"
              },
              {
                value: "better then others",
                text: "Product is better than other products on the market"
              },
              {
                value: "easy to use",
                text: "Product is easy to use"
              }
            ]
          },
          {
            type: "rating",
            name: "satisfaction",
            title: "How satisfied are you with the Product?",
            mininumRateDescription: "Not Satisfied",
            maximumRateDescription: "Completely satisfied"
          },
          {
            type: "rating",
            name: "recommend friends",
            visibleIf: "{satisfaction} > 3",
            title:
              "How likely are you to recommend the Product to a friend or co-worker?",
            mininumRateDescription: "Will not recommend",
            maximumRateDescription: "I will recommend"
          },
          {
            type: "comment",
            name: "suggestions",
            title: "What would make you more satisfied with the Product?"
          }
        ]
      },
      {
        questions: [
          {
            type: "radiogroup",
            name: "price to competitors",
            title: "Compared to our competitors, do you feel the Product is",
            choices: [
              "Less expensive",
              "Priced about the same",
              "More expensive",
              "Not sure"
            ]
          },
          {
            type: "radiogroup",
            name: "price",
            title: "Do you feel our current price is merited by our product?",
            choices: [
              "correct|Yes, the price is about right",
              "low|No, the price is too low for your product",
              "high|No, the price is too high for your product"
            ]
          },
          {
            type: "multipletext",
            name: "pricelimit",
            title: "What is the... ",
            items: [
              {
                name: "mostamount",
                title: "Most amount you would every pay for a product like ours"
              },
              {
                name: "leastamount",
                title: "The least amount you would feel comfortable paying"
              }
            ]
          }
        ]
      },
      {
        questions: [
          {
            type: "text",
            name: "email",
            title:
              'Thank you for taking our survey. Please enter your email address, then press the "Submit" button.'
          }
        ]
      }
    ]
  };


  componentDidMount() {

   // this.props.surveyFetchData();


  }

 

 //Define a callback methods on survey complete
 onComplete(survey, options) {
  //Write survey results into database
    console.log("Survey results: " + JSON.stringify(survey.data));
    //this.props.advancedsurveyFetchData();
    
 }
 render() {
  //console.log(this.props.survey.JSONDefinition);

  if(this.props.submitted){
    console.log(this.props.surveyReult.JSONResult);
    let jsonObject = JSON.parse(this.props.surveyReult.JSONResult);
    debugger;
    return (<div><SurveyResult surveyResults={jsonObject}/></div>);
   // return (<div>{JSON.stringify(this.props.surveyReult)}</div>);
}


//debugger;
var model = new Survey.Model(this.json);

return (<Survey.Survey model={model} onComplete={(survey,options)=>{
      console.log("Survey results: " + JSON.stringify(survey.data));
      var surveyresult={
        SurveyId : "f74d6899-9ed2-4137-9876-66b070553f8f",
        JSONResult:JSON.stringify(survey.data)
      }
        
      this.props.updateAdvancedsurvey(surveyresult);

}}/>);
  
  /*
  if (this.props.isLoading) {
     return <span><i>Loading...</i></span>
  }
  else if (this.props.hasErrored) {
     return <span><b>Failed to load data: {this.props.errorMessage}</b></span>
  }else {
         console.log(JSON.stringify(this.props.survey.JSONDefinition));
          //Create the model and pass it into react Survey component
          //You may create survey model outside the render function and use it in your App or component
          //The most model properties are reactive, on their change the component will change UI when needed.
        if(this.props.submitted){
            return (<div>{JSON.stringify(this.props.surveyReult)}</div>);
        }
       
       var json=this.props.survey.JSONDefinition;
       let jsonObject = JSON.parse(json);
       //debugger;
        var model = new Survey.Model(this.json);

        return (<Survey.Survey model={model} onComplete={(survey,options)=>{
              console.log("Survey results: " + JSON.stringify(survey.data));
              var surveyresult={
                SurveyId : "f74d6899-9ed2-4137-9876-66b070553f8f",
                JSONResult:JSON.stringify(survey.data)
              }
                
              this.props.updateAdvancedsurvey(surveyresult);

        }}/>);
       
  }
 */
  /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
  //You may pass model properties directly into component or set it into model
  // <Survey.Survey model={model} mode="display"/>
  //or 
  // model.mode="display"
  // <Survey.Survey model={model}/>
  // You may change model properties outside render function. 
  //If needed react Survey Component will change its behavior and change UI.
 }
} 

const mapStateToProps = (state) => {
    return {
        survey: state.survey.data,
        surveyReult: state.advancedsurvey.data,       // to match this.props.speakers:reducers.state.speakers.data
        hasErrored: state.survey.hasErrored,
        isLoading: state.survey.isLoading,
        errorMessage: state.survey.errorMessage,
        submitted:state.advancedsurvey.submitted
    };
};

export default connect(mapStateToProps,
    {updateAdvancedsurvey,surveyFetchData })(Advancedsurvey);