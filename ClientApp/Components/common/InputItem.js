import React from 'react';


export default function InputItem({ step, date, idx }) {

    let stepId = `step-${idx}`;
    let dateId = `date-${idx}`;
    return (
        <div>
           { /*
            <div class="form-group-inline">
                <label>Step:</label>
                <input class="form-control-inline" name="step"
                    data-id={idx} value={step}
                    placeholder="Enter your step" />
                <label>Date:</label>
                <input class="form-control-inline" name="date" data-id={idx} value={date}
                    placeholder="Enter your date" />

            </div>
            */
           }
            <div class="form-inline">
                <div class="form-group col-md-4">
                    <label for="inputEmail4">Email</label>
                    <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                </div>
                <div class="form-group col-md-4">
                    <label for="inputPassword4">Password</label>
                    <input type="password" class="form-control" id="inputPassword4" placeholder="Password" />
                </div>
            </div>
        </div>
    );

}
