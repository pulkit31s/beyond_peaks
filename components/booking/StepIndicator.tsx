'use client'

interface StepIndicatorProps {
  steps: string[]
  currentStep: number
}

export default function StepIndicator({ steps, currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center gap-4 mb-8">
      {steps.map((step, index) => {
        const stepNumber = index + 1
        const isActive = stepNumber === currentStep
        const isCompleted = stepNumber < currentStep
        return (
          <div key={step} className="flex items-center gap-3">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold border-2 transition-colors ${
                isActive
                  ? 'bg-forest-green text-white border-forest-green'
                  : isCompleted
                  ? 'bg-forest-green/10 text-forest-green border-forest-green'
                  : 'bg-white text-stone-gray border-gray-200'
              }`}
            >
              {stepNumber}
            </div>
            <div>
              <p
                className={`text-sm font-semibold ${
                  isActive ? 'text-forest-green' : 'text-stone-gray'
                }`}
              >
                {step}
              </p>
            </div>
            {index !== steps.length - 1 && (
              <div className="w-12 h-0.5 bg-gray-200" />
            )}
          </div>
        )
      })}
    </div>
  )
}
