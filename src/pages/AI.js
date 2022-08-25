import React from "react";
import axios from "axios";

export default function AI() {

    // const fd = new FormData();
    // fd.append('image');

  return (
    <>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        <h1>1</h1>
        
        <button
          onClick={() => {
            axios
            .post('http://127.0.0.1:8000/api/image/',  {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
            })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
          }}
        >
          POST
        </button>
    </>
  )
}
