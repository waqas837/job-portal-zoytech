// pages/index.js

import CopyToClipBoard from "./components/CopyToClipBoard";
import { connectDB } from "./config/db";
import qoutesModel from "./model/qoutesModel";
import { Lexend_Tera, Agbalumo } from "next/font/google";

const myfonts = Lexend_Tera({ weight: "400", subsets: ["latin"] });
const myfonts2 = Agbalumo({ weight: "400", subsets: ["latin"] });
const Home = async () => {
  const data = await getQuotes();
  const colors = [
    "bg-yellow-200",
    "bg-blue-200",
    "bg-green-200",
    "bg-purple-200",
    "bg-red-200",
  ]; // Add more colors
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-5">
      <h1 className="text-center text-4xl">Todays best Qoutes</h1>
      <main className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-20">
        {data.map((val, index) => (
          <div className={"p-4 " + colors[index % colors.length]} key={index}>
            <div className="max-w-sm mx-auto">
              <div className="text-xl font-bold mb-4">
                <svg
                  className="w-8 h-8 text-gray-400 dark:text-gray-600 mb-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 14"
                >
                  <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                </svg>
                {/* content */}
                <span className={`text-gray-500 ${myfonts.className}`}>
                  {val.quote}
                </span>
              </div>
              <div className="flex justify-between">
                {/* author */}
                <p className={`text-gray-700 ${myfonts2.className}`}>
                  - {val.author}
                </p>
                {/* clipboard copy */}
                <CopyToClipBoard content={val.quote} />
              </div>
            </div>
          </div>
        ))}
      </main>

      <footer className="w-full h-12 flex justify-center items-center bg-gray-300">
        <p className="text-sm">
          © {new Date().getFullYear()} Your Favourite FavQuotes.com
        </p>
      </footer>
    </div>
  );
};

// From db
const getQuotes = async () => {
  await connectDB();
  let data = await qoutesModel.find();
  // console.log("data", data)
  return data;
};

export default Home;
