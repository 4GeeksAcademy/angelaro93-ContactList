import React, { useContext } from "react";
import { Context } from "../store/appContext";

export default function Contact(props) {
  const { store, actions } = useContext(Context);

  
  return (
    <div style={{ display: 'block', height: '100vh' }}>
      <div className="card mb-3" style={{ maxWidth: "540px", margin: 'auto' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://cdn.pixabay.com/photo/2016/12/07/17/00/contact-1889865_1280.png" className="img-fluid rounded-start" alt="Contact" />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.contact.name}</h5>
              <p className="card-text">{props.contact.phone}</p>
              <p className="card-text">
                <small className="text-body-secondary">
                {props.contact.address}
                </small>
              </p>
              <p className="card-text">{props.contact.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
