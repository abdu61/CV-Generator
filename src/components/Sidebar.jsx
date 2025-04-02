import { useState } from 'react';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';

function Sidebar({ cvData, updateCvData }) {
  const [activeSection, setActiveSection] = useState('personalInfo');
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (section) => {
    setActiveSection(section);
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    updateCvData('personalInfo', {
      ...cvData.personalInfo,
      [name]: value
    });
  };

  const handleProfileChange = (e) => {
    updateCvData('profile', e.target.value);
  };

  const addWorkExperience = () => {
    updateCvData('workExperience', [
      ...cvData.workExperience,
      { company: '', position: '', responsibilities: [], place: '', period: '' }
    ]);
  };

  const updateWorkExperience = (index, field, value) => {
    const updatedExperiences = [...cvData.workExperience];
    updatedExperiences[index] = { ...updatedExperiences[index], [field]: value };
    updateCvData('workExperience', updatedExperiences);
  };

  const addResponsibility = (index) => {
    const updatedExperiences = [...cvData.workExperience];
    updatedExperiences[index].responsibilities.push('');
    updateCvData('workExperience', updatedExperiences);
  };

  const updateResponsibility = (expIndex, respIndex, value) => {
    const updatedExperiences = [...cvData.workExperience];
    updatedExperiences[expIndex].responsibilities[respIndex] = value;
    updateCvData('workExperience', updatedExperiences);
  };

  const addEducation = () => {
    updateCvData('education', [
      ...cvData.education,
      { school: '', major: '', details: [], place: '', period: '' }
    ]);
  };

  const updateEducation = (index, field, value) => {
    const updatedEducation = [...cvData.education];
    updatedEducation[index] = { ...updatedEducation[index], [field]: value };
    updateCvData('education', updatedEducation);
  };

  const addProject = () => {
    updateCvData('projects', [
      ...cvData.projects,
      { name: '', subheading: '', details: [], place: '', period: '' }
    ]);
  };

  const updateProject = (index, field, value) => {
    const updatedProjects = [...cvData.projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    updateCvData('projects', updatedProjects);
  };

  const addSkill = () => {
    updateCvData('skills', [
      ...cvData.skills,
      { category: '', list: '' }
    ]);
  };

  const updateSkill = (index, field, value) => {
    const updatedSkills = [...cvData.skills];
    updatedSkills[index] = { ...updatedSkills[index], [field]: value };
    updateCvData('skills', updatedSkills);
  };

  const downloadCV = () => {
    const originalTitle = document.title;
    document.title = `${cvData.personalInfo.firstName || 'My'} ${cvData.personalInfo.lastName || 'CV'}`;
    
    window.print();
    
    setTimeout(() => {
      document.title = originalTitle;
    }, 100);
  };

  const addEducationDetail = (index) => {
    const updatedEducation = [...cvData.education];
    updatedEducation[index].details.push('');
    updateCvData('education', updatedEducation);
  };

  const updateEducationDetail = (eduIndex, detailIndex, value) => {
    const updatedEducation = [...cvData.education];
    updatedEducation[eduIndex].details[detailIndex] = value;
    updateCvData('education', updatedEducation);
  };

  const addProjectDetail = (index) => {
    const updatedProjects = [...cvData.projects];
    updatedProjects[index].details.push('');
    updateCvData('projects', updatedProjects);
  };

  const updateProjectDetail = (projIndex, detailIndex, value) => {
    const updatedProjects = [...cvData.projects];
    updatedProjects[projIndex].details[detailIndex] = value;
    updateCvData('projects', updatedProjects);
  };

  return (
    <>
      <button className="mobile-menu-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <h1>CV Generator</h1>
        
        <div className="sidebar-nav">
          <button 
            className={activeSection === 'personalInfo' ? 'active' : ''} 
            onClick={() => handleNavClick('personalInfo')}
          >
            Personal Info
          </button>
          <button 
            className={activeSection === 'profile' ? 'active' : ''} 
            onClick={() => handleNavClick('profile')}
          >
            Profile
          </button>
          <button 
            className={activeSection === 'workExperience' ? 'active' : ''} 
            onClick={() => handleNavClick('workExperience')}
          >
            Work Experience
          </button>
          <button 
            className={activeSection === 'education' ? 'active' : ''} 
            onClick={() => handleNavClick('education')}
          >
            Education
          </button>
          <button 
            className={activeSection === 'projects' ? 'active' : ''} 
            onClick={() => handleNavClick('projects')}
          >
            Projects
          </button>
          <button 
            className={activeSection === 'skills' ? 'active' : ''} 
            onClick={() => handleNavClick('skills')}
          >
            Skills
          </button>
        </div>
        
        <div className="sidebar-content">
          {activeSection === 'personalInfo' && (
            <div className="sidebar-section">
              <h2>Personal Information</h2>
              <div className="form-group">
                <label htmlFor="firstName">First Name*</label>
                <input 
                  type="text" 
                  id="firstName" 
                  name="firstName" 
                  value={cvData.personalInfo.firstName} 
                  onChange={handlePersonalInfoChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name*</label>
                <input 
                  type="text" 
                  id="lastName" 
                  name="lastName" 
                  value={cvData.personalInfo.lastName} 
                  onChange={handlePersonalInfoChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={cvData.personalInfo.email} 
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={cvData.personalInfo.phone} 
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="github">GitHub</label>
                <input 
                  type="text" 
                  id="github" 
                  name="github" 
                  value={cvData.personalInfo.github} 
                  onChange={handlePersonalInfoChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="linkedin">LinkedIn</label>
                <input 
                  type="text" 
                  id="linkedin" 
                  name="linkedin" 
                  value={cvData.personalInfo.linkedin} 
                  onChange={handlePersonalInfoChange}
                />
              </div>
            </div>
          )}

          {activeSection === 'profile' && (
            <div className="sidebar-section">
              <h2>Profile</h2>
              <div className="form-group">
                <label htmlFor="profile">Summary*</label>
                <textarea 
                  id="profile" 
                  value={cvData.profile} 
                  onChange={handleProfileChange}
                  required
                  placeholder="Write a brief summary of your professional background and strengths"
                />
              </div>
            </div>
          )}

          {activeSection === 'workExperience' && (
            <div className="sidebar-section">
              <h2>Work Experience</h2>
              {cvData.workExperience.map((exp, index) => (
                <div key={index} className="work-experience-item">
                  <h3>Experience {index + 1}</h3>
                  <div className="form-group">
                    <label>Company Name</label>
                    <input 
                      type="text" 
                      value={exp.company} 
                      onChange={(e) => updateWorkExperience(index, 'company', e.target.value)}
                      placeholder="E.g., Google, Inc."
                    />
                  </div>
                  <div className="form-group">
                    <label>Position</label>
                    <input 
                      type="text" 
                      value={exp.position} 
                      onChange={(e) => updateWorkExperience(index, 'position', e.target.value)}
                      placeholder="E.g., Software Engineer"
                    />
                  </div>
                  <div className="form-group">
                    <label>Place/City</label>
                    <input 
                      type="text" 
                      value={exp.place} 
                      onChange={(e) => updateWorkExperience(index, 'place', e.target.value)}
                      placeholder="E.g., San Francisco, CA"
                    />
                  </div>
                  <div className="form-group">
                    <label>Period</label>
                    <input 
                      type="text" 
                      value={exp.period} 
                      onChange={(e) => updateWorkExperience(index, 'period', e.target.value)}
                      placeholder="E.g., Jan 2020 - Present"
                    />
                  </div>
                  <div className="form-group">
                    <label>Responsibilities</label>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <input 
                        key={respIndex}
                        type="text" 
                        value={resp} 
                        onChange={(e) => updateResponsibility(index, respIndex, e.target.value)}
                        placeholder="Add a responsibility or achievement"
                        style={{ marginBottom: '8px' }}
                      />
                    ))}
                    <button onClick={() => addResponsibility(index)} className="add-button">
                      Add Responsibility
                    </button>
                  </div>
                </div>
              ))}
              <button onClick={addWorkExperience} className="add-button">
                Add Work Experience
              </button>
            </div>
          )}

          {activeSection === 'education' && (
            <div className="sidebar-section">
              <h2>Education</h2>
              {cvData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>Education {index + 1}</h3>
                  <div className="form-group">
                    <label>School/University</label>
                    <input 
                      type="text" 
                      value={edu.school} 
                      onChange={(e) => updateEducation(index, 'school', e.target.value)}
                      placeholder="E.g., Stanford University"
                    />
                  </div>
                  <div className="form-group">
                    <label>Major/Field of Study</label>
                    <input 
                      type="text" 
                      value={edu.major} 
                      onChange={(e) => updateEducation(index, 'major', e.target.value)}
                      placeholder="E.g., B.S. Computer Science"
                    />
                  </div>
                  <div className="form-group">
                    <label>Place/City</label>
                    <input 
                      type="text" 
                      value={edu.place} 
                      onChange={(e) => updateEducation(index, 'place', e.target.value)}
                      placeholder="E.g., Stanford, CA"
                    />
                  </div>
                  <div className="form-group">
                    <label>Period</label>
                    <input 
                      type="text" 
                      value={edu.period} 
                      onChange={(e) => updateEducation(index, 'period', e.target.value)}
                      placeholder="E.g., 2016 - 2020"
                    />
                  </div>
                  <div className="form-group">
                    <label>Details</label>
                    {edu.details.map((detail, detailIndex) => (
                      <input 
                        key={detailIndex}
                        type="text" 
                        value={detail} 
                        onChange={(e) => updateEducationDetail(index, detailIndex, e.target.value)}
                        placeholder="E.g., GPA, honors, relevant coursework"
                        style={{ marginBottom: '8px' }}
                      />
                    ))}
                    <button onClick={() => addEducationDetail(index)} className="add-button">
                      Add Detail
                    </button>
                  </div>
                </div>
              ))}
              <button onClick={addEducation} className="add-button">
                Add Education
              </button>
            </div>
          )}

          {activeSection === 'projects' && (
            <div className="sidebar-section">
              <h2>Projects</h2>
              {cvData.projects.map((proj, index) => (
                <div key={index} className="project-item">
                  <h3>Project {index + 1}</h3>
                  <div className="form-group">
                    <label>Project Name</label>
                    <input 
                      type="text" 
                      value={proj.name} 
                      onChange={(e) => updateProject(index, 'name', e.target.value)}
                      placeholder="E.g., E-commerce Platform"
                    />
                  </div>
                  <div className="form-group">
                    <label>Subheading/Role</label>
                    <input 
                      type="text" 
                      value={proj.subheading} 
                      onChange={(e) => updateProject(index, 'subheading', e.target.value)}
                      placeholder="E.g., Lead Developer"
                    />
                  </div>
                  <div className="form-group">
                    <label>Place/Platform</label>
                    <input 
                      type="text" 
                      value={proj.place} 
                      onChange={(e) => updateProject(index, 'place', e.target.value)}
                      placeholder="E.g., GitHub, Independent"
                    />
                  </div>
                  <div className="form-group">
                    <label>Period</label>
                    <input 
                      type="text" 
                      value={proj.period} 
                      onChange={(e) => updateProject(index, 'period', e.target.value)}
                      placeholder="E.g., 2021 - 2022"
                    />
                  </div>
                  <div className="form-group">
                    <label>Details</label>
                    {proj.details.map((detail, detailIndex) => (
                      <input 
                        key={detailIndex}
                        type="text" 
                        value={detail} 
                        onChange={(e) => updateProjectDetail(index, detailIndex, e.target.value)}
                        placeholder="E.g., technologies used, achievements"
                        style={{ marginBottom: '8px' }}
                      />
                    ))}
                    <button onClick={() => addProjectDetail(index)} className="add-button">
                      Add Detail
                    </button>
                  </div>
                </div>
              ))}
              <button onClick={addProject} className="add-button">
                Add Project
              </button>
            </div>
          )}

          {activeSection === 'skills' && (
            <div className="sidebar-section">
              <h2>Skills</h2>
              {cvData.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="form-group">
                    <label>Skill Category</label>
                    <input 
                      type="text" 
                      value={skill.category} 
                      onChange={(e) => updateSkill(index, 'category', e.target.value)}
                      placeholder="E.g., Programming Languages, Soft Skills"
                    />
                  </div>
                  <div className="form-group">
                    <label>Skills (comma separated)</label>
                    <input 
                      type="text" 
                      value={skill.list} 
                      onChange={(e) => updateSkill(index, 'list', e.target.value)}
                      placeholder="E.g., JavaScript, Python, React, Node.js"
                    />
                  </div>
                </div>
              ))}
              <button onClick={addSkill} className="add-button">
                Add Skill Category
              </button>
            </div>
          )}
        </div>
        
        <button onClick={downloadCV} className="download-button">
          <FaDownload style={{ marginRight: '8px' }} />
          <span>Download CV</span>
        </button>
      </div>
    </>
  );
}

export default Sidebar;
