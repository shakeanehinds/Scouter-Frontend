import React, { useState, useEffect } from 'react';
import logo from '../../../images/Logo.svg';
const AdminHome = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://scouterjm.herokuapp.com/jobPosting/`
        );
        const json = await response.json();
        setPosts(json);
        console.log(json);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="h-screen w-screen bg-gray-100 flex justify-center items-center relative">
        <nav className="w-screen h-12 bg-white absolute top-0 left-0 flex justify-start">
          <img className="px-2 py-2" src={logo} />
          <div className="flex flex-grow px-2 justify-end items-center">
            <a className="px-1 cursor-pointer">Create</a>
            <a className="px-1 cursor-pointer">Create</a>
            <a className="px-1 cursor-pointer">Profile</a>
          </div>
        </nav>
        <section className="w-screen h-5/6 py-4 px-4 rounded-md mx-2 bg-white">
          <h1
            className="text-black font-bold text-lg
          "
          >
            Active job posts
          </h1>
          {/* {posts.map(function (post, index) {
            return (
              <div className=" w-1/4 h-28 rounded-md shadow-md bg-white p-3 my-6">
                <h1 className="font-bold text-sm">{post.position}</h1>
                <span className="Capitalize">
                  {post.employmentType.replace('_', '')}
                </span>
              </div>
            );
          })} */}
          <div className=" w-96 h-28 rounded-md shadow-md bg-white p-3 my-6">
            <h1 className="font-bold text-md">Data analyst</h1>
            <span className="uppercase text-xs font-bold bg-yellow-500 px-2 py-1 rounded-md ">
              Full Time
            </span>
          </div>
        </section>
      </div>
    </>
  );
};
export default AdminHome;
