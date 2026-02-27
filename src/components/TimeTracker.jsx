import { useState, useEffect } from 'react';

const TimeTracker = () => {
  const [time, setTime] = useState({ hours: 1, minutes: 24, seconds: 8 });
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => {
          let { hours, minutes, seconds } = prev;
          seconds++;
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
          if (minutes === 60) {
            minutes = 0;
            hours++;
          }
          return { hours, minutes, seconds };
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (num) => String(num).padStart(2, '0');

  return (
    <div className="lg:col-span-1 bg-primary p-6 rounded-2xl text-white relative overflow-hidden flex flex-col justify-between">
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="white" strokeWidth="0.5" />
          <path d="M0,70 Q25,20 50,70 T100,70" fill="none" stroke="white" strokeWidth="0.5" />
        </svg>
      </div>
      <h3 className="font-bold text-lg relative z-10">Time Tracker</h3>
      <div className="relative z-10 text-center py-4">
        <p className="text-5xl font-bold tabular-nums tracking-wider">
          {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
        </p>
      </div>
      <div className="flex items-center justify-center gap-4 relative z-10">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-opacity-90 transition-all"
        >
          <span className="material-symbols-outlined text-2xl filled-icon">
            {isRunning ? 'pause' : 'play_arrow'}
          </span>
        </button>
        <button
          onClick={() => {
            setIsRunning(false);
            setTime({ hours: 0, minutes: 0, seconds: 0 });
          }}
          className="w-12 h-12 rounded-full bg-red-500 text-white flex items-center justify-center hover:bg-opacity-90 transition-all"
        >
          <span className="material-symbols-outlined text-2xl filled-icon">stop</span>
        </button>
      </div>
    </div>
  );
};

export default TimeTracker;
