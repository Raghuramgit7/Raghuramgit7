import { projectsData } from "@/data/projectsData";

const Projects = () => {
  return (
    <section className="animate-fadeIn py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Projects</h2>
        <p className="text-slate-600 mb-12 max-w-3xl">A showcase of my recent projects and technical achievements</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden border border-slate-100 hover:shadow-md transition-shadow"
            >
              <div className={`h-48 bg-gradient-to-r ${index % 2 === 0 ? 'from-primary-500 to-primary-700' : 'from-primary-600 to-primary-800'} flex items-center justify-center p-6`}>
                <i className={`fas ${project.icon} text-white text-5xl`}></i>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{project.title}</h3>
                <p className="text-slate-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a 
                  href={project.link} 
                  className="text-primary-600 font-medium text-sm hover:text-primary-700 inline-flex items-center group"
                  target="_blank"
                  rel="noreferrer"
                >
                  View Project Details
                  <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
