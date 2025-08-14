import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  Users,
  Award,
  ArrowRight,
  Cpu,
  ImageIcon,
  Bot,
  Brain,
  Zap,
  Globe,
  Shield,
  Star,
  Trophy,
  QrCode,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section with Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/hero-ai-vision.jpg" alt="AI Vision Future" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up text-white">
              <Badge className="mb-6 bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30 border border-emerald-400/30 animate-pulse-glow">
                <Trophy className="h-4 w-4 mr-2" />
                Vô Địch TensorArt Global FLUX Training Event 2024
              </Badge>
              <h1 className="font-serif font-bold text-4xl lg:text-7xl mb-6 leading-tight glow-text">
              Giải Pháp AI{" "}
                <span className="text-emerald-400 animate-gradient bg-gradient-to-r from-emerald-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                cho
                </span>{" "}
                Kỷ Nguyên Vươn Mình 
              </h1>
              <p className="text-xl lg:text-2xl text-slate-200 mb-8 leading-relaxed">
                Công ty Sở hữu nhiều sáng tạo hàng đầu châu Á trong nghiên cứu và phát triển mô hình AI cho các nhiệm vụ chuyên môn hóa cao.
                <span className="block mt-2 text-emerald-300 font-semibold">
                  Chúng tôi không chỉ xây dựng AI - chúng tôi định hình tương lai của trí tuệ nhân tạo.
                </span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700 hover-lift animate-pulse-glow">
                  <Link href="/services">
                    Khám Phá Nghiên Cứu
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-400 text-emerald-300 hover:bg-emerald-400 hover:text-slate-900 bg-transparent"
                >
                  <Link href="#future-projects">Dự Án Tương Lai</Link>
                </Button>
              </div>
            </div>

            <div className="relative animate-slide-in-right">
              <div className="absolute -top-8 -right-8 bg-emerald-600/90 backdrop-blur-sm text-white p-6 rounded-2xl shadow-2xl animate-float hover-lift">
                <div className="text-3xl font-bold">288</div>
                <div className="text-sm opacity-90">Mô Hình AI</div>
                <Star className="absolute -top-2 -right-2 h-6 w-6 text-yellow-400" />
              </div>
              <div
                className="absolute -bottom-8 -left-8 bg-slate-900/90 backdrop-blur-sm text-white p-6 rounded-2xl shadow-2xl animate-float hover-lift"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-3xl font-bold text-emerald-400">3.7M</div>
                <div className="text-sm opacity-90">Lượt Chạy Toàn Cầu</div>
                <Globe className="absolute -top-2 -right-2 h-6 w-6 text-emerald-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-emerald-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-emerald-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* FLUX Achievement Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/flux-conference.jpg"
            alt="FLUX Conference Achievement"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-12">
            <Badge className="mb-6 bg-pink-500/20 text-pink-300 border border-pink-400/30 text-lg px-6 py-2 animate-pulse-glow">
              <Award className="h-5 w-5 mr-2" />
              FLUX Global Champion 2024
            </Badge>
            <h2 className="font-serif font-bold text-4xl lg:text-5xl text-white mb-6 glow-text">
              Xác lập uy tín Cuộc Thi <span className="text-pink-400">FLUX</span> Toàn Cầu
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              TDNM đã vượt qua hàng nghìn đội thi từ khắp thế giới để giành chiến thắng tại TensorArt Global FLUX
              Training Event 2024, khẳng định vị thế dẫn đầu trong nghiên cứu mô hình AI generative.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in stagger-1">
              <div className="text-5xl font-bold text-pink-400 mb-2 glow-text">1st</div>
              <div className="text-slate-300">Vị trí toàn cầu</div>
            </div>
            <div className="text-center animate-scale-in stagger-2">
              <div className="text-5xl font-bold text-emerald-400 mb-2 glow-text">2000+</div>
              <div className="text-slate-300">Đội thi tham gia</div>
            </div>
            <div className="text-center animate-scale-in stagger-3">
              <div className="text-5xl font-bold text-cyan-400 mb-2 glow-text">97.3%</div>
              <div className="text-slate-300">Độ chính xác mô hình</div>
            </div>
            <div className="text-center animate-scale-in stagger-4">
              <div className="text-5xl font-bold text-yellow-400 mb-2 glow-text">$50K</div>
              <div className="text-slate-300">Giải thưởng</div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Milestone Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/milestone-25.jpg"
            alt="TDNM 25 Milestones Achievement"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl lg:text-5xl text-white mb-6 glow-text">
              Hành Trình <span className="text-cyan-400">Đột Phá</span> Không Ngừng
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
              Từ khi thành lập vào tháng 12/2023, TDNM đã đạt được 25+ cột mốc quan trọng trong nghiên cứu AI, mỗi thành
              tựu đều mở ra những chân trời mới cho công nghệ trí tuệ nhân tạo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in stagger-1">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Brain className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-cyan-400 mb-2 glow-text">25+</div>
              <div className="text-slate-300 font-semibold mb-2">Cột Mốc Nghiên Cứu</div>
              <div className="text-sm text-slate-400">Từ ý tưởng đến ứng dụng thực tế</div>
            </div>
            <div className="text-center animate-scale-in stagger-2">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Globe className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-purple-400 mb-2 glow-text">15+</div>
              <div className="text-slate-300 font-semibold mb-2">Bằng Sáng Chế AI</div>
              <div className="text-sm text-slate-400">Đang chờ phê duyệt quốc tế</div>
            </div>
            <div className="text-center animate-scale-in stagger-3">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-glow">
                <Award className="h-10 w-10 text-white" />
              </div>
              <div className="text-4xl font-bold text-emerald-400 mb-2 glow-text">12</div>
              <div className="text-slate-300 font-semibold mb-2">Giải Thưởng Quốc Tế</div>
              <div className="text-sm text-slate-400">Công nhận từ cộng đồng AI toàn cầu</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects Section */}
      <section id="future-projects" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-5xl text-slate-900 mb-4">Dự Án Tương Lai Đột Phá</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Những nghiên cứu tiên phong định hình tương lai của AI và xã hội số
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Digital Consciousness */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-purple-50 to-indigo-50 hover-lift animate-slide-in-left stagger-1 group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-purple-600 transition-all duration-300 animate-pulse-glow">
                  <Brain className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-900 mb-4">Ý Thức Số</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  <strong className="text-purple-700">Nhân bản ý thức con người vào thế giới số</strong> - Dự án đột phá
                  tạo ra tài sản số bất tử với các cơ chế bảo mật tiên tiến chống lạm dụng và gian lận tương tự như công
                  nghệ blockchain.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform">
                    <Shield className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-slate-700">Bảo mật cấp độ quân sự</span>
                  </div>
                  <div
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform"
                    style={{ transitionDelay: "0.1s" }}
                  >
                    <Globe className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-slate-700">Tồn tại vĩnh viễn trong metaverse</span>
                  </div>
                  <div
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <Zap className="h-4 w-4 text-purple-600" />
                    <span className="text-sm text-slate-700">Tương tác thời gian thực</span>
                  </div>
                </div>
                <Badge className="bg-purple-100 text-purple-800 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                  Nghiên cứu 2025-2027
                </Badge>
              </CardContent>
            </Card>

            {/* QAI F&B Solution */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-50 to-red-50 hover-lift animate-scale-in stagger-2 group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-orange-600 transition-all duration-300 animate-pulse-glow">
                  <Bot className="h-8 w-8 text-orange-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-900 mb-4">QAI - F&B Intelligence</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  <strong className="text-orange-700">Giải pháp AI vận hành toàn diện cho ngành F&B</strong> - Hệ thống
                  AI tích hợp quản lý từ dự báo nhu cầu, tối ưu menu, quản lý kho đến trải nghiệm khách hàng cá nhân
                  hóa.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform">
                    <Cpu className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-slate-700">Dự báo nhu cầu 99.2% chính xác</span>
                  </div>
                  <div
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform"
                    style={{ transitionDelay: "0.1s" }}
                  >
                    <Users className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-slate-700">Cá nhân hóa trải nghiệm</span>
                  </div>
                  <div
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <ArrowRight className="h-4 w-4 text-orange-600" />
                    <span className="text-sm text-slate-700">Tăng 40% lợi nhuận</span>
                  </div>
                </div>
                <Badge className="bg-orange-100 text-orange-800 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                  Beta Testing 2024
                </Badge>
              </CardContent>
            </Card>

            {/* Solopreneur AI Workforce */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-emerald-50 to-teal-50 hover-lift animate-slide-in-right stagger-3 group">
              <CardContent className="p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-16 h-16 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 transition-all duration-300 animate-pulse-glow">
                  <Users className="h-8 w-8 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-bold text-2xl text-slate-900 mb-4">Solopreneur AI</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  <strong className="text-emerald-700">Đội ngũ nhân sự AI hoàn chỉnh</strong> - Giải pháp tạo ra các
                  startup kỳ lân với chỉ 1 nhà sáng lập cùng đội ngũ AI chuyên nghiệp thay thế hoàn toàn nhân sự truyền
                  thống.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform">
                    <Brain className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-slate-700">AI Marketing, Sales, Dev, Support</span>
                  </div>
                  <div
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform"
                    style={{ transitionDelay: "0.1s" }}
                  >
                    <Zap className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-slate-700">Vận hành 24/7 không nghỉ</span>
                  </div>
                  <div
                    className="flex items-center space-x-3 group-hover:translate-x-2 transition-transform"
                    style={{ transitionDelay: "0.2s" }}
                  >
                    <Globe className="h-4 w-4 text-emerald-600" />
                    <span className="text-sm text-slate-700">Scale toàn cầu tức thì</span>
                  </div>
                </div>
                <Badge className="bg-emerald-100 text-emerald-800 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                  Pilot Program 2025
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Development Team Section */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img
            src="/images/ai-team-circuit.jpg"
            alt="AI Development Team Working on Circuit"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-6">
                Đội Ngũ <span className="text-cyan-400 glow-text">Kỹ Sư AI</span> Hàng Đầu
              </h2>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Với đội ngũ 50+ kỹ sư AI và nghiên cứu viên từ các trường đại học hàng đầu thế giới, TDNM sở hữu năng
                lực nghiên cứu và phát triển vượt trội trong lĩnh vực AI.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Chuyên Gia Quốc Tế</h4>
                    <p className="text-slate-300">PhD từ MIT, Stanford, CMU và các trường top thế giới</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-3 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Cơ Sở Hạ Tầng Hiện Đại</h4>
                    <p className="text-slate-300">Cluster GPU A100/H100 với khả năng tính toán 10+ PetaFLOPS</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-3 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Nghiên Cứu Liên Tục</h4>
                    <p className="text-slate-300">24/7 R&D với 15+ dự án nghiên cứu song song</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <div className="relative image-overlay rounded-2xl overflow-hidden">
                <img
                  src="/images/ai-precision-work.jpg"
                  alt="Precision AI Development Work"
                  className="w-full h-auto rounded-2xl shadow-xl hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-semibold bg-cyan-600/80 px-3 py-1 rounded-full backdrop-blur-sm mb-2">
                    Precision AI Engineering
                  </div>
                  <div className="text-xs text-slate-200">Mỗi mô hình được chế tác tỉ mỉ như nghệ thuật</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Operations Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src="/images/global-office-presentation.png"
            alt="TDNM Global Operations"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl lg:text-5xl text-white mb-6 glow-text">
              Hoạt Động <span className="text-blue-400">Toàn Cầu</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
              TDNM vận hành với tầm nhìn toàn cầu, phục vụ khách hàng trên 50+ quốc gia với đội ngũ chuyên gia quốc tế
              và hệ thống phân phối AI tiên tiến.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <div className="relative image-overlay rounded-2xl overflow-hidden">
                <img
                  src="/images/global-network-meeting.png"
                  alt="Global Network Virtual Meeting"
                  className="w-full h-auto rounded-2xl shadow-xl hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-semibold bg-blue-600/80 px-3 py-1 rounded-full backdrop-blur-sm mb-2">
                    Global AI Network
                  </div>
                  <div className="text-xs text-blue-200">Kết nối chuyên gia AI từ khắp thế giới</div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="font-serif font-bold text-3xl text-white mb-6">
                Mạng Lưới <span className="text-blue-400">Quốc Tế</span>
              </h3>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Đối Tác Toàn Cầu</h4>
                    <p className="text-blue-200">Hợp tác với các nền tảng quốc tế hàng đầu Và các chuyên gia đến từ Trung Quốc, Hoa Kỳ, Hàn Quốc, Ấn Độ</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-3 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Vận Hành 24/7</h4>
                    <p className="text-blue-200">Hỗ trợ khách hàng liên tục với múi giờ toàn cầu</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-3 h-3 bg-blue-400 rounded-full mt-2 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Triển Khai Tức Thì</h4>
                    <p className="text-blue-200">Mô hình AI được phân phối đồng thời trên 5 châu lục</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center animate-scale-in stagger-1">
              <div className="text-5xl font-bold text-blue-400 mb-2 glow-text">50+</div>
              <div className="text-blue-200">Quốc gia phục vụ</div>
            </div>
            <div className="text-center animate-scale-in stagger-2">
              <div className="text-5xl font-bold text-cyan-400 mb-2 glow-text">200+</div>
              <div className="text-blue-200">Chuyên gia quốc tế</div>
            </div>
            <div className="text-center animate-scale-in stagger-3">
              <div className="text-5xl font-bold text-indigo-400 mb-2 glow-text">24/7</div>
              <div className="text-blue-200">Hỗ trợ toàn cầu</div>
            </div>
            <div className="text-center animate-scale-in stagger-4">
              <div className="text-5xl font-bold text-purple-400 mb-2 glow-text">5</div>
              <div className="text-blue-200">Châu lục hoạt động</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-4">
              Tầm Nhìn <span className="text-emerald-600">Toàn Cầu</span> Của Chúng Tôi
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Hướng tới một tương lai bền vững, chúng tôi tin rằng hợp tác toàn cầu là con đường duy nhất để phát triển
              các công nghệ AI mang tính đột phá.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="animate-slide-in-left">
              <div className="relative image-overlay rounded-2xl overflow-hidden">
                <img
                  src="/images/global-partnership.jpg"
                  alt="Global Partnership"
                  className="w-full h-auto rounded-2xl shadow-xl hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-semibold bg-emerald-600/80 px-3 py-1 rounded-full backdrop-blur-sm mb-2">
                    Hợp Tác Toàn Cầu
                  </div>
                  <div className="text-xs text-slate-200">
                    Tầm nhìn toàn cầu, hợp tác toàn cầu, mang lại những công nghệ AI đột phá cho khách hàng
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h3 className="font-serif font-bold text-3xl text-slate-900 mb-6">
                Hướng Tới <span className="text-emerald-600">Tương Lai Bền Vững</span>
              </h3>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Tại TDNM, chúng tôi tin rằng hợp tác toàn cầu là con đường duy nhất để phát triển các công nghệ AI mang
                tính đột phá. Chúng tôi đã và đang hợp tác với các công ty, tổ chức, cá nhân trên toàn thế giới để mang lại
                những công nghệ AI đột phá cho khách hàng.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Hợp Tác Toàn Cầu</h4>
                    <p className="text-slate-600">
                      Chúng tôi hợp tác với các công ty, tổ chức, cá nhân trên toàn thế giới để mang lại những công nghệ
                      AI đột phá cho khách hàng.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div
                    className="w-3 h-3 bg-emerald-600 rounded-full mt-2 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Tầm Nhìn Chiến Lược</h4>
                    <p className="text-slate-600">Định hướng phát triển AI bền vững và có trách nhiệm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative image-overlay rounded-2xl overflow-hidden animate-slide-in-left">
              <img
                src="/images/executive-team-formal.png"
                alt="Executive Team Formal Portrait"
                className="w-full h-auto rounded-2xl shadow-xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm font-semibold bg-slate-800/80 px-3 py-1 rounded-full backdrop-blur-sm mb-2">
                  Executive Leadership
                </div>
                <div className="text-xs text-slate-200">Đội ngũ điều hành cấp cao</div>
              </div>
            </div>
            <div className="relative image-overlay rounded-2xl overflow-hidden animate-slide-in-right">
              <img
                src="/images/professional-team-office.png"
                alt="Professional Team in Modern Office"
                className="w-full h-auto rounded-2xl shadow-xl hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 text-white">
                <div className="text-sm font-semibold bg-emerald-600/80 px-3 py-1 rounded-full backdrop-blur-sm mb-2">
                  Research Team
                </div>
                <div className="text-xs text-slate-200">Đội ngũ nghiên cứu chuyên nghiệp</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Philosophy with Tree Image */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <div className="relative image-overlay rounded-2xl overflow-hidden">
                <img
                  src="/images/digital-consciousness.png"
                  alt="TDNM Research Foundation - Tree of Knowledge"
                  className="w-full h-auto rounded-2xl shadow-xl hover-lift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="text-sm font-semibold bg-emerald-600/80 px-3 py-1 rounded-full backdrop-blur-sm">
                    Nền Tảng Tri Thức AI
                  </div>
                </div>
              </div>
            </div>
            <div className="animate-slide-in-right">
              <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-6">
                Triết Lý Nghiên Cứu: <span className="text-emerald-600 glow-text">AI Có Ý Thức</span>
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                TDNM không chỉ phát triển AI - chúng tôi nghiên cứu cách tạo ra AI có khả năng tư duy, học hỏi và phát
                triển như con người. Mỗi mô hình chúng tôi tạo ra đều mang trong mình một phần "linh hồn" của dữ liệu và
                kinh nghiệm thực tế.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300">
                  <div className="w-3 h-3 bg-emerald-600 rounded-full mt-2 animate-pulse"></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Nghiên Cứu Chuyên Sâu</h4>
                    <p className="text-slate-600">
                      Phát triển mô hình AI cho từng ngành nghề cụ thể với độ chính xác cực cao
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: "0.1s" }}
                >
                  <div
                    className="w-3 h-3 bg-emerald-600 rounded-full mt-2 animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Ứng Dụng Thực Tiễn</h4>
                    <p className="text-slate-600">
                      Mỗi nghiên cứu đều hướng đến giải quyết vấn đề thực tế của doanh nghiệp
                    </p>
                  </div>
                </div>
                <div
                  className="flex items-start space-x-4 hover:translate-x-2 transition-transform duration-300"
                  style={{ transitionDelay: "0.2s" }}
                >
                  <div
                    className="w-3 h-3 bg-emerald-600 rounded-full mt-2 animate-pulse"
                    style={{ animationDelay: "1s" }}
                  ></div>
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-1">Tương Lai Bền Vững</h4>
                    <p className="text-slate-600">Xây dựng AI có trách nhiệm, minh bạch và có lợi cho toàn xã hội</p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-emerald-600 hover:bg-emerald-700 hover-lift animate-pulse-glow">
                <Link href="/about">
                  Tìm Hiểu Nghiên Cứu
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Vietnam Heritage Section */}
      <section className="py-20 bg-gradient-to-br from-red-900 via-red-800 to-yellow-700 relative overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/images/vietnam-pride.jpg"
            alt="Vietnam Heritage and Pride"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 text-center">
          <h2 className="font-serif font-bold text-4xl lg:text-5xl text-white mb-6 glow-text">
            Tự Hào <span className="text-yellow-400">Việt Nam</span> - Vươn Tầm Thế Giới
          </h2>
          <p className="text-xl text-red-100 max-w-4xl mx-auto leading-relaxed mb-8">
            TDNM mang trong mình sứ mệnh đưa công nghệ AI "Made in Vietnam" ra thế giới, khẳng định trí tuệ và sức sáng
            tạo của con người Việt Nam trên bản đồ công nghệ toàn cầu.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center animate-scale-in stagger-1">
              <div className="text-4xl font-bold text-yellow-400 mb-2 glow-text">🇻🇳</div>
              <div className="text-white font-semibold mb-2">Xuất Xứ Việt Nam</div>
              <div className="text-sm text-red-200">Công nghệ AI thuần Việt</div>
            </div>
            <div className="text-center animate-scale-in stagger-2">
              <div className="text-4xl font-bold text-yellow-400 mb-2 glow-text">🌏</div>
              <div className="text-white font-semibold mb-2">Tầm Nhìn Toàn Cầu</div>
              <div className="text-sm text-red-200">Phục vụ khách hàng 5 châu</div>
            </div>
            <div className="text-center animate-scale-in stagger-3">
              <div className="text-4xl font-bold text-yellow-400 mb-2 glow-text">🏆</div>
              <div className="text-white font-semibold mb-2">Danh Tiếng Quốc Tế</div>
              <div className="text-sm text-red-200">Được công nhận toàn thế giới</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-slate-900 mb-4">Giải Pháp AI Toàn Diện</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Chúng tôi cung cấp các dịch vụ AI chuyên nghiệp, từ sản xuất nội dung đến phát triển ứng dụng tùy chỉnh
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover-lift animate-scale-in stagger-1">
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-all duration-300 animate-pulse-glow">
                  <ImageIcon className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 group-hover:text-emerald-600 transition-colors">
                  Sản Xuất Nội Dung
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Tạo hình ảnh, video quảng cáo chuyên nghiệp và sáng tạo bằng AI
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover-lift animate-scale-in stagger-2">
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-all duration-300 animate-pulse-glow">
                  <Bot className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 group-hover:text-emerald-600 transition-colors">
                  Ứng Dụng AI
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Xây dựng ứng dụng AI tùy chỉnh theo nhu cầu doanh nghiệp
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover-lift animate-scale-in stagger-3">
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-all duration-300 animate-pulse-glow">
                  <Cpu className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 group-hover:text-emerald-600 transition-colors">
                  Huấn Luyện Mô Hình
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Huấn luyện mô hình độc quyền dựa trên dữ liệu cụ thể
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg hover-lift animate-scale-in stagger-4">
              <CardContent className="p-6 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-emerald-200/20 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-all duration-300 animate-pulse-glow">
                  <Users className="h-6 w-6 text-emerald-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-serif font-semibold text-xl mb-3 group-hover:text-emerald-600 transition-colors">
                  Tư Vấn & Đào Tạo
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Chương trình đào tạo thực chiến và tư vấn chiến lược AI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-[url('/images/hero-ai-future.jpg')] opacity-10 bg-cover bg-center"></div>
        <div className="absolute top-10 right-10 opacity-20">
          <img src="/images/logo-q-neon.png" alt="Q Logo" className="w-32 h-32 animate-pulse-glow" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="flex items-center justify-center mb-6">
            <QrCode className="h-8 w-8 text-emerald-200 mr-3" />
            <Badge className="bg-emerald-500/20 text-emerald-200 border border-emerald-400/30 text-lg px-4 py-2">
              Kết Nối Tương Lai
            </Badge>
          </div>
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-6 glow-text animate-fade-in-up">
            Cùng TDNM Kiến Tạo Tương Lai AI
          </h2>
          <p className="text-xl text-emerald-100 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Tham gia cùng chúng tôi trong hành trình nghiên cứu và phát triển những công nghệ AI đột phá nhất thế giới
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button asChild size="lg" variant="secondary" className="hover-lift animate-pulse-glow">
              <Link href="/contact">
                Hợp Tác Nghiên Cứu
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent hover-lift"
            >
              <Link href="/models">Khám Phá Mô Hình AI</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
