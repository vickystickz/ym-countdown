import React, { useState, useEffect } from "react";
import Image from "next/image";
import ymLogo from "../assets/logo.png";
import fullYmLogo from "../assets/YM.png";
import ymFutaLogo from "../assets/ym_futa.png";
import FutaLogo from "../assets/futa_logo.png";

function CountdownTimer() {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [title, setTitle] = useState("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    const totalSeconds = hours * 3600 + minutes * 60 + seconds;

    if (isRunning && totalSeconds > 0) {
      intervalId = setInterval(() => {
        const newTotalSeconds = totalSeconds - 1;
        setHours(Math.floor(newTotalSeconds / 3600));
        setMinutes(Math.floor((newTotalSeconds % 3600) / 60));
        setSeconds(newTotalSeconds % 60);
      }, 1000);
    } else if (totalSeconds === 0) {
      setIsRunning(false);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isRunning, hours, minutes, seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setHours(0);
    setMinutes(0);
    setSeconds(0);
    setIsRunning(false);
    setTitle("");
  };

  return (
    <div className="h-screen grid grid-rows-12 space-y-12">
      <div className="flex col-span-1">
        <div className="flex w-[350px] flex-col gap-4 ">
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={hours}
              className="text-black border-2 border-black p-1 rounded-md w-[6em]"
              onChange={(e) => setHours(parseInt(e.target.value))}
            />
            <span>Hours</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={minutes}
              className="text-black border-2 border-black p-1 rounded-md w-[6em]"
              border-2
              border-black
              onChange={(e) => setMinutes(parseInt(e.target.value))}
            />
            <span>Minutes</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={seconds}
              className="text-black border-2 border-black p-1 rounded-md w-[6em]"
              onChange={(e) => setSeconds(parseInt(e.target.value))}
            />
            <span>Seconds</span>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={title}
              className="text-black border-2 border-black p-1 rounded-md w-[6em]"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span>Session</span>
          </div>
          <button
            onClick={startTimer}
            className="border-black max-w-[100px] font-medium  border-2 rounded-md p-2"
          >
            Start
          </button>
          <button
            onClick={resetTimer}
            className="border-black max-w-[100px] font-medium  border-2 rounded-md p-2"
          >
            Reset
          </button>
        </div>
        <div className="flex flex-col w-[65%] gap-6 items-center mt-2">
          <Image
            src={fullYmLogo}
            alt="YouthMappers logo"
            width={600}
            height={600}
          />

          <i className="text-3xl font-medium">
            YouthMappers Open Mapping For Heat and Health Workshop
          </i>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-6 justify-center col-span-10">
        <div className="mt-8 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <span className="text-xl font-medium">Session:</span>
            <h3 className="text-4xl font-semibold">{title}</h3>
          </div>

          <div className="flex gap-4 items-center text-5xl">
            <h3 className="text-[5em] font-semibold">
              {String(hours).padStart(2, "0")}
            </h3>
            <span>:</span>
            <h3 className="text-[5em] font-semibold">
              {" "}
              {String(minutes).padStart(2, "0")}
            </h3>
            <span>:</span>
            <h3 className="text-[5em] font-semibold">
              {String(seconds).padStart(2, "0")}
            </h3>
          </div>
        </div>
      </div>
      <div className="col-span-1 grid grid-cols-12 w-[100vw] justify-end">
        <div className="col-span-4 flex items-center justify-start pl-6">
          <div>
            <Image
              src={FutaLogo}
              alt="Futa logo"
              width={120}
              height={120}
            />
          </div>
        </div>
        <div className="col-span-4 flex  items-center justify-center">
          <i className="text-lg font-medium">Hosted By: </i>
          <Image
            src={ymFutaLogo}
            alt="YouthMappers logo"
            width={300}
            height={300}
          />
        </div>
        <div className="col-span-4  w-full flex justify-end">
          <div>
            <Image
              src={ymLogo}
              alt="YouthMappers logo"
              width={200}
              height={200}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;
