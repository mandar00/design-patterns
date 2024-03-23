import React from 'react'
import { Recursive } from './recursive-layout';

const RecursiveController=() =>{
    const myNestedObject = {
        key1: "value1",
        key2: {
          innerKey1: "innerValue1",
          innerKey2: {
            innerInnerKey1: "innerInnerValue1",
            innerInnerKey2: "innerInnerValue2",
          },
        },
        key3: "value3",
      };

return(
    <>
      <Recursive data={myNestedObject}/>
    </>)
}
export default RecursiveController