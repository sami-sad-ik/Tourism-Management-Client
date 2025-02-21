import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/myList?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setDatas(data);
      });
  }, [user?.email]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure to delete this?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Yes",
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/myList/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remaining = datas.filter((data) => data._id !== _id);
              setDatas(remaining);
              Swal.fire({
                text: "Tourist spot deleted from the list",
                icon: "success",
              });
            }
          });
      }
    });
  };

  return (
    <div className="md:w-4/5 mx-auto overflow-x-auto ">
      <table className="table text-center text-xl">
        <thead className="text-xl">
          <tr>
            <th></th>
            <th>Name</th>
            <th>Country</th>
            <th>Action</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, idx) => (
            <tr key={idx}>
              <th>{idx + 1}</th>
              <td>{data.touristSpotName}</td>
              <td>{data.countryname}</td>
              <td>
                <Link
                  to={`/update/${data._id}`}
                  className="text-sm font-semibold bg-green-500 hover:bg-green-700 duration-300 px-3 py-1 rounded-sm">
                  Update
                </Link>
              </td>
              <td>
                <button
                  onClick={() => handleDelete(data._id)}
                  className="text-sm font-semibold bg-red-500 hover:bg-red-700 duration-300 px-3 py-1 rounded-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyList;
