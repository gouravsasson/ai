import { HoverEffect } from "@/components/ui/card-hover-effect";



const projects = [
  {
    title: "Automate Processes",
    description:
      "Automate workflows by defining Business Logic to Conversations.",
    link: "",
  },
  {
    title: "Cost Savings",
    description:
      "By automating routine inquiries and tasks, AI chatbots can significantly reduce the need for a large customer service team.",
    link: "",
  },
  {
    title: "Acquire New Customers",
    description:
      "Leverage Conversational AI to engage with visitors and capture leads.",
    link: "",
  },
  {
    title: "24/7 Customer Support",
    description:
      "AI chatbots can provide round-the-clock customer service without the need for human agents. This ensures that customers can get assistance at any time .",
    link: "",
  },
  {
    title: "Scalability",
    description:
      "AI chatbots can handle multiple interactions simultaneously, making it easy to scale support operations during peak times without compromising on service quality.",
    link: "",
  },
  {
    title: "Data Collection and Insights",
    description:
      "Chatbots can gather valuable data on customer interactions, preferences, and feedback. This data can be analyzed to gain insights into customer behavior, identify trends, and make informed business decisions.",
    link: "",
  },
];


export function CardHoverEffect() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}

