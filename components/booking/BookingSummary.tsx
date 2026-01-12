import { Trek } from '@/types'

interface BookingSummaryProps {
  trek: Trek
  selectedDate: string
  participants: number
  selectedPackagePrice: number
}

export default function BookingSummary({
  trek,
  selectedDate,
  participants,
  selectedPackagePrice,
}: BookingSummaryProps) {
  const serviceFee = 500
  const subtotal = selectedPackagePrice * participants
  const taxes = subtotal * 0.05
  const total = subtotal + serviceFee + taxes

  return (
    <div className="bg-gray-50 rounded-xl p-6 sticky top-24">
      <h3 className="text-2xl font-bold text-forest-green mb-6">Booking Summary</h3>
      <div className="space-y-4 mb-6">
        <div>
          <p className="text-stone-gray text-sm">Trek</p>
          <p className="font-semibold">{trek.name}</p>
        </div>
        {selectedDate && (
          <div>
            <p className="text-stone-gray text-sm">Departure Date</p>
            <p className="font-semibold">
              {new Date(selectedDate).toLocaleDateString()}
            </p>
          </div>
        )}
        <div>
          <p className="text-stone-gray text-sm">Participants</p>
          <p className="font-semibold">{participants} person(s)</p>
        </div>
        <div className="pt-4 border-t space-y-2">
          <div className="flex justify-between">
            <span className="text-stone-gray">Package Price</span>
            <span>
              ₹{selectedPackagePrice.toLocaleString()} × {participants}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-gray">Service Fee</span>
            <span>₹{serviceFee.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-stone-gray">Taxes</span>
            <span>₹{taxes.toFixed(0)}</span>
          </div>
          <div className="flex justify-between pt-4 border-t">
            <span className="text-xl font-bold text-forest-green">Total</span>
            <span className="text-2xl font-bold text-forest-green">
              ₹{total.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
      <div className="space-y-2 pt-4 border-t text-sm text-stone-gray">
        <p>✅ Free Cancellation (30 days)</p>
        <p>✅ Secure Payment</p>
        <p>✅ Instant Confirmation</p>
      </div>
    </div>
  )
}
