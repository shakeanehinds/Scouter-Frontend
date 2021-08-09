import React, { useState, useEffect } from 'react';
import logo from '../../../images/Logo.svg';
import { Radar } from 'react-chartjs-2';
import bell from '../../../images/bell.svg';
import avatar from '../../../images/avatar.svg';
import Tabs from '../../components/Tabs/tabs';
import Nav from '../../components/Nav';
import { Link } from 'react-router-dom';
import { getApplicants } from '../../../network';
import { FaArrowRight as Next } from 'react-icons/fa';

const AdminHome = () => {
  const [posts, setPosts] = useState([]);
  const [sortedField, setSortedField] = useState(null);
  const [applicants, setApplicants] = useState([]);
  const [selectedApplicants, setSelectedApplicants] = useState([]);
  const [selectedPosts, setSelectedPosts] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const popMenu = function () {
    return (
      <div class="my-10 w-full h-full">
        <div class="bg-white rounded overflow-hidden shadow-lg">
          <div class="text-center p-6  border-b">
            <img
              class="h-24 w-24 rounded-full mx-auto"
              src="https://randomuser.me/api/portraits/men/24.jpg"
              alt="Randy Robertson"
            />
            <p class="pt-2 text-lg font-semibold">Randy Robertson</p>
            <p class="text-sm text-gray-600">randy.robertson@example.com</p>
            <div class="mt-5">
              <a
                href="#"
                class="border rounded-full py-2 px-4 text-xs font-semibold text-gray-700"
              >
                Manage your Account
              </a>
            </div>
          </div>
          <div class="border-b">
            <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
              <div class="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div class="pl-3">
                <p class="text-sm font-medium text-gray-800 leading-none">
                  Add members
                </p>
                <p class="text-xs text-gray-500">
                  Add/manage users &amp; teams
                </p>
              </div>
            </a>
            <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
              <div class="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div class="pl-3">
                <p class="text-sm font-medium text-gray-800 leading-none">
                  Account settings
                </p>
                <p class="text-xs text-gray-500">
                  Usage, billing, branding, teams
                </p>
              </div>
            </a>
            <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
              <div class="text-gray-800">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div class="pl-3">
                <p class="text-sm font-medium text-gray-800 leading-none">
                  Personal settings
                </p>
                <p class="text-xs text-gray-500">
                  Email, profile, notifications
                </p>
              </div>
            </a>
            <a href="#" class="px-4 py-2 hover:bg-gray-100 flex">
              <div class="text-green-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  viewBox="0 0 24 24"
                  class="w-5 h-5"
                >
                  <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <div class="pl-3">
                <p class="text-sm font-medium text-gray-800 leading-none">
                  Apps &amp; integrations
                </p>
                <p class="text-xs text-gray-500">Google, slack, mail</p>
              </div>
            </a>
          </div>

          <div class="">
            <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
              <p class="text-sm font-medium text-gray-800 leading-none">
                Product updates
              </p>
            </a>
            <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
              <p class="text-sm font-medium text-gray-800 leading-none">
                Status updates
              </p>
            </a>
            <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
              <p class="text-sm font-medium text-gray-800 leading-none">
                Support FAQ
              </p>
            </a>
            <a href="#" class="px-4 py-2 pb-4 hover:bg-gray-100 flex">
              <p class="text-sm font-medium text-gray-800 leading-none">
                Logout
              </p>
            </a>
          </div>
        </div>
      </div>
    );
  };
  const radar = function (data) {
    return (
      <div className="flex items-center justify-center w-full h-full bg-white">
        <div className=" w-4/6 h-96">
          <Radar
            data={data}
            options={{
              interaction: {
                mode: 'index',
              },
              plugins: {
                title: {
                  display: true,
                },
                tooltip: {
                  usePointStyle: true,
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  titleColor: 'rgba(0, 0, 0, 1)',
                  bodyColor: 'rgba(0, 0, 0, 1)',
                  bodySpacing: 10,
                  padding: 10,
                },
                legend: {
                  labels: {
                    font: {
                      size: 20,
                      lineHeight: '30',
                    },
                    usePointStyle: true,
                  },
                },
                layout: {
                  padding: 30,
                },
              },

              responsive: true,
              maintainAspectRatio: true,
              // scale: {
              //   gridLines: {
              //     circular: true,
              //   },
              //   reverse: false,
              //   gridLines: {
              //     color: [
              //       'black',
              //       'red',
              //       'orange',
              //       'yellow',
              //       'green',
              //       'blue',
              //       'indigo',
              //       'violet',
              //     ],
              //   },
              //   ticks: {
              //     beginAtZero: true,
              //   },
              // },
            }}
          />
        </div>
      </div>
    );
  };

  const table = function (applicants) {
    let sortedApplicants = [...applicants];

    if (sortedField !== null) {
      sortedApplicants.sort((a, b) => {
        if (a[sortedField] < b[sortedField]) {
          return -1;
        }
        if (a[sortedField] > b[sortedField]) {
          return 1;
        }
        return 0;
      });
    }

    return (
      <section class="container mx-auto p-6 font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full sortable">
              <thead>
                <tr class="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th
                    onClick={() => setSortedField('firstName')}
                    class="px-4 py-3 cursor-pointer"
                  >
                    Name
                  </th>
                  <th
                    onClick={() => setSortedField('experience')}
                    class="px-4 py-3"
                  >
                    Exp (yrs)
                  </th>
                  <th class="px-4 py-3">Education</th>
                  <th
                    onClick={() => setSortedField('status')}
                    class="px-4 py-3 cursor-pointer"
                  >
                    Status
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white">
                {sortedApplicants.map(function (applicant, index) {
                  return (
                    <tr class="text-gray-700">
                      <td class="px-4 py-3 border">
                        <div class="flex items-center text-sm">
                          <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img
                              class="object-cover w-full h-full rounded-full"
                              src="https://i.pravatar.cc/24"
                              alt=""
                              loading="lazy"
                            />
                            <div
                              class="absolute inset-0 rounded-full shadow-inner"
                              aria-hidden="true"
                            ></div>
                          </div>
                          <div>
                            <p class="font-semibold text-black">
                              {applicant.firstName} {applicant.lastName}
                            </p>
                            <p class="text-xs text-gray-600 lowercase">
                              {applicant.employmentProfile.employmentStatus}
                            </p>
                          </div>
                        </div>
                      </td>
                      <td class="px-4 py-3 text-ms font-semibold border">22</td>
                      <td class="px-4 py-3 text-xs border">
                        {applicant.eductionProfile.listOfEducation.map(
                          function (education, index) {
                            return (
                              <span
                                key={index}
                                className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm"
                              >
                                {education.attainment}
                              </span>
                            );
                          }
                        )}
                      </td>
                      <td class="px-4 py-3 text-sm border">
                        {applicant.applicantStatus}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    );
  };

  const data = {
    labels: ['Education', 'Skills Matched', 'Work Experience'],
    datasets: [
      {
        label: 'Shakeane',
        data: [2, 4, 3],
        backgroundColor: 'rgba(0, 108, 132, 0.2)',
        borderColor: 'rgba(0, 108, 132, 1)',
        borderWidth: 2,
        pointStyle: 'star',
        pointRadius: 8,
      },
      {
        label: 'Jason',
        data: [0, 4, 6],
        backgroundColor: 'rgba(255, 99, 32, 0.2)',
        borderColor: 'rgba(255, 99, 32, 1)',
        borderWidth: 2,
        pointStyle: 'circle',
        pointRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: true,
    scale: {
      gridLines: {
        circular: true,
      },
      reverse: false,
      gridLines: {
        color: [
          'black',
          'red',
          'orange',
          'yellow',
          'green',
          'blue',
          'indigo',
          'violet',
        ],
      },
      ticks: {
        beginAtZero: true,
      },
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
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);

  const getApplications = async function (id) {
    try {
      getApplicants(id)
        .then((resp) => resp.data)
        .then((data) => setApplicants(data))
        .then(setIsOpen(true))
        .catch((err) => console.log(err));

      // setApplicants(json);
      // setIsOpen(true);
      console.log('-------->', applicants);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <>
      <div className="h-screen w-screen bg-gray-100 relative justify-center items-center flex flex-col">
        <Nav />
        <section className=" w-screen h-full overflow-y-scroll py-4 px-4 rounded-md mx-2 bg-white flex border-t-4 border-gray-50">
          <div className="w-5/12 flex flex-col">
            <div className="text-xl font-semibold py-2 bg-white w-full text-center">
              Active Job Posts
            </div>
            <div className=" flex items-center flex-col w-full h-full overflow-y-scroll  border-gray-400 rounded-md  shadow-lg">
              {posts.map(function (post, index) {
                return (
                  <div
                    onClick={() => setSelectedPosts(post)}
                    key={index}
                    className="hover:border-yellow-500 border-transparent transition-colors duration-500 ease-in-out border-2 cursor-pointer w-11/12 h-max rounded-md bg-white p-3 my-2"
                  >
                    <h1 className=" font-bold text-md mb-2">{post.position}</h1>
                    <div className="flex">
                      <span className="text-xs font-bold bg-yellow-100 my-2 mx-1 py-1 px-2 rounded text-yellow-500 align-middle">
                        {post.employmentType?.replace('_', ' ')}
                      </span>
                      <span className="text-xs font-medium bg-green-100 my-2 mx-1 py-1 px-2 rounded text-green-500 align-middle">
                        ${post.basicYearlySalary.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-gray-600 py-4">{post.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          {selectedPosts === false && (
            <div className="w-full flex flex-grow items-center justify-center">
              Please select a post on the left
            </div>
          )}
          {selectedPosts !== false && (
            <div className="relative p-4 flex flex-col flex-grow w-full">
              <div
                onClick={() => getApplications(selectedPosts.id)}
                // onClick={() => setIsOpen(true)}
                className="font-semibold text-xs transition-all duration-500 ease-in-out cursor-pointer absolute bottom-2 right-2  hover:scale-105 transform bg-white rounded-lg px-3 py-2 shadow-md border-green-500 border-2"
              >
                View Applicants
              </div>
              <h1 className="font-semibold text-lg mb-2">
                {selectedPosts.position}
              </h1>

              <div className="flex">
                <span className="text-xs font-bold bg-yellow-100 my-2 mx-1 py-1 px-2 rounded text-yellow-500 align-middle">
                  {selectedPosts.employmentType?.replace('_', ' ')}
                </span>
                <span className="text-xs font-medium bg-green-100 my-2 mx-1 py-1 px-2 rounded text-green-500 align-middle">
                  ${selectedPosts.basicYearlySalary.toLocaleString()}
                </span>
              </div>
              <p className="text-gray-600 py-5">{selectedPosts.description}</p>
              <h3 className="font-semibold text-md mb-2">Required Skills </h3>
              <div className="h-1 w-32 bg-green-300 rounded-md"></div>
              <div className="flex w-full overflow-x-scroll">
                {selectedPosts.skillRequirements.map(function (skill, index) {
                  return (
                    <span
                      key={index}
                      className="text-sm font-medium bg-blue-100 my-2 ml-1 py-1 px-2 rounded text-blue-500 align-middle"
                    >
                      {skill.skill}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
        </section>
        {isOpen && (
          <div className="absolute bottom-0 right-0 w-screen h-screen bg-white overflow-y-hidden">
            <div className="relative w-full h-full">
              <div
                onClick={() => setIsOpen(false)}
                className="absolute w-max flex justify-start pl-6 pt-6 cursor-pointer text-red-600 font-bold"
              >
                Close
              </div>
              <div className="flex w-full h-full">
                <div className="bg-white flex flex-col flex-grow items-center justify-center place-content-center">
                  <div className="w-11/12 flex justify-between">
                    <h3 className="text-xl font-semibold text-left">
                      {selectedPosts.position}
                    </h3>
                    <button
                      onClick={() => console.log(selectedApplicants)}
                      className="border border-green-600 bg-green-600 text-white rounded-sm font-bold py-1 px-4 shadow-md flex items-center"
                    >
                      Next page
                      <Next />
                    </button>
                  </div>
                  <Tabs
                    color="green"
                    radar={radar(data)}
                    table={table(applicants)}
                  />
                </div>
                <div className="w-96 h-full bg-gray-50 flex flex-col items-center pt-2 overflow-y-scroll">
                  {applicants !== [] &&
                    applicants.map(function (applicant, index) {
                      return (
                        <div
                          key={index}
                          className="bg-white w-11/12 h-auto px-6 py-3 mb-2 border-2 border-gray-200 cursor cursor-pointer hover:border-green-400 rounded-md shadow-sm text-gray-900"
                        >
                          <div className="mb-3">
                            <input
                              onClick={() =>
                                setSelectedApplicants([
                                  ...selectedApplicants,
                                  applicant,
                                ])
                              }
                              type="checkbox"
                              className="mr-2 border-gray-600"
                            ></input>
                            {applicant.firstName} {applicant.lastName}
                          </div>
                          <div className="mb-2 uppercase text-sm font-semibold border-gray-300 border-b">
                            Skills
                          </div>
                          <div className="w-full flex flex-col my-4">
                            {applicant.skillList.map(function (skill, index) {
                              return (
                                <p className=" w-full mr-3  text-xs font-semibold">
                                  {skill}
                                </p>
                              );
                            })}
                          </div>
                        </div>
                      );
                    })}
                  {applicants.length === 0 && (
                    <div className="flex items-center justify-center h-full">
                      No applicants yet
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
        {/* <div className="absolute w-screen h-screen">
          <div className="shadow-lg rounded-md right-20 top-12 w-6/12 h-3/6 bg-white">
            <input></input>
          </div>
        </div> */}
      </div>
    </>
  );
};
export default AdminHome;
