import React from "react";
import './DataTable.css';

const DataTable = ({title, actividades}) => {
    return (
      <section className=''>
        <h2 className='d-none d-lg-block mr-4'>{title}</h2>
        <div className="table-responsive">    
        <table className="table text-center">
          <thead>
            <tr>
              <th scope="col">{actividades[0]}</th>
              {[...Array(14)].map((_, index) => (
                <th key={index} scope="col">{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{actividades[1]}</td>
              {[...Array(14)].map((_, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              <td>{actividades[2]}</td>
              {[...Array(14)].map((_, index) => (
                <td key={index}></td>
              ))}
            </tr>
            <tr>
              <td>{actividades[3]}</td>
              {[...Array(14)].map((_, index) => (
                <td key={index}>X</td>
              ))}
            </tr>
            <tr>
              <td>{actividades[4]}</td>
              {[...Array(14)].map((_, index) => (
                <td key={index}>X</td>
              ))}
            </tr>
            <tr>
              <td>{actividades[5]}</td>
              {[...Array(14)].map((_, index) => (
                <td key={index}>X</td>
              ))}
            </tr>
            <tr>
              <td>{actividades[6]}</td>
              {[...Array(14)].map((_, index) => (
                <td key={index}>X</td>
              ))}
            </tr>
            <tr>
              <td>{actividades[7]}</td>
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