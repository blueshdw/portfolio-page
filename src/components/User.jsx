import { CiMail } from "react-icons/ci";
import { FaDiscord, FaGithub, FaInstagram, FaItchIo } from "react-icons/fa";

const User = ({user}) => {
  // console.log(user.contact.itch);
  return (
    <div className="flex justify-center">
      <div className="user flex items-center justify-center max-w-[1400px]">
        <div className="left w-1/2 flex flex-col items-center">
          <h1 className="name text-3xl text-[#9340FF]">{user.name}</h1>
          <span className="job text-white mt-2">{user.job}</span>
          <p className="exp text-white mt-5 text-2xl">{user.explanation}</p>
        </div>
        <div className="right">
          <div className="profile">
            <img src={user.profile} alt="" className="rounded-3xl" />
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
