/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react"
import "@/app/styles/opt.css"
import "@/app/styles/style.css"
import HeroSection from "../../../components/ux/headline"
import Link from "next/link"
import { copyToClipboard } from "../../../components/ux/copy"

const skills = ['HTML and CSS', 'JavaScript', "TypeScript", "Next.js", "React", "Node.js"]

export default function About(){

    const message:string = "In my professional journey, I've developed a strong skill set in web development, with expertise in HTML, CSS, and JavaScript, along with advanced proficiency in React.js, Next.js, Node.js, and TypeScript. I specialize in creating simple yet compelling websites with clean design and intuitive interfaces. My project management experience includes successfully leading projects to completion. These skills reflect my dedication to delivering quality results and innovative solutions."
    const message1:string = ("Hello everyone! I'm quite interested in how business and technology are related. At the moment, my focus is on SEO, where I raise internet exposure and organic traffic. Among the many programming languages in which I developed my technical skills are HTML, JavaScript, TypeScript, C, C++, Python, Next.js, and Node.js. I enjoy coding challenges, whether they include controlling page layouts, adding interaction, structuring online content, or investigating system programming. Outside of work, I've completed a number of web development courses to broaden my skills.")
    return(
        <div>
            {/* Somewhat Hero page */}
            <div className="profile-image">
                <div>
                    <div>
                        <div className="card__alert"><h1>Hi! I am Anas Khan</h1></div>   
                    </div>
                    <div><HeroSection /></div>
                </div>
                <div >
                    <img alt="Picture" src="https://i.pinimg.com/originals/57/00/c0/5700c04197ee9a4372a35ef16eb78f4e.png" className="image-style"/>
                </div>
                
            </div>
            <div >
                <div className="card__alert heading-to-center">About Me</div>
                <div className="card__message">{message1}</div>
                <div className="line-break"></div>
                <div className="card__alert heading-to-center">My Skills</div>
                <div className="skill-section">
                    <ul className="skills">
                        {skills.map((names, index)=> (
                            <li key={index} className="list-style"><button className="card__button-custom">{names}</button></li>
                        ))}
                    </ul>
                    <div className="card__message message">{message}</div>
                </div>
            </div>
            <div className="line-break"></div>
            {/* Card Section */}
            <section className="card__section">
            <div>
                    <div className="card">
                    <div className="card__header">
                        <div className="card__alert">Assignment: Number Guessing Game</div>
                    </div>
                    <div className="card__message">
                        A number guessing game, you are given 5 tries from which u should determine the correct number. The number of tries and the correct number are printed.
                    </div>
                    <div className="card__actions">
                        <Link href="#" onClick={()=>copyToClipboard("npx cp-number-guessing-game")} className="card__button ">Copy NPX Command</Link>
                        <Link href="https://github.com/cr33p1ngp4ck3t/Number-Guessing-Game"  className="card__button " target="_blank">Visit Git repo</Link>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                    <div className="card__header">
                        <div className="card__alert">Assignment: ATM Machine</div>
                    </div>
                    <div className="card__message">
                        ATM Machine that can Withdraw and check balance (initial balance: 10,000)
                    </div>
                    <div className="card__actions">
                        <Link href="#" onClick={()=>copyToClipboard("npx cp-atm")} className="card__button ">Copy NPX Command</Link>
                        <Link href="https://github.com/cr33p1ngp4ck3t/ATM-Machine"  className="card__button " target="_blank">Visit Git repo</Link>
                    </div>
                    </div>
                </div>
                
                <div>
                    <div className="card">
                    <div className="card__header">
                        <div className="card__alert">Assignment: UMS (Underdeveloped)</div>
                    </div>
                    <div className="card__message">
                        A University Management System that have 2 options, adding students or Instructor, it askes them questions regarding what they chose. I will be sure to add more features on this later.
                    </div>
                    <div className="card__actions">
                        <Link href="#" onClick={()=>copyToClipboard("npx cp-ums")} className="card__button ">Copy NPX Command</Link>
                        <Link href="https://github.com/cr33p1ngp4ck3t/Number-Guessing-Game"  className="card__button " target="_blank">Visit Git repo</Link>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                    <div className="card__header">
                        <div className="card__alert">Assignment: Simple Calculator</div>
                    </div>
                    <div className="card__message">
                        Simple CLI calculator that can perform basic Arithmetic operations
                    </div>
                    <div className="card__actions">
                        <Link href="#" onClick={()=>copyToClipboard("npx cp-simple-calculator")} className="card__button ">Copy NPX Command</Link>
                        <Link href="https://github.com/cr33p1ngp4ck3t/Simple-Calculator"  className="card__button " target="_blank">Visit Git repo</Link>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}