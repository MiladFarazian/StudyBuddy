"use client";

import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../../../components/ui/card";
import Link from "next/link";

interface Tutor {
  name: string;
  subject: string;
  rating: number;
}

interface ClassInfo {
  instructor: string;
  description: string;
  tutors: Tutor[];
}

const classData: Record<string, ClassInfo> = {
  "Financial Accounting": {
    instructor: "Prof. Jane Anderson",
    description:
      "An introduction to the principles and procedures of financial accounting for businesses.",
    tutors: [],
  },
  "Marketing Strategies": {
    instructor: "Prof. Robert Johnson",
    description:
      "Study of marketing principles, strategies, and real-world applications.",
    tutors: [],
  },
  "Business Ethics": {
    instructor: "Prof. Susan Lee",
    description:
      "Exploration of ethical challenges and dilemmas in the business world.",
    tutors: [],
  },
  "Corporate Finance": {
    instructor: "Prof. Michael Brown",
    description:
      "Study of financial management within corporations and investment decisions.",
    tutors: [],
  },
  Entrepreneurship: {
    instructor: "Prof. Emily White",
    description: "Fundamentals of launching and managing a successful startup.",
    tutors: [],
  },
  "Business Analytics": {
    instructor: "Prof. Daniel Kim",
    description:
      "Using data-driven strategies to enhance business decision-making.",
    tutors: [],
  },
  "Operations Management": {
    instructor: "Prof. Anna Scott",
    description:
      "Understanding the processes involved in the production and delivery of goods and services.",
    tutors: [],
  },
  "International Business": {
    instructor: "Prof. David Miller",
    description:
      "Study of global markets, international trade, and business strategies.",
    tutors: [],
  },
  "Investment Management": {
    instructor: "Prof. Laura Green",
    description:
      "Portfolio management, financial analysis, and investment decision-making.",
    tutors: [],
  },
  "Organizational Behavior": {
    instructor: "Prof. Kevin Hall",
    description:
      "Study of human behavior in organizational settings and its impact on performance.",
    tutors: [],
  },
};

function TutorCard({ name, subject, rating }: Tutor) {
  return (
    <Card className="p-6 h-48 mt-10">
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

export default function ClassPage() {
  const params = useParams();
  const classTitle = decodeURIComponent(params.classTitle as string);
  const classInfo = classData[classTitle];

  if (!classInfo) {
    return <p>Class not found.</p>;
  }

  return (
    <div className="p-6 max-w-4xl mx-auto relative">
      <Link
        href="/dashboard"
        className="absolute top-4 left-2 text-gray-500 font-semibold hover:text-gray-700 transition"
      >
        ← Back to Dashboard
      </Link>
      <h1 className="text-3xl font-bold mb-4 mt-10">{classTitle}</h1>
      <h2 className="text-xl text-gray-700">
        Instructor: {classInfo.instructor}
      </h2>
      <p className="text-gray-600 mt-4">{classInfo.description}</p>

      <h3 className="text-2xl font-semibold mt-16 mb-3">
        Tutors for this class
      </h3>
      {classInfo.tutors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {classInfo.tutors.map((tutor: Tutor) => (
            <TutorCard key={tutor.name} {...tutor} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500 italic mt-4">
          Currently no tutors for this class
        </p>
      )}
    </div>
  );
}
