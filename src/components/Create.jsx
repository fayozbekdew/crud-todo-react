import React  from "react";
import { addUser } from "../redux/UserReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
function Create() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handle = (data) => {
    const { id, name, price, category,categoryPrice, description } = data;
    dispatch(
      addUser({
        id: crypto.randomUUID(),
        name,
        price,
        category,
        categoryPrice,
        description,
      }),
      navigate("/")
    );
  };
  return (
    <div>
      <div className="h-screen flex justify-center items-center">
        <form onSubmit={handleSubmit(handle)}>
          <div className="card w-96 p-8 bg-base-200 shadow-lg flex flex-col">
            <Link to="/" className="text-3xl ml-auto">
              <RxExit />
            </Link>
            <h2 className="text-4xl font-bold capitalize">add new product</h2>

            <div className="form-control">
              <input
                placeholder="Write product name"
                type="text"
                name="name"
                {...register("name", { required: true })}
                className="input mt-6 input-bordered input-info w-full max-w-xs outline-none"
              />
            </div>
            <div className="form-control mt-4 flex items-center flex-row gap-x-2  w-full">
              <input
                placeholder="Write product price"
                type="number"
                name="price"
                {...register("price", { required: true })}
                className="input  input-bordered input-info w-full"
              />
             <select
              {...register("categoryPrice", { required: true })}
              className="select select-info w-[70px]"
            >
              <option value="$" selected>$</option>
              <option value="€">€</option>
              <option value="sum">Sum</option>
            </select>
            </div>
            <select
              {...register("category", { required: true })}
              className="select select-info w-full max-w-xs mt-4"
              placeholder="What category"
            >
              <option className="" disabled selected>
                Select product category
              </option>
              <option value="device">Device</option>
              <option value="cloths">Cloths</option>
              <option value="Instrument">Instrument</option>
            </select>
            <textarea
              {...register("description", { required: false })}
              className="textarea textarea-info mt-4"
              placeholder="Description for product"
            ></textarea>
            <button type="submit" className="btn btn-success mt-4">
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
