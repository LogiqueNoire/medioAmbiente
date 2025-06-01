import React from "react";
import './DataTable.css';

const DataTable = ({ title, actividades }) => {
  return (
    <section className=''>
      <h2 className='d-none d-lg-block mr-4'>{title}</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">{actividades[0].nombre}</th>
              {[...Array(14)].map((_, index) => (
                <th key={index} scope="col">{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {actividades.map((el, key) => (
              <tr>
                <td>{el.nombre}</td>
                {[...Array(actividades.length)].map((_, index) => (
                  <td>
                    {index+1 === el.semana ? 'X' : ''}
                  </td>
                ))}

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};


export default DataTable;