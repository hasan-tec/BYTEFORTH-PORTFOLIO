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
      <div className="max-w-3xl w-full"> {/* Adjust max-width to your desired size */}
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
              <AccordionTrigger>How fast will I receive my videos?</AccordionTrigger>
              <AccordionContent>
                Your videos will be delivered within 48 hours.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I request videos?</AccordionTrigger>
              <AccordionContent>
                You can request videos via our online form or contact us directly.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Why wouldn’t I just hire my own editor?</AccordionTrigger>
              <AccordionContent>
                Our service offers professional editing with quick turnaround times at a fraction of the cost.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>What if I’m not happy with my video?</AccordionTrigger>
              <AccordionContent>
                We offer revisions to ensure you are satisfied with the final product.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>Do you offer trials or make example videos?</AccordionTrigger>
              <AccordionContent>
                Yes, we offer trial periods and can provide example videos upon request.
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
