'use client'

import { useState } from 'react'
import { Calculator, TrendingUp, DollarSign, Clock } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ROICalculator() {
  const [employees, setEmployees] = useState(5)
  const [hourlyRate, setHourlyRate] = useState(25)
  const [hoursPerWeek, setHoursPerWeek] = useState(10)
  const [responseTime, setResponseTime] = useState(60) // minutes

  // Calculations
  const hoursPerMonth = hoursPerWeek * 4.33
  const costPerMonth = employees * hourlyRate * hoursPerMonth
  const costPerYear = costPerMonth * 12

  // With DONNA (assuming 80% automation)
  const automatedHours = hoursPerMonth * 0.8
  const savedHours = automatedHours
  const savedCostPerMonth = savedHours * hourlyRate
  const savedCostPerYear = savedCostPerMonth * 12

  // DONNA pricing (example: $2,500/month for Pro tier)
  const donnaCostPerMonth = 2500
  const donnaCostPerYear = donnaCostPerMonth * 12
  const netSavingsPerYear = savedCostPerYear - donnaCostPerYear
  const roiPercentage = ((netSavingsPerYear / donnaCostPerYear) * 100).toFixed(1)
  const paybackMonths = (donnaCostPerMonth / savedCostPerMonth).toFixed(1)

  // Response time improvement
  const improvedResponseTime = 5 // minutes with DONNA
  const responseTimeImprovement = ((responseTime - improvedResponseTime) / responseTime * 100).toFixed(0)

  return (
    <div className="w-full max-w-4xl mx-auto p-6 rounded-lg border border-white/10 bg-white/5">
      <div className="flex items-center gap-2 mb-6">
        <Calculator className="h-6 w-6 text-accent" />
        <h2 className="text-2xl font-bold">ROI Calculator</h2>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {/* Inputs */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">
              Number of Employees
            </label>
            <input
              type="number"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              min="1"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Average Hourly Rate ($)
            </label>
            <input
              type="number"
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              min="10"
              step="5"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Hours Spent on Manual Tasks per Week
            </label>
            <input
              type="number"
              value={hoursPerWeek}
              onChange={(e) => setHoursPerWeek(Number(e.target.value))}
              min="1"
              step="1"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              Current Average Response Time (minutes)
            </label>
            <input
              type="number"
              value={responseTime}
              onChange={(e) => setResponseTime(Number(e.target.value))}
              min="1"
              className="w-full px-4 py-2 rounded-lg bg-white/5 border border-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/30"
            />
          </div>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">Time Saved</h3>
            </div>
            <p className="text-3xl font-bold text-accent">{savedHours.toFixed(0)}</p>
            <p className="text-sm text-foreground/70">hours per month</p>
          </div>

          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">Cost Savings</h3>
            </div>
            <p className="text-3xl font-bold text-accent">${savedCostPerYear.toLocaleString()}</p>
            <p className="text-sm text-foreground/70">per year</p>
          </div>

          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="h-5 w-5 text-accent" />
              <h3 className="font-semibold">ROI</h3>
            </div>
            <p className="text-3xl font-bold text-accent">{roiPercentage}%</p>
            <p className="text-sm text-foreground/70">return on investment</p>
          </div>

          <div className="p-4 rounded-lg border border-white/10 bg-white/5">
            <h3 className="font-semibold mb-2">Payback Period</h3>
            <p className="text-3xl font-bold text-accent">{paybackMonths}</p>
            <p className="text-sm text-foreground/70">months</p>
          </div>

          <div className="p-4 rounded-lg border border-accent/50 bg-accent/10">
            <h3 className="font-semibold mb-2">Response Time Improvement</h3>
            <p className="text-3xl font-bold text-accent">{responseTimeImprovement}%</p>
            <p className="text-sm text-foreground/70">faster response time</p>
          </div>
        </div>
      </div>

      <div className="pt-6 border-t border-white/10">
        <Button size="lg" className="w-full" asChild>
          <a href="/#demo-form">Get Started with DONNA</a>
        </Button>
      </div>
    </div>
  )
}

