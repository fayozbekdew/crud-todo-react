import React, { useState } from "react";
import { Form } from "react-router-dom";
import { addUser } from "../redux/UserReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
function Create() {
    const[name, setName] =useState('')
    const[email, setEmail] =useState('')
    const navigate = useNavigate()
    const users = useSelector((state) => state.users)
    console.log(users);
    const dispatch = useDispatch()
const handle = (e) => {
    e.preventDefault();
    dispatch(
      addUser({
        id: users[users.length - 1].id + 1,
        name,
        email,
        }),
        navigate("/")
    );
}

  return (
    <div>
    
    <div className="h-screen flex justify-center items-center">

        <form
        onSubmit={(e) => handle(e)}
        >
          
      <div className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col gap-y-4">
        <Link to='/' className="text-3xl ml-auto"><RxExit/></Link>
        <h2 className="text-4xl font-bold capitalize">add new user</h2>
      
      <div className="form-control">
      <label className="label">
        <span className="label-text">What is your name ?</span>
      </label>
      <input
        placeholder="please write your name"
        type='text'
        value={name}
        name='name'
        onChange={(e) => setName(e.target.value)}
        className="input input-bordered"
      /></div>
        <div className="form-control mt-4">
      <label className="label">
        <span className="label-text">What is your email ?</span>
      </label>
      <input
        placeholder="please write your email"
        type='email'
        value={email}
        name='email'
        onChange={(e) => setEmail(e.target.value)}
        className="input input-bordered"
      />
      </div>
      
        <button  type="submit" className="btn btn-accent mt-7">
          submit
        </button>
      
      </div>
      </form>
    </div>
    </div>
  );
}

export default Create;
