import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateUser } from "../redux/UserReducer";
import { useState } from "react";
import { RxExit } from "react-icons/rx";
function Update() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const existingUser = users.products.filter((user) => user.id == id);
  const user = existingUser[0];
  // input value
  const [name, setName] = useState(user.name);
  const [category, setCategory] = useState(user.category);
  const [price, setPrice] = useState(user.price);
  const [description, setDescription] = useState(user.description);
  function handleUser(e) {
    e.preventDefault();
    dispatch(
      updateUser({
        id,
        name,
        price,
        category,
      })
    );
    navigate("/");
  }
  return (
    <div>
      <div className="create-form flex justify-center items-center flex-col  min-h-[100vh] m-auto">
        <form
          onSubmit={(e) => handleUser(e)}
          className="flex border px-16 py-4 flex-col gap-3"
        >
          <div className="justify-start ml-auto ">
            <Link to="/" className="text-3xl ml-auto">
              <RxExit />
            </Link>
          </div>
          <h1 className="text-4xl mt-9 text-primary font-bold text-center mb-4">
            Update User
          </h1>
          <div className="form-control">
            <input
              placeholder="Write product name"
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="input input-bordered input-info w-full max-w-md outline-none"
            />
          </div>
          <div className="form-control">
            <input
              placeholder="Write product price"
              type="number"
              value={price}
              name="price"
              onChange={(e) => setPrice(e.target.value)}
              className="input input-bordered input-info w-full max-w-md"
            />
          </div>
          <select
            onChange={(e) => setCategory(e.target.value)}
            value={category}
            className="select select-info w-full max-w-md"
            placeholder="What category"
          >
            <option disabled selected>
              Select product category
            </option>
            <option value="device">Device</option>
            <option value="cloths">Cloths</option>
            <option value="Instrument">Instrument</option>
          </select>
          <textarea
            value={description}
            className="textarea textarea-info mb-6 w-[400px]"
            placeholder="Description for product"
          ></textarea>
          <button className="btn btn-primary uppercase">update</button>
        </form>
      </div>
    </div>
  );
}

export default Update;
