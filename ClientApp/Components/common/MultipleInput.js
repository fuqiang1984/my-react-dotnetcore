import React, { Component } from 'react';
import InputItem from './InputItem'

export default class MultipleInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            steps: [{ 'step': '1', 'date': 'd1' }, { 'step': '222', 'date': 'd2' }, { 'step': '333', 'date': 'd3' }]

        };
    }

    Addmore = () => {
        this.setState((prevState) => ({
            steps: [...prevState.steps, { 'step': '', 'date': '' }]
        }));
    }
    
    handleChange=(event)=>{

       // this.setState
       const target = event.target;
       const value =  target.value;
       const name = target.name;
       let steps = this.state.steps;
       console.log(steps[target.dataset.id]);
       steps[target.dataset.id][name]=value;
       this.setState({
         steps:steps
       });

        console.log(event.target);
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        console.log(this.state.steps);
        //this.props.handleSubmit(this.props.steps);
    }

    render() {
        return (
            <React.Fragment>
                <form onSubmit={this.handleSubmit} onChange={this.handleChange}>
                {this.state.steps.
                    map((s,idx) => <InputItem key={idx} idx={idx} step={s.step} date={s.date} />)}

                <button  class="btn btn-primary" onClick={this.Addmore}>Add another</button>
                <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
            </React.Fragment>


        );
    }
}