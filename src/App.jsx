import  { useState, useEffect } from "react";

const App = () => {
  const [timeLeft, setTimeLeft] = useState("");

  useEffect(() => {
    const countdown = setInterval(() => {
      const now = new Date();
      const newYear = new Date(now.getFullYear() + 1, 0, 1, 0, 0, 0);
      const difference = newYear - now;

      if (difference <= 0) {
        clearInterval(countdown);
        setTimeLeft("Happy New Year!");
      } else {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        setTimeLeft(`${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500 text-white flex flex-col items-center justify-center overflow-hidden">
      {/* Countdown Timer */}
      <div className="text-4xl md:text-6xl font-bold">{timeLeft}</div>
      {timeLeft === "Happy New Year!" && (
        <h1 className="mt-6 text-5xl font-extrabold animate-bounce">
          🎉 Happy New Year! 🎉
        </h1>
      )}

      {/* Falling Balloons/Flowers */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="w-6 h-6 bg-white rounded-full animate-float"
            style={{
              animationDuration: `${Math.random() * 5 + 3}s`,
              animationDelay: `${Math.random() * 2}s`,
              position: "absolute",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default App;
