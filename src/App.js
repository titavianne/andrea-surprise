import { useState, useEffect } from 'react';

function App() {
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);
  const [showMusic, setShowMusic] = useState(false);
  const [showFinal, setShowFinal] = useState(false);
  const [showTwitch, setShowTwitch] = useState(false);
  const [wishText, setWishText] = useState('');
  const [wishSent, setWishSent] = useState(false);
  const targetDate = new Date('2026-06-29T00:00:00');
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setCountdown("HAPPY BIRTHDAY!");
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSignIn = () => {
    if (password === '18 july 2024') {
      setStep(3);
      setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
        setShowWelcome(true);
      }, 7000);
    } else {
      setError('nope, wrong pass bro 🥺');
    }
  };

  const handleWishSubmit = async () => {
    if (wishText.trim() !== '') {
      try {
        await fetch(
          "https://script.google.com/macros/s/AKfycbz4WFD_t1rvOMdmEitA11CnLuIZdDzq-yYXvgiS3kkOkoZU2gYG5Nwqjb6lbESzg43Bgg/exec",
          {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ wish: wishText })
          }
        );
        setWishSent(true);
        setWishText('');
      } catch (error) {
        console.error("Error sending wish:", error);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#ccead6] flex flex-col items-center justify-center p-6 space-y-6 text-base md:text-lg transition-all">
      <div className="bg-white rounded-xl px-5 py-3 shadow-md text-sm font-semibold">
        🍰 secret surprise 💌
      </div>

      {step === 1 && (
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg flex flex-col items-center">
          <img src="/avatar.jpg" alt="avatar" className="w-32 h-32 rounded-full object-cover mb-4 shadow-md" />
          <p className="text-center font-semibold text-2xl mb-4">cake day unlocked 🎂</p>
          <button
            onClick={() => setStep(2)}
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-4 rounded-xl w-full text-lg font-medium transition duration-300"
          >
            tap me gently 🍃
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="bg-white p-10 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg flex flex-col space-y-5">
          <input
            type="text"
            placeholder="Andrea_jump"
            className="border border-green-300 p-5 rounded-xl w-full text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-green-300 p-5 rounded-xl w-full text-lg focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={handleSignIn}
            className="bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl text-lg font-semibold transition duration-300"
          >
            let me in bro 🌱
          </button>
          {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          <p className="text-sm text-gray-400 text-center italic">
            (hint: remember... july 2024?)
          </p>
        </div>
      )}

      {step === 3 && isLoading && (
        <div className="p-8 rounded-2xl shadow-lg w-full max-w-md md:max-w-lg flex flex-col items-center space-y-4 animate-pulse bg-white">
          <p className="text-base text-gray-600 text-center">wait wait... loading smth cute 🎁</p>
          <p className="text-sm text-green-500 text-center italic">also loading my love for u 💚</p>
        </div>
      )}

      {step === 3 && showWelcome && !isLoading && !showMusic && (
        <div className="flex flex-col items-center justify-center text-center min-h-[70vh] space-y-6">
          <h1 className="text-5xl font-extrabold text-green-700 animate-bounce drop-shadow-md">
            YAIY WELCOME!
          </h1>
          <p className="text-base text-gray-500 italic">login success, cutie 💚</p>
          <button
            onClick={() => setShowMusic(true)}
            className="bg-gradient-to-r from-green-400 to-lime-400 text-white px-8 py-4 rounded-full shadow-lg mt-6 hover:scale-105 transition text-lg"
          >
            click me bro 💌
          </button>
        </div>
      )}

      {showMusic && !showFinal && (
        <div className="w-full flex flex-col items-center space-y-6 max-w-3xl">
          <p className="text-center text-xl italic">“too iconic to deleted. All the firsts? got VIP storage.📩✨”</p>
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="bg-white rounded-2xl p-6 shadow w-72 flex flex-col items-center space-y-3">
              <span className="text-3xl">🎵</span>
              <p className="text-center text-base font-medium">raps anyway💀</p>
              <audio controls className="w-full">
                <source src="/voice1.mp3" type="audio/mp3" />
              </audio>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow w-72 flex flex-col items-center space-y-3">
              <span className="text-3xl">🎙️</span>
              <p className="text-center text-base font-medium">soft launch riz detected 🎤</p>
              <audio controls className="w-full">
                <source src="/voice2.mp3" type="audio/mp3" />
              </audio>
            </div>
          </div>
          <button
            onClick={() => setShowFinal(true)}
            className="text-base text-gray-600 italic mt-4 hover:underline"
          >
            keep scrolling, it gets sweeter ➡️
          </button>
        </div>
      )}

      {showFinal && !showTwitch && (
        <div className="text-center space-y-6 mt-10">
          <h2 className="text-4xl md:text-5xl font-bold text-green-500 animate-bounce">countdown's ticking for next bday 🎈</h2>
          <p className="text-gray-800 text-xl font-medium">{countdown}</p>
          <button
            onClick={() => setShowTwitch(true)}
            className="text-base text-green-600 underline mt-4 hover:text-green-800"
          >
            ready for last surprise? 💚
          </button>
        </div>
      )}

      {showTwitch && (
        <div className="text-center mt-10 space-y-5 bg-white p-8 rounded-xl shadow max-w-md md:max-w-lg w-full">
          <p className="text-lg font-semibold text-green-600">it's my lil surprise i give 2 u 💌</p>
          <a
            href="https://drive.google.com/file/d/1Au7wsxe1sIdz-TiFQWFp4C3QV6aK9-hp/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white bg-gradient-to-r from-lime-400 to-green-400 px-8 py-4 rounded-full shadow-md hover:scale-105 transition-transform duration-300 ease-in-out hover:shadow-lg"
          >
            🌺 tap here if u ready 4 hawaii 🌴🍹
          </a>
          <p className="text-base text-gray-500 italic mt-2">(i made this for u. pls click before i cry 🌺💌)</p>
          <div className="mt-6">
            <input
              type="text"
              placeholder="type ur wish pls... 🥺💌"
              value={wishText}
              onChange={(e) => setWishText(e.target.value)}
              className="border border-green-300 p-5 rounded-lg w-full mb-3 text-lg placeholder:text-green-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={handleWishSubmit}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-lg w-full transition duration-300 font-semibold text-lg"
            >
              send ur lil wish 💚
            </button>
            {wishSent && <p className="text-green-600 mt-3 animate-bounce text-base">got it 💋 i’ll save it forever 🍀</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
