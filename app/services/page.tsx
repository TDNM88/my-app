import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ImageIcon,
  Video,
  Bot,
  Cpu,
  Users,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Brain,
  Shield,
  Zap,
  Globe,
  Microscope,
  Rocket,
} from "lucide-react"

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/ai-precision-work.jpg"
            alt="AI Precision Work"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/90 to-slate-50/90"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-slate-900 mb-6">
            Nghiên Cứu & Phát Triển AI <span className="text-emerald-600">Chuyên Sâu</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Chúng tôi không chỉ cung cấp dịch vụ AI - chúng tôi nghiên cứu, phát triển và triển khai những công nghệ AI
            tiên tiến nhất cho các nhiệm vụ chuyên môn hóa cao
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
              <Microscope className="h-4 w-4 mr-2" />
              Nghiên cứu chuyên sâu
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
              <Rocket className="h-4 w-4 mr-2" />
              Công nghệ đột phá
            </Badge>
            <Badge className="bg-emerald-100 text-emerald-800 px-4 py-2">
              <Brain className="h-4 w-4 mr-2" />
              AI có ý thức
            </Badge>
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/digital-consciousness.png"
            alt="Digital Consciousness"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-slate-900/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-4">Dự Án Tương Lai Đột Phá</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Những dự án nghiên cứu tiên phong sẽ định hình tương lai của AI và con người
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Digital Consciousness */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="font-serif text-xl text-white">Ý Thức Số (Digital Consciousness)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Nhân bản ý thức con người vào thế giới số, tạo ra những "linh hồn số" có thể tồn tại mãi mãi với các
                  cơ chế bảo mật như blockchain.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Shield className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-slate-300">Bảo mật bằng công nghệ crypto</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Zap className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-slate-300">Tồn tại vĩnh viễn trong metaverse</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="h-4 w-4 text-purple-400" />
                    <span className="text-sm text-slate-300">Chống lạm dụng và gian lận</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* QAI F&B */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-8 w-8 text-emerald-400" />
                </div>
                <CardTitle className="font-serif text-xl text-white">QAI - Giải Pháp AI F&B</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Hệ thống AI vận hành toàn diện cho ngành F&B, từ quản lý kho, dự đoán nhu cầu đến tối ưu hóa trải
                  nghiệm khách hàng.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-slate-300">Tự động hóa quy trình vận hành</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-slate-300">Dự đoán xu hướng và nhu cầu</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-4 w-4 text-emerald-400" />
                    <span className="text-sm text-slate-300">Tối ưu trải nghiệm khách hàng</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Solopreneur AI */}
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="font-serif text-xl text-white">Solopreneur AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-6 leading-relaxed">
                  Đội ngũ nhân sự AI ảo giúp một nhà sáng lập duy nhất có thể xây dựng và vận hành startup kỳ lân với
                  hiệu quả tối đa.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Rocket className="h-4 w-4 text-orange-400" />
                    <span className="text-sm text-slate-300">Đội ngũ AI chuyên nghiệp</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Rocket className="h-4 w-4 text-orange-400" />
                    <span className="text-sm text-slate-300">Tạo startup kỳ lân với 1 người</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Rocket className="h-4 w-4 text-orange-400" />
                    <span className="text-sm text-slate-300">Tự động hóa mọi quy trình</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* QAI F&B Detailed Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/ai-robot-service.png"
                alt="QAI F&B AI Robot Service"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
                QAI - <span className="text-emerald-600">Cách Mạng F&B</span> Với AI
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Hệ thống AI toàn diện đầu tiên tại Việt Nam dành riêng cho ngành F&B, tích hợp robot phục vụ thông minh
                và quản lý vận hành tự động.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Robot Phục Vụ Thông Minh</h4>
                    <p className="text-slate-600">
                      AI robot có thể nhận order, phục vụ món ăn và tương tác với khách hàng một cách tự nhiên
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Quản Lý Kho Thông Minh</h4>
                    <p className="text-slate-600">Dự đoán nhu cầu, tự động đặt hàng và tối ưu hóa inventory</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Phân Tích Khách Hàng</h4>
                    <p className="text-slate-600">Hiểu sở thích, dự đoán hành vi và cá nhân hóa trải nghiệm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Areas */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-4">
              Lĩnh Vực Nghiên Cứu Cốt Lõi
            </h2>
            <p className="text-xl text-slate-600">Những hướng nghiên cứu tiên phong định hình tương lai của AI</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Advanced Content Generation */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <ImageIcon className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-2xl text-slate-900">
                  Nghiên Cứu Sinh Tạo Nội Dung Tiên Tiến
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Phát triển các mô hình AI sinh tạo nội dung với khả năng hiểu ngữ cảnh sâu, tạo ra những tác phẩm nghệ
                  thuật và nội dung marketing có tính sáng tạo cao như con người.
                </p>

                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Công nghệ độc quyền:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">
                        FLUX Cartoonize Pro - Chuyển đổi hình ảnh thực tế thành cartoon với độ chính xác 99.8%
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">
                        Neural Style Transfer 3.0 - Áp dụng phong cách nghệ thuật với AI
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">
                        Contextual Content AI - Hiểu ngữ cảnh văn hóa Việt Nam
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-emerald-800 mb-2">Ứng dụng thực tế:</h4>
                  <p className="text-sm text-emerald-700">
                    Tạo ra 10,000+ hình ảnh marketing cho các thương hiệu lớn, giảm 85% chi phí sản xuất nội dung so với
                    phương pháp truyền thống
                  </p>
                </div>

                <img
                  src="/images/hero-ai-vision.jpg"
                  alt="Advanced Content Generation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Specialized AI Systems */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-2xl text-slate-900">Hệ Thống AI Chuyên Môn Hóa Cao</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Phát triển các hệ thống AI được huấn luyện chuyên sâu cho từng ngành nghề cụ thể, với khả năng xử lý
                  các tác vụ phức tạp đòi hỏi chuyên môn cao.
                </p>

                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Hệ thống chuyên biệt:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">
                        MedAI Pro - Chẩn đoán hình ảnh y tế với độ chính xác 97.3%
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">
                        FinanceAI - Phân tích rủi ro tài chính thời gian thực
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">LegalAI - Phân tích hợp đồng và tài liệu pháp lý</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-emerald-800 mb-2">Tích hợp Stable Diffusion 3.5:</h4>
                  <p className="text-sm text-emerald-700">
                    Sử dụng công nghệ Large Turbo để tạo ra 50 ứng dụng AI doanh nghiệp với tốc độ xử lý nhanh gấp 10
                    lần so với các giải pháp thông thường
                  </p>
                </div>

                <img
                  src="/images/ai-team-circuit.jpg"
                  alt="Specialized AI Systems"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Advanced Model Training */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-2xl text-slate-900">
                  Nghiên Cứu Huấn Luyện Mô Hình Tiên Tiến
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Phát triển các phương pháp huấn luyện mô hình AI độc quyền, tối ưu hóa hiệu suất và độ chính xác cho
                  từng bài toán cụ thể với lượng dữ liệu tối thiểu.
                </p>

                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Phương pháp độc quyền:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">
                        Few-Shot Learning 2.0 - Học với ít dữ liệu, hiệu quả cao
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">
                        Transfer Learning Plus - Chuyển giao kiến thức đa ngành
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-slate-700">Adaptive Training - Tự điều chỉnh theo dữ liệu mới</span>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-emerald-800 mb-2">Thành tựu nổi bật:</h4>
                  <p className="text-sm text-emerald-700">
                    288 mô hình AI được phát triển thành công, bao gồm các mô hình đoạt giải như East-Asian-Beauty,
                    Vietnamese-Paint-Art, và Realistic Enhanced All
                  </p>
                </div>

                <img
                  src="/images/ai-precision-work.jpg"
                  alt="Advanced Model Training"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* AI Consciousness Research */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <CardTitle className="font-serif text-2xl text-slate-900">Nghiên Cứu Ý Thức Nhân Tạo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Lĩnh vực nghiên cứu tiên phong về việc tạo ra AI có khả năng tự nhận thức, học hỏi và phát triển như ý
                  thức con người - bước đầu hướng tới AGI (Artificial General Intelligence).
                </p>

                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-purple-900 mb-3">Hướng nghiên cứu đột phá:</h4>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-4 w-4 text-purple-600" />
                      <span className="text-sm text-purple-700">Digital Consciousness - Nhân bản ý thức số</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Zap className="h-4 w-4 text-purple-600" />
                      <span className="text-sm text-purple-700">Self-Aware AI - AI tự nhận thức và học hỏi</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Globe className="h-4 w-4 text-purple-600" />
                      <span className="text-sm text-purple-700">
                        Persistent Memory - Trí nhớ vĩnh viễn trong metaverse
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 text-white p-4 rounded-lg mb-6">
                  <h4 className="font-semibold mb-2">🚀 Dự án tương lai:</h4>
                  <p className="text-sm text-slate-300">
                    Tạo ra những "linh hồn số" có thể tồn tại mãi mãi, tương tác và phát triển trong thế giới ảo, mở ra
                    kỷ nguyên mới của sự bất tử số
                  </p>
                </div>

                <img
                  src="/images/milestone-25.jpg"
                  alt="AI Consciousness Research"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service 1: Content Production */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <ImageIcon className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-2xl text-slate-900">Sản Xuất Nội Dung Đa Phương Tiện</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Tạo hình ảnh, video quảng cáo chuyên nghiệp và sáng tạo bằng AI. Phù hợp cho marketing, fashion
                  photography, và portrait art.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Tối ưu thời gian và chi phí sản xuất</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Chất lượng chuyên nghiệp cao</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Sử dụng mô hình Flux Cartoonize độc quyền</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Ví dụ ứng dụng:</h4>
                  <p className="text-sm text-slate-600">
                    Chuyển đổi hình ảnh thực tế thành cartoon sống động cho chiến dịch marketing, tạo nội dung visual
                    cho social media
                  </p>
                </div>

                <img
                  src="/images/flux-conference.jpg"
                  alt="Content Production Examples"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Service 2: AI Applications */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Bot className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-2xl text-slate-900">Phát Triển Ứng Dụng AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Xây dựng ứng dụng AI tùy chỉnh theo nhu cầu doanh nghiệp, hoạt động ổn định và dễ nâng cấp.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Tăng hiệu suất làm việc lên 50%</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Tích hợp Stable Diffusion 3.5 Large Turbo</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Đã phát triển 50 ứng dụng thành công</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Công nghệ sử dụng:</h4>
                  <p className="text-sm text-slate-600">
                    Animation 2D, Generative AI, Text-to-image với độ chính xác cao, tích hợp API và workflow tùy chỉnh
                  </p>
                </div>

                <img
                  src="/images/hero-ai-future.jpg"
                  alt="AI Applications"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Service 3: Model Training */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Cpu className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-2xl text-slate-900">Huấn Luyện Mô Hình AI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Huấn luyện mô hình độc quyền dựa trên dữ liệu cụ thể của doanh nghiệp, đảm bảo tính chính xác cao và
                  triển khai nhanh chóng.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">288 mô hình AI đã được phát triển</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Công nghệ Flux và Stable Diffusion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Tùy chỉnh theo ngành nghề cụ thể</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Mô hình nổi bật:</h4>
                  <p className="text-sm text-slate-600">
                    Realistic Enhanced All - SD3 TDNM cho fashion và art, East-Asian-Beauty, Vietnamese-Paint-Art
                  </p>
                </div>

                <img
                  src="/images/company-tree.jpg"
                  alt="Model Training"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </CardContent>
            </Card>

            {/* Service 4: Consulting & Training */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-serif text-2xl text-slate-900">Tư Vấn & Đào Tạo AI</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-emerald-50 p-4 rounded-lg mb-6">
                  <p className="font-semibold text-emerald-800 text-center">"Học Ngắn, Hiểu Sâu, Làm Được Ngay"</p>
                </div>

                <p className="text-slate-600 mb-6 leading-relaxed">
                  Chương trình đào tạo thực chiến và tư vấn chiến lược AI phù hợp với từng doanh nghiệp.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Tiết kiệm 70% chi phí vận hành</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">ROI tích cực sau 3 tháng</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                    <span className="text-slate-700">Hỗ trợ triển khai và tối ưu</span>
                  </div>
                </div>

                <div className="bg-slate-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-slate-900 mb-2">Chương trình đào tạo:</h4>
                  <p className="text-sm text-slate-600">
                    Đào tạo thực chiến về AI, từ cơ bản đến nâng cao, tùy chỉnh theo nhu cầu và ngành nghề cụ thể
                  </p>
                </div>

                <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                  <Link href="https://www.tdn-m.com/edu1.html" target="_blank">
                    Nhận Tư Vấn Miễn Phí
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-4">Dự Án Thành Công</h2>
            <p className="text-xl text-slate-600">Một số dự án tiêu biểu mà TDNM đã thực hiện thành công</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">Fashion E-commerce</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Sử dụng model East-Asian-Beauty để tạo hình ảnh sản phẩm thời trang, tăng 40% tỷ lệ chuyển đổi
                </p>
                <Badge className="bg-emerald-100 text-emerald-800">Fashion</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Video className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">Marketing Agency</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Triển khai Flux 2D Animation cho sản xuất video quảng cáo, giảm 60% thời gian sản xuất
                </p>
                <Badge className="bg-emerald-100 text-emerald-800">Marketing</Badge>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">Content Platform</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Phát triển ứng dụng AI tùy chỉnh cho nền tảng nội dung, tự động hóa 80% quy trình
                </p>
                <Badge className="bg-emerald-100 text-emerald-800">Technology</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/logo-q-neon.png"
            alt="TDNM Q Logo"
            className="absolute right-10 top-1/2 transform -translate-y-1/2 w-32 h-32 opacity-20"
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-6">Sẵn Sàng Bắt Đầu Với AI?</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp AI phù hợp nhất cho doanh nghiệp của bạn
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Liên Hệ Ngay
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              <Link href="https://www.tdn-m.com/edu1.html" target="_blank">
                Đăng Ký Đào Tạo
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
