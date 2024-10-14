"use client"; 
import '../../../styles/style.css'
import Countdown from "../../../../../components/ui/Countdown"

export default function Timer(){
    
    return(
        <>
            <div className="card__section">
                <div className='card' >
                    <div className='card__alert card__header' >
                        Timer
                    </div>
                    <div>
                        <Countdown/>
                    </div>
                </div>
            </div>
        </>
    )
}