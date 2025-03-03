"use client";
import React, { useState } from "react";
import { Input } from "../../../components/ui/input";
import { Button } from "../../../components/ui/button";

interface TextareaProps {
  placeholder?: string;
  className?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
  placeholder,
  className,
  name,
  onChange,
}) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      className={`border p-3 rounded-lg w-full shadow-sm focus:ring focus:ring-blue-300 ${className}`}
      rows={4}
      onChange={onChange}
    ></textarea>
  );
};

const GetStartedForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    major: "",
    year: "",
    transcriptUrl: "",
    gender: "",
    email: "",
    phone: "",
    taExperience: false,
    tutorExperience: false,
    experienceDetails: "",
    classes: "",
    desiredCareer: "",
    motivation: "",
    rewardingExperience: "",
    nearCampus: false,
    meetInPerson: false,
    availableHoursPerWeek: 0,
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const finalData = {
      ...formData,
      classes: formData.classes.split(",").map((cls) => cls.trim()),
    };

    try {
      const response = await fetch("http://localhost:3002/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        alert("Application submitted successfully!");
      } else {
        alert("Error submitting application.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          Tutor Application
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              Personal Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                type="text"
                name="name"
                placeholder="Full Name"
                className="pl-3"
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="major"
                placeholder="Major"
                className="pl-3"
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Email"
                className="pl-3"
                onChange={handleChange}
                required
              />
              <Input
                type="tel"
                name="phone"
                placeholder="Phone"
                className="pl-3"
                onChange={handleChange}
                required
              />
              <select
                name="year"
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              >
                <option value="">Select Year</option>
                <option value="FRESHMAN">Freshman</option>
                <option value="SOPHOMORE">Sophomore</option>
                <option value="JUNIOR">Junior</option>
                <option value="SENIOR">Senior</option>
                <option value="GRAD_STUDENT">Grad Student</option>
              </select>
              <select
                name="gender"
                onChange={handleChange}
                required
                className="border p-3 rounded-lg"
              >
                <option value="">Select Gender</option>
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
              </select>
            </div>
          </div>

          {/* Experience Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="taExperience"
                  onChange={handleChange}
                />
                <span>TA Experience</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="tutorExperience"
                  onChange={handleChange}
                />
                <span>Tutor Experience</span>
              </label>
              <Textarea
                name="experienceDetails"
                placeholder="Describe your experience..."
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Preferences Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-600 mb-4">
              Preferences
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Textarea
                name="classes"
                placeholder="List classes here..."
                onChange={handleChange}
              />
              <Textarea
                name="motivation"
                placeholder="Why do you want to be on this platform?"
                onChange={handleChange}
              />
              <Input
                type="text"
                name="desiredCareer"
                placeholder="Desired Career"
                className="pl-3"
                onChange={handleChange}
              />
              <Input
                type="number"
                name="availableHoursPerWeek"
                placeholder="Available Hours Per Week"
                className="pl-3"
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <Button type="submit" className="w-full mt-4 py-3 text-lg">
            Submit Application
          </Button>
        </form>
      </div>
    </div>
  );
};

export default GetStartedForm;
