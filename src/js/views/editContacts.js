import React, { useState, useEffect, useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import Contact from "./contact";

export const EditContacts = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();
  const [validated, setValidated] = useState();
  const [contact, setContact] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
  });

  const [name, setName] = useState(store.editContact.name);
  const [email, setEmail] = useState(store.editContact.email);
  const [phone, setPhone] = useState(store.editContact.phone);
  const [address, setAddress] = useState(store.editContact.address);
  const [id, setId] = useState(null);

  useEffect (() => {
    setId(store.editContact.id)
    console.log(store.editContact.id)
  },[store.editContact])  

  const handleChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

        actions.updateContact(
        id,
        name,
        phone,
        email,
        address
      );
      navigate("/");
  };
  

  return (
    <div className="container">
      <h1 className="text-center">Add a new contact</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Full name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Phone
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Enter phone "
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Address
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter address "
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button" onClick={(e) => handleSubmit(e)} >
            save
          </button>
        </div>
      </form>
      <Link to="/">
        <p>
          <a href="#" class="link-underline-primary">
            or get back to contacts
          </a>
        </p>
      </Link>
    </div>
  );
};
