import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { 
  BarChart3, 
  TrendingUp, 
  Building2,
  Target
} from "lucide-react"

export default function ComparatorPage() {
  const competitors = [
    { name: "Syra Coffee", revenue: 2.5, growth: 15, marketShare: 25, profitability: 12 },
    { name: "Hola Coffee", revenue: 1.8, growth: 12, marketShare: 18, profitability: 8 },
    { name: "Nomad Coffee", revenue: 3.2, growth: 18, marketShare: 32, profitability: 15 },
    { name: "Cafés de Finca", revenue: 1.5, growth: 8, marketShare: 15, profitability: 6 },
    { name: "East Crema", revenue: 2.1, growth: 20, marketShare: 21, profitability: 14 }
  ]

  const kpis = [
    { name: "Ingresos (€M)", key: "revenue", format: "€{value}M" },
    { name: "Crecimiento (%)", key: "growth", format: "{value}%" },
    { name: "Cuota de Mercado (%)", key: "marketShare", format: "{value}%" },
    { name: "Rentabilidad (%)", key: "profitability", format: "{value}%" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Overview Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Competidores</CardTitle>
              <Building2 className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">{competitors.length}</div>
              <p className="text-xs text-neutral-500">
                Empresas analizadas
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Mercado Total</CardTitle>
              <TrendingUp className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">
                €{competitors.reduce((acc, c) => acc + c.revenue, 0).toFixed(1)}M
              </div>
              <p className="text-xs text-neutral-500">
                Ingresos combinados
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Crecimiento Promedio</CardTitle>
              <BarChart3 className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">
                {(competitors.reduce((acc, c) => acc + c.growth, 0) / competitors.length).toFixed(1)}%
              </div>
              <p className="text-xs text-neutral-500">
                Crecimiento promedio
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Posición East Crema</CardTitle>
              <Target className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">#2</div>
              <p className="text-xs text-neutral-500">
                En rentabilidad
              </p>
            </CardContent>
          </Card>
        </div>

        {/* KPI Comparison Tables */}
        <div className="space-y-8">
          {kpis.map((kpi) => (
            <Card key={kpi.key} className="bg-white/90 backdrop-blur-sm border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <BarChart3 className="h-5 w-5 text-neutral-600" />
                  {kpi.name}
                </CardTitle>
                <CardDescription className="text-neutral-600">
                  Comparativa de {kpi.name.toLowerCase()} entre competidores
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* KPI Values */}
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {competitors.map((competitor, index) => {
                      const value = competitor[kpi.key as keyof typeof competitor] as number
                      const isEastCrema = competitor.name === "East Crema"
                      const isHighest = value === Math.max(...competitors.map(c => c[kpi.key as keyof typeof c] as number))
                      
                      return (
                        <div 
                          key={competitor.name}
                          className={`p-4 rounded-lg border-2 ${
                            isEastCrema 
                              ? 'border-amber-500 bg-amber-50' 
                              : isHighest 
                                ? 'border-green-500 bg-green-50' 
                                : 'border-gray-200 bg-white'
                          }`}
                        >
                          <div className="text-center">
                            <div className={`text-sm font-medium ${
                              isEastCrema ? 'text-amber-800' : 'text-gray-600'
                            }`}>
                              {competitor.name}
                            </div>
                            <div className={`text-2xl font-bold mt-2 ${
                              isEastCrema ? 'text-amber-600' : isHighest ? 'text-green-600' : 'text-gray-900'
                            }`}>
                              {kpi.format.replace('{value}', value.toString())}
                            </div>
                            {isEastCrema && (
                              <div className="text-xs text-amber-600 font-medium mt-1">
                                East Crema
                              </div>
                            )}
                            {isHighest && !isEastCrema && (
                              <div className="text-xs text-green-600 font-medium mt-1">
                                Líder
                              </div>
                            )}
                          </div>
                        </div>
                      )
                    })}
                  </div>

                  {/* Bar Chart Visualization */}
                  <div className="space-y-2">
                    {competitors.map((competitor) => {
                      const value = competitor[kpi.key as keyof typeof competitor] as number
                      const maxValue = Math.max(...competitors.map(c => c[kpi.key as keyof typeof c] as number))
                      const percentage = (value / maxValue) * 100
                      const isEastCrema = competitor.name === "East Crema"
                      
                      return (
                        <div key={competitor.name} className="flex items-center gap-4">
                          <div className="w-24 text-sm font-medium text-gray-600">
                            {competitor.name}
                          </div>
                          <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                            <div 
                              className={`h-6 rounded-full transition-all duration-500 ${
                                isEastCrema 
                                  ? 'bg-amber-500' 
                                  : percentage === 100 
                                    ? 'bg-green-500' 
                                    : 'bg-blue-500'
                              }`}
                              style={{ width: `${percentage}%` }}
                            />
                            <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-white">
                              {kpi.format.replace('{value}', value.toString())}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Insights */}
        <Card className="bg-gradient-to-r from-neutral-50 to-neutral-100 border-neutral-200">
          <CardHeader>
            <CardTitle className="text-neutral-800">💡 Insights Estratégicos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">Fortalezas de East Crema</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Segundo lugar en rentabilidad (14%)</li>
                  <li>• Crecimiento superior al promedio (20%)</li>
                  <li>• Posición sólida en cuota de mercado (21%)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-neutral-800 mb-2">Oportunidades de Mejora</h4>
                <ul className="space-y-1 text-sm text-neutral-700">
                  <li>• Incrementar ingresos para competir con Nomad</li>
                  <li>• Mejorar rentabilidad para superar a Syra</li>
                  <li>• Mantener el crecimiento actual</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
