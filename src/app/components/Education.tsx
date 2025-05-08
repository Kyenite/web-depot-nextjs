import React from 'react';
import { CalendarIcon, MapPinIcon, AwardIcon, BookOpenIcon } from 'lucide-react';
export const Education = () => {
  const education = [{
    degree: 'Bachelor of Science in Information Technology',
    institution: 'Saint Michael College of Caraga',
    location: 'Atupan St., Nasipit 8602, Rizal St, Nasipit, Agusan Del Norte',
    period: '2021 - 2025',
    description: 'Focuses on the study of computer systems, software development, networking, web technologies, and IT infrastructure. It equips students with practical skills and knowledge to design, develop, manage, and maintain information systems and solutions that meet organizational needs.',
    courses: ['Database Management Systems', 'OOP', 'Network Security', 'Web Development', 'System Administration', 'Data Structures & Algorithms']
  }, {
    degree: 'Technological and Vocational Livelihood - Information and Communication Technology',
    institution: 'Senior High School in Carmen',
    location: 'Carmen, Agusan Del Norte',
    period: '2019 - 2021',
    description: 'Practical training in information and communications technology, focusing on digital literacy, computer systems servicing, and applied programming skills..',
    courses: ['Introduction to Programming', 'Troubleshooting', 'Computer Architecture', 'Basic Networking']
  }];
  const certifications = [{
    name: 'Certificate of Recognition',
    issuer: 'The Philippine Society of Information Technology Educators (PSITE)',
    date: '2024',
    icon: 'award'
  }, {
    name: 'Certificate of Recognition',
    issuer: 'The Philippine Society of Information Technology Educators (PSITE)',
    date: '2024',
    icon: 'award'
  }, {
    name: 'Certificate of Completion (486 hours) OJT',
    issuer: 'Department of Social Welfare and Developement (DSWD)',
    date: '2025',
    icon: 'award'
  }];
  return <section id="education" className="w-full bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Education & Certifications
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My academic background and professional certifications in
            Information Technology.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
              <BookOpenIcon size={20} className="mr-2 text-blue-600" />
              Academic Background
            </h3>
            <div className="space-y-8">
              {education.map((edu, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h4 className="text-lg font-bold text-gray-800 mb-1">
                    {edu.degree}
                  </h4>
                  <h5 className="text-md font-medium text-blue-600 mb-3">
                    {edu.institution}
                  </h5>
                  <div className="flex flex-wrap gap-y-2 mb-3 text-sm text-gray-600">
                    <div className="flex items-center mr-6">
                      <CalendarIcon size={16} className="mr-1" />
                      {edu.period}
                    </div>
                    <div className="flex items-center">
                      <MapPinIcon size={16} className="mr-1" />
                      {edu.location}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{edu.description}</p>
                  <div>
                    <h6 className="text-sm font-semibold text-gray-700 mb-2">
                      Key Courses:
                    </h6>
                    <div className="flex flex-wrap gap-2">
                      {edu.courses.map((course, courseIndex) => <span key={courseIndex} className="bg-gray-100 text-gray-700 text-xs px-3 py-1 rounded-full">
                          {course}
                        </span>)}
                    </div>
                  </div>
                </div>)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800 flex items-center">
              <AwardIcon size={20} className="mr-2 text-blue-600" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => <div key={index} className="bg-white p-5 rounded-lg shadow-sm border-l-4 border-blue-600">
                  <h4 className="font-bold text-gray-800 mb-1">{cert.name}</h4>
                  <div className="text-sm text-gray-600 mb-2">
                    {cert.issuer}
                  </div>
                  <div className="text-xs text-gray-500 flex items-center">
                    <CalendarIcon size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};