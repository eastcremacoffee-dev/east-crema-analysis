import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { 
  Building2, 
  Plus, 
  TrendingUp, 
  FileText,
  Globe,
  MapPin,
  Coffee
} from "lucide-react"

export default function CompetitorsPage() {
  const competitors = [
    {
      id: 1,
      name: "Syra Coffee",
      website: "https://syracoffee.com",
      country: "España",
      sector: "Cafetería Premium",
      revenue: "€2.5M",
      growth: "+15%",
      documents: 3,
      kpis: 12,
      description: "Cadena de cafeterías especializadas en café de origen"
    },
    {
      id: 2,
      name: "Hola Coffee",
      website: "https://holacoffee.com",
      country: "España",
      sector: "Cafetería Artesanal",
      revenue: "€1.8M",
      growth: "+12%",
      documents: 2,
      kpis: 8,
      description: "Café de especialidad con enfoque en sostenibilidad"
    },
    {
      id: 3,
      name: "Nomad Coffee",
      website: "https://nomadcoffee.com",
      country: "España",
      sector: "Cafetería Premium",
      revenue: "€3.2M",
      growth: "+18%",
      documents: 4,
      kpis: 15,
      description: "Café de origen único con tostado artesanal"
    },
    {
      id: 4,
      name: "Cafés de Finca",
      website: "https://cafesdefinca.com",
      country: "España",
      sector: "Cafetería Tradicional",
      revenue: "€1.5M",
      growth: "+8%",
      documents: 2,
      kpis: 6,
      description: "Café tradicional con enfoque en calidad"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-neutral-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Total Competidores</CardTitle>
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
              <CardTitle className="text-sm font-medium text-neutral-700">Documentos</CardTitle>
              <FileText className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">
                {competitors.reduce((acc, c) => acc + c.documents, 0)}
              </div>
              <p className="text-xs text-neutral-500">
                Cuentas anuales
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">KPIs Extraídos</CardTitle>
              <TrendingUp className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">
                {competitors.reduce((acc, c) => acc + c.kpis, 0)}
              </div>
              <p className="text-xs text-neutral-500">
                Métricas financieras
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/90 backdrop-blur-sm border-neutral-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-neutral-700">Ingresos Totales</CardTitle>
              <TrendingUp className="h-4 w-4 text-neutral-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-neutral-800">€9.0M</div>
              <p className="text-xs text-neutral-500">
                Mercado combinado
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Competitors List */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-neutral-900">Competidores</h2>
            <div className="flex gap-2">
              <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-50">Filtrar</Button>
              <Button variant="outline" className="border-neutral-300 text-neutral-700 hover:bg-neutral-50">Ordenar</Button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {competitors.map((competitor) => (
              <Card key={competitor.id} className="bg-white/90 backdrop-blur-sm hover:shadow-lg border-neutral-200 transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-xl">{competitor.name}</CardTitle>
                      <CardDescription className="mt-1">
                        {competitor.description}
                      </CardDescription>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-green-600">{competitor.growth}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {/* Company Info */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 text-gray-500" />
                        <span className="text-sm text-gray-600">{competitor.country}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-gray-500" />
                        <a 
                          href={competitor.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-sm text-blue-600 hover:underline"
                        >
                          Sitio web
                        </a>
                      </div>
                    </div>

                    {/* Financial Info */}
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Ingresos</p>
                          <p className="text-lg font-semibold text-gray-900">{competitor.revenue}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Crecimiento</p>
                          <p className="text-lg font-semibold text-green-600">{competitor.growth}</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center space-x-1">
                          <FileText className="h-4 w-4 text-blue-600" />
                          <span>{competitor.documents} docs</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          <span>{competitor.kpis} KPIs</span>
                        </span>
                      </div>
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                        {competitor.sector}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-2 pt-2">
                      <Button variant="outline" size="sm" className="flex-1 border-neutral-300 text-neutral-700 hover:bg-neutral-50">
                        Ver Detalles
                      </Button>
                      <Button variant="outline" size="sm" className="flex-1 border-neutral-300 text-neutral-700 hover:bg-neutral-50">
                        Comparar
                      </Button>
                      <Button size="sm" className="bg-[#000f9f] hover:bg-[#000d8a] text-white">
                        Analizar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
