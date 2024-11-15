import React, { useState } from "react";
import "../styleSheets/chatbotai.css";
import { FaRegMessage, FaX } from "react-icons/fa6";

const Newbotai = () => {
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");

  const responses = {
    hello: "Hi there! How can I assist you today?",
  hi: "Hi there! How can I assist you today?",
  "what careers are in demand":
    "Currently, careers in tech, healthcare, data science, and renewable energy are in high demand. Let me know if you'd like specific career insights!",
  "how do I choose a career path":
    "Start by considering your interests, skills, and values. Our Career Explorer tool can guide you through this process step-by-step!",
  "need a career roadmap":
    "I’d be happy to help! With our Pathway Planner, you’ll get a personalized career roadmap designed just for you!",
  "what skills are needed for data science":
    "Data science requires skills in programming, statistics, and machine learning. Our Learning Hub offers resources to get you started!",
  "can you suggest free resources for coding":
    "Absolutely! I recommend YouTube tutorials, websites like Codecademy, and free books on GitHub to start coding.",
  "how to build a portfolio":
    "Our Portfolio Creator can help! You can upload your projects, certifications, and experiences to build a professional profile.",
  "any job openings in AI":
    "Yes! Our Opportunity Finder is regularly updated with AI job postings. Let's set up alerts based on your preferences.",
  "best books for career growth":
    "Books like 'Atomic Habits' by James Clear and 'Grit' by Angela Duckworth are excellent for career growth and mindset.",
  "how to switch careers":
    "Switching careers starts with identifying transferable skills and upskilling in your new field. Let's create a roadmap for you!",
  "how to connect with industry experts":
    "Networking platforms like LinkedIn are great, and I can also suggest online events in your field!",
  "can I work remotely":
    "Many careers now offer remote options, especially in tech, writing, and design. Let's explore remote-friendly career paths for you!",
  "suggest career options for creatives":
    "Careers in digital design, animation, and UX/UI are popular among creatives. Let’s explore your interests further!",
  "how to prepare for tech interviews":
    "Start with data structures and algorithms. Coding platforms like LeetCode are great for practice.",
  "any online certifications for marketing":
    "Yes! Websites like Coursera and HubSpot offer marketing certifications. I can help you choose one based on your level.",
  "how do I create a strong resume":
    "Focus on skills, achievements, and relevant experience. Our Portfolio Creator can generate a resume layout for you.",
  "tips for professional networking":
    "Engage on LinkedIn, attend webinars, and join industry-specific groups. Consistency is key to building connections!",
  "what industries are future-proof":
    "Tech, renewable energy, and healthcare have strong long-term prospects. Let’s explore careers within these sectors.",
  "how do I improve soft skills":
    "Soft skills improve with practice. Try online resources on communication, teamwork, and adaptability.",
  "is freelancing a good option":
    "Freelancing offers flexibility but can be unpredictable. It’s ideal for certain fields like writing, design, and consulting.",
  "how to find internships":
    "Our Opportunity Finder can match you with internships! LinkedIn and Glassdoor also list many internship opportunities.",
  "best free courses for beginners":
    "I recommend platforms like Khan Academy, Coursera (free versions), and YouTube channels like FreeCodeCamp.",
  "any tips for career growth":
    "Continual learning, networking, and seeking mentorship are crucial for career growth.",
  "how to learn coding from scratch":
    "Start with HTML, CSS, and JavaScript basics on YouTube. Then, practice on coding platforms like HackerRank!",
  "how to choose an online course":
    "Consider your learning style, course reviews, and content depth. I can suggest specific courses if you’d like!",
  "can I get career guidance":
    "Yes, of course! Our Career Explorer is designed to provide guidance based on your unique profile.",
  "are there jobs for humanities majors":
    "Absolutely! Fields like content writing, HR, and market research value skills from humanities backgrounds.",
  "how to gain work experience":
    "Consider internships, volunteering, or freelancing to build experience while you study.",
  "what is the future of AI":
    "AI is expected to grow across industries. It's a great field for those interested in tech and innovation.",
  "where can I learn design for free":
    "Platforms like Canva and Figma offer free resources for beginners. YouTube also has great tutorials.",
  "can you recommend networking events":
    "Yes! Our Opportunity Finder can suggest online events and meetups in your industry.",
  "how to make a career in renewable energy":
    "Renewable energy careers are diverse. I recommend courses in environmental science and energy technology.",
  "how do I start in data analytics":
    "Begin with Excel, then move to SQL and Python. Online platforms offer free tutorials in these skills.",
  "what are transferrable skills":
    "Skills like communication, problem-solving, and project management apply across many fields!",
  "how can I improve public speaking":
    "Try joining groups like Toastmasters, or practice by recording yourself speaking. Consistent practice builds confidence!",
  "how to negotiate salary":
    "Research market rates, highlight your skills, and practice your pitch. Confidence is key!",
  "do certifications help in job search":
    "Yes, certifications can add value, especially in tech, management, and specialized fields.",
  "how to network as an introvert":
    "Start with online networking, build connections through mutual interests, and engage with posts to build visibility.",
  "can I work while studying":
    "Yes, many students take part-time or internship roles that align with their studies.",
  "any free resources for finance careers":
    "Check out Investopedia, Khan Academy, and LinkedIn Learning for basics in finance!",
  "how to get noticed on LinkedIn":
    "Optimize your profile, add relevant keywords, and engage with content in your industry.",
  "suggest a career in healthcare":
    "Healthcare offers options beyond traditional roles, like health informatics or medical writing. Let’s explore together!",
  "is project management a good career":
    "Yes! Project management is in demand across many industries, and certification helps a lot.",
  "where to learn AI basics":
    "YouTube and Coursera have beginner-friendly courses in AI and machine learning.",
  "do I need a portfolio":
    "A portfolio is valuable for creative and tech fields. Our Portfolio Creator can help build yours effortlessly!",
  "what is UX design":
    "UX design focuses on user experience in digital products. It's ideal for those who enjoy problem-solving and design!",
  "tips for building online presence":
    "Consistency, quality content, and engagement are key. Platforms like LinkedIn or a personal website work well.",
  "can I learn coding on YouTube":
    "Yes! Channels like FreeCodeCamp and The Net Ninja are great for learning coding for free.",
  // Additional abstraction-focused responses
  "what makes this platform unique":
    "Our platform offers a fully personalized career journey with tailored guidance, resources, and real-time opportunities in one place.",
  "how can you help with career changes":
    "We specialize in providing end-to-end support for career transitions, from skill assessments to portfolio building and new job searches.",
  "why should I use this platform":
    "Our platform connects you to the resources, tools, and guidance needed to simplify every step of your career journey—no matter your goals!",
  "how does career matching work here":
    "We assess your skills, interests, and values to recommend ideal career paths backed by job outlook data and industry insights.",
  "how will this platform support my career growth":
    "Our platform provides you with structured learning pathways, progress tracking, and relevant job alerts to keep your career momentum going.",
  // General catch-all responses for engagement
  default:
    "I'm here to help! Let me know if you need expert guidance or advice on finding resources. ",
  expert:
    "We're connecting you to an expert right away. Get ready to gain some valuable insights!",
  no: "No worries! Feel free to ask questions anytime, and I'll be here to help.",

  };

  const toggleChatbot = () => {
    setIsChatVisible(!isChatVisible);
  };

  const sendMessage = () => {
    if (userInput.trim() !== "") {
      setMessages([...messages, { sender: "user", text: userInput }]);
      respondToUser(userInput);
      setUserInput("");
    }
  };
  const mostProbableMatch = (userInput) => {
    const wordsArray = userInput.toLowerCase().split(" ");
    let maxMatch = { key: "default", points: 0 };
  
    for (let key in responses) {
      const keyWords = key.toLowerCase().split(" ");
      let points = 0;
  
      keyWords.forEach((word) => {
        if (wordsArray.includes(word)) {
          points++;
        }
      });
  
      if (points > maxMatch.points) {
        maxMatch = { key, points };
      }
    }
  
    return maxMatch.key;
  }

  const respondToUser = (input) => {
    const responseKey = mostProbableMatch(input);
    const response = responses[responseKey] || responses.default;
    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: response }]);
    }, 500);
  };

  return (
    <div>
      <button id="chatbot-toggle-btn" onClick={toggleChatbot}>
        {isChatVisible ? <FaX /> : <FaRegMessage />}
      </button>

      {isChatVisible && (
        <div className="chatbot-popup">
          <div className="chat-header">
            <span>
              Chatbot |{" "}
              <a href="https://www.thecodinghubs.com/" target="_blank" rel="noopener noreferrer">
                CareerHub
              </a>
            </span>
            <button onClick={toggleChatbot} className="close-btn">
              &times;
            </button>
          </div>

          <div className="chat-box">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={msg.sender === "user" ? "user-message" : "bot-message"}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className="chat-input">
            <input
              type="text"
              placeholder="Type a message..."
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Newbotai;
