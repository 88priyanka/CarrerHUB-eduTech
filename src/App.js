import './App.css';
import Header from './components/Header.js';
import Home from './components/Home.js';
import { Route,Routes } from 'react-router-dom';
import CarrerExp from './components/CarrerExp.js';
import LearnHUB from './components/LearnHUB.js';
import { useEffect,useState } from 'react';
import Newbotai from './components/Newbotai.js';

function App() {
  const [careerData, setCareerData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [crtCarrer, setCarrer] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const data = {
        "careers": [
          {
            "career": "Full Stack Developer",
            "description": "A Full Stack Developer is a versatile professional proficient in both front-end and back-end development. They are responsible for designing, building, and maintaining websites or web applications, ensuring seamless functionality from the user interface to the server-side logic. Full Stack Developers possess expertise in multiple programming languages, frameworks, and tools, enabling them to work on the entire technology stack of a project. On the front end, they create visually appealing and user-friendly interfaces using technologies like HTML, CSS, and JavaScript, often employing frameworks such as React, Angular, or Vue.js. For the back end, they develop and manage server-side logic, databases, and APIs using tools like Node.js, Express.js, and MongoDB. A Full Stack Developer’s role involves collaborating with designers, product managers, and other developers to bring concepts to life. Their ability to understand the complete architecture of an application makes them valuable in small teams or startups where versatility is key.",
            "link": "https://www.youtube.com/embed/VpB0eVZir8U",
            "courses": [
              "HTML & CSS",
              "JavaScript",
              "React.js",
              "Node.js",
              "Express.js",
              "MongoDB",
              "RESTful APIs",
              "Git & GitHub",
              "Deployment (Netlify/Heroku)"
            ]
          },
          {
            "career": "Machine Learning Engineer",
            "description": "Machine Learning Engineers focus on developing algorithms that allow computers to learn from data and make decisions based on patterns without explicit programming. They work with large datasets, implement machine learning models, and evaluate their performance using various metrics. Machine Learning Engineers typically have a strong background in computer science, mathematics, and statistics. Their work includes selecting and applying appropriate machine learning models, such as supervised learning, unsupervised learning, and reinforcement learning. These engineers use programming languages like Python and tools like TensorFlow and Scikit-learn to build scalable models and optimize their performance. Machine Learning Engineers are highly sought after in industries ranging from healthcare to finance, as they bring data-driven decision-making capabilities to organizations.",
            "link": "https://www.youtube.com/embed/GwIo3gDZCVQ",
            "courses": [
              "Python Programming",
              "Linear Algebra for ML",
              "Supervised and Unsupervised Learning",
              "Scikit-learn",
              "Feature Engineering",
              "Model Evaluation and Validation",
              "Data Wrangling",
              "Building ML Pipelines"
            ]
          },
          {
            "career": "Deep Learning Engineer",
            "description": "Deep Learning Engineers specialize in designing and implementing artificial neural networks, which are used to process complex data such as images, speech, and text. They work with advanced algorithms like Convolutional Neural Networks (CNNs) and Recurrent Neural Networks (RNNs) to solve problems in areas such as computer vision, natural language processing, and speech recognition. A deep understanding of mathematics, especially linear algebra and calculus, is crucial for designing these models. Deep Learning Engineers often use frameworks such as TensorFlow and PyTorch to build and train deep neural networks. With the rise of AI-driven applications, Deep Learning Engineers are in high demand to create intelligent systems capable of learning and adapting to new data.",
            "link": "https://www.youtube.com/embed/aircAruvnKk",
            "courses": [
              "Introduction to Neural Networks",
              "Convolutional Neural Networks (CNNs)",
              "Recurrent Neural Networks (RNNs)",
              "Transfer Learning",
              "TensorFlow",
              "PyTorch",
              "GANs (Generative Adversarial Networks)",
              "Deploying DL Models"
            ]
          },
          {
            "career": "Cloud Engineer",
            "description": "Cloud Engineers specialize in designing, managing, and maintaining cloud infrastructure for businesses. They are responsible for ensuring that cloud-based systems run smoothly, efficiently, and securely. Cloud Engineers have expertise in cloud platforms like AWS, Google Cloud, and Microsoft Azure, and they design scalable cloud environments that meet the company’s technical needs. Their role also involves automating cloud tasks, optimizing performance, and ensuring security across distributed systems. They work closely with DevOps teams and system administrators to ensure that the deployment process is smooth and that systems are resilient and scalable. Cloud Engineers are crucial as more businesses migrate their infrastructure to the cloud to leverage its flexibility, scalability, and cost-effectiveness.",
            "link": "https://www.youtube.com/embed/tzM9CJfZrJw",
            "courses": [
              "Cloud Computing Fundamentals",
              "AWS Solutions Architect",
              "Google Cloud Platform",
              "Azure DevOps",
              "Serverless Architectures",
              "Kubernetes and Docker",
              "Cloud Networking",
              "Cloud Security"
            ]
          },
          {
            "career": "Generative AI Engineer",
            "description": "Generative AI Engineers focus on developing artificial intelligence models that can create new data, such as images, text, music, and video. They work with generative models like Generative Adversarial Networks (GANs) and Transformer architectures to generate content that mimics real-world data. A strong understanding of deep learning and neural networks is essential for creating these AI models, which are trained on massive datasets. These engineers also work on fine-tuning pre-trained models for specific tasks, improving the quality and diversity of generated content. The field of Generative AI is rapidly growing, with applications in content creation, entertainment, healthcare, and design. As the demand for AI-driven creative solutions rises, Generative AI Engineers play a vital role in shaping the future of AI applications.",
            "link": "https://www.youtube.com/embed/k8fTYJPd3_I",
            "courses": [
              "Introduction to Generative AI",
              "Transformer Architectures",
              "Language Models (GPT, BERT)",
              "Diffusion Models",
              "Ethics in AI",
              "Fine-Tuning LLMs",
              "Hugging Face Transformers",
              "Deploying AI Applications"
            ]
          }
        ]
      };      

      setCareerData(data.careers);
      setCarrer(data.careers[0]);
      setUrl(data.careers[0].link);

      // Set the loading state to false
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      <Header/>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carrerexp' element={<CarrerExp careerData={careerData} loading={loading} crtCarrer={crtCarrer} setUrl={setUrl} setCarrer={setCarrer} url={url}/>}/>
        <Route path='/learnhub' element={<LearnHUB crtCarrer={crtCarrer}/>}/>
      </Routes>
      <Newbotai/>
    </div>
  );
}

export default App;
