import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "A real-time chat app built with Next.js, Node.js and WebSockets for live messaging, and styled using Tailwind CSS. It features end-to-end encryption using the AES-GCM algorithm, providing strong privacy..",
      name: "Chat Appliation End-to-End encrypted",
      designation: "https://e2e-chat-phi.vercel.app/",
      src: "chat-app-logo.png",
    },
    {
      quote:
        "A Zapier-like workflow automation platform built with a microservices architecture using Node.js and Next.js. Services communicate asynchronously through Apache Kafka, ensuring scalability and reliability. Prisma as ORM across the platformn with PostgreSQL.",
      name: "Zapier Clone",
      designation: "https://github.com/kunaldeshwal1/zapier-project",
      src: "/zapier-logo.png",
    },

    {
      quote:
        "This CLI app allows users to find all available centers in their area by entering their location. It checks for open slots at nearby centers and sends a notification message to the user when slots become available, providing quick and convenient access to local availability updates..",
      name: "Covid Slots Enquiry",
      designation: "https://github.com/kunaldeshwal1/cowin-slots-inquiry",
      src: "covid-logo.jpg",
    },
    {
      quote:
        "A Quiz app where you are given multiple MCQ's and you are required answer to multiple questions and can see result when the test is submitted.",
      name: "Quiz App",
      designation: "https://quiz-app-roan-six.vercel.app/",
      src: "quizapp.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
