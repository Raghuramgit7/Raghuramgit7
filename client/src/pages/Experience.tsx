import { experienceData, educationData, programmingSkills, frameworksSkills, toolsSkills } from "@/data/experienceData";

const Experience = () => {
  return (
    <section className="animate-fadeIn py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Experience & Education</h2>
        <p className="text-slate-600 mb-12 max-w-3xl">My professional journey and academic background</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Experience Column */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <i className="fas fa-briefcase mr-3 text-primary-600"></i> Work Experience
            </h3>
            
            {experienceData.map((exp, index) => (
              <div key={index} className="mb-10 border-l-2 border-primary-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600"></div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-slate-900">{exp.title}</h4>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mt-1">
                      {exp.period}
                    </span>
                  </div>
                  <h5 className="text-base font-medium text-slate-700 mb-4">{exp.company}</h5>
                  <ul className="text-slate-600 space-y-3">
                    {exp.responsibilities.map((resp, respIndex) => (
                      <li key={respIndex} className="flex items-start">
                        <i className="fas fa-check-circle text-primary-600 mt-1 mr-3"></i>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          {/* Education Column */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-6 flex items-center">
              <i className="fas fa-graduation-cap mr-3 text-primary-600"></i> Education
            </h3>
            
            {educationData.map((edu, index) => (
              <div key={index} className="mb-8 border-l-2 border-primary-200 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary-600"></div>
                <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100">
                  <div className="flex flex-wrap justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-slate-900">{edu.degree}</h4>
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full mt-1">
                      {edu.period}
                    </span>
                  </div>
                  <h5 className="text-base font-medium text-slate-700 mb-2">{edu.field}</h5>
                  <p className="text-slate-600">{edu.university}</p>
                </div>
              </div>
            ))}
            
            {/* Skills */}
            <h3 className="text-xl font-semibold text-slate-900 mb-6 mt-12 flex items-center">
              <i className="fas fa-code mr-3 text-primary-600"></i> Skills
            </h3>
            
            <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-100">
              <h4 className="text-base font-medium text-slate-800 mb-3">Programming Languages</h4>
              <div className="flex flex-wrap gap-2 mb-5">
                {programmingSkills.map((skill, index) => (
                  <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h4 className="text-base font-medium text-slate-800 mb-3">Frameworks & Libraries</h4>
              <div className="flex flex-wrap gap-2 mb-5">
                {frameworksSkills.map((skill, index) => (
                  <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
              
              <h4 className="text-base font-medium text-slate-800 mb-3">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill, index) => (
                  <span key={index} className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
