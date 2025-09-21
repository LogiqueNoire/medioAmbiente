import React from "react";
import './DataTable.css';

const DataTable = ({ id, title, actividades }) => {
  return (
    <section className='' id={id}>
      <h2 className='d-none d-lg-block mr-4'>{title}</h2>
      <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col" style={{backgroundColor:'rgb(184, 248, 255)'}}>{actividades[0].nombre}</th>
              {[...Array(14)].map((_, index) => (
                <th key={index} scope="col" style={{backgroundColor:'rgb(184, 248, 255)'}}>{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {actividades.map((el, key) => (
              <tr>
                <td>{el.nombre}</td>
                {[...Array(actividades[actividades.length-1].semana)].map((_, index) => (
                    index + 1 === el.semana ? <td style={{backgroundColor:'rgb(184, 248, 255)'}}></td> : <td></td>
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