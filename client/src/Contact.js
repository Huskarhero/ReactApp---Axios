import React from "react"
import logo from './logo.svg';
import './App.css';

function Contacts(props) {

    return (
        <div className="contacts">
            <table>
                <thead>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Number</th>
                </thead>
                <tbody>
                    {props.data === null ? <></> : props.data.map((data) => 
                        <tr>
                            <td>{data.firstname}</td>
                            <td>{data.lastname}</td>
                            <td>{data.number}</td>
                        </tr>
                    )
                    }

                </tbody>

            </table>
        </div>
    );
}

export default Contacts;
