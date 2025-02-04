import { Input } from "../../components/ui/input";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import { Briefcase, Building, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20 text-center">
        <h1 className="text-4xl font-bold">Find the Best Jobs & Internships</h1>
        <p className="mt-2 text-lg">Explore opportunities tailored for students & recent grads</p>
        <div className="mt-6 flex justify-center gap-2">
          <Input className="w-96 text-black" placeholder="Search jobs, companies..." />
          <Button className="bg-white text-blue-600">Search</Button>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Featured Jobs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <JobCard title="Software Engineer Intern" company="Google" />
          <JobCard title="Data Analyst" company="Microsoft" />
          <JobCard title="Product Designer" company="Apple" />
        </div>
      </section>

      {/* Companies Section */}
      <section className="bg-gray-200 py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Top Hiring Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <CompanyCard name="Google" />
            <CompanyCard name="Amazon" />
            <CompanyCard name="Tesla" />
          </div>
        </div>
      </section>

      {/* Student Profiles */}
      <section className="container mx-auto py-12">
        <h2 className="text-2xl font-semibold mb-4">Student Success Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StudentCard name="Alex Johnson" position="Software Engineer at Meta" />
          <StudentCard name="Samantha Lee" position="Data Scientist at IBM" />
          <StudentCard name="Michael Chen" position="UX Designer at Airbnb" />
        </div>
      </section>
    </main>
  );
}

// Job Card Component
const JobCard = ({ title, company }: { title: string; company: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent className="flex items-center justify-between">
      <p className="text-gray-700">{company}</p>
      <Briefcase className="text-blue-600" />
    </CardContent>
  </Card>
);

// Company Card Component
const CompanyCard = ({ name }: { name: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent className="flex items-center justify-between">
      <p className="text-gray-700">We're hiring!</p>
      <Building className="text-blue-600" />
    </CardContent>
  </Card>
);

// Student Success Card Component
const StudentCard = ({ name, position }: { name: string; position: string }) => (
  <Card>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
    </CardHeader>
    <CardContent className="flex items-center justify-between">
      <p className="text-gray-700">{position}</p>
      <Users className="text-blue-600" />
    </CardContent>
  </Card>
);
