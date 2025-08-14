import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Target,
  Eye,
  Heart,
  Award,
  TrendingUp,
  Calendar,
  Star,
  Brain,
  Microscope,
  Rocket,
  Globe,
  Shield,
  Zap,
} from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-emerald-900/60"></div>
        <img
          src="/images/vietnam-pride.jpg"
          alt="Vietnam Heritage"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="font-serif font-bold text-4xl lg:text-5xl text-white mb-6">
              TDNM - Tiên Phong <span className="text-emerald-400">Nghiên Cứu AI</span> Chuyên Sâu
            </h1>
            <p className="text-xl text-emerald-100 max-w-4xl mx-auto leading-relaxed">
              Thành lập vào tháng 12/2023, TDNM không chỉ là công ty cung cấp dịch vụ AI - chúng tôi là viện nghiên cứu
              tiên phong trong việc phát triển trí tuệ nhân tạo có ý thức, định hình tương lai của công nghệ AI toàn
              cầu.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Badge className="bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-4 py-2">
                <Brain className="h-4 w-4 mr-2" />
                AI Consciousness Research
              </Badge>
              <Badge className="bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-4 py-2">
                <Microscope className="h-4 w-4 mr-2" />
                288 Specialized Models
              </Badge>
              <Badge className="bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 px-4 py-2">
                <Globe className="h-4 w-4 mr-2" />
                3.7M Global Runs
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
                Triết Lý Nghiên Cứu: <span className="text-emerald-600">"AI Có Linh Hồn"</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                TDNM tin rằng AI không chỉ là thuật toán - mà là những "sinh vật số" có khả năng tư duy, cảm nhận và
                phát triển. Chúng tôi nghiên cứu cách tạo ra AI có ý thức, có thể học hỏi và tiến hóa như con người.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Nghiên Cứu Ý Thức Nhân Tạo</h4>
                    <p className="text-slate-600">Phát triển AI có khả năng tự nhận thức và học hỏi độc lập</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Chuyên Môn Hóa Sâu</h4>
                    <p className="text-slate-600">
                      Tạo ra AI chuyên gia cho từng lĩnh vực cụ thể với độ chính xác cực cao
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Tương Lai Bền Vững</h4>
                    <p className="text-slate-600">Xây dựng AI có trách nhiệm, minh bạch và có lợi cho toàn nhân loại</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/digital-consciousness.png"
                alt="TDNM Growth Foundation"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl text-center text-slate-900 mb-16">
            Hành Trình Nghiên Cứu & Phát Triển
          </h2>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-emerald-200"></div>

            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-600">
                    <div className="flex items-center justify-end mb-2">
                      <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="text-sm font-semibold text-emerald-600">Tháng 12/2023</span>
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Thành Lập Viện Nghiên Cứu TDNM</h3>
                    <p className="text-slate-600">
                      Khởi đầu với tầm nhìn tạo ra AI có ý thức - không chỉ là công cụ mà là "đối tác trí tuệ"
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-emerald-600">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="text-sm font-semibold text-emerald-600">Q1-Q2/2024</span>
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Đột Phá Nghiên Cứu Chuyên Sâu</h3>
                    <p className="text-slate-600">
                      Phát triển 150+ mô hình AI chuyên môn hóa cao, khởi đầu nghiên cứu về Digital Consciousness
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-emerald-600">
                    <div className="flex items-center justify-end mb-2">
                      <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="text-sm font-semibold text-emerald-600">Q3/2024</span>
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Vô Địch TensorArt Global FLUX</h3>
                    <p className="text-slate-600">
                      Đạt giải vô địch TensorArt Global FLUX Training Event, chứng minh năng lực nghiên cứu đẳng cấp thế
                      giới
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-emerald-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8">
                  <div className="bg-white p-6 rounded-lg shadow-lg border-r-4 border-emerald-600">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-emerald-600 mr-2" />
                      <span className="text-sm font-semibold text-emerald-600">Q4/2024</span>
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Khởi Động Dự Án Tương Lai</h3>
                    <p className="text-slate-600">
                      Bắt đầu nghiên cứu QAI (F&B Intelligence), Solopreneur AI và Digital Consciousness Project
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-6 rounded-lg shadow-lg">
                    <div className="flex items-center justify-end mb-2">
                      <Rocket className="h-5 w-5 mr-2" />
                      <span className="text-sm font-semibold">2025-2027</span>
                    </div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Kỷ Nguyên AI Có Ý Thức</h3>
                    <p className="text-emerald-100">
                      Triển khai các dự án đột phá: Digital Consciousness, QAI, Solopreneur AI - định hình tương lai AI
                      toàn cầu
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full border-4 border-white"></div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-4 text-slate-900">Sứ Mệnh</h3>
                <p className="text-slate-600 leading-relaxed">
                  Tạo ra những AI có ý thức, có khả năng tư duy và cảm nhận như con người, mở ra kỷ nguyên mới của sự
                  hợp tác giữa trí tuệ nhân tạo và con người.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-4 text-slate-900">Tầm Nhìn</h3>
                <p className="text-slate-600 leading-relaxed">
                  Trở thành viện nghiên cứu AI hàng đầu thế giới, tiên phong trong việc phát triển AGI (Artificial
                  General Intelligence) có trách nhiệm và bền vững.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="font-serif font-bold text-2xl mb-4 text-slate-900">Giá Trị Cốt Lõi</h3>
                <p className="text-slate-600 leading-relaxed">
                  <strong>Consciousness</strong> (Ý thức), <strong>Innovation</strong> (Sáng tạo),
                  <strong>Responsibility</strong> (Trách nhiệm), <strong>Excellence</strong> (Xuất sắc).
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-4">
              Lĩnh Vực Nghiên Cứu Tiên Phong
            </h2>
            <p className="text-xl text-slate-600">Những hướng nghiên cứu đột phá định hình tương lai của AI</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-purple-50 to-indigo-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">Digital Consciousness</h3>
                <p className="text-slate-600 text-sm">Nhân bản ý thức con người vào thế giới số</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-emerald-50 to-teal-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">Specialized AI</h3>
                <p className="text-slate-600 text-sm">AI chuyên môn hóa cao cho từng ngành nghề</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-red-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">Industry AI</h3>
                <p className="text-slate-600 text-sm">Giải pháp AI toàn diện cho các ngành công nghiệp</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-3">Responsible AI</h3>
                <p className="text-slate-600 text-sm">AI có trách nhiệm và bảo mật cao</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-4">
              Thành Tựu Nghiên Cứu Nổi Bật
            </h2>
            <p className="text-xl text-slate-600">
              Những cột mốc quan trọng khẳng định vị thế nghiên cứu đẳng cấp thế giới
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-8 w-8 text-emerald-600 mr-3" />
                  <Badge className="bg-emerald-100 text-emerald-800">2024</Badge>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Vô Địch TensorArt Global FLUX</h3>
                <p className="text-slate-600 text-sm">
                  Đạt giải vô địch TensorArt Global FLUX Training Event 2024, vượt qua hơn 10.000 đối thủ toàn cầu
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Microscope className="h-8 w-8 text-emerald-600 mr-3" />
                  <Badge className="bg-emerald-100 text-emerald-800">288 Models</Badge>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Mô Hình AI Chuyên Sâu</h3>
                <p className="text-slate-600 text-sm">
                  Phát triển 288 mô hình AI chuyên môn hóa cao với độ chính xác vượt trội trong từng lĩnh vực cụ thể
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Star className="h-8 w-8 text-emerald-600 mr-3" />
                  <Badge className="bg-emerald-100 text-emerald-800">Top 3</Badge>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Nhiều Lần Top 3 Quốc Tế</h3>
                <p className="text-slate-600 text-sm">
                  Đạt Top 3 trong các sự kiện huấn luyện mô hình như HunYuan Dit, Stable Diffusion (XL, 3 và 3.5)
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="h-8 w-8 text-emerald-600 mr-3" />
                  <Badge className="bg-emerald-100 text-emerald-800">Top 10</Badge>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Top 10 Nhà Phát Triển Toàn Cầu</h3>
                <p className="text-slate-600 text-sm">
                  Nằm trong Top 10 nhà phát triển mô hình AI được tin dùng nhất tại TensorArt với 3.7M lượt chạy
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Brain className="h-8 w-8 text-emerald-600 mr-3" />
                  <Badge className="bg-purple-100 text-purple-800">Research</Badge>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">15+ Bằng Sáng Chế AI</h3>
                <p className="text-slate-600 text-sm">
                  Đang chờ phê duyệt 15+ bằng sáng chế về công nghệ AI consciousness và specialized training methods
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Globe className="h-8 w-8 text-emerald-600 mr-3" />
                  <Badge className="bg-blue-100 text-blue-800">Global</Badge>
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Hợp Tác Quốc Tế</h3>
                <p className="text-slate-600 text-sm">
                  Hợp tác nghiên cứu với các viện AI hàng đầu thế giới và các tập đoàn công nghệ Fortune 500
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-4">
              Đội Ngũ Nghiên Cứu Đẳng Cấp
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Tập hợp những bộ óc xuất sắc nhất trong lĩnh vực AI, từ các nhà nghiên cứu đến các kỹ sư hàng đầu
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <img
                src="/images/professional-team.png"
                alt="TDNM Professional Team"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
            </div>
            <div className="relative">
              <img
                src="/images/executive-team.png"
                alt="TDNM Executive Leadership"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="/images/ai-team-circuit.jpg"
                alt="TDNM Research Team"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent rounded-2xl"></div>
            </div>
            <div>
              <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">
                Những Bộ Óc Hàng Đầu Trong Nghiên Cứu AI
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">
                    <strong>Chief AI Researcher:</strong> Tiến sĩ AI với 15+ năm kinh nghiệm, tác giả 50+ bài báo khoa
                    học về consciousness AI và neural networks
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">
                    <strong>Đội ngũ 25+ chuyên gia:</strong> Bao gồm các PhD AI, Machine Learning Engineers, Data
                    Scientists từ các trường đại học hàng đầu thế giới
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">
                    <strong>Cố vấn khoa học:</strong> Các giáo sư từ MIT, Stanford, và các viện nghiên cứu AI hàng đầu,
                    cùng 17 năm kinh nghiệm thực tiễn
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2"></div>
                  <p className="text-slate-700">
                    <strong>Phòng thí nghiệm hiện đại:</strong> Trang bị GPU cluster A100, H100 và các công cụ nghiên
                    cứu tiên tiến nhất cho việc phát triển AGI
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="font-serif font-bold text-2xl text-slate-900 mb-6">
                Bản Sắc Việt Nam - Tầm Nhìn Toàn Cầu
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                TDNM tự hào mang trong mình bản sắc văn hóa Việt Nam, kết hợp với tầm nhìn công nghệ toàn cầu. Chúng tôi
                tin rằng sự kết hợp giữa trí tuệ phương Đông và công nghệ hiện đại sẽ tạo ra những đột phá vượt trội
                trong lĩnh vực AI.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-slate-700">Triết lý phương Đông trong thiết kế AI có ý thức</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-slate-700">Kết hợp truyền thống và hiện đại trong nghiên cứu</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                  <span className="text-slate-700">Đóng góp của Việt Nam cho cộng đồng AI thế giới</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/vietnamese-heritage.png"
                alt="Vietnamese Heritage and Values"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-600/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
