"use client";

import {
  Home,
  MessageSquare,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const businessClasses = [
  { title: "Financial Accounting", instructor: "Prof. Jane Anderson" },
  { title: "Marketing Strategies", instructor: "Prof. Robert Johnson" },
  { title: "Business Ethics", instructor: "Prof. Susan Lee" },
  { title: "Corporate Finance", instructor: "Prof. Michael Brown" },
  { title: "Entrepreneurship", instructor: "Prof. Emily White" },
  { title: "Business Analytics", instructor: "Prof. Daniel Kim" },
  { title: "Operations Management", instructor: "Prof. Anna Scott" },
  { title: "International Business", instructor: "Prof. David Miller" },
  { title: "Investment Management", instructor: "Prof. Laura Green" },
  { title: "Organizational Behavior", instructor: "Prof. Kevin Hall" },
];

const uscTutors = [
  { name: "Chris Thompson", subject: "Financial Accounting", rating: 4.9 },
  { name: "Sarah Evans", subject: "Marketing Strategies", rating: 4.8 },
  { name: "Jake Carter", subject: "Business Ethics", rating: 4.7 },
  { name: "Megan Davis", subject: "Corporate Finance", rating: 4.9 },
  { name: "Alex Roberts", subject: "Entrepreneurship", rating: 4.8 },
  { name: "Emily Turner", subject: "Business Analytics", rating: 4.7 },
  { name: "Ryan Garcia", subject: "Operations Management", rating: 4.9 },
  { name: "Sophia Lewis", subject: "International Business", rating: 4.8 },
  { name: "Nathan Scott", subject: "Investment Management", rating: 4.7 },
  { name: "Jessica Walker", subject: "Organizational Behavior", rating: 4.9 },
];

function NavItem({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
      <Icon className="h-5 w-5 text-blue-600" />
      <span className="text-gray-800">{label}</span>
    </div>
  );
}

function ClassCard({
  title,
  instructor,
}: {
  title: string;
  instructor: string;
}) {
  return (
    <Card className="p-6 h-48">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">Instructor: {instructor}</p>
      </CardContent>
    </Card>
  );
}

function TutorCard({
  name,
  subject,
  rating,
}: {
  name: string;
  subject: string;
  rating: number;
}) {
  return (
    <Card className="p-6 h-48">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">Subject: {subject}</p>
        <p className="text-yellow-500">⭐ {rating}</p>
      </CardContent>
    </Card>
  );
}

export default function Dashboard() {
  const [classIndex, setClassIndex] = useState(0);
  const [tutorIndex, setTutorIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [tutorDirection, setTutorDirection] = useState(1);

  const handleClassChange = (increment: number) => {
    setDirection(increment);
    setClassIndex(
      (prevIndex) =>
        (prevIndex + increment * 3 + businessClasses.length) %
        businessClasses.length
    );
  };

  const handleTutorChange = (increment: number) => {
    setTutorDirection(increment);
    setTutorIndex(
      (prevIndex) =>
        (prevIndex + increment * 3 + uscTutors.length) % uscTutors.length
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-100 relative">
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col gap-4">
        <h1 className="text-xl font-bold text-blue-600">StudyBuddy</h1>
        <nav className="flex flex-col gap-2">
          <NavItem icon={Home} label="Explore" />
          <NavItem icon={MessageSquare} label="Messages" />
        </nav>
      </aside>

      <div className="absolute top-4 right-4 w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
        <User className="text-gray-600 h-6 w-6" />
      </div>

      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>

        {/* Class Section */}
        <section>
          <h3 className="text-xl font-semibold mb-3">
            Available USC Marshall Classes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait" custom={direction}>
              {businessClasses.slice(classIndex, classIndex + 3).map((c) => (
                <motion.div
                  key={c.title}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -direction * 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <ClassCard title={c.title} instructor={c.instructor} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => handleClassChange(-1)}
              className="border border-gray-500 rounded-full p-2 bg-white"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => handleClassChange(1)}
              className="border border-gray-500 rounded-full p-2 bg-white"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </section>

        {/* Tutor Section */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-3">
            Top USC Business Tutors
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait" custom={tutorDirection}>
              {uscTutors.slice(tutorIndex, tutorIndex + 3).map((t) => (
                <motion.div
                  key={t.name}
                  custom={tutorDirection}
                  initial={{ opacity: 0, x: tutorDirection * 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -tutorDirection * 50 }}
                  transition={{ duration: 0.3 }}
                >
                  <TutorCard
                    name={t.name}
                    subject={t.subject}
                    rating={t.rating}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          <div className="flex justify-end gap-2 mt-4">
            <button
              onClick={() => handleTutorChange(-1)}
              className="border border-gray-500 rounded-full p-2 bg-white"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            <button
              onClick={() => handleTutorChange(1)}
              className="border border-gray-500 rounded-full p-2 bg-white"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
