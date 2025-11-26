"use client"

import { cn } from "@/lib/utils"

interface PayoutRow {
  amount: string
  cap: string
  equity: string
  payouts: {
    exit1: string
    exit2: string
    exit3: string
  }
}

interface InvestorPayoutTableProps {
  rows: PayoutRow[]
  className?: string
}

export function InvestorPayoutTable({ rows, className }: InvestorPayoutTableProps) {
  return (
    <div className={cn("overflow-x-auto", className)}>
      <div className="holo-panel p-8 rounded-2xl min-w-[800px]">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#8A2FFF]/30">
              <th className="text-left py-4 px-4 text-[#3DE0FF] font-bold">Investment</th>
              <th className="text-left py-4 px-4 text-[#3DE0FF] font-bold">Valuation Cap</th>
              <th className="text-left py-4 px-4 text-[#3DE0FF] font-bold">Equity %</th>
              <th className="text-left py-4 px-4 text-[#FF1F99] font-bold">$15M Exit</th>
              <th className="text-left py-4 px-4 text-[#FF1F99] font-bold">$50M Exit</th>
              <th className="text-left py-4 px-4 text-[#FF1F99] font-bold">$150M Exit</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr 
                key={index}
                className="border-b border-[#8A2FFF]/20 hover:bg-[#8A2FFF]/10 transition-colors duration-300 group"
              >
                <td className="py-4 px-4 font-bold text-white text-lg group-hover:text-glow-violet">
                  {row.amount}
                </td>
                <td className="py-4 px-4 text-gray-300">
                  {row.cap}
                </td>
                <td className="py-4 px-4 text-gray-300">
                  {row.equity}
                </td>
                <td className="py-4 px-4 font-semibold text-[#3DE0FF]">
                  {row.payouts.exit1}
                </td>
                <td className="py-4 px-4 font-semibold text-[#3DE0FF]">
                  {row.payouts.exit2}
                </td>
                <td className="py-4 px-4 font-semibold text-[#FF1F99]">
                  {row.payouts.exit3}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

