import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(2, { message: "Subject must be at least 2 characters." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const submitContact = useMutation({
    mutationFn: async (data: ContactFormValues) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
        variant: "default",
      });
      setSubmitted(true);
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  function onSubmit(data: ContactFormValues) {
    submitContact.mutate(data);
  }

  return (
    <section className="animate-fadeIn py-16 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Contact Me</h2>
        <p className="text-slate-600 mb-12 max-w-3xl">Feel free to reach out for opportunities or just to say hello!</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                {submitted ? (
                  <div className="text-center py-8">
                    <div className="text-5xl text-primary-600 mb-4">
                      <i className="fas fa-check-circle"></i>
                    </div>
                    <h3 className="text-2xl font-semibold text-slate-900 mb-2">Thank You!</h3>
                    <p className="text-slate-600 mb-6">Your message has been sent successfully.</p>
                    <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Your Name</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="John Doe" 
                                {...field} 
                                className="px-4 py-3 rounded-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="you@example.com" 
                                type="email" 
                                {...field} 
                                className="px-4 py-3 rounded-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl>
                              <Input 
                                placeholder="How can I help you?" 
                                {...field} 
                                className="px-4 py-3 rounded-lg"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Your message here..." 
                                rows={5} 
                                {...field} 
                                className="px-4 py-3 rounded-lg resize-none"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-primary-600 hover:bg-primary-700 py-3 text-white font-medium" 
                        disabled={submitContact.isPending}
                      >
                        {submitContact.isPending ? (
                          <>
                            <i className="fas fa-circle-notch fa-spin mr-2"></i> Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                      
                      <p className="text-sm text-slate-500 text-center">
                        I'll get back to you as soon as possible!
                      </p>
                    </form>
                  </Form>
                )}
              </CardContent>
            </Card>
          </div>
          
          {/* Contact Information */}
          <div className="flex flex-col">
            <Card className="mb-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <i className="fas fa-envelope text-primary-600"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 mb-1">Email</h4>
                      <p className="text-slate-900 font-medium">raghuram0311@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <i className="fas fa-phone text-primary-600"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 mb-1">Phone</h4>
                      <p className="text-slate-900 font-medium">(971) 901-7661</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-primary-100 p-3 rounded-full mr-4">
                      <i className="fas fa-map-marker-alt text-primary-600"></i>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-500 mb-1">Location</h4>
                      <p className="text-slate-900 font-medium">Portland, Oregon</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Connect With Me</h3>
                
                <div className="flex space-x-4">
                  <a 
                    href="https://www.linkedin.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-[#0077B5] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a 
                    href="https://github.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-[#333333] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a 
                    href="https://twitter.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="bg-[#1DA1F2] text-white p-3 rounded-full hover:bg-opacity-90 transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
                
                <div className="mt-8">
                  <p className="text-slate-600 mb-4">Available for:</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      Full-time Positions
                    </span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      Freelance Work
                    </span>
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      Consulting
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
