export default function Home() {
  // text-[#3F6EEC]
  return (
    <main>
      {/* navbar */}
      <div className="px-20 mt-5 rounded-tl-lg rounded-tr-lg max-w-[full] p-2">
        <nav className="flex justify-between items-center text-[14px]">
          {/* icon */}
          <h1 className="text-blue-500 font-bold">Hireon.in</h1>
          {/* link section */}
          <div className="hidden w-[487px] lg:flex lg:justify-around lg:items-center">
            {/* links */}
            <select name="job" id="job">
              <option value="Jobs">Jobs</option>
              <option value="Job1">Job1</option>
              <option value="Job2">Job2</option>
              <option value="Job3">Job3</option>
            </select>
            <a href="#">Blog</a>
            <button
              type="button"
              className="text-[#3F6EEC] border-2 border-[#3F6EEC] focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2 text-center me-2 mb-2 dark:bg[#3F6EEC] "
            >
              Employ Login
            </button>
            <button
              type="button"
              className="text-white bg-[#3F6EEC] hover:bg-[#3F6EEC] focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-[#3F6EEC] dark:focus:ring-[#3F6EEC] shadow-lg"
            >
              Candidate Login
            </button>
          </div>
          {/* at small screen we have a menu toggle icon */}
          <div className="lg:hidden">
            <button className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {/* hero-section */}
      <div className="bg-gradient-to-br from-blue-50 to-pink-50 via-blue-50 p-10 pb-32">
        {/* Center Text */}
        <div className="text-center py-20">
          <p className="text-[16px] font-bold">INDIA'S #1 JOB PLATFORM</p>
          <p className="text-[44px] font-bold">Apna Job Portal :</p>
          <p className="text-[44px] font-bold text-[#3F6EEC]">
            Your job search ends here
          </p>
          <p className="text-[24px] font-bold">
            5 lac+ jobs for you to explore
          </p>
        </div>

        {/* Search Bar */}
        <div>
          <form className="max-w-3xl mx-auto">
            <label
              for="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-[#3F6EEC] dark:text-[#3F6EEC]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full p-5 ps-10 text-sm text-gray-900 border-none border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 shadow-lg"
                placeholder="search jobs by 'company'"
                required
              />
              <p className="absolute start-[245px] top-[20px] text-gray-500">
                |
              </p>
              <button className="text-white absolute end-[170px] bottom-2.5 bg-[#3F6EEC] hover:bg-[#3F6EEC] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-[#3F6EEC] dark:focus:ring-[#3F6EEC] shadow-lg p-4">
                Search
              </button>

              {/*location icon  */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 absolute start-[275px] top-5 text-[#3F6EEC]"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
              {/* and input */}

              <input
                type="search"
                id="default-search"
                className="absolute start-[310px] top-[22px] text-sm text-gray-900  bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="search jobs by 'company'"
                required
              />

              <button
                type="button"
                className="text-[#3F6EEC] absolute end-1.5 top-[15px] border border-gray-400 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full text-sm px-5 py-1 text-center me-2 mb-2 dark:bg[#3F6EEC] "
              >
                <div className="flex justify-between items-center">
                  {" "}
                  <p>View All</p>{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Get job in just 3 steps... Section*/}
      <div className="p-20">
        <p className="text-[44px] font-bold text-center">
          Get job in just 3 steps...
        </p>
        <div className="my-36">
          <div className="grid grid-cols-2 z-10 relative">
            {/* Card */}
            <div className="z-10">
              <div className="z-10 w-full max-w-sm bg-white border border-gray-100 rounded-3xl  shadow-xl dark:bg-gray-800 dark:border-gray-300">
                <div className="flex justify-between px-4 py-6 pt-4">
                  {/* backarrow */}
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                      />
                    </svg>{" "}
                  </button>
                  <h5 className="mb-1 text-xl text-gray-900 dark:text-white">
                    Job details
                  </h5>
                  <button
                    id="dropdownButton"
                    data-dropdown-toggle="dropdown"
                    className="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button"
                  >
                    {/* search bar */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex items-center">
                  <div className="m-auto flex flex-col items-center pb-10 w-80 p-5 border-2 rounded-md">
                    {/* star icon */}
                    <div className="flex justify-between items-center w-14 mr-auto">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-yellow-500"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                          clipRule="evenodd"
                        />
                      </svg>{" "}
                      <p>4.7</p>
                    </div>

                    {/* share and bookmark icon */}
                    <div className="flex justify-between w-16 ml-40 -mt-7">
                      <button className="text-gray-900 bg-white hover:bg-gray-100 border border-blue-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="w-5 h-5 text-blue-400"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M15.75 4.5a3 3 0 1 1 .825 2.066l-8.421 4.679a3.002 3.002 0 0 1 0 1.51l8.421 4.679a3 3 0 1 1-.729 1.31l-8.421-4.678a3 3 0 1 1 0-4.132l8.421-4.679a3 3 0 0 1-.096-.755Z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </button>
                      <button className="text-gray-900 bg-white hover:bg-gray-100 border border-blue-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-2 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="w-5 h-5 text-blue-400"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                          />
                        </svg>
                      </button>
                    </div>
                    {/* Shell Icon */}
                    <button className="text-gray-900 bg-white hover:bg-gray-100 border border-blue-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-2 py-1 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-10 h-10 text-yellow-500"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M12 2.25c-2.429 0-4.817.178-7.152.521C2.87 3.061 1.5 4.795 1.5 6.741v6.018c0 1.946 1.37 3.68 3.348 3.97.877.129 1.761.234 2.652.316V21a.75.75 0 0 0 1.28.53l4.184-4.183a.39.39 0 0 1 .266-.112c2.006-.05 3.982-.22 5.922-.506 1.978-.29 3.348-2.023 3.348-3.97V6.741c0-1.947-1.37-3.68-3.348-3.97A49.145 49.145 0 0 0 12 2.25ZM8.25 8.625a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Zm2.625 1.125a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Zm4.875-1.125a1.125 1.125 0 1 0 0 2.25 1.125 1.125 0 0 0 0-2.25Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    </button>
                    <h5 className="mb-1 text-xl text-gray-900 dark:text-white font-bold my-7">
                      Senoir UI/UX Designer
                    </h5>
                    <p className="text-blue-400 pb-3">Shell</p>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      California, India
                    </span>
                    <p className="text-blue-400 pb-1">$30k-$40k per year</p>

                    <div className="flex mt-4 md:mt-6">
                      <a
                        href="#"
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      >
                        Onsite
                      </a>
                      <a
                        href="#"
                        className="py-2 px-4 ms-2 text-sm inline-flex items-center font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800700"
                      >
                        Full Time
                      </a>
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 my-3">
                      Posted 10 days ago, end by 2 days.
                    </span>
                  </div>
                </div>
                {/* job description text */}
                <div className="flex justify-between items-center">
                  <p className="text-blue-500 ms-3">Job Description</p>
                  <p className="text-gray-400 me-3">Key</p>
                </div>
              </div>
            </div>

            {/* first circle icon */}
            <svg
              width="81"
              height="81"
              viewBox="0 0 81 81"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="z-0 absolute -top-[25px] -left-10"
            >
              <circle cx="40.7532" cy="40.6974" r="39.9526" fill="#687EF3" />
            </svg>
            {/* big right circle */}
            <svg
              className="z-0 absolute -top-[0px] left-72"
              width="168"
              height="167"
              viewBox="0 0 168 167"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="84.1521"
                cy="83.5"
                r="83.5"
                fill="#687EF3"
                fill-opacity="0.1"
              />
            </svg>
            {/* yellow small upper cirlce icon */}
            <svg
              className="z-0 absolute -top-[50px] left-16"
              width="19"
              height="19"
              viewBox="0 0 19 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="9.52341" cy="9.21984" r="9.21984" fill="#F3A268" />
            </svg>
            {/* small icon blue */}
            <svg
              className="z-0 absolute -bottom-20 left-16"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="8.60684" cy="7.77426" r="7.6832" fill="#34E7A5" />
            </svg>
          </div>
          {/* Stepper */}
          <div></div>
        </div>
      </div>
    </main>
  );
}
