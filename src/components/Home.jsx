import { Link } from 'react-router-dom'
import {FaDiscord, FaInstagram} from "react-icons/fa";
import Button from "./Button";
import {SiGmail} from "react-icons/si";

const Home = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col-reverse gap-5 lg:flex-row justify-evenly items-center">
      <div className="left w-1/2">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-8xl lg:text-left text-center ">
          We make <br /> games <br /> when we <br /> get bored.
        </h1>
        <div className="buttons flex flex-col gap-2 max-w-[250px] mt-20">
          <Link to="our-games"><Button>Our Games</Button></Link>
          <Link to="the-team"><Button>The Team</Button></Link>
        </div>
      </div>
      <div className="right flex flex-col justify-center items-center gap-5">   
        <div className="logo">
          <img src="https://i.ibb.co/x10MgXn/Baslksz100-20240609004641-1.png" alt="" className="w-[200px] sm:w-[250px] lg:w-[400px] xl:w-[500px]" />
        </div>
        <div className="socials flex gap-2 text-5xl">
          <a href="https://discord.gg/PqwpYjcUu9" target='_blank'><FaDiscord className="text-white cursor-pointer" /></a>
        </div>
      </div>
    </div>
  );
};

export default Home;
