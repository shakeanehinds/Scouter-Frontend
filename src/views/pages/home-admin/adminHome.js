import React, { useState, useEffect } from 'react';
import logo from '../../../images/Logo.svg';
import { Radar } from 'react-chartjs-2';
import bell from '../../../images/bell.svg';

const AdminHome = () => {
  const [posts, setPosts] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState([]);

  console.log('admin');

  const data = {
    labels: ['Education', 'Skills', 'Work Experience'],
    datasets: [
      {
        label: 'Shakeane',
        data: [2, 9, 3],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
      {
        label: 'Jason',
        data: [3, 4, 6],
        backgroundColor: 'rgba(255, 99, 32, 0.2)',
        borderColor: 'rgba(255, 99, 32, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    width: 200,
    height: 200,
    // responsive: true,
    maintainAspectRatio: true,
    scale: {
      ticks: { beginAtZero: true },
    },
  };
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `http://scouter.point876solutions.com/jobPosting/`
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
      <div className="h-screen w-screen bg-gray-100 flex justify-center items-center relative flex flex-col">
        <nav className="w-screen h-12 bg-white absolute top-0 left-0 flex justify-start">
          <img className="px-2 py-2" src={logo} />
          <div className="flex font-semibold flex-grow px-2 justify-end items-center">
            <img
              className="w-5 h-5 cursor-pointer hover:scale-110 transform transition-all duration-500 ease-in-out"
              src={bell}
            ></img>
            <a className="px-1 cursor-pointer hover:text-yellow-500 transition-colors duration-500 ease-in-out">
              Create
            </a>
            <a className="px-1 cursor-pointer hover:text-yellow-500 transition-colors duration-500 ease-in-out">
              Profile
            </a>
          </div>
        </nav>
        <h1
          className="text-black font-bold text-xl
          "
        >
          Active job posts
        </h1>
        <section className="w-screen h-5/6 my-12 overflow-y-scroll py-4 px-4 rounded-md mx-2 bg-white flex">
          <div className="flex flex-col h-full overflow-y-scroll">
            {posts.map(function (post, index) {
              return (
                <div
                  onClick={() => setSelectedPosts(post)}
                  onBlur={() => setSelectedPosts([])}
                  key={index}
                  className="hover:border-yellow-500 transition-colors duration-500 ease-in-out border-2 cursor-pointer w-5/6 h-max rounded-md shadow-md bg-white p-3 my-6"
                >
                  <h1 className=" font-bold text-md mb-2">{post.position}</h1>
                  <span className="uppercase text-xs font-semibold bg-yellow-500 px-2 py-1 rounded-md ">
                    {post.employmentType.replace('_', ' ')}
                  </span>
                  <p className="text-gray-600 py-5">{post.description}</p>
                </div>
              );
            })}
          </div>

          {selectedPosts !== [] && (
            <div className=" p-4 flex flex-col flex-grow w-full">
              <h1 className=" font-bold text-md mb-2">
                {selectedPosts.position}
              </h1>
              <span className=" w-max uppercase text-xs font-semibold bg-yellow-500 px-2 py-1 rounded-md ">
                {selectedPosts.employmentType?.replace('_', ' ')}
              </span>
              <p className="text-gray-600 py-5">{selectedPosts.description}</p>
              <p className="text-gray-600 py-5">
                {/* ${selectedPosts.basicYearlySalary.toLocaleString()} */}
              </p>
              {/* {selectedPosts.skillRequirements.map(function (skill, index) {
                <div>{skill}</div>;
              })} */}
            </div>
          )}

          {/* <div className=" w-96 h-96 bg-red-white">
            <Radar data={data} options={options} />
          </div> */}
        </section>
      </div>
    </>
  );
};
export default AdminHome;
