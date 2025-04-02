import { FaPhoneAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function CVPreview({ cvData, demoData, showDemo }) {
  // Function to determine which data to display for each section
  const getDisplayData = (section) => {
    // If user has started editing, use their data for all sections
    if (!showDemo) {
      return cvData[section];
    }
    // Otherwise use demo data
    return demoData[section];
  };

  // Get the appropriate data for each section
  const personalInfo = getDisplayData('personalInfo');
  const profile = getDisplayData('profile');
  const workExperience = getDisplayData('workExperience');
  const education = getDisplayData('education');
  const projects = getDisplayData('projects');
  const skills = getDisplayData('skills');

  // Function to check if personalInfo has any content
  const hasPersonalInfo = () => {
    return personalInfo.firstName || personalInfo.lastName || 
           personalInfo.email || personalInfo.phone || 
           personalInfo.github || personalInfo.linkedin;
  };
  
  return (
    <div className="cv-preview">
      <div className="cv-page">
        {/* Name Section */}
        {hasPersonalInfo() && (
          <div className="name-section">
            <h1>{personalInfo.firstName} {personalInfo.lastName}</h1>
            <div className="contact-info">
              {personalInfo.phone && (
                <div className="contact-item">
                  <FaPhoneAlt size={12} style={{ marginRight: '5px' }} />
                  {personalInfo.phone}
                </div>
              )}
              {personalInfo.email && (
                <div className="contact-item">
                  <FaEnvelope size={12} style={{ marginRight: '5px' }} />
                  {personalInfo.email}
                </div>
              )}
              {personalInfo.github && (
                <div className="contact-item">
                  <FaGithub size={12} style={{ marginRight: '5px' }} />
                  {personalInfo.github}
                </div>
              )}
              {personalInfo.linkedin && (
                <div className="contact-item">
                  <FaLinkedin size={12} style={{ marginRight: '5px' }} />
                  {personalInfo.linkedin}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Profile Section */}
        {profile && (
          <div className="cv-section">
            <h2 className="section-header">{profile ? "Profile" : ""}</h2>
            <p>{profile}</p>
          </div>
        )}

        {/* Work Experience Section */}
        {workExperience && workExperience.length > 0 && (
          <div className="cv-section">
            <h2 className="section-header">Work Experience</h2>
            {workExperience.map((exp, index) => (
              <div key={index} className="list-item">
                <div className="list-item-header">
                  <div>
                    <div className="list-item-title">{exp.company}</div>
                    <div className="list-item-subtitle">{exp.position}</div>
                  </div>
                  <div>
                    <div className="list-item-place">{exp.place}</div>
                    <div className="list-item-period">{exp.period}</div>
                  </div>
                </div>
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <ul>
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex}>{resp}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Education Section */}
        {education && education.length > 0 && (
          <div className="cv-section">
            <h2 className="section-header">Education</h2>
            {education.map((edu, index) => (
              <div key={index} className="list-item">
                <div className="list-item-header">
                  <div>
                    <div className="list-item-title">{edu.school}</div>
                    <div className="list-item-subtitle">{edu.major}</div>
                  </div>
                  <div>
                    <div className="list-item-place">{edu.place}</div>
                    <div className="list-item-period">{edu.period}</div>
                  </div>
                </div>
                {edu.details && edu.details.length > 0 && (
                  <ul>
                    {edu.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Projects Section */}
        {projects && projects.length > 0 && (
          <div className="cv-section">
            <h2 className="section-header">Projects</h2>
            {projects.map((proj, index) => (
              <div key={index} className="list-item">
                <div className="list-item-header">
                  <div>
                    <div className="list-item-title">{proj.name}</div>
                    <div className="list-item-subtitle">{proj.subheading}</div>
                  </div>
                  <div>
                    <div className="list-item-place">{proj.place}</div>
                    <div className="list-item-period">{proj.period}</div>
                  </div>
                </div>
                {proj.details && proj.details.length > 0 && (
                  <ul>
                    {proj.details.map((detail, detailIndex) => (
                      <li key={detailIndex}>{detail}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <div className="cv-section">
            <h2 className="section-header">Skills</h2>
            {skills.map((skill, index) => (
              <div key={index} className="skill-category">
                <strong>{skill.category}: </strong>
                {skill.list}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CVPreview;
