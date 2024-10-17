import "@/app/styles/opt.css"
import "@/app/styles/style.css"
import Image from 'next/image'

export default function About(){
    return(
        <div>
            <div className="profile-image">
                <div>
                    <div className="card__alert"><h1>Hi! I am Anas Khan</h1></div>
                </div>
                <div >
                    <Image alt="Picture" src="" className="image-style"/>
                </div>
                
            </div>
            <div>
                <div className="card__alert">About Me</div>
                <div className="card__message">Hello everyone! I'm quite interested in how business and technology are related. At the moment, my focus is on SEO, where I raise internet exposure and organic traffic. Among the many programming languages in which I developed my technical skills are HTML, JavaScript, TypeScript, C, C++, Python, Next.js, and Node.js.

I enjoy coding challenges, whether they include controlling page layouts, adding interaction, structuring online content, or investigating system programming. Outside of work, I've completed a number of web development courses to broaden my skills.</div>
            </div>
        </div>
    )
}