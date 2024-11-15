"use strict";

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

  // Additional operation-focused responses
  "can I explore new careers here":
    "Absolutely! Our Career Explorer guides you to discover new career paths aligned with your skills and goals.",
  "how to set up a roadmap":
    "With our Pathway Planner, you’ll get a tailored roadmap that tracks every learning milestone, certification, and experience step-by-step.",
  "what resources do you offer":
    "In our Learning Hub, you’ll find top resources like articles, videos, and books selected to advance your career skillset.",
  "how does opportunity matching work":
    "Our Opportunity Finder scans and matches jobs, internships, and events based on your profile and preferences.",
  "is there a way to build my portfolio here":
    "Yes! Our Portfolio Creator helps you showcase projects, certifications, and skills in a professional, shareable format.",
  "can I track my career progress":
    "Our platform allows you to monitor your progress with personalized milestones and completion metrics for all learning and career goals.",
  "how to get guidance for industry shifts":
    "We provide targeted pathways, skill assessments, and expert resources tailored to your new field of interest.",

  // Additional feature-focused responses
  "what does the personalized roadmap include":
    "It includes every step you need to achieve your career goals, such as courses, certifications, project ideas, and important milestones.",
  "how do I find career-specific resources":
    "Our Learning Hub curates content for each career, from beginner to advanced levels, ensuring you get relevant and up-to-date material.",
  "do you offer interview preparation":
    "Yes! We guide you with resources like common interview questions, mock interview tools, and company-specific insights.",
  "how does portfolio creation work":
    "You can upload your best work, add descriptions, and select designs to build a portfolio that represents your skills professionally.",
  "can I set job alerts":
    "Yes, you can customize job alert preferences to receive updates on new roles that match your chosen career path.",
  "how can I showcase my skills":
    "Our Portfolio Creator lets you highlight your top projects, certifications, and testimonials for a strong professional presence.",
  "where to find entry-level job resources":
    "Our Learning Hub has resources geared toward beginners, from foundational courses to beginner job prep.",
  "is there support for self-learning":
    "Yes, we provide structured pathways, curated resources, and regular assessments to keep you on track with self-paced learning.",
  "how to build a standout portfolio":
    "Focus on relevant projects and skills. Our platform also offers design customization to help your portfolio shine!",
  "how do job suggestions work":
    "We analyze your profile and preferences to suggest relevant jobs. You can adjust settings for field, location, and more.",
  "where to find remote work options":
    "Our Opportunity Finder has remote filters so you can see jobs that offer flexibility or work-from-home options.",
  "do you offer skill assessments":
    "Yes, our platform offers assessments to help you identify your strengths and growth areas.",
  "how to find industry-specific events":
    "We match you with events like workshops and networking opportunities aligned with your field and career goals.",
  "can I get alerts for upcoming deadlines":
    "Our system sends reminders for deadlines, like application due dates and certification expirations, so you’re always on track.",
  "do you help with LinkedIn profiles":
    "Yes! We offer guidance on optimizing LinkedIn profiles with key skills, keywords, and project highlights.",
  "is there guidance for resume building":
    "Our platform provides templates and tips tailored to your career field for creating a standout resume.",
  "how to approach a career pivot":
    "Our Career Explorer and Pathway Planner offer guidance for career changes, including transferable skills and roadmap planning.",
  "how to stay updated on industry trends":
    "Our platform offers curated news, blog posts, and articles to keep you informed about the latest trends in your chosen field.",

  // Additional general responses for engagement
  "can I connect with mentors here":
    "We’re working on mentor connections soon! Meanwhile, our experts are here to answer any career questions you may have.",
  "is there help for career exploration":
    "Yes! Our Career Explorer tool is designed to help you discover careers that match your interests and skills.",
  "how do I get more personalized advice":
    "You can answer a few questions about your goals, and our system will generate recommendations tailored to you.",
  "how to keep track of my learning":
    "Our progress tracker lets you monitor milestones and keeps you motivated as you complete steps in your roadmap.",
  "any support for industry certifications":
    "Yes! We recommend courses that lead to valuable industry certifications and provide practice resources as well.",
  "how to approach networking":
    "Networking starts with engagement—join online communities, attend events, and reach out on LinkedIn to build connections.",
  "can I find mentors in specific industries":
    "We’re working to connect you with mentors soon. For now, we offer guidance and resources tailored to your chosen industry.",
  "where to find career-specific advice":
    "We provide career-specific advice in each field, from job options and required skills to resume tips and interview prep.",
  "any guidance for soft skill development":
    "Absolutely! We offer resources for communication, teamwork, and problem-solving to boost your soft skills.",
  "how does the learning tracker work":
    "It helps you track completed milestones, identify areas for growth, and stay motivated with regular progress updates.",

  // Additional expert-related responses
  "how to connect with a career expert":
    "Great question! Our team can connect you with an expert to discuss career paths, resources, and more tailored insights.",
  "need guidance on next career steps":
    "Let's connect you with an expert who can assess your goals and guide you on the next steps in your career journey!",
  "who are the career experts here":
    "Our experts are professionals from various fields, offering insights into industry trends, skills, and opportunities.",
  "how can an expert help me":
    "Our experts provide personalized advice, recommend resources, and answer any career-related questions you may have.",
  "how long to wait for an expert":
    "It won’t be long! We’ll connect you shortly so you can discuss your career questions with someone knowledgeable.",
  "do experts provide job search tips":
    "Yes, our experts offer guidance on effective job search strategies, resume tips, and networking advice!",
  "what can I discuss with an expert":
    "You can discuss anything career-related—from exploring fields and developing skills to landing your next job opportunity!",

  // General catch-all responses for engagement
  default:
    "I'm here to help! Let me know if you need expert guidance or advice on finding resources. ",
  expert:
    "We're connecting you to an expert right away. Get ready to gain some valuable insights!",
  no: "No worries! Feel free to ask questions anytime, and I'll be here to help.",
};

