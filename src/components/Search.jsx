import React from "react";
import {FaSearch, FaMicrophone, FaEllipsisV} from "react-icons/fa";
import {CgProfile} from "react-icons/cg";

const Search = () => {
  return (
    <>
      <div className="navbar">
        <div className="bar">  
          <div className="search-bar ml-60 w-500px rounded-2xl  border-2  border-zinc-700" >
            <input className='search pl-4  rounded-l-2xl ' type="text" placeholder="Search" />

            <div className="search-icon text-slate-500 p-4 pt-2 pl-3 justify-center w-17 border-2 rounded-r-xl border-zinc-700 bg-slate-700"><FaSearch /></div>
          </div>
        </div>
        <div className="mic">  
          <div className="mic-icon flex-initial justify-center p-1 mr-35 pt-2 bg-slate-700 border-2 rounded-full">
            <FaMicrophone />
          </div>
        </div>
        <div className="right-side justify-center items-center">
          <div className="options pr-4">
            <FaEllipsisV />
          </div>
          <div className="sign-in pl-2  p-1 pr-2 border-2 rounded-2xl border-slate-700">
            <div className="profile p-1 text-blue-500"><CgProfile /></div>
            <button type="submit">
              <span className="sign text-blue-500">Sign-in</span>
            </button>
          </div>
        </div>
      </div>

      <nav className="nav pl-2 pb-3">

        <button type="submit"><span className="one p-1 bg-slate-800 mr-3 rounded-lg text-base"> All</span></button>
        <button type="submit"><span className="two p-1 bg-slate-800 mr-3 rounded-lg text-base"> Music</span></button>
        <button type="submit"><span className="three p-1 bg-slate-800 mr-3 rounded-lg text-base">Live</span></button>
        <button type="submit"><span className="four p-1 bg-slate-800 mr-3 rounded-lg text-base">Bollywood Music</span></button>
        <button type="submit"><span className="5 p-1 bg-slate-800 mr-3 rounded-lg text-base">Dramedy</span></button>
        <button type="submit"><span className="6 p-1 bg-slate-800 mr-3 rounded-lg">Action Thrillers</span></button>
        <button type="submit"><span className="7 p-1 bg-slate-800 mr-3 rounded-lg">Tamil Cinema</span></button>
        <button type="submit"><span className="8 p-1 bg-slate-800 mr-3 rounded-lg">News</span></button>
        <button type="submit"><span className="9 p-1 bg-slate-800 mr-3 rounded-lg">Cricket</span></button>
        <button type="submit"><span className="10 p-1 bg-slate-800 mr-3 rounded-lg">Gaming</span></button>
        <button type="submit"><span className="11 p-1 bg-slate-800 mr-3 rounded-lg">game Shows</span></button>
        <button type="submit"><span className="12 p-1 bg-slate-800 mr-3 rounded-lg">Bhajan Music</span></button>
        <button type="submit"><span className="13 p-1 bg-slate-800 mr-3 rounded-lg">Astronomy</span></button>
        <button type="submit"><span className="14 p-1 bg-slate-800 mr-3 rounded-lg">Cooking shows</span></button>
        <button type="submit"><span className="15 p-1 bg-slate-800 mr-3 rounded-lg">Recently uploaded</span></button>

      </nav>
    </>
  );
};

export default Search;
