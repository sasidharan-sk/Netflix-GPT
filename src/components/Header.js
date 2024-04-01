import React from 'react'
import Netflix from "../utils/Netflix.png"
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/Firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { addUser } from '../utils/userSlice'
import { removeUser } from '../utils/userSlice'
import appStore from '../utils/appStore'
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { changeLanguage } from '../utils/configSlice'
import { homeIconSvg, searchIconSvg } from '../utils/svg'
const Header = () => {

  const navigate = useNavigate()
  const user = useSelector((store)=>store.user)
  const dispatch = useDispatch()
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

 

  
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const userData = {
            uid: user.uid,
            displayName: user.displayName,
            email: user.email,
            photoURL : user.photoURL
  
          };
  
          // Dispatch the addUser action
          dispatch(addUser(userData));
          navigate("/browse")
        
        }
        else{
          dispatch(removeUser())
          navigate('/')
         
        }
      });
  
      return () => unSubscribe();
    }, []);


    const handelSignOut = () =>{
      signOut(auth)
      .then(()=>{
       navigate("/")
      })
      .catch((error)=>{
        navigate("/error")
      })
    }

    const handleGptSearchClick = () => {
      // Toggle GPT Search
    dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
      dispatch(changeLanguage(e.target.value));
    };

 
  return (
    <div className="flex justify-between px-6 md:px-10 w-screen py-2 absolute bg-gradient-to-b from-black z-10">
      <div>
        <img className="mx-auto md:m-0 w-44 cursor-pointer" src={Netflix}/>
      </div>
      {user && (
        <div className="flex items-center gap-4">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          
          <div
             className="text-white p-2 cursor-pointer"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? homeIconSvg : searchIconSvg}
          </div>
        <img  className="hidden md:inline-block md:cursor-pointer md:h-10 md:w-10"
        src={user?.photoURL} alt="" />
        <button className="bg-[#E50914] text-white p-1 md:p-2 m-2 rounded-lg hover:bg-red-800" onClick={handelSignOut}>Sign Out</button>
      </div>
      )}
    </div>
  )
}
//"https://occ-0-6247-2164.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e"
export default Header
