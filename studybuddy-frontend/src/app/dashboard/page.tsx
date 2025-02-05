import { Home, MessageSquare, Book, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../../../components/ui/card";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md p-5 flex flex-col gap-4">
        <h1 className="text-xl font-bold text-blue-600">StudyBuddy</h1>
        <nav className="flex flex-col gap-2">
          <NavItem icon={Home} label="Explore" />
          <NavItem icon={MessageSquare} label="Messages" />
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
        
        {/* First Row: Class Cards */}
        <section>
          <h3 className="text-xl font-semibold mb-3">Available Classes</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ClassCard title="Intro to Python" instructor="John Doe" />
            <ClassCard title="Data Structures" instructor="Jane Smith" />
            <ClassCard title="AI & Machine Learning" instructor="Dr. AI" />
          </div>
        </section>

        {/* Second Row: Top Tutors */}
        <section className="mt-8">
          <h3 className="text-xl font-semibold mb-3">Top Tutors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <TutorCard name="Alice Johnson" subject="Mathematics" rating={4.9} />
            <TutorCard name="Bob Williams" subject="Computer Science" rating={4.8} />
            <TutorCard name="Emma Brown" subject="Physics" rating={4.7} />
          </div>
        </section>
      </main>
    </div>
  );
}

// Sidebar Navigation Item Component
function NavItem({ icon: Icon, label }: { icon: any; label: string }) {
  return (
    <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-200 cursor-pointer">
      <Icon className="h-5 w-5 text-blue-600" />
      <span className="text-gray-800">{label}</span>
    </div>
  );
}

// Class Card Component
function ClassCard({ title, instructor }: { title: string; instructor: string }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">Instructor: {instructor}</p>
      </CardContent>
    </Card>
  );
}

// Tutor Card Component
function TutorCard({ name, subject, rating }: { name: string; subject: string; rating: number }) {
  return (
    <Card>
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
