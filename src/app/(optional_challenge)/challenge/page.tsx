import '../../styles/style.css'
export default function ChallengePage(){
    return(
        <>
            <section className="card__section">
                <div>
                    <div className="card">
                    <div className="card__header">
                        <div className="card__alert">Project: Timer</div>
                    </div>
                    <div className="card__message">
                        Timer App Project.
                    </div>
                    <div className="card__actions">
                        <a className="card__button" href="./challenge/timer">Visit</a>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                    <div className="card__header">
                        <div className="card__alert">Project: </div>
                    </div>
                    <div className="card__message">
                        Timer App Project.
                    </div>
                    <div className="card__actions">
                        <a className="card__button" href="./">Coming Soon</a>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="card">
                    <div className="card__header">
                        <div className="card__alert">Project: </div>
                    </div>
                    <div className="card__message">
                        Timer App Project.
                    </div>
                    <div className="card__actions">
                        <a className="card__button" href="./">Coming Soon</a>
                    </div>
                    </div>
                </div>
            </section>
        </>
    )
}