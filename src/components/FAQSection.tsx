import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this a replacement for my accountant?",
      answer: "Yes. Klaras automates repetitive bookkeeping work and partners with a senior accountant who reviews and closes your books monthly."
    },
    {
      question: "Which tools do you integrate with?",
      answer: "We plan to support major banks and accounting platforms (QuickBooks, Xero, etc.). Tell us your stack and we'll integrate in a matter of days."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. We use industry best practices: encryption in transit and at rest, strict confidentiality for human reviews."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              FAQ
            </h2>
            <p className="text-gray-600 text-lg">
              Common questions about Klaras AI bookkeeping
            </p>
          </div>

          <div className="animate-scale-in">
            <Accordion type="single" collapsible className="space-y-1">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border-b border-gray-200 last:border-b-0"
                >
                  <AccordionTrigger className="text-left font-medium text-gray-900 hover:text-gray-700 py-6 px-0">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-6 px-0">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;