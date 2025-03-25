import { Link } from "wouter";

const About = () => {
  const skills = [
    "Python", 
    "Java", 
    "Cloud Computing", 
    "ETL", 
    "SQL", 
    "Backend Development"
  ];

  return (
    <section className="animate-fadeIn py-16 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Hi, I'm <span className="text-primary-600">Raghuram Gudemaranahalli Nataraja</span>
            </h1>
            <h2 className="text-2xl font-medium text-slate-700 mb-6">Software Engineer</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Results-driven Software Engineer with expertise in cloud computing, scalable system design, and backend development.
              Proficient in Python, Java, with a track record of optimizing ETL pipelines and reducing data latency by 70%.
              Passionate about designing efficient software solutions to solve real world problems.
            </p>
            <div className="flex flex-wrap gap-3 mb-8">
              {skills.map((skill, index) => (
                <span 
                  key={index} 
                  className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md hover:shadow-lg">
                Get in Touch
              </Link>
              <Link href="/projects" className="border border-primary-600 text-primary-600 hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-colors">
                View Projects
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="w-64 h-64 bg-gradient-to-br from-primary-500 to-primary-700 rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              RGN
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
