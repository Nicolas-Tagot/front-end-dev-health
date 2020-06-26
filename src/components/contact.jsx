import React from 'react';


const Contact = (props) => {
const {img_url,nom, pratique, adresse, tel} = props; 

return(
  
<div className="Contact">

<img className="avatar" alt="avatar" src={img_url}/>

<div className="infoDoc">
   <div className='headerDoc'>
     <h3 className="docName">{nom}</h3>
      <p className="PratiqueDoc">{pratique}</p>
   </div>
   <div className="descriptionDoc">
      <p className="adresseDoc">{adresse}</p>  
      <p className="telDoc">{tel}</p>   
  </div>
</div>
  </div>
) 
}
export default Contact;