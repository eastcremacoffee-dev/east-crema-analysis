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

        {/* Gráficos de Análisis */}
        <div className="space-y-8 mb-12">
          {/* Comparativa de Ventas por Año */}
          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2 text-neutral-800">
                    <BarChart3 className="h-5 w-5 text-neutral-600" />
                    Comparativa de Ventas
                  </CardTitle>
                  <CardDescription className="text-neutral-600">
                    Análisis de ventas por competidor y año
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4 text-neutral-500" />
                  <select className="px-3 py-2 border border-neutral-300 rounded-lg text-sm bg-white">
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {salesData[2023].map((competitor, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 rounded-full bg-[#000f9f]"></div>
                      <div>
                        <p className="font-medium text-neutral-800">{competitor.name}</p>
                        <p className="text-sm text-neutral-600">Crecimiento: +{competitor.crecimiento}%</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold text-neutral-800">€{competitor.ventas}M</p>
                      <p className="text-sm text-neutral-500">Ventas 2023</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Comparación Año Actual vs Anterior */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <Calendar className="h-5 w-5 text-neutral-600" />
                  Comparación 2023 vs 2022
                </CardTitle>
                <CardDescription className="text-neutral-600">
                  Evolución de ventas año a año
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {yearComparison.map((competitor, index) => (
                    <div key={index} className="p-4 bg-neutral-50 rounded-lg border border-neutral-200">
                      <div className="flex items-center justify-between mb-2">
                        <p className="font-medium text-neutral-800">{competitor.name}</p>
                        <span className="text-sm font-medium text-green-600">+{competitor.crecimiento}%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <p className="text-sm text-neutral-600">2022</p>
                          <p className="text-lg font-bold text-neutral-700">€{competitor['2022']}M</p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-neutral-600">2023</p>
                          <p className="text-lg font-bold text-[#000f9f]">€{competitor['2023']}M</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-neutral-800">
                  <TrendingUp className="h-5 w-5 text-neutral-600" />
                  Crecimiento 2023
                </CardTitle>
                <CardDescription className="text-neutral-600">
                  Porcentaje de crecimiento por competidor
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {growthData.map((competitor, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                      <div className="flex items-center space-x-3">
                        <div 
                          className="w-4 h-4 rounded-full" 
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <p className="font-medium text-neutral-800">{competitor.name}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-bold text-neutral-800">+{competitor.crecimiento}%</p>
                        <p className="text-sm text-neutral-500">Crecimiento</p>
                      </div>
                    </div>
                  ))}
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