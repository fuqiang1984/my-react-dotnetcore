import React,{Component} from 'react';
import MultipleInput from '../common/MultipleInput';
const data = { name: 'John', age: 42 }
const REACT_VERSION = React.version

import InputWithUserName from './ComponentOne'









export default function Mytest() {
  try {
    var k = new Map();
    console.log("ES6 supported!!")
  } catch(err) {
    console.log("ES6 not supported :(")
  }
  
  try {
    var k = new HashMap();
    console.log("ES100 supported!!")
  } catch(err) {
    console.log("ES100 not supported :(")
  }
  
  return (
      <div>
       <InputWithUserName></InputWithUserName>
         <MultipleInput />
         {`React version: ${REACT_VERSION}`}
           <pre>
              {JSON.stringify(data, null, 2)}
          </pre>
      </div>
  );
}
