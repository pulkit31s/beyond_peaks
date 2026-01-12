import { Shield, CheckCircle } from 'lucide-react'
import { Trek } from '@/types'

interface DifficultyFitnessProps {
  trek: Trek
}

const difficultyLevels = {
  Easy: 1,
  Moderate: 2,
  Difficult: 4,
  Challenging: 5,
}

export default function DifficultyFitness({ trek }: DifficultyFitnessProps) {
  const currentLevel = difficultyLevels[trek.difficulty]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-12 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-forest-green mb-12 text-center">
          Difficulty Level & Fitness Requirements
        </h2>

        {/* Difficulty Scale */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-forest-green mb-6">Difficulty Scale</h3>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((level) => (
              <div key={level} className="flex-1">
                <div
                  className={`
                    h-12 rounded-lg flex items-center justify-center text-white font-semibold
                    ${level === currentLevel ? 'bg-forest-green scale-110' : 'bg-gray-300'}
                    ${level === 1 ? 'bg-green-500' : ''}
                    ${level === 2 ? 'bg-yellow-500' : ''}
                    ${level === 3 ? 'bg-orange-500' : ''}
                    ${level === 4 ? 'bg-red-500' : ''}
                    ${level === 5 ? 'bg-red-800' : ''}
                  `}
                >
                  {level === 1 && 'Easy'}
                  {level === 2 && 'Moderate'}
                  {level === 3 && 'Challenging'}
                  {level === 4 && 'Difficult'}
                  {level === 5 && 'Extreme'}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Fitness Checklist */}
        {trek.fitnessRequirements && trek.fitnessRequirements.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-forest-green mb-6">Are You Ready?</h3>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <ul className="space-y-3">
                {trek.fitnessRequirements.map((requirement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 border-2 border-forest-green rounded flex-shrink-0 mt-0.5" />
                    <span className="text-stone-gray">{requirement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Preparation Tips */}
        {trek.preparationTips && trek.preparationTips.length > 0 && (
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-forest-green mb-6">How to Prepare</h3>
            <ul className="space-y-2">
              {trek.preparationTips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3 text-stone-gray">
                  <span className="text-forest-green font-bold">{index + 1}.</span>
                  <span>{tip}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Safety Measures */}
        {trek.safetyMeasures && (
          <div className="bg-green-50 border-l-4 border-forest-green p-6 rounded-lg">
            <div className="flex items-start gap-3">
              <Shield className="h-6 w-6 text-forest-green flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-forest-green mb-2">
                  Your Safety is Our Priority
                </h3>
                <p className="text-stone-gray">{trek.safetyMeasures}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
