'use client';
import { useState } from 'react';
import { PlusIcon, XIcon, SaveIcon } from 'lucide-react';
interface SoftSkill {
  id: string;
  name: string;
}
export default function SoftSkillsForm() {
  const [softSkills, setSoftSkills] = useState<SoftSkill[]>([]);
  const [skillName, setSkillName] = useState('');
  const [error, setError] = useState('');
  const handleAddSkill = () => {
    if (!skillName.trim()) {
      setError('Skill name is required');
      return;
    }
    setError('');
    const newSkill: SoftSkill = {
      id: Date.now().toString(),
      name: skillName
    };
    setSoftSkills([...softSkills, newSkill]);
    setSkillName('');
  };
  const handleRemoveSkill = (id: string) => {
    setSoftSkills(softSkills.filter(skill => skill.id !== id));
  };
  const handleSave = () => {
    // In a real app, this would save to a backend
    alert('Soft skills saved successfully!');
    console.log('Saved soft skills:', softSkills);
  };
  return <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Manage Soft Skills
      </h2>
      <div className="mb-8">
        <div className="mb-4">
          <label htmlFor="softSkillName" className="block text-sm font-medium text-gray-700 mb-1">
            Soft Skill Name
          </label>
          <input id="softSkillName" type="text" value={skillName} onChange={e => setSkillName(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500" placeholder="e.g. Communication, Leadership, Problem Solving" />
        </div>
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <div className="flex justify-end mt-4">
          <button onClick={handleAddSkill} className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
            <PlusIcon className="w-4 h-4 mr-2" />
            Add Soft Skill
          </button>
        </div>
      </div>
      {/* Soft Skills List */}
      <div className="border-t border-gray-200 pt-6">
        <h3 className="text-lg font-medium text-gray-800 mb-4">
          Your Soft Skills
        </h3>
        {softSkills.length === 0 ? <p className="text-gray-500 italic">No soft skills added yet.</p> : <div className="flex flex-wrap gap-2">
            {softSkills.map(skill => <div key={skill.id} className="bg-gray-50 px-4 py-2 rounded-full flex items-center">
                <span>{skill.name}</span>
                <button onClick={() => handleRemoveSkill(skill.id)} className="ml-2 text-gray-400 hover:text-red-500">
                  <XIcon className="w-4 h-4" />
                </button>
              </div>)}
          </div>}
        {softSkills.length > 0 && <div className="mt-6 flex justify-end">
            <button onClick={handleSave} className="flex items-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors">
              <SaveIcon className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>}
      </div>
    </div>;
};