type BotResponse = {
  message: string;
  navigateTo?: string;
};

export function getBotResponse(message: string): BotResponse {
  const lowerMessage = message.toLowerCase();
  
  // About section
  if (
    lowerMessage.includes('about') || 
    lowerMessage.includes('who') || 
    lowerMessage.includes('background') ||
    lowerMessage.includes('raghuram') ||
    lowerMessage.includes('intro')
  ) {
    return {
      message: "The About section has information about Raghuram's background and skills. Would you like me to take you there?",
      navigateTo: "/about"
    };
  }
  
  // Experience section
  if (
    lowerMessage.includes('experience') || 
    lowerMessage.includes('work') || 
    lowerMessage.includes('education') ||
    lowerMessage.includes('history') ||
    lowerMessage.includes('career')
  ) {
    return {
      message: "You can find details about Raghuram's work experience and education in the Experience section. I'll take you there now.",
      navigateTo: "/experience"
    };
  }
  
  // Projects section
  if (
    lowerMessage.includes('project') || 
    lowerMessage.includes('portfolio') ||
    lowerMessage.includes('work') ||
    lowerMessage.includes('built')
  ) {
    return {
      message: "The Projects section showcases Raghuram's recent work, including the TriMet GPS Data Engineering Project. I'll show you now.",
      navigateTo: "/projects"
    };
  }
  
  // Resume section
  if (
    lowerMessage.includes('resume') || 
    lowerMessage.includes('cv') ||
    lowerMessage.includes('download') ||
    lowerMessage.includes('pdf')
  ) {
    return {
      message: "You can view or download Raghuram's resume in the Resume section. Let me take you there.",
      navigateTo: "/resume"
    };
  }
  
  // Contact section
  if (
    lowerMessage.includes('contact') || 
    lowerMessage.includes('email') || 
    lowerMessage.includes('reach') ||
    lowerMessage.includes('message') ||
    lowerMessage.includes('get in touch')
  ) {
    return {
      message: "You can get in touch with Raghuram through the Contact section. There's a form and direct contact information available. I'll take you there.",
      navigateTo: "/contact"
    };
  }
  
  // Greetings
  if (
    lowerMessage.includes('hello') || 
    lowerMessage.includes('hi') || 
    lowerMessage.includes('hey') ||
    lowerMessage.includes('greetings')
  ) {
    return {
      message: "Hello! How can I help you navigate Raghuram's website today? You can ask about the about section, experience, projects, resume, or contact information."
    };
  }
  
  // Skills
  if (
    lowerMessage.includes('skill') || 
    lowerMessage.includes('tech') || 
    lowerMessage.includes('technology') ||
    lowerMessage.includes('language') ||
    lowerMessage.includes('programming')
  ) {
    return {
      message: "Raghuram's skills include Python, Java, Cloud Computing, ETL, SQL, and Backend Development. You can find more details in the Experience section.",
      navigateTo: "/experience"
    };
  }
  
  // Help
  if (
    lowerMessage.includes('help') || 
    lowerMessage.includes('assist') || 
    lowerMessage.includes('navigate') ||
    lowerMessage.includes('find')
  ) {
    return {
      message: "I can help you navigate the website. You can ask about: 'About', 'Experience', 'Projects', 'Resume', or 'Contact'. What would you like to know more about?"
    };
  }
  
  // Default response
  return {
    message: "I'm not sure how to help with that. Try asking about the different sections of the site like About, Experience, Projects, Resume or Contact information."
  };
}
