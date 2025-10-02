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
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
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
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Competidores</CardTitle>
              <Building2 className="h-4 w-4 text-amber-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amber-600">5</div>
              <p className="text-xs text-muted-foreground">
                Empresas analizadas
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Documentos</CardTitle>
              <FileText className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">12</div>
              <p className="text-xs text-muted-foreground">
                Cuentas anuales procesadas
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">KPIs Extraídos</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">45</div>
              <p className="text-xs text-muted-foreground">
                Métricas financieras
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Noticias</CardTitle>
              <Newspaper className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">8</div>
              <p className="text-xs text-muted-foreground">
                Artículos recientes
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Main Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Competitors Overview */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-600" />
                Competidores Principales
              </CardTitle>
              <CardDescription>
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
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium">{competitor.name}</p>
                      <p className="text-sm text-gray-600">Ingresos: {competitor.revenue}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{competitor.growth}</p>
                      <p className="text-xs text-gray-500">Crecimiento</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="bg-white/80 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-amber-600" />
                Acciones Rápidas
              </CardTitle>
              <CardDescription>
                Herramientas principales para análisis de competidores
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <Button className="h-16 flex flex-col items-center justify-center bg-amber-600 hover:bg-amber-700">
                  <Upload className="h-6 w-6 mb-2" />
                  <span>Subir Cuentas Anuales</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <BarChart3 className="h-6 w-6 mb-2" />
                  <span>Comparar Competidores</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center justify-center">
                  <TrendingUp className="h-6 w-6 mb-2" />
                  <span>Ver Dashboard KPIs</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>
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
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <p className="font-medium">{activity.action}</p>
                    <p className="text-sm text-gray-600">{activity.company}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}