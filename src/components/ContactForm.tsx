import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Mail, X, CheckCircle, AlertCircle } from "lucide-react";

interface ContactFormProps {
  children: React.ReactNode;
}

const ContactForm = ({ children }: ContactFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Reset status when user starts typing again
    if (submitStatus !== 'idle') {
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      // Create FormData for Netlify Forms
      const netlifyFormData = new FormData();
      netlifyFormData.append('form-name', 'contact');
      netlifyFormData.append('name', formData.name);
      netlifyFormData.append('email', formData.email);
      netlifyFormData.append('subject', formData.subject);
      netlifyFormData.append('message', formData.message);

      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(netlifyFormData as any).toString()
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
        setIsOpen(false);
        setSubmitStatus('idle');
      }, 2000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] p-0 bg-white rounded-xl border-0 shadow-2xl">
        <DialogHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-t-xl">
          <div className="flex items-center gap-3 mb-2">
            <Mail className="w-5 h-5" />
            <DialogTitle className="text-xl font-semibold">Get in Touch</DialogTitle>
          </div>
          <p className="text-blue-50 text-sm leading-relaxed">
            Have a question or want to learn more? We'd love to hear from you.
          </p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-5" name="contact" data-netlify="true" netlify-honeypot="bot-field">
          {/* Hidden field for Netlify Forms */}
          <input type="hidden" name="form-name" value="contact" />
          {/* Honeypot field */}
          <div style={{ display: 'none' }}>
            <input name="bot-field" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-800 mb-1.5">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your name"
                required
                className="w-full px-3 py-2.5 border-2 border-blue-300 rounded-md focus:border-blue-500 focus:outline-none transition-colors text-sm"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-800 mb-1.5">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="your@email.com"
                required
                className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none transition-colors text-sm"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-800 mb-1.5">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="What's this about?"
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none transition-colors text-sm"
            />
          </div>
          
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-800 mb-1.5">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Tell us how we can help you..."
              required
              rows={5}
              className="w-full px-3 py-2.5 border border-gray-300 rounded-md focus:border-blue-500 focus:outline-none transition-colors resize-none text-sm"
            />
          </div>
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md text-green-700 text-sm">
              <CheckCircle className="w-4 h-4" />
              Message sent successfully! We'll get back to you soon.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="flex items-center gap-2 p-3 bg-red-50 border border-red-200 rounded-md text-red-700 text-sm">
              <AlertCircle className="w-4 h-4" />
              {errorMessage || 'Failed to send message. Please try again.'}
            </div>
          )}
          
          <div className="flex justify-end pt-2">
            <Button 
              type="submit"
              disabled={isSubmitting || submitStatus === 'success'}
              className="bg-blue-500 hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-2.5 rounded-md font-medium text-sm shadow-sm transition-colors"
            >
              {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Sent!' : 'Send Message'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
