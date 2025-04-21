import React from "react";

const DataTable = ({title}) => {
    return (
      <section className='d-flex align-items-center justify-content-center'>
        <h2 className='d-none d-lg-block mr-4'>{title}</h2>
        <div className="table-responsive">    
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">Semana</th>
              {[...Array(14)].map((_, index) => (
                <th key={index} scope="col">{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Label 1</td>
              {[...Array(14)].map((_, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              <td>Label 2</td>
              {[...Array(14)].map((_, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              <td>Label 3</td>
              {[...Array(14)].map((_, index) => (
                <td key={index}>X</td>
              ))}
            </tr>
          </tbody>
        </table>
        </div>
      </section>
    );
  };


export default DataTable;