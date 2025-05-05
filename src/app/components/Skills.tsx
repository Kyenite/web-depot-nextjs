import React from 'react';
export const Skills = () => {
  const technicalSkills = [{
    name: 'JavaScript',
    proficiency: 90
  }, {
    name: 'React',
    proficiency: 85
  }, {
    name: 'Node.js',
    proficiency: 80
  }, {
    name: 'Python',
    proficiency: 75
  }, {
    name: 'SQL',
    proficiency: 85
  }, {
    name: 'Network Security',
    proficiency: 70
  }, {
    name: 'Cloud Computing',
    proficiency: 75
  }, {
    name: 'System Administration',
    proficiency: 80
  }];
  const softSkills = ['Problem Solving', 'Communication', 'Team Collaboration', 'Project Management', 'Critical Thinking', 'Time Management', 'Adaptability', 'Attention to Detail'];
  return <section id="skills" className="w-full bg-slate-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My BSIT education and professional experience have helped me develop
            a diverse set of technical skills.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Technical Proficiency
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => <div key={index}>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{
                  width: `${skill.proficiency}%`
                }}></div>
                  </div>
                </div>)}
            </div>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-6 text-gray-800">
              Soft Skills
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => <div key={index} className="bg-white p-4 rounded-lg shadow-sm flex items-center">
                  <div className="w-3 h-3 bg-blue-600 rounded-full mr-3"></div>
                  <span className="text-gray-700">{skill}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
};