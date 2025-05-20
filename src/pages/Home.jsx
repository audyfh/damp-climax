import { members } from ".."
import { tips } from ".."
import EarthSwiper from "../components/EarthSwiper"
import MemberCard from "../components/MemberCard"
import TipsCard from "../components/TipsCard"
import { useState, useEffect } from "react";

const Home = () => {

  const [funfacts, setFunfacts] = useState([]);
  const [selectedFact, setSelectedFact] = useState(null);

  useEffect(() => {
    fetch("/data/funfacts.json")
      .then((res) => res.json())
      .then((data) => setFunfacts(data))
      .catch((err) => console.error("Failed to fetch funfacts", err));
  }, []);

  const handleShowPopup = () => {
    if (funfacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * funfacts.length);
      setSelectedFact(funfacts[randomIndex]);
    }
  };

  const closePopup = () => setSelectedFact(null);


  return (
   <div className=" bg-white flex flex-col">

     <div className='bg-[url("/hero_bg.png")]  bg-cover bg-center min-h-screen bg-no-repeat flex flex-col justify-center items-center text-white' >
        <div className='flex flex-col justify-center items-center font-bold text-white'>
            <h1 className='text-4xl text-white font-sans text-center'>
                Together, We <span className='text-climax-green'>Protect Our
                <br />Planet</span> for The Future
            </h1>
        </div>
        <p className='sm:font-bold mt-5 text-center'>Discover education, daily facts, and eco-friendly tips with ease</p>
        <a href="#member" className='rounded-3xl font-bold bg-climax-green p-2 mt-4 hover:bg-white hover:text-climax-green'>Get Started</a>
      </div>

      <div id="member" className=" flex flex-col justify-center items-center p-5 ">
          <div className="sm:text-center mt-10">
            <h1 className="font-bold text-3xl">Meet our <br className=" block md:hidden" /> team members</h1>
            <p className="mt-4 text-sm md:text-lg font-light">Meet the changemakers who are dedicated to sharing knowledge and 
              <br className="hidden md:block" /> making a real impact on our environment.
            </p>
          </div>
      </div>

     <div className="w-full overflow-x-auto md:flex justify-center items-center">
        <div className=" flex sm:grid sm:grid-cols-2 gap-5 p-5 min-w-[500px] sm:min-w-0">
          {members.map((member) => (
            <div key={member.id} className="min-w-[250px] flex-shrink-0 sm:w-auto">
              <MemberCard member={member} />
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col justify-center items-center p-5 mt-8">
        <div className=" md:mx-25 flex flex-col justify-start md:justify-center items-center text-start md:text-center">
          <h1 className="font-bold text-climax-green text-3xl">GreenTips: Small Actions, Big Impact</h1>
          <p className="text-sm mt-2">Discover simple yet <strong>powerful ways to help protect our planet.</strong> GreenTips provides easy-to-follow, eco-friendly habits that anyone can adopt to make a lasting difference for the environment. Start small, act now!</p>
        </div>
         <div className="w-full overflow-x-auto md:flex justify-center items-center">
             <div className=" flex sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-5 p-5 min-w-[500px] sm:min-w-0">
              {tips.map((tips) => (
                <div key={tips.id} className="min-w-[250px] flex-shrink-0 sm:w-auto">
                  <TipsCard  tips={tips} />
                </div>
              ))}
          </div>
          </div>
      </div>

      <div>
        <EarthSwiper/>
      </div>

         <div className="flex flex-col md:flex-row justify-evenly items-center p-5 mt-8">
        <img src="/images/earthfact.png" alt="" className="w-60 h-auto" />
        <div className="flex flex-col gap-y-4 text-center">
            <h1 className="text-2xl italic">
              <span className="text-climax-green font-bold not-italic">Earthfact</span>
              <br className="md:hidden" />
              <span className="hidden md:inline not-italic">:</span> a collection of daily<br />facts about earth
            </h1>
            <button
              onClick={handleShowPopup}
              className="bg-white font-semibold text-climax-green border border-climax-green rounded-4xl p-3 w-fit hover:bg-climax-green hover:text-white"
            >
              Learn something new
            </button>
        </div>
      </div>

      {/* Popup */}
      {selectedFact && (
        <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-center px-4">
          <div className="bg-[#15803d] rounded-xl p-6 text-white w-full max-w-lg relative shadow-lg">
            <button onClick={closePopup} className="absolute top-3 right-3 text-white text-xl font-bold hover:text-gray-300">×</button>
            <div className="flex flex-col items-start gap-4">
              <img src={selectedFact.icon} alt="icon" className="w-12 h-12 bg-white rounded-2xl p-1" />
              <div>
                <p className="font-semibold">{selectedFact.text}</p>
                <a href={selectedFact.link} className="mt-2 inline-block text-sm underline hover:text-gray-200">Learn More</a>
              </div>
            </div>
          </div>
        </div>
      )}

   </div>
  )
}

export default Home