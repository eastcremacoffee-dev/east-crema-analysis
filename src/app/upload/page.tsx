import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"
import { 
  Upload, 
  FileText, 
  Building2,
  Calendar,
  Coffee,
  CheckCircle,
  AlertCircle
} from "lucide-react"

export default function UploadPage() {
  const recentUploads = [
    {
      id: 1,
      filename: "syra-coffee-2023.pdf",
      company: "Syra Coffee",
      year: 2023,
      status: "completed",
      kpis: 12,
      uploadedAt: "Hace 2 horas"
    },
    {
      id: 2,
      filename: "nomad-coffee-2023.pdf",
      company: "Nomad Coffee",
      year: 2023,
      status: "processing",
      kpis: 0,
      uploadedAt: "Hace 1 hora"
    },
    {
      id: 3,
      filename: "hola-coffee-2022.pdf",
      company: "Hola Coffee",
      year: 2022,
      status: "completed",
      kpis: 8,
      uploadedAt: "Ayer"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Upload Section */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Upload className="h-5 w-5 text-amber-600" />
                  Subir Cuentas Anuales
                </CardTitle>
                <CardDescription>
                  Sube documentos PDF de cuentas anuales para extraer KPIs automáticamente
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {/* Upload Area */}
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-amber-500 transition-colors">
                    <Upload className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Arrastra y suelta tus archivos aquí
                    </h3>
                    <p className="text-gray-600 mb-4">
                      O haz clic para seleccionar archivos
                    </p>
                    <Button className="bg-amber-600 hover:bg-amber-700">
                      Seleccionar Archivos
                    </Button>
                    <p className="text-sm text-gray-500 mt-2">
                      Formatos soportados: PDF (máx. 10MB)
                    </p>
                  </div>

                  {/* Form */}
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Competidor
                      </label>
                      <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                        <option value="">Seleccionar competidor...</option>
                        <option value="syra">Syra Coffee</option>
                        <option value="nomad">Nomad Coffee</option>
                        <option value="hola">Hola Coffee</option>
                        <option value="finca">Cafés de Finca</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Año
                        </label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Trimestre (opcional)
                        </label>
                        <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                          <option value="">Anual</option>
                          <option value="Q1">Q1</option>
                          <option value="Q2">Q2</option>
                          <option value="Q3">Q3</option>
                          <option value="Q4">Q4</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Título del documento
                      </label>
                      <input 
                        type="text" 
                        placeholder="Ej: Cuentas Anuales 2023"
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                      />
                    </div>

                    <Button className="w-full bg-amber-600 hover:bg-amber-700 h-12">
                      <Upload className="h-4 w-4 mr-2" />
                      Procesar Documento
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Processing Status */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Estado del Procesamiento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Documentos procesados</span>
                    <span className="text-sm font-medium">2/3</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-600 h-2 rounded-full" style={{ width: '67%' }}></div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">KPIs extraídos</span>
                    <span className="text-sm font-medium">20</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Uploads */}
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Subidas Recientes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentUploads.map((upload) => (
                    <div key={upload.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <FileText className="h-4 w-4 text-gray-500" />
                          <span className="text-sm font-medium truncate">{upload.filename}</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Building2 className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-600">{upload.company}</span>
                          <Calendar className="h-3 w-3 text-gray-400" />
                          <span className="text-xs text-gray-600">{upload.year}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        {upload.status === 'completed' ? (
                          <CheckCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <AlertCircle className="h-4 w-4 text-yellow-600" />
                        )}
                        <span className="text-xs text-gray-500">{upload.uploadedAt}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tips */}
            <Card className="bg-amber-50 border-amber-200">
              <CardHeader>
                <CardTitle className="text-lg text-amber-800">💡 Consejos</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm text-amber-700">
                  <li>• Asegúrate de que el PDF sea legible</li>
                  <li>• Los documentos deben contener datos financieros</li>
                  <li>• El procesamiento puede tardar 2-5 minutos</li>
                  <li>• Revisa los KPIs extraídos antes de usar</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
