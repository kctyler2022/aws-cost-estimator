"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function AWSCostEstimator() {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const response = await fetch('/api/estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
      const data = await response.json()
      setResult(data.result)
    } catch (error) {
      console.error('Error:', error)
      setResult('An error occurred while processing your request.')
    }
    setIsLoading(false)
  }

  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>AWS Cost Estimator</CardTitle>
        <CardDescription>Get real-time AWS cost estimates and optimization tips.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="query">Describe your AWS setup or ask a question</Label>
              <Textarea
                id="query"
                placeholder="e.g., 'Estimate cost for 3 t2.micro EC2 instances running 24/7'"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button type="submit" onClick={handleSubmit} disabled={isLoading}>
          {isLoading ? 'Estimating...' : 'Get Estimate'}
        </Button>
      </CardFooter>
      {result && (
        <CardContent>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Result:</h3>
            <p className="mt-2 whitespace-pre-wrap">{result}</p>
          </div>
        </CardContent>
      )}
    </Card>
  )
}

