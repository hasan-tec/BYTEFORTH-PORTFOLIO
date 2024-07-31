import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Card from './Card';

const AccordionDemo: React.FC = () => {
  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full"> {/* Adjust max-width to your desired size */}
        <Card
          title="Frequently Asked Questions"
          layout="default"
          items={[
            {
              icon: '',
              text: '',
              textColor: '',
            }
          ]}
        >
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How fast will I receive my website or app?</AccordionTrigger>
              <AccordionContent>
                Your project timeline depends on its complexity, but we strive to deliver within 2-4 weeks.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I start a project?</AccordionTrigger>
              <AccordionContent>
                You can start a project by filling out our online form or contacting us directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why shouldn’t I just hire my own developer?</AccordionTrigger>
              <AccordionContent>
                Our service offers professional development with a team of experts, ensuring quick turnaround times and cost-effectiveness.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What if I’m not happy with my project?</AccordionTrigger>
              <AccordionContent>
                We offer revisions to ensure you are satisfied with the final product.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer trials or sample projects?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer trial periods and can provide sample projects upon request.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger>Are there any refunds if I don’t like the service?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer a satisfaction guarantee with a refund policy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </Card>
      </div>
    </div>
  );
};

export default AccordionDemo;
