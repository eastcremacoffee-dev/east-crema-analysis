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
  Users,
  Coffee
} from "lucide-react"

export default function Home() {
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

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Competitors Overview */}
          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-neutral-800">
                <Users className="h-5 w-5 text-neutral-600" />
                Competidores Principales
              </CardTitle>
              <CardDescription className="text-neutral-600">
                Análisis de los principales competidores del sector cafetero
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "Syra Coffee", revenue: "€2.5M", growth: "+15%" },
                  { name: "Hola Coffee", revenue: "€1.8M", growth: "+12%" },
                  { name: "Nomad Coffee", revenue: "€3.2M", growth: "+18%" },
                  { name: "Cafés de Finca", revenue: "€1.5M", growth: "+8%" }
                ].map((competitor, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-neutral-50 rounded-lg border border-neutral-200">
                    <div>
                      <p className="font-medium text-neutral-800">{competitor.name}</p>
                      <p className="text-sm text-neutral-600">Ingresos: {competitor.revenue}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{competitor.growth}</p>
                      <p className="text-xs text-neutral-500">Crecimiento</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
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
              <div className="grid grid-cols-1 gap-4">
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
        </div>

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