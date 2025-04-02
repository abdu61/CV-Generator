import { useState } from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import CVPreview from './components/CVPreview'

function App() {
  // Sample demo data for initial preview
  const demoData = {
    personalInfo: {
      firstName: 'John',
      lastName: 'Smith',
      email: 'john.smith@example.com',
      phone: '+1 (555) 123-4567',
      github: 'github.com/johnsmith',
      linkedin: 'linkedin.com/in/johnsmith'
    },
    profile: 'Experienced software developer with over 5 years of expertise in web development and cloud technologies. Passionate about creating clean, efficient, and scalable code. Strong problem-solving skills and ability to work in fast-paced environments.',
    workExperience: [
      {
        company: 'Tech Innovations Inc.',
        position: 'Senior Software Developer',
        responsibilities: [
          'Led a team of 5 developers to deliver high-quality web applications',
          'Implemented CI/CD pipelines that reduced deployment time by 40%',
          'Refactored legacy codebase, improving performance by 30%'
        ],
        place: 'San Francisco, CA',
        period: 'January 2020 - Present'
      },
      {
        company: 'Digital Solutions LLC',
        position: 'Software Developer',
        responsibilities: [
          'Developed and maintained client-facing applications using React',
          'Collaborated with UX designers to implement responsive interfaces',
          'Participated in code reviews and contributed to coding standards'
        ],
        place: 'Boston, MA',
        period: 'June 2017 - December 2019'
      }
    ],
    education: [
      {
        school: 'University of Technology',
        major: 'Master of Science in Computer Science',
        details: [],
        place: 'Boston, MA',
        period: '2015 - 2017'
      },
      {
        school: 'State University',
        major: 'Bachelor of Science in Software Engineering',
        details: [],
        place: 'Chicago, IL',
        period: '2011 - 2015'
      }
    ],
    projects: [
      {
        name: 'E-commerce Platform',
        subheading: 'Lead Developer',
        details: [],
        place: 'Tech Innovations Inc.',
        period: '2021 - 2022'
      },
      {
        name: 'Healthcare Management System',
        subheading: 'Frontend Developer',
        details: [],
        place: 'Digital Solutions LLC',
        period: '2018 - 2019'
      }
    ],
    skills: [
      {
        category: 'Programming Languages',
        list: 'JavaScript, TypeScript, Python, Java, SQL'
      },
      {
        category: 'Frameworks & Libraries',
        list: 'React, Node.js, Express, Django, Spring Boot'
      },
      {
        category: 'Soft Skills',
        list: 'Leadership, Team Management, Communication, Problem-solving'
      }
    ]
  };

  const [cvData, setCvData] = useState({
    personalInfo: {
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      github: '',
      linkedin: ''
    },
    profile: '',
    workExperience: [],
    education: [],
    projects: [],
    skills: []
  });

  // Track if user has started editing the CV
  const [hasUserStartedEditing, setHasUserStartedEditing] = useState(false);

  const updateCvData = (section, data) => {
    // Update the specific section
    setCvData(prev => ({
      ...prev,
      [section]: data
    }));
    
    // If this is the first edit, mark that user has started editing
    if (!hasUserStartedEditing) {
      setHasUserStartedEditing(true);
    }
  };

  return (
    <div className="app-container">
      <Sidebar cvData={cvData} updateCvData={updateCvData} />
      <CVPreview 
        cvData={cvData} 
        demoData={demoData} 
        showDemo={!hasUserStartedEditing} 
      />
    </div>
  )
}

export default App
