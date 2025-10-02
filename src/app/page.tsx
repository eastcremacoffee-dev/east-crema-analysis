import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { 
  Building2, 
  FileText, 
  TrendingUp, 
  Newspaper, 
  BarChart3,
  Upload,
  Filter,
  Calendar
} from "lucide-react"
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

export default function Home() {
  // Datos de ventas por año
  const salesData = {
    2023: [
      { name: 'Syra Coffee', ventas: 2.5, crecimiento: 15 },
      { name: 'Hola Coffee', ventas: 1.8, crecimiento: 12 },
      { name: 'Nomad Coffee', ventas: 3.2, crecimiento: 18 },
      { name: 'Cafés de Finca', ventas: 1.5, crecimiento: 8 },
      { name: 'East Crema', ventas: 2.1, crecimiento: 20 }
    ],
    2022: [
      { name: 'Syra Coffee', ventas: 2.2, crecimiento: 12 },
      { name: 'Hola Coffee', ventas: 1.6, crecimiento: 8 },
      { name: 'Nomad Coffee', ventas: 2.7, crecimiento: 15 },
      { name: 'Cafés de Finca', ventas: 1.4, crecimiento: 5 },
      { name: 'East Crema', ventas: 1.8, crecimiento: 18 }
    ],
    2021: [
      { name: 'Syra Coffee', ventas: 2.0, crecimiento: 10 },
      { name: 'Hola Coffee', ventas: 1.5, crecimiento: 6 },
      { name: 'Nomad Coffee', ventas: 2.3, crecimiento: 12 },
      { name: 'Cafés de Finca', ventas: 1.3, crecimiento: 3 },
      { name: 'East Crema', ventas: 1.5, crecimiento: 15 }
    ]
  }

  // Comparación año actual vs anterior
  const yearComparison = [
    { name: 'Syra Coffee', '2022': 2.2, '2023': 2.5, crecimiento: 13.6 },
    { name: 'Hola Coffee', '2022': 1.6, '2023': 1.8, crecimiento: 12.5 },
    { name: 'Nomad Coffee', '2022': 2.7, '2023': 3.2, crecimiento: 18.5 },
    { name: 'Cafés de Finca', '2022': 1.4, '2023': 1.5, crecimiento: 7.1 },
    { name: 'East Crema', '2022': 1.8, '2023': 2.1, crecimiento: 16.7 }
  ]

  // Datos para gráfico de crecimiento
  const growthData = [
    { name: 'Syra Coffee', crecimiento: 15 },
    { name: 'Hola Coffee', crecimiento: 12 },
    { name: 'Nomad Coffee', crecimiento: 18 },
    { name: 'Cafés de Finca', crecimiento: 8 },
    { name: 'East Crema', crecimiento: 20 }
  ]

  const COLORS = ['#000f9f', '#3b82f6', '#10b981', '#f59e0b', '#ef4444']

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Análisis Inteligente de Competidores
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Extrae KPIs automáticamente de cuentas anuales, compara competidores 
            y obtén insights estratégicos para East Crema Coffee
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Competidores</CardTitle>
              <Building2 className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">5</div>
              <p className="text-xs text-neutral-500">
                Empresas analizadas
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Documentos</CardTitle>
              <FileText className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">12</div>
              <p className="text-xs text-neutral-500">
                Cuentas anuales procesadas
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">KPIs Extraídos</CardTitle>
              <TrendingUp className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">45</div>
              <p className="text-xs text-neutral-500">
                Métricas financieras
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Noticias</CardTitle>
              <Newspaper className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">8</div>
              <p className="text-xs text-neutral-500">
                Artículos recientes
              </p>
            </CardContent>
          </Card>
        </div>

        {/* KPIs Principales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white border-neutral-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Facturación Bruta</p>
                  <p className="text-2xl font-bold text-neutral-900">€13.2M</p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +15.2% vs 2022
                  </p>
                </div>
                <div className="w-12 h-12 bg-[#000f9f]/10 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-[#000f9f]" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Facturación Neta</p>
                  <p className="text-2xl font-bold text-neutral-900">€11.8M</p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +18.5% vs 2022
                  </p>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Ticket Medio</p>
                  <p className="text-2xl font-bold text-neutral-900">€4.2</p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    +8.3% vs 2022
                  </p>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-neutral-200 shadow-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-neutral-600">Crecimiento Promedio</p>
                  <p className="text-2xl font-bold text-neutral-900">+14.7%</p>
                  <p className="text-sm text-green-600 flex items-center gap-1">
                    <TrendingUp className="h-3 w-3" />
                    Sector cafetero
                  </p>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Newspaper className="h-6 w-6 text-purple-600" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Gráficos de Análisis */}
        <div className="space-y-8 mb-12">
          {/* Comparativa de Ventas por Competidor */}
          <Card className="bg-white border-neutral-200 shadow-sm">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-[#000f9f]/10 rounded-lg flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-[#000f9f]" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-neutral-900">Evolución de Ventas</CardTitle>
                    <CardDescription className="text-neutral-600">Comparativa por competidor</CardDescription>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-neutral-500" />
                  <select className="px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-[#000f9f] focus:border-transparent">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {salesData[2023].map((competitor, index) => {
                  const maxValue = Math.max(...salesData[2023].map(c => c.ventas))
                  const percentage = (competitor.ventas / maxValue) * 100
                  const isEastCrema = competitor.name === 'East Crema'
                  
                  return (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div 
                            className="w-3 h-3 rounded-full" 
                            style={{ backgroundColor: COLORS[index % COLORS.length] }}
                          ></div>
                          <span className="font-medium text-neutral-800">{competitor.name}</span>
                          {isEastCrema && (
                            <span className="px-2 py-1 text-xs font-medium bg-[#000f9f]/10 text-[#000f9f] rounded-full">
                              East Crema
                            </span>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-bold text-neutral-900">€{competitor.ventas}M</span>
                          <span className="text-sm text-green-600 ml-2">+{competitor.crecimiento}%</span>
                        </div>
                      </div>
                      <div className="w-full bg-neutral-100 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            isEastCrema ? 'bg-[#000f9f]' : 'bg-neutral-400'
                          }`}
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </CardContent>
          </Card>

          {/* Comparación Año Actual vs Anterior */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white border-neutral-200 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Calendar className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-neutral-900">Comparación 2023 vs 2022</CardTitle>
                    <CardDescription className="text-neutral-600">Evolución de ventas año a año</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {yearComparison.map((competitor, index) => {
                    const isEastCrema = competitor.name === 'East Crema'
                    const growthColor = competitor.crecimiento > 15 ? 'text-green-600' : competitor.crecimiento > 10 ? 'text-yellow-600' : 'text-red-600'
                    
                    return (
                      <div key={index} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-2">
                            <span className="font-medium text-neutral-800">{competitor.name}</span>
                            {isEastCrema && (
                              <span className="px-2 py-1 text-xs font-medium bg-[#000f9f]/10 text-[#000f9f] rounded-full">
                                East Crema
                              </span>
                            )}
                          </div>
                          <span className={`text-sm font-medium ${growthColor} flex items-center gap-1`}>
                            <TrendingUp className="h-3 w-3" />
                            +{competitor.crecimiento}%
                          </span>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-3 bg-white rounded-lg border border-neutral-200">
                            <p className="text-sm text-neutral-600 mb-1">2022</p>
                            <p className="text-xl font-bold text-neutral-700">€{competitor['2022']}M</p>
                          </div>
                          <div className="text-center p-3 bg-white rounded-lg border border-neutral-200">
                            <p className="text-sm text-neutral-600 mb-1">2023</p>
                            <p className={`text-xl font-bold ${isEastCrema ? 'text-[#000f9f]' : 'text-neutral-900'}`}>
                              €{competitor['2023']}M
                            </p>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white border-neutral-200 shadow-sm">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg font-semibold text-neutral-900">Crecimiento 2023</CardTitle>
                    <CardDescription className="text-neutral-600">Porcentaje de crecimiento por competidor</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {growthData.map((competitor, index) => {
                    const isEastCrema = competitor.name === 'East Crema'
                    const maxGrowth = Math.max(...growthData.map(c => c.crecimiento))
                    const percentage = (competitor.crecimiento / maxGrowth) * 100
                    
                    return (
                      <div key={index} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200 hover:bg-neutral-100 transition-colors">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div 
                              className="w-4 h-4 rounded-full" 
                              style={{ backgroundColor: COLORS[index % COLORS.length] }}
                            ></div>
                            <span className="font-medium text-neutral-800">{competitor.name}</span>
                            {isEastCrema && (
                              <span className="px-2 py-1 text-xs font-medium bg-[#000f9f]/10 text-[#000f9f] rounded-full">
                                East Crema
                              </span>
                            )}
                          </div>
                          <div className="text-right">
                            <p className={`text-xl font-bold ${isEastCrema ? 'text-[#000f9f]' : 'text-neutral-900'}`}>
                              +{competitor.crecimiento}%
                            </p>
                            <p className="text-sm text-neutral-500">Crecimiento</p>
                          </div>
                        </div>
                        <div className="w-full bg-neutral-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-500 ${
                              isEastCrema ? 'bg-[#000f9f]' : 'bg-neutral-400'
                            }`}
                            style={{ width: `${percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Quick Actions */}
        <Card className="bg-white/90 backdrop-blur-sm border-neutral-200 mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-neutral-800">
              <BarChart3 className="h-5 w-5 text-neutral-600" />
              Acciones Rápidas
            </CardTitle>
            <CardDescription className="text-neutral-600">
              Herramientas principales para análisis de competidores
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button className="h-16 flex flex-col items-center justify-center bg-[#000f9f] hover:bg-[#000d8a] text-white">
                <Upload className="h-6 w-6 mb-2" />
                <span>Subir Cuentas Anuales</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center border-neutral-300 text-neutral-700 hover:bg-neutral-50">
                <BarChart3 className="h-6 w-6 mb-2" />
                <span>Comparar Competidores</span>
              </Button>
              <Button variant="outline" className="h-16 flex flex-col items-center justify-center border-neutral-300 text-neutral-700 hover:bg-neutral-50">
                <TrendingUp className="h-6 w-6 mb-2" />
                <span>Ver Dashboard KPIs</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
          <CardHeader>
            <CardTitle className="text-neutral-800">Actividad Reciente</CardTitle>
            <CardDescription className="text-neutral-600">
              Últimas actualizaciones y análisis realizados
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { action: "Nuevo documento procesado", company: "Syra Coffee", time: "Hace 2 horas" },
                { action: "KPIs actualizados", company: "Nomad Coffee", time: "Hace 4 horas" },
                { action: "Reporte generado", company: "Comparativa Q3", time: "Ayer" },
                { action: "Noticias recopiladas", company: "Sector cafetero", time: "Hace 1 día" }
              ].map((activity, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-neutral-200 rounded-lg bg-neutral-50">
                  <div>
                    <p className="font-medium text-neutral-800">{activity.action}</p>
                    <p className="text-sm text-neutral-600">{activity.company}</p>
                  </div>
                  <span className="text-sm text-neutral-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}