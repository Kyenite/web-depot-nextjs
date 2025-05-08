'use client';
import { useState } from 'react';
import { PlusIcon, XIcon, SaveIcon } from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  proficiency: number;
}

export default function SkillsForm() {
  const [skills, setSkills] = useState<Skill[]>([]);
  const [skillName, setSkillName] = useState('');
  const [proficiency, setProficiency] = useState(50);
  const [error, setError] = useState('');
  const handleAddSkill = () => {
    if (!skillName.trim()) {
      setError('Skill name is required');
      return;
    }
    setError('');
    const newSkill: Skill = {
      id: Date.now().toString(),
      name: skillName,
      proficiency
    };
    setSkills([...skills, newSkill]);
    setSkillName('');
    setProficiency(50);
  };
  const handleRemoveSkill = (id: string) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };
  const handleSave = () => {
    // In a real app, this would save to a backend
    alert('Skills saved successfully!');
    console.log('Saved skills:', skills);
  };

  return(
     <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Manage Technical Skills
        </h2>
        <div className="mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div className="col-span-2">
              <label htmlFor="skillName" className="block text-sm font-medium text-gray-700 mb-1">
                Skill Name
              </label>
              <input id="skillName" type="text" value={skillName} onChange={e => setSkillName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. React, JavaScript, Python" />
            </div>
            <div>
              <label htmlFor="proficiency" className="block text-sm font-medium text-gray-700 mb-1">
                Proficiency ({proficiency}%)
              </label>
              <input id="proficiency" type="range" min="0" max="100" value={proficiency} onChange={e => setProficiency(parseInt(e.target.value))} className="w-full" />
            </div>
          </div>
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <div className="flex justify-end mt-4">
            <button onClick={handleAddSkill} className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              <PlusIcon className="w-4 h-4 mr-2" />
              Add Skill
            </button>
          </div>
        </div>
        {/* Skills List */}
        <div className="border-t border-gray-200 pt-6">
          <h3 className="text-lg font-medium text-gray-800 mb-4">Your Skills</h3>
          {skills.length === 0 ? <p className="text-gray-500 italic">No skills added yet.</p> : <div className="space-y-4">
              {skills.map(skill => <div key={skill.id} className="bg-gray-50 p-4 rounded-md flex items-center justify-between">
                  <div className="flex-1">
                    <h4 className="font-medium">{skill.name}</h4>
                    <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-indigo-600 rounded-full" style={{
                  width: `${skill.proficiency}%`
                }}></div>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-xs text-gray-500">Beginner</span>
                      <span className="text-xs text-gray-500">Expert</span>
                    </div>
                  </div>
                  <button onClick={() => handleRemoveSkill(skill.id)} className="ml-4 p-1 text-gray-400 hover:text-red-500">
                    <XIcon className="w-5 h-5" />
                  </button>
                </div>)}
            </div>}
          {skills.length > 0 && <div className="mt-6 flex justify-end">
              <button onClick={handleSave} className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
                <SaveIcon className="w-4 h-4 mr-2" />
                Save Changes
              </button>
            </div>}
        </div>
      </div>
    );
};