import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A real-time chat app built with Next.js, Node.js and WebSockets for live messaging, and styled using Tailwind CSS. It features end-to-end encryption using the AES-GCM algorithm, providing strong privacy..",
      name: "Chat Appliation End-to-End encrypted",
      designation: "Chat Application",
      src: "chat-app-logo.png",
    },
    {
      quote:
        "A Zapier-like workflow automation platform built with a microservices architecture using Node.js and Next.js. Services communicate asynchronously through Apache Kafka, ensuring scalability and reliability. Prisma as ORM across the platformn with PostgreSQL.",
      name: "Zapier Clone",
      designation: "Zapier Clone",
      src: "/zapier-logo.png",
    },

    {
      quote:
        "This CLI app allows users to find all available centers in their area by entering their location. It checks for open slots at nearby centers and sends a notification message to the user when slots become available, providing quick and convenient access to local availability updates..",
      name: "Covid Slots Enquiry",
      designation: "Covid Slots Enquiry",
      src: "covid-logo.jpg",
    },
    {
      quote:
        "A TODO list app allows users to easily manage their daily tasks by adding, editing, and deleting items as needed. Users can mark tasks as completed, set due dates, and organize their list for better productivity. The app provides a simple and intuitive interface to help users track and prioritize their responsibilities efficiently.",
      name: "Todo App",
      designation: "Todo List",
      src: "todo-list-logo.jpg",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
