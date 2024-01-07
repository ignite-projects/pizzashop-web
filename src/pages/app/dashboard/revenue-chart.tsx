import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid } from "recharts"
import colors from "tailwindcss/colors"

const data = [
  { date: '07/01', revenue: 1200 },
  { date: '08/01', revenue: 800 },
  { date: '09/01', revenue: 900 },
  { date: '10/01', revenue: 400 },
  { date: '11/01', revenue: 2300 },
  { date: '12/01', revenue: 800 },
  { date: '13/01', revenue: 640 },
]

export function RevenueChart() {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={240}>
          <LineChart data={data} style={{ fontSize: 12 }}>
            <XAxis dataKey="date" axisLine={false} tickLine={false} dy={16} />
            
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) => value.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })} />

            <CartesianGrid vertical={false} className="stroke-muted" />

            <Line stroke={colors.violet[500]} type="linear" strokeWidth={2} dataKey="revenue" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
