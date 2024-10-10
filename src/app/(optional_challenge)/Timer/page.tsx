"use client"; 
import '../../styles/style.css'
import { useState, useRef, useEffect, ChangeEvent } from "react"; 
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; 

export default function Timer(){
    const [duration, setDuration] = useState<number | string>("");
    const [timeLeft, setTimeLeft] = useState<number>(0);
    const [isActive, setIsActive] = useState<boolean>(false);
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const handleSetDuration = (): void => {
        if (typeof duration === "number" && duration > 0) {
          setTimeLeft(duration);
          setIsActive(false);
          setIsPaused(false);
          if (timerRef.current) {
            clearInterval(timerRef.current);
            }
        }
        
    }
    const timerStart = (): void => {
        if (timeLeft > 0) {
          setIsActive(true);
          setIsPaused(false);
        }
      }
    const timerPause = ():void => {
        if(isActive){
            setIsPaused(true)
            setIsActive(false)
        }
    }
    const timerReset = ():void => {
        setIsActive(false)
        setIsPaused(false)
    }
    useEffect(()=>{
        if(isActive && isPaused!){
            timerRef.current = setInterval(() => {
                setTimeLeft((prevtime)=>{
                    if(prevtime<=1){
                        clearInterval(timerRef.current!)
                        return 0
                    }
                    return prevtime - 1
                })
            }, 1000);
        }
        return () => {
            if(timerRef.current){
                clearInterval(timerRef.current)
            }
        }
    }, [isActive, isPaused]
)
    const formatTime = (time: number): string => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    };
    const handleDurationChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setDuration(Number(e.target.value) || "");
      };
    return(
        <>
        <div>&lt; <a href="/">back</a></div>
            <div className="card__section">
                <div className='card' >
                    <div className='card__alert card__header' style={{justifyContent:"center"}}>
                        Timer
                    </div>
                    <div>
                        <Input type="number" placeholder='Enter duration in seconds' className='' id="duration" value={duration} onChange={handleDurationChange} />
                        <button onClick={handleSetDuration} className='button-style'>Set</button>
                    </div>
                    <div>
                    {formatTime(timeLeft)}
                    </div>
                    <div style={{display:'flex', justifyContent:"center"}}>
                        <div>
                            <Button className='button-style' onClick={timerStart} variant="outline">{isPaused ? "Resume" : "Start"}</Button>
                            <Button className='button-style' onClick={timerPause} variant="outline">Pause</Button>
                            <Button className='button-style' onClick={timerReset} variant="outline">Reset</Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}