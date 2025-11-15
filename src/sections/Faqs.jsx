"use client"
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services do you offer?",
    a: "We offer web development, mobile apps, SaaS solutions, UI/UX design, and growth strategy consulting tailored to your business needs. Our team specializes in end-to-end digital product development."
  },
  {
    q: "What is your MVP development process?",
    a: "Our MVP process involves understanding your vision, defining key features, rapid prototyping, agile development, and iterative testing to launch quickly and validate ideas with real users."
  },
  {
    q: "Why choose FreelanceStudio over other agencies?",
    a: "We focus on building results-driven digital experiences, combining creativity, technology, and strategy. With 18+ years of experience and a track record of 200+ successful projects, we deliver excellence."
  },
  {
    q: "How do you measure project success?",
    a: "We measure success by client satisfaction, business goals achieved, user engagement metrics, and tangible ROI. Every project includes analytics and performance tracking."
  },
  {
    q: "How do you ensure the success of my digital product?",
    a: "Through user-centered design, continuous testing, data-driven decisions, and aligning the product with your business objectives. We validate assumptions early and iterate based on feedback."
  },
  {
    q: "Can you work with existing systems and equipment?",
    a: "Absolutely! We integrate seamlessly with your current systems and ensure smooth interoperability with existing tools, databases, and infrastructure. Legacy modernization is our specialty."
  },
];

const Faqs = () => {
  return (
    <section className="min-h-screen py-20 bg-gray-50 px-6 bg-white">
      <div className="max-w-7xl mx-auto px-8 flex flex-col lg:flex-row gap-16 tracking-[-0.04em] leading-[1.2]">

        {/* Left Side - Top-Aligned Plain Text */}
        <div className="flex flex-col lg:w-2/5 space-y-2">
          <h1 className="text-5xl font-medium text-gray-900 ">
            Frequently Asked <br/> Questions
          </h1>
          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            You can find the answers to frequently asked questions below.
          </p>
        </div>

        {/* Right Side - Accordion without hover underline */}
        <div className="flex-1 lg:w-3/5 space-y-2">
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="group">
                <AccordionTrigger className="px-4 py-3 text-lg font-medium text-gray-900 no-underline hover:no-underline transition-colors">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3 text-gray-700 text-sm">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
};

export default Faqs;
