import { CiMail } from "react-icons/ci";
import { FaDiscord, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";

const User = ({user}) => {
  // console.log(user.contact.itch);
  return (
    <div className="flex justify-center">
      <div className="user flex flex-col lg:flex-row items-center justify-center gap-5 max-w-[1400px] text-2xl">
        <div className="left w-1/2 flex flex-col items-center gap-2">
          <h1 className="name text-2x lg:text-3xl text-[#9340FF] text-center lg:text-left">{user.name}</h1>
          <span className="job text-white mt-2 text-center lg:text-left">{user.job}</span>
          <p className="exp text-white text-center lg:text-left mt-5 text-xl lg:text-2xl mr-5">{user.explanation}</p>
        </div>
        <div className="right">
          <div className="profile">
            <img src={user.profile} alt="" className="rounded-3xl w-[400px] px-5" />
          </div>
          <div className="socials mt-5 text-5xl flex justify-center gap-2">
          {user.contact && <a href={user.contact.itch} target="_blank" rel="noopener noreferrer"><FaItchIo className="text-white cursor-pointer" /></a>}
            {user.contact && <a href={user.contact.github} target="_blank"><FaGithub className="text-white cursor-pointer" /></a>}
            {user.contact && <a href={user.contact.instagram} target="_blank"><FaInstagram className="text-white cursor-pointer" /></a>}
            {user.contact && <a href={"mailto:" + user.contact.mail}><CiMail className="text-white cursor-pointer" /></a>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
