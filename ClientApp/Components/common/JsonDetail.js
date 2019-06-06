import React from 'react';


export default function JsonDetail({  data,title,className }) {

   
    return (
        <React.Fragment>
        <p className={className}>{title}</p>
           { data.map(s=><p className={className}>{s.step}<br/>{s.date}</p>)}
        </React.Fragment>

    );

}
