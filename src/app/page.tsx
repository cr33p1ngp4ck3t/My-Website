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
                    <div className="card__alert">Project: </div>
                </div>
                <div className="card__message">
                    This is Project which Contains the Information about 
                </div>
                <div className="card__actions">
                    <Link className="card__button card__button--mark" href="">Coming Soon</Link>
                </div>
                </div>
            </div>
            <div>
                <div className="card">
                <div className="card__header">
                    <div className="card__alert">Project: </div>
                </div>
                <div className="card__message">
                    This is Project which Contains the Information about 
                </div>
                <div className="card__actions">
                    <Link className="card__button card__button--mark" href="./">Coming Soon</Link>
                </div>
                </div>
            </div>
        </section>

        </>
    )
}