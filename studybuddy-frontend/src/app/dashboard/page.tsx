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
import Link from "next/link";

const businessClasses = [
  {
    id: "3f614094-ed3c-4692-b2c4-524fb3520624",
    title: "Financial Accounting",
    instructor: "Prof. Jane Anderson",
  },
  {
    id: "cd33e913-2341-4838-ae1c-3f7629543b3c",
    title: "Marketing Strategies",
    instructor: "Prof. Robert Johnson",
  },
  {
    id: "92087100-a3d8-44ad-ba8e-54c7dcd40e4e",
    title: "Business Ethics",
    instructor: "Prof. Susan Lee",
  },
  {
    id: "94f38fed-6237-4465-b415-f2b80815fca8",
    title: "Corporate Finance",
    instructor: "Prof. Michael Brown",
  },
  {
    id: "282ade25-b768-4abd-9b58-907bf555cecd",
    title: "Entrepreneurship",
    instructor: "Prof. Emily White",
  },
  {
    id: "3459674f-909a-45f5-9df7-a26a54528136",
    title: "Business Analytics",
    instructor: "Prof. Daniel Kim",
  },
  {
    id: "c3bc1444-5e63-46a9-a997-75a4f14c2a2c",
    title: "Operations Management",
    instructor: "Prof. Anna Scott",
  },
  {
    id: "b7dc00b7-76e4-4650-97bc-d2f9d70e3705",
    title: "International Business",
    instructor: "Prof. David Miller",
  },
  {
    id: "76eedf23-40df-4394-b6fe-3612020d5e60",
    title: "Investment Management",
    instructor: "Prof. Laura Green",
  },
  {
    id: "b3763a18-13de-40ca-ac45-7d96e26eba64",
    title: "Organizational Behavior",
    instructor: "Prof. Kevin Hall",
  },
];

const uscTutors = [
  {
    id: "1cc98e7f-60d2-4b46-97df-2813c854eb89",
    name: "Chris Thompson",
    subject: "Financial Accounting",
    rating: 4.9,
  },
  {
    id: "7a3857dc-0c74-4ca3-86a1-b060346d2892",
    name: "Sarah Evans",
    subject: "Marketing Strategies",
    rating: 4.8,
  },
  {
    id: "e1474b2c-7a5a-4eac-b70f-2eeab42cdcbf",
    name: "Jake Carter",
    subject: "Business Ethics",
    rating: 4.7,
  },
  {
    id: "b8cc98cf-cabd-47ab-8a46-cc932e04d6f7",
    name: "Megan Davis",
    subject: "Corporate Finance",
    rating: 4.9,
  },
  {
    id: "245e9bf8-f59a-44da-a553-57fbf86e7523",
    name: "Alex Roberts",
    subject: "Entrepreneurship",
    rating: 4.8,
  },
  {
    id: "6a00ef9f-1dec-4b56-89db-75a0654a1a35",
    name: "Emily Turner",
    subject: "Business Analytics",
    rating: 4.7,
  },
  {
    id: "103ccd93-7b15-49ca-ae98-2c1bfdb45ad4",
    name: "Ryan Garcia",
    subject: "Operations Management",
    rating: 4.9,
  },
  {
    id: "8e7e4632-839f-49ce-bd14-689f01903952",
    name: "Sophia Lewis",
    subject: "International Business",
    rating: 4.8,
  },
  {
    id: "2e2b6e32-7654-407d-9a9e-66652f29097c",
    name: "Nathan Scott",
    subject: "Investment Management",
    rating: 4.7,
  },
  {
    id: "891aeb67-8a09-45b8-92b4-6a3ac3245546",
    name: "Jessica Walker",
    subject: "Organizational Behavior",
    rating: 4.9,
  },
];

function NavItem({
  icon: Icon,
  label,
  href,
}: {
  icon: React.ElementType;
  label: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer"
    >
      <Icon className="h-5 w-5 text-blue-600" />
      <span className="text-gray-800">{label}</span>
    </Link>
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
    <Link href={`/class/${encodeURIComponent(title)}`}>
      <Card className="p-6 h-48">
        <CardHeader>
          <CardTitle className="text-black">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-700">Instructor: {instructor}</p>
        </CardContent>
      </Card>
    </Link>
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
        <CardTitle className="text-black">{name}</CardTitle>
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
          <NavItem icon={Home} label="Explore" href="/dashboard" />
          <NavItem icon={MessageSquare} label="Messages" href="/messages" />
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
