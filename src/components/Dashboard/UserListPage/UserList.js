import React, { useEffect, useState } from "react";
import { db } from "../../../firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import Navbar from "../../../Navbar";

function UserListPage () {
    let [userlist, setUserList] = useState({})
    const fetchUserName = async () => {
        try {
          const q = query(collection(db, "users"), where("is_active", "==", false));
          const doc = await getDocs(q);
          const data = doc.docs[0].data();
          console.log('data',data);
          setUserList(data)
        } catch (err) {
          console.error(err);
          alert("An error occured while fetching user data");
        }
      };

      useEffect(() => {
        fetchUserName();
      }, []);

    return(
        <div>
            <Navbar />
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-xs font-semibold text-gray-900 sm:pl-6">NAME</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900">Email</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900">User type</th>
                        <th scope="col" className="px-3 py-3.5 text-left text-xs font-semibold text-gray-900">STATUS</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                    {
                        [userlist].map((data) => {
                        return(
                        <tr key={data?.uid}>
                        <td className="px-3 py-4 w-p-20">
                            <div className="text-black-900 font-semibold text-sm">{data.displayName}</div> 
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 w-p-20">
                        <div className='font-semibold text-sm mt-2' style={{fontWeight: 400}}>{data.email}</div>
                        </td>

                        <td className="px-3 py-4 w-p-20">
                            <div className="text-black-900 font-semibold text-sm">{data.user_type}</div> 
                        </td>
                        <td className="px-3 py-4 w-p-20">
                            <div className="text-black-900 font-semibold text-sm">{data.is_active ? "Active" : "InActive"}</div> 
                        </td>
                        </tr>)
                        })
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default UserListPage;