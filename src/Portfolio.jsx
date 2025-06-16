import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  return (
    <div className="font-sans text-white bg-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center text-center px-6">
        <h1 className="text-5xl font-bold mb-4">C KESHAV REDDY</h1>
        <h2 className="text-2xl text-teal-400 mb-4">Tech × Biz</h2>
        <p className="text-lg max-w-xl">
          Innovator in the making. Blending code, creativity, and commerce to build what matters.
        </p>
        <div className="mt-6 flex gap-4">
          <a href="https://www.linkedin.com/in/keshav-reddy-035674215/" target="_blank">
            <Button variant="outline">LinkedIn</Button>
          </a>
          <a href="mailto:your-email@example.com">
            <Button variant="outline">Email</Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="px-6 py-12 bg-gray-800">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="max-w-2xl text-lg">
          I’m a Computer Science and IT student at MLR Institute of Technology with a passion for solving real-world problems through tech and innovation.
          From predictive dashboards to immersive virtual experiences, I craft digital solutions that are both functional and impactful.
          As Vice President of NSS at MLRIT and a Business Development Associate at Intellipaat, I merge leadership, tech expertise, and business acumen to drive meaningful outcomes.
        </p>
      </section>

      {/* Projects Section */}
      <section className="px-6 py-12">
        <h3 className="text-3xl font-bold mb-8">Projects</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold">Predicting Optimal Cricket Team XI</h4>
              <p className="text-sm text-gray-300">Tools: Power BI, Jupyter Labs, DAX</p>
              <p className="mt-2">Dashboard to recommend the best XI based on player metrics.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold">Virtual Home Tour</h4>
              <p className="text-sm text-gray-300">Tools: Unity Engine, C#</p>
              <p className="mt-2">3D walkthroughs for real estate and hospitality.</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold">Sign Talk</h4>
              <p className="text-sm text-gray-300">Tools: Python, OpenCV</p>
              <p className="mt-2">Real-time gesture recognition for enhanced interaction.</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section className="px-6 py-12 bg-gray-800">
        <h3 className="text-3xl font-bold mb-4">Skills</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Python, C, Java, SQL</li>
          <li>Power BI, Jupyter Labs, Unity, OpenCV, Git, MySQL</li>
          <li>HTML, CSS, JavaScript, Bootstrap</li>
          <li>Communication, Leadership, Problem Solving, Sales Pitching</li>
        </ul>
      </section>

      {/* Certifications Section */}
      <section className="px-6 py-12">
        <h3 className="text-3xl font-bold mb-4">Certifications</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Python Essentials – NxtWave</li>
          <li>HTML, CSS & Bootstrap – NxtWave</li>
          <li>SQL for Data Handling – NxtWave</li>
          <li>JavaScript Fundamentals – NxtWave</li>
        </ul>
      </section>

      {/* Education Section */}
      <section className="px-6 py-12 bg-gray-800">
        <h3 className="text-3xl font-bold mb-4">Education</h3>
        <p className="text-lg">B.Tech – Computer Science & Information Technology</p>
        <p className="text-lg">MLR Institute of Technology | 2021–2025</p>
        <p className="text-lg">CGPA: 7.5/10</p>
      </section>

      {/* Achievements Section */}
      <section className="px-6 py-12">
        <h3 className="text-3xl font-bold mb-4">Achievements</h3>
        <ul className="list-disc list-inside text-lg">
          <li>Appointed Vice President – NSS, MLRIT (2025)</li>
          <li>Led internal & external events focused on community welfare</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="px-6 py-6 bg-gray-900 text-center text-sm text-gray-400">
        © 2025 C Keshav Reddy | Built with 💻 & ambition
      </footer>
    </div>
  );
}
