import React, {useContext} from "react";

import Contact from "./contact";
import { Context } from "../store/appContext";

useEffect( () => {
	actions.getAllcontacts();

},[]) 

const Home = () => {
	const {actions, store} =useContext(Context)
	return (
		<div className="text-center">
			{store.contacts.map((data, index) => {
				return(<Contact key={index} contact={data}/>)
			})}
		</div>
    
	);
};

export default Home;