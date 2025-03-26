import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

const Resume = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleDownload = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/resume/download');
      if (!response.ok) throw new Error('Failed to download resume');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'RAGHURAM-GUDEMARANAHALLI.pdf';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Error downloading resume:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="animate-fadeIn py-16 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Resume</h2>
        <p className="text-slate-600 mb-8 max-w-3xl">View or download my complete resume</p>
        
        <Card className="overflow-hidden">
          <div className="bg-slate-100 p-6 flex flex-wrap justify-between items-center gap-4">
            <h3 className="text-lg font-semibold text-slate-900">RAGHURAM-GUDEMARANAHALLI.pdf</h3>
            <div className="flex space-x-3">
              <button 
                onClick={handleDownload}
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded font-medium transition-colors flex items-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <i className="fas fa-circle-notch fa-spin mr-2"></i> Downloading...
                  </>
                ) : (
                  <>
                    <i className="fas fa-download mr-2"></i> Download
                  </>
                )}
              </button>
              <a 
                href="/api/resume/view" 
                target="_blank" 
                rel="noopener noreferrer"
                className="border border-slate-300 hover:border-slate-400 text-slate-700 px-4 py-2 rounded font-medium transition-colors flex items-center"
              >
                <i className="fas fa-external-link-alt mr-2"></i> Open
              </a>
            </div>
          </div>
          
          {/* PDF Preview */}
          <CardContent className="p-6 bg-slate-50 min-h-[600px] flex flex-col items-center justify-center border-t border-slate-200">
            <div className="w-full max-w-2xl bg-white shadow-md p-8 rounded-lg border border-slate-200">
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold text-slate-900 mb-2">RAGHURAM GUDEMARANAHALLI NATARAJA</h1>
                <p className="text-slate-600">Portland, Oregon — raghuram0311@gmail.com — (971) 901-7661</p>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed">
                Results-driven Software Engineer with expertise in cloud computing, scalable system design, and backend development.
                Proficient in Python, Java, with a track record of optimizing ETL pipelines and reducing data latency by 70%.
                Passionate about designing efficient software solutions to solve real world problems.
              </p>
              
              <div className="mb-6">
                <h2 className="text-lg font-bold text-slate-800 mb-3">EDUCATION</h2>
                <div className="mb-3">
                  <div className="flex flex-wrap justify-between">
                    <p className="font-semibold">Portland State University</p>
                    <p className="text-slate-600">September 2023 — June 2025</p>
                  </div>
                  <p className="text-slate-700">Master of Science, Computer Science</p>
                </div>
                <div>
                  <div className="flex flex-wrap justify-between">
                    <p className="font-semibold">Visvesvaraya Technological University</p>
                    <p className="text-slate-600">August 2016 — June 2020</p>
                  </div>
                  <p className="text-slate-700">Bachelor of Engineering, Computer Science</p>
                </div>
              </div>
              
              <div className="opacity-60 text-center mt-12">
                <p className="text-sm text-slate-500">Preview of full resume document</p>
                <i className="fas fa-ellipsis-h text-slate-400 mt-2"></i>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Resume;
