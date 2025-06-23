import React, { useState, useEffect } from 'react';
import './Home.css';

function Home() {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');
  const [voices, setVoices] = useState([]);

  // Load voices
  useEffect(() => {
    const synth = window.speechSynthesis;
    const loadVoices = () => {
      const availableVoices = synth.getVoices();
      if (availableVoices.length > 0) {
        setVoices(availableVoices);
      } else {
        setTimeout(loadVoices, 100);
      }
    };
    loadVoices();
  }, []);

  // Speak function
  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'en-US';
    const voice = voices.find(v => v.lang === 'en-US') || voices[0];
    if (voice) utter.voice = voice;
    synth.speak(utter);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const question = query.toLowerCase();

    // ✅ Predefined responses
    if (question.includes("hello") || question.includes("hi")) {
    return handleReply("Hello! How can I help you today?");
    }

    if (question.includes("your name")) {
      return handleReply("My name is Shifra, your AI assistant ");
    }

    if (question.includes("how are you")) {
      return handleReply("I'm just a bunch of code, but I'm doing great! ");
    }

    if (question.includes("open youtube")) {
      const reply = "Opening YouTube...";
      window.open("https://www.youtube.com", "_blank");
      return handleReply(reply);
    }

    if (question.includes("current time")) {
      const time = new Date().toLocaleTimeString();
      return handleReply(`The current time is ${time}`);
    }

    
  if (question.includes("open google")) {
    const reply = "Opening Google...";
    window.open("https://www.google.com", "_blank");
    speak(reply);
    setResponse(reply);
    return;
  }

  

  if (question.includes("who created you")) {
    const reply = "I was created by ANJALI using React and JavaScript.";
    speak(reply);
    setResponse(reply);
    return;
  }

  if (question.includes("your purpose")) {
    const reply = "My purpose is to help you with tasks and answer questions.";
    speak(reply);
    setResponse(reply);
    return;
  }

    const handleSubmit = async (e) => {
  e.preventDefault();
  const question = query.toLowerCase().trim();

  


  // ✅ Handle basic math expressions
  try {
    // Remove any unwanted words to isolate the math part
    const cleaned = question.replace(/what is|calculate|equals|please|/gi, '').trim();
    const mathRegex = /^[0-9+\-*/().\s]+$/;

    if (mathRegex.test(cleaned)) {
      // Safe math evaluation
      const answer = eval(cleaned);
      const reply = `The answer is ${answer}`;
      speak(reply);
      setResponse(reply);
      return;
    }
  } catch (error) {
    const reply = "Sorry, I couldn't calculate that.";
    speak(reply);
    setResponse(reply);
    return;
  }

  // If not predefined, try Gemini (if working)
  const reply = await fetchReplyGemini(query);
  speak(reply);
  setResponse(reply);
};


    // ✅ Math questions
    if (question.includes("2 + 2")) {
      return handleReply("2 plus 2 is 4.");
    }

    if (question.includes("square root of 16")) {
      return handleReply("The square root of 16 is 4.");
    }

    if (question.includes("10 * 5")) {
      return handleReply("10 multiplied by 5 is 50.");
    }

    if (question.includes("100 divided by 4")) {
      return handleReply("100 divided by 4 is 25.");
    }

    // ✅ Bollywood questions
    if (question.includes("shah rukh khan")) {
      return handleReply("Shah Rukh Khan is a legendary Bollywood actor known as the King of Romance.");
    }

    if (question.includes("best bollywood movie")) {
      return handleReply("One of the best Bollywood movies is '3 Idiots'.");
    }

    if (question.includes("amitabh bachchan")) {
      return handleReply("Amitabh Bachchan is a legendary Indian actor known as the 'Shahenshah' of Bollywood.");
    }

    if (question.includes("bollywood actress")) {
      return handleReply("Some popular Bollywood actresses are Deepika Padukone, Alia Bhatt, and Priyanka Chopra.");
    }
    if (question.includes("who is your favorite actor")) {
      const reply = "I love Shah Rukh Khan — King of Bollywood! ";
      speak(reply);
      setResponse(reply);
  return;
}

if (question.includes("who is your favorite actress")) {
  const reply = "Deepika Padukone is amazing — talented and graceful! ";
  speak(reply);
  setResponse(reply);
  return;
}

if (question.includes("play bollywood song")) {
  const reply = "Playing a Bollywood hit song on YouTube! ";
  window.open("https://www.youtube.com/results?search_query=bollywood+hits", "_blank");
  speak(reply);
  setResponse(reply);
  return;
}

if (question.includes("recommend a bollywood movie")) {
  const reply = "You should watch '3 Idiots' ";
  speak(reply);
  setResponse(reply);
  return;
}

if (question.includes("tell a bollywood dialogue")) {
  const reply = "Bade bade deshon mein aisi choti choti baatein hoti rehti hain, Senorita! ";
  speak(reply);
  setResponse(reply);
  return;
}


    // ❌ Default Gemini fallback (won't work until backend proxy is ready)
    const reply = await fetchReplyGemini(query);
    handleReply(reply);
  };

  const handleReply = (text) => {
    speak(text);
    setResponse(text);
  };

  // Gemini 1.5 API (disabled due to CORS issues)
  const fetchReplyGemini = async (prompt) => {
    try {
      const res = await fetch(
        'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=AIzaSyAliGLAaVe6u-RuO22TaqwtEChxWHj3lAk',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents: [{ role: 'user', parts: [{ text: prompt }] }]
          })
        }
      );
      const data = await res.json();
      console.log('Gemini 1.5 Response:', data);
      return data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response.';
    } catch (error) {
      console.error('Gemini Error:', error);
      return 'Error talking to Gemini.';
    }
  };

  return (
    <div className="home-container">
      <img src="/ai.png" alt="AI Avatar" className="ai-avatar" />
      <h1>
        <span className="blue-pink-text">I'm Shifra, Your Virtual Assistant</span>
      </h1>

      <form onSubmit={handleSubmit} className="input-box">
        <input
          type="text"
          placeholder="Ask me anything..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Ask</button>
      </form>

      {response && (
        <div className="response-box">
          <strong className="blue-pink-text">Shifra:</strong> {response}
        </div>
      )}
    </div>
  );
}

export default Home;
