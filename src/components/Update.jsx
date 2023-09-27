import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/UserReducer";
import { useState } from "react";
import { RxExit } from "react-icons/rx";
function Update() {
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(id)
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  console.log(users)
  const existingUser = users.filter((user) => user.id == id);
  console.log(existingUser)
  const user = existingUser[0];
  // input value
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  function handleUser(e) {
    e.preventDefault();
    dispatch(
      updateUser({
        id,
        name,
        email,
      })
    );
    navigate("/");
  }
  return (
    <div>
      <div className="create-form flex justify-center items-center flex-col  min-h-[100vh] m-auto">
        <form onSubmit={(e) => handleUser(e)} className="flex flex-col gap-7">
        <div className="justify-start ml-auto ">
        <Link to='/' className="text-3xl ml-auto"><RxExit/></Link>
        </div>

          <h1 className="text-4xl mt-9 text-primary font-bold">
            Update User
          </h1>

          <label className="flex flex-col gap-3">
            <span>Please enter a new name:</span>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              placeholder="please write your name"
              className="input input-bordered input-primary w-96"
            />
          
          </label>

          <label className="flex flex-col gap-3">
            <span>Please enter a new email:</span>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="please write your email"
              className="input input-bordered input-primary w-96"
            />
          </label>

          <button className="btn btn-primary uppercase">update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
