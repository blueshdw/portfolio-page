import { useState } from "react"
import teamData from "../TeamData"
import User from "./User"

const TheTeam = () => {
  return (
    <div className="pt-5 pb-5 min-h-[100vh]">
        <h1 className="text-[#9340FF] text-3xl flex justify-center mb-10">The Team</h1>
        <div className="team flex flex-col gap-20">
          {teamData.map((user) => {
            return <User key={user.id} user={user}/>
          })}
        </div>
    </div>
  )
}

export default TheTeam