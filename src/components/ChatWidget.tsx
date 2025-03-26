import { useState, useRef, useEffect } from "react";
import { useLocation } from "wouter";
import { getBotResponse } from "@/lib/chatbot";

interface Message {
  text: string;
  sender: "user" | "bot";
}

const ChatWidget = () => {
  const [, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! How can I help you navigate the site today?", sender: "bot" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputValue, sender: "user" }]);
    
    // Get bot response
    const response = getBotResponse(inputValue);
    
    // Process navigation commands
    const userInput = inputValue.toLowerCase();
    
    setTimeout(() => {
      setMessages(prev => [...prev, { text: response.message, sender: "bot" }]);
      
      // If the response includes a navigation command, navigate after a short delay
      if (response.navigateTo) {
        setTimeout(() => {
          setLocation(response.navigateTo as string);
          
          // Add a confirmation message
          setMessages(prev => [
            ...prev, 
            { text: `I've taken you to the ${response.navigateTo.replace('/', '')} page.`, sender: "bot" }
          ]);
        }, 1000);
      }
    }, 600);
    
    // Clear input
    setInputValue("");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleToggleChat}
        className="bg-primary-600 hover:bg-primary-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transition-all"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <i className={`fas ${isOpen ? "fa-times" : "fa-comment-alt"} text-xl`}></i>
      </button>
      
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl w-80 overflow-hidden absolute bottom-20 right-0 border border-slate-200">
          <div className="bg-primary-600 text-white p-4">
            <h3 className="font-medium">Navigation Assistant</h3>
            <p className="text-sm text-primary-100">Ask me anything about the site!</p>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex items-start ${message.sender === 'user' ? 'justify-end' : ''}`}
              >
                <div 
                  className={`rounded-lg p-3 max-w-[80%] ${
                    message.sender === 'user' 
                      ? 'bg-primary-600 text-white' 
                      : 'bg-primary-100 text-slate-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          
          <div className="border-t border-slate-200 p-4">
            <form onSubmit={handleSubmit} className="flex">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="flex-1 border border-slate-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="Type your message..."
              />
              <button
                type="submit"
                className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-r-lg transition-colors"
                aria-label="Send message"
              >
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatWidget;
