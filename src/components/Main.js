import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/cliente";
const Main = () => {
  const [name, setName] = useState('');
  const [loading, setloading] = useState(false)
  const navigate = useNavigate();
  const handleSubmit = async(event) => {
    event.preventDefault();
    localStorage.setItem('name', name);
    navigate('/greeting');
    setloading(true);
    await datos(name)
  };
const datos = async(name)=>{
    try {
   await supabase.from('flowername').insert([{name}])
  } catch (error) {
    console.error(error);
  }
}
setTimeout(() =>{
  setloading(false)
},4000)
  return (
    <div>
      <form className="form-input" onSubmit={handleSubmit}>
        <p>¿Cuál es tu nombre?</p>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
        <button type="submit">Siguiente</button>
        {loading ? 'Cargando..' : ''}
      </form>
    </div>
  );
};
export default Main;
