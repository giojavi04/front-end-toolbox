import React from 'react';

const Content = ({ word, data }) => {
  return (
    <div className="Content container mt-5 pt-4 pb-4">
      <h2>Results:</h2>
      <div className="d-flex flex-column w-50 m-auto">
        {
          data.error ? (
            <div className="p-2"><b>Error: </b> {data.error}</div>
          ) : (
            <>
              <div className="p-2"><b>Palabra Ingresada: </b> {word}</div>
              <div className="p-2"><b>Palabra Invertido: </b>{data.text}</div>
              <div className="p-2"><b>Es palíndrome: </b>{data.palindrome ? 'True' : 'False'}</div>
            </>
          )
        }
      </div>
    </div>
  )
}

export default Content
