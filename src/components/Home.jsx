import { CiCircleChevDown } from "react-icons/ci"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteUser, updateUser } from "../redux/UserReducer";
import { BsTrash, BsPencil } from "react-icons/bs";
import { useParams } from "react-router-dom";
function Home() {
  const { id } = useParams();
  const users = useSelector((state) => state.users.products);
  console.log(users)
  const dispatch = useDispatch();
  const handle = ({ id }) => {
    dispatch(
      updateUser({
        id,
        name,
        price,
        category,
        description
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
              <th>Name</th>
              <th>Price</th>
              <th>Category</th>
              <th >Description</th>
              <th className="mr-auto">Action</th>
            </tr>
          </thead>
          <tbody>
            {users && users.map((user, index) => (
              <tr key={index} className=''>
              <td>{user.name}</td>
              <td>{user.price} {user.categoryPrice}</td>
              <td>{user.category}</td>
              <td className="flex justify-center w-[200px]">{user.description ? user.description : 'No write description'}</td>
              <td>
                <div className="flex gap-3">
                  <Link
                    to={`/update/${user.id}`}
                    className="btn btn-warning "
                  >
                    <BsPencil className="w-4 h-4" />
                  </Link>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn btn-active btn-error"
                  >
                    <BsTrash className="w-4 h-4" />
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
