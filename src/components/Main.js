import React from 'react';
import Details from "./Details";

const Main = ({ companies, vaccineType }) => {
    return (
        <header className="App-header">
            <h1 className="mb-5">welcome to c19vac</h1>
            <div className="row">

                <div className="col-6 text-left">
                    <h2>Companies</h2>
                    {companies && companies.map((company, index) => {

                    return (<div key={index}>
                                <p>{company.fields.name}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="col-6 text-left">
                    <h2>Vaccine Types</h2>
                        {vaccineType && vaccineType.map((vac, index) => {

                        return (<div key={index}>
                                    <p>{vac.fields.name}</p>
                                </div>
                            )
                        })}
                </div>
                <hr/>

            </div>
            <Details />
        </header>
      
    );
}

export default Main;
