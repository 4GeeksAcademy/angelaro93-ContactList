import { Navigate } from "react-router"; 

const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
           contacts: [],
        },
        actions: {
           
            getAllContacts: () => {
                const requestOptions = {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                  };
                  
                  fetch("https://playground.4geeks.com/contact/agendas/semana/contacts", requestOptions)
                    .then(response =>{
                        if (!response.ok) {
                            throw new Error ("response was not ok")
                        }
                      return  response.json ()
                    }) 
                    .then(data => {
                        console.log( "api response", data)
                        setStore({
                            contacts: data.contacts
                        });
                    })
                    .catch(error => console.error (error));  
            }, 


            addContacts: (name, phone, email, address) => {
                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, phone, email, address }),
                };
                fetch("https://playground.4geeks.com/contact/agendas/semana/contacts", options) 
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("No se pudo agregar el contacto");
                        }
                        return response.json();
                    })
                    .then(response => {
                        getActions().getAllContacts();
                        console.log("Contacto agregado:", response);
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
                },

                    
            updateContact: (id, name, phone, email, address) => {
                const options = {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ name, phone, email, address }),
                };
                fetch(`https://playground.4geeks.com/contact/${id}`, options)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("No se pudo actualizar el contacto");
                        }
                        return response.json();
                    })
                    .then(response => {
                        getActions().getAllContacts(); 
                        console.log("Contacto actualizado:", response);
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
            },

            
            deleteContact: (id) => {
                const options = {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                };
                fetch(`https://playground.4geeks.com/contact/${id}`, options)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error("No se pudo eliminar el contacto");
                        }
                        return response.json();
                    })
                    .then(response => {
                        getActions().getAllContacts(); 
                        console.log("Contacto eliminado:", response);
                    })
                    .catch(error => {
                        console.error("Error:", error);
                    });
            },
        }
    };
};

export default getState; 