import Link from 'next/link'

export default function Homepage(){
    return (
        <>
            <h1>Welcome to my website</h1>
        <section>
            <p className="card__message line-break">Here, I'll be posting all the projects I complete. It's my all-in-one project collection website</p>
            <br />
        </section>
        <section className="card__section">
            <div>
                <div className="card">
                <div className="card__header">
                    <div className="card__alert">Project: Countries</div>
                </div>
                <div className="card__message">
                    This is Project which Contains the Information about Countries
                </div>
                <div className="card__actions">
                    <Link className="card__button card__button--mark" href="./countries">Visit</Link>
                </div>
                </div>
            </div>
            <div>
                <div className="card">
                <div className="card__header">
                    <div className="card__alert">Project: 30 Days Challenge </div>
                </div>
                <div className="card__message">
                    This is Project which Contains the Information about 30 Days Challenge
                </div>
                <div className="card__actions">
                    <Link className="card__button card__button--mark" href="./challenge">Visit</Link>
                </div>
                </div>
            </div>
            <div>
                <div className="card">
                <div className="card__header">
                    <div className="card__alert">Project: Resume Builder</div>
                </div>
                <div className="card__message">
                    A Resume Builder Website that dynamically builds a simple resume (I didnt had much time to improve it)
                </div>
                <div className="card__actions">
                    <Link className="card__button card__button--mark" href="https://cpp-resume-builder.vercel.app/" target='_blank'>Visit</Link>
                </div>
                </div>
            </div>
            <div>
                <div className="card">
                <div className="card__header">
                    <div className="card__alert">Project: Figma Template</div>
                </div>
                <div className="card__message">
                    This is a Project in which I created Template of Figma
                </div>
                <div className="card__actions">
                    <Link className="card__button card__button--mark" href="https://cpp-figma-template.vercel.app" target='_blank'>Visit</Link>
                </div>
                </div>
            </div>
        </section>

        </>
    )
}