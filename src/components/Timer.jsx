/* eslint-disable react/no-unescaped-entities */
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown"
import '../index.css'
import Back from '../assets/bg.png'
import '@leenguyen/react-flip-clock-countdown/dist/index.css'

const Timer = () => {
    return (
        <section className="flex flex-col justify-center items-center h-screen md:w-screen md:h-screen">
            <div className="bg-black/70 absolute w-full h-full"></div>
            <img className="w-full h-full object-cover" src={Back} alt="" />
            <div className="absolute flex flex-col items-center text-center">
                <h1 className="text-[2rem] mb-[1rem]">Launching Soon</h1>
                <h3 className="font-light max-w-[300px] md:max-w-[450px] mb-[3rem]">Leave your email and we'll get across to you once we launch!!!</h3>

                <FlipClockCountdown 
                    to={new Date().getTime() + 24 * 3600 * 1000 + 5000} 
                    labels={['DAYS', 'HOURS', 'MINUTES', 'SECONDS']}
                    duration={0.5} 
                />
            </div>
        </section>
    )
}

export default Timer
