import React, {useState} from 'react';

const SellerForm = ({onAddCandy}) => {

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (name && description && price) {
             onAddCandy ({name, description, price: parseFloat(price)});
             setName('');
             setDescription('');
             setPrice('');
        }


    };
    
    return (
       <form onSubmit={submitHandler}>
        <h2>Add Candy</h2>
        <input type='text'
         value={name} 
         placeholder='Candy Name' 
         onChange={(event)=> {setName(event.target.value)}} />

        <input type='text'
         value={description}
          placeholder='Candy description' 
         onChange={(event)=> {setDescription(event.target.value)}} />  

         <input type='number'
         value={price}
         placeholder='candy price' 
         onChange={(event)=> {setPrice(event.target.value)}} /> 

        <button type='submit'>ADD</button>


       </form>

       
    );
}

export default SellerForm;