document
  .getElementById("chatbot-toggle-btn")
  .addEventListener("click", toggleChatbot);
document.getElementById("close-btn").addEventListener("click", toggleChatbot);
document.getElementById("send-btn").addEventListener("click", sendMessage);
document
  .getElementById("user-input")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      sendMessage();
    }
  });

function toggleChatbot() {
  const chatbotPopup = document.getElementById("chatbot-popup");

  // Toggle the visibility class
  chatbotPopup.classList.toggle("visible");

  // Toggle icon visibility
  document.querySelector(".msg").classList.toggle("hidden");
  document.querySelector(".cross").classList.toggle("hidden");
}

function sendMessage() {
  const userInput = document.getElementById("user-input").value.trim();
  if (userInput !== "") {
    appendMessage("user", userInput);
    respondToUser(userInput.toLowerCase());
    document.getElementById("user-input").value = "";
  }
}

function respondToUser(userInput) {
  const response = responses[userInput] || responses["default"];
  setTimeout(function () {
    appendMessage("bot", response);
  }, 500);
}

function appendMessage(sender, message) {
  const chatBox = document.getElementById("chat-box");
  const messageElement = document.createElement("div");
  messageElement.classList.add(
    sender === "user" ? "user-message" : "bot-message"
  );
  messageElement.innerHTML = message;
  chatBox.appendChild(messageElement);
  chatBox.scrollTop = chatBox.scrollHeight;
  if (sender === "bot" && message === responses["default"]) {
    const buttonYes = document.createElement("button");
    buttonYes.textContent = "✔ Yes";
    buttonYes.onclick = function () {
      appendMessage("bot", responses["expert"]);
    };
    const buttonNo = document.createElement("button");
    buttonNo.textContent = "✖ No";
    buttonNo.onclick = function () {
      appendMessage("bot", responses["no"]);
    };
    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("button-container");
    buttonContainer.appendChild(buttonYes);
    buttonContainer.appendChild(buttonNo);
    chatBox.appendChild(buttonContainer);
  }
}
