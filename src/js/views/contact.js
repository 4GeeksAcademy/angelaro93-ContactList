import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";

const Contact = (props) => {
  const { store, actions } = useContext(Context);


  const handleDelete = (id) => {
    actions.deleteContact(id);
    actions.getAllContacts();
  };

  useEffect(() => {
    actions.getAllContacts();
  }, []);

  return (
    <>
      <div style={{ display: "block", height: "100vh", backgroundColor: "#f4f4f4", padding: "20px" }}>
        <div
          className="card mb-3"
          style={{ maxWidth: "540px", margin: "auto", padding: "15px", border: "1px solid #ddd", borderRadius: "10px", backgroundColor: "#fff" }}
        >
          <div className="row g-0">
            {store.contacts && store.contacts.length > 0 && store.contacts.map((contact, index) => (
              <div key={index} className="row md-3 border-bottom mb-3 pb-3">
                <div className="col-md-3">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/12/07/17/00/contact-1889865_1280.png"
                    className="img-fluid rounded-start"
                    alt="Contact"
                   
                  />
                </div>
                <div className="col-md-9">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title">{contact.name}</h5>
                      <h5 className="card-title">{contact.address}</h5>
                      <h5 className="card-title">{contact.phone}</h5>
                      <h5 className="card-title">{contact.email}</h5>
                    </div>
                    <div className="contact-icons" style={{ display: "flex",  gap: "10px" }}>
                      <FontAwesomeIcon
                        icon={faPencilAlt}
                        style={{ cursor: "pointer" }}
                        // onClick={showModal(contact.id)}
                      />
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ cursor: "pointer" }}
                        onClick={() => handleDelete(contact.id)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
