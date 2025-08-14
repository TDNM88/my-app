import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import {
  ExternalLink,
  Download,
  Heart,
  Star,
  Play,
  ImageIcon,
  Palette,
  Sparkles,
  Users,
  Brain,
  Rocket,
} from "lucide-react"

export default function ModelsPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/flux-conference.jpg"
            alt="FLUX Conference Achievement"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-50/85 to-slate-50/85"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-slate-900 mb-6">
            Các Mô Hình AI Nổi Bật Của <span className="text-emerald-600">TDNM</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Khám phá bộ sưu tập 288 mô hình AI tiên tiến, được phát triển và tối ưu hóa cho các ứng dụng thực tế trong
            doanh nghiệp
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-emerald-600">3.7M</div>
              <div className="text-sm text-slate-600">Lượt chạy</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-emerald-600">459</div>
              <div className="text-sm text-slate-600">Lượt tải xuống</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-emerald-600">38.6K</div>
              <div className="text-sm text-slate-600">Lượt thích</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <div className="text-2xl font-bold text-emerald-600">21.8K</div>
              <div className="text-sm text-slate-600">Sao đánh giá</div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Projects Showcase */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/digital-consciousness.png"
            alt="Digital Consciousness Portal"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-4">Mô Hình AI Tương Lai</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Những dự án nghiên cứu đột phá sẽ định hình tương lai của AI
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Brain className="h-8 w-8 text-purple-400" />
                </div>
                <CardTitle className="font-serif text-xl text-white">Digital Consciousness Model</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Mô hình AI đầu tiên có khả năng nhân bản và lưu trữ ý thức con người trong thế giới số với bảo mật
                  blockchain.
                </p>
                <div className="space-y-2 mb-4">
                  <Badge className="bg-purple-500/20 text-purple-300 border border-purple-400/30">Nghiên cứu</Badge>
                  <Badge className="bg-slate-700 text-slate-300">2025-2027</Badge>
                </div>
                <div className="text-sm text-slate-400">Trạng thái: Đang phát triển prototype</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="h-8 w-8 text-emerald-400" />
                </div>
                <CardTitle className="font-serif text-xl text-white">QAI F&B Intelligence</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Hệ thống AI toàn diện cho ngành F&B với khả năng dự đoán, quản lý và tối ưu hóa vận hành nhà hàng.
                </p>
                <div className="space-y-2 mb-4">
                  <Badge className="bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    Beta Testing
                  </Badge>
                  <Badge className="bg-slate-700 text-slate-300">F&B</Badge>
                </div>
                <div className="text-sm text-slate-400">Trạng thái: Thử nghiệm với 5 nhà hàng</div>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
              <CardHeader>
                <div className="w-16 h-16 bg-orange-500/20 rounded-xl flex items-center justify-center mb-4">
                  <Rocket className="h-8 w-8 text-orange-400" />
                </div>
                <CardTitle className="font-serif text-xl text-white">Solopreneur AI Suite</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-300 mb-4 leading-relaxed">
                  Bộ công cụ AI giúp một người có thể vận hành startup như một đội ngũ hoàn chỉnh với AI workforce.
                </p>
                <div className="space-y-2 mb-4">
                  <Badge className="bg-orange-500/20 text-orange-300 border border-orange-400/30">Concept</Badge>
                  <Badge className="bg-slate-700 text-slate-300">Startup</Badge>
                </div>
                <div className="text-sm text-slate-400">Trạng thái: Thiết kế kiến trúc hệ thống</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Models */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif font-bold text-3xl text-center text-slate-900 mb-16">Mô Hình Nổi Bật</h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Flux 2D Animation */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif text-xl">Flux 2D Animation</CardTitle>
                  <Badge className="bg-emerald-100 text-emerald-800">Mới nhất</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/hero-ai-vision.jpg"
                  alt="Flux 2D Animation"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-slate-600 mb-4">
                  Tạo animation 2D chất lượng cao từ text prompts, phù hợp cho phim ngắn và quảng cáo.
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-slate-600">8.2K</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">156</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Play className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">45K runs</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="https://youtu.be/6Zjj7o0qP8U?si=b0HODyMxWdyvf6Id" target="_blank">
                    Xem Demo Video
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Flux Cartoonize */}
            <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="font-serif text-xl">Flux Cartoonize</CardTitle>
                  <Badge className="bg-blue-100 text-blue-800">Phổ biến</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <img
                  src="/images/hero-ai-future.jpg"
                  alt="Flux Cartoonize"
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <p className="text-slate-600 mb-4">
                  Chuyển đổi hình ảnh thực tế thành phong cách cartoon sống động với độ chính xác cao.
                </p>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center space-x-1">
                    <Heart className="h-4 w-4 text-red-500" />
                    <span className="text-sm text-slate-600">12.5K</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Download className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">203</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Play className="h-4 w-4 text-slate-500" />
                    <span className="text-sm text-slate-600">78K runs</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="https://tensor.art/u/637285499601470901" target="_blank">
                    Thử Nghiệm
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Team Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="relative">
              <img
                src="/images/professional-team.png"
                alt="TDNM Professional Development Team"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif font-bold text-white text-lg mb-2">Đội Ngũ Phát Triển Chuyên Nghiệp</h3>
                <p className="text-white/90 text-sm">Những chuyên gia hàng đầu trong lĩnh vực AI và Machine Learning</p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/executive-team.png"
                alt="TDNM Executive Leadership"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent rounded-2xl"></div>
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="font-serif font-bold text-white text-lg mb-2">Ban Lãnh Đạo Điều Hành</h3>
                <p className="text-white/90 text-sm">Những nhà lãnh đạo có tầm nhìn chiến lược trong công nghệ AI</p>
              </div>
            </div>
          </div>

          {/* Other Models Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Stable Diffusion 3.5 Large Turbo */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Stable Diffusion 3.5 Large Turbo</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Text-to-image nâng cao, hỗ trợ typography và prompt phức tạp
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-emerald-100 text-emerald-800 text-xs">Mới</Badge>
                  <Badge className="bg-slate-100 text-slate-800 text-xs">Text-to-Image</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>15.2K runs</span>
                  <div className="flex items-center space-x-1">
                    <Star className="h-3 w-3 fill-current text-yellow-500" />
                    <span>4.8</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Realistic Enhanced All */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <ImageIcon className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Realistic Enhanced All - SD3 TDNM</h3>
                <p className="text-slate-600 text-sm mb-4">LoRA cho fashion và portrait với độ chân thực cao</p>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-blue-100 text-blue-800 text-xs">Fashion</Badge>
                  <Badge className="bg-slate-100 text-slate-800 text-xs">Portrait</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>32.1K runs</span>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="https://tensor.art/models/749249717843750510" target="_blank">
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Vietnamese Paint Art */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Vietnamese-Paint-Art</h3>
                <p className="text-slate-600 text-sm mb-4">
                  Tạo hình ảnh theo phong cách hội họa Việt Nam truyền thống
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-red-100 text-red-800 text-xs">Văn hóa VN</Badge>
                  <Badge className="bg-slate-100 text-slate-800 text-xs">Nghệ thuật</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>18.7K runs</span>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="https://huggingface.co/TDN-M/vietnamese-paint-art" target="_blank">
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* East Asian Beauty */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">East-Asian-Beauty</h3>
                <p className="text-slate-600 text-sm mb-4">Tạo vẻ đẹp Đông Á dựa trên Stable Diffusion 3.5</p>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-purple-100 text-purple-800 text-xs">Beauty</Badge>
                  <Badge className="bg-slate-100 text-slate-800 text-xs">Portrait</Badge>
                </div>
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>25.3K runs</span>
                  <Button asChild variant="ghost" size="sm">
                    <Link href="https://huggingface.co/TDN-M/East-asian-beauty" target="_blank">
                      <ExternalLink className="h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* More Models Placeholder */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-slate-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Và 280+ Mô Hình Khác</h3>
                <p className="text-slate-600 text-sm mb-4">Khám phá toàn bộ bộ sưu tập mô hình AI của TDNM</p>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-slate-100 text-slate-800 text-xs">Đa dạng</Badge>
                  <Badge className="bg-slate-100 text-slate-800 text-xs">Chuyên nghiệp</Badge>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="https://tensor.art/u/637285499601470901" target="_blank">
                    Xem Tất Cả
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Hugging Face Collection */}
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="font-serif font-semibold text-lg mb-2">Hugging Face Collection</h3>
                <p className="text-slate-600 text-sm mb-4">Truy cập các mô hình mã nguồn mở trên Hugging Face</p>
                <div className="flex items-center space-x-2 mb-4">
                  <Badge className="bg-yellow-100 text-yellow-800 text-xs">Open Source</Badge>
                  <Badge className="bg-slate-100 text-slate-800 text-xs">Miễn phí</Badge>
                </div>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="https://huggingface.co/TDN-M" target="_blank">
                    Truy Cập HF
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Usage Information */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif font-bold text-3xl text-slate-900 mb-6">Thông Tin Sử Dụng</h2>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-serif font-semibold text-xl mb-4 text-emerald-600">Sử Dụng Miễn Phí</h3>
                <p className="text-slate-600 mb-4">Các mô hình miễn phí cho non-commercial use từ 18/9/2024</p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Sử dụng cá nhân</li>
                  <li>• Nghiên cứu học thuật</li>
                  <li>• Thử nghiệm và học tập</li>
                </ul>
              </div>
              <div>
                <h3 className="font-serif font-semibold text-xl mb-4 text-emerald-600">Sử Dụng Thương Mại</h3>
                <p className="text-slate-600 mb-4">Liên hệ để được tư vấn giải pháp tùy chỉnh</p>
                <ul className="text-sm text-slate-600 space-y-2">
                  <li>• Ứng dụng doanh nghiệp</li>
                  <li>• Tùy chỉnh theo yêu cầu</li>
                  <li>• Hỗ trợ kỹ thuật 24/7</li>
                </ul>
              </div>
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                <Link href="/contact">
                  Liên Hệ Tư Vấn
                  <ExternalLink className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
