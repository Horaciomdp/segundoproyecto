import React, {useEffect, useState} from "react";

const Api = () =>{


  const [users, setUsers] = useState([]);   {/* como viene de una api los datos me convendira inicializar el usestate como un array vacio para poder ir guardando los valores*/}

  useEffect(()=> {

    fetch("https://reqres.in/api/users")
        .then(data => data.json())
        .then(json => setUsers(json.data));

    },[])

    console.log({users});

  return (
    <div>
        <h2>Api useeffect -usestate</h2>
        <h2 className="mt-3 text-center" >Ejemplo de api</h2>
        <ul>
             {/* incorporo la suncion map de javascript puero , que va entre llaves para poder recorrer los eelementos que pedi en el fetch de arriba */}
            {users.map(user => (
                
                    <li> <img src={user.avatar} alt=""/></li>
                    
            ))}
        
        </ul>
        <ul>
            {users.map(user=>(
                <li>                 
                    {user.first_name},
                    {user.last_name},
                    {user.email}
                </li>
             ))}
        </ul>
 
       {users.map(user => (
            <div className ="card text-center mt-3 mx-5" style={{width: "18rem"}} >
                <img src={user.avatar} class="card-img-top" alt="..."/>
                    <div className ="card-body">
                     <h5 className ="card-title"> {user.first_name}  {user.last_name}. </h5>
                    <p className ="card-text">Some quick example text to build.</p>
                    <a href="#" className ="btn btn-primary">Go somewhere</a>
                  </div>
          </div>
        ))}





    
    </div>
  )
};

export default Api;