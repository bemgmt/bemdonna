import { Check, X } from 'lucide-react'

interface ComparisonRow {
  feature: string
  free: boolean | string
  professional: boolean | string
  enterprise: boolean | string
}

interface ComparisonTableProps {
  rows: ComparisonRow[]
  className?: string
}

export function ComparisonTable({ rows, className = '' }: ComparisonTableProps) {
  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-[#3DE0FF] mx-auto" />
      ) : (
        <X className="w-5 h-5 text-gray-600 mx-auto" />
      )
    }
    return <span className="text-gray-300">{value}</span>
  }

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-[#8A2FFF]/20">
            <th className="text-left py-4 px-6 text-gray-400 font-semibold">Feature</th>
            <th className="text-center py-4 px-6 text-gray-400 font-semibold">Free</th>
            <th className="text-center py-4 px-6 text-gray-400 font-semibold">Professional</th>
            <th className="text-center py-4 px-6 text-gray-400 font-semibold">Enterprise</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr
              key={index}
              className="border-b border-[#8A2FFF]/10 hover:bg-white/5 transition-colors"
            >
              <td className="py-4 px-6 text-white font-medium">{row.feature}</td>
              <td className="py-4 px-6 text-center">{renderCell(row.free)}</td>
              <td className="py-4 px-6 text-center">{renderCell(row.professional)}</td>
              <td className="py-4 px-6 text-center">{renderCell(row.enterprise)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

