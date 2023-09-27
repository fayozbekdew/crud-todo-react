
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../redux/UserReducer";
import { BsTrash, BsPencil } from "react-icons/bs";
import { useState } from "react";
import { useParams } from "react-router-dom";
function Home() {
  const { id } = useParams();
  console.log(id);
  const users = useSelector((state) => state.users);

  const [name, setName] = useState(users.name);
  const [email, setEmail] = useState(users.email);
  const dispatch = useDispatch();
  const handle = ({ id }) => {
    dispatch(
      updateUser({
        id,
        name,
        email,
      })
    );
  };
  const reload = (e) => {
    e.preventDefault();
  };

  function handleDelete(id) {
    console.log(id);
    dispatch(deleteUser({ id }));
  }
  return (
    <div className="mt-6  mb-4">
      <Link to="/create" className="btn bg-primary mb-3 rounded-md">
        Create +
      </Link>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="">
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th className="mr-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <div className="flex gap-3">
                    <Link
                      to={`/update/${user.id}`}
                      className="btn bg-info-content"
                    >
                      <BsPencil />
                    </Link>
                    <button
                      onClick={() => handleDelete(user.id)}
                      className=" btn bg-error-content"
                    >
                      <BsTrash />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;

{
  /* Open the modal using document.getElementById('ID').showModal() method */
}
