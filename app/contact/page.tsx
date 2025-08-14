"use client"

import type React from "react"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MapPin, ExternalLink, Send, Clock, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    agreeToPrivacy: false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // You would typically send this to your backend
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <img src="/images/logo-q-neon.png" alt="TDNM Q Logo" className="w-96 h-96 object-contain" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="font-serif font-bold text-4xl lg:text-5xl text-slate-900 mb-6">
            Liên Hệ Với <span className="text-emerald-600">TDNM</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Sẵn sàng bắt đầu hành trình chuyển đổi số với AI? Liên hệ với chúng tôi để được tư vấn miễn phí về giải pháp
            AI phù hợp nhất.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-slate-900">Gửi Yêu Cầu Tư Vấn</CardTitle>
                  <p className="text-slate-600">
                    Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                          Họ và tên *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Nhập họ và tên"
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                          Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                        Công ty / Tổ chức
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Tên công ty của bạn"
                        className="w-full"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Tin nhắn *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Mô tả chi tiết về nhu cầu AI của bạn..."
                        rows={5}
                        className="w-full"
                      />
                    </div>

                    <div className="flex items-start space-x-2">
                      <Checkbox
                        id="privacy"
                        checked={formData.agreeToPrivacy}
                        onCheckedChange={(checked) =>
                          setFormData((prev) => ({ ...prev, agreeToPrivacy: checked as boolean }))
                        }
                      />
                      <label htmlFor="privacy" className="text-sm text-slate-600 leading-relaxed">
                        Tôi đồng ý với{" "}
                        <a href="/privacy" className="text-emerald-600 hover:underline">
                          Chính Sách Bảo Mật
                        </a>{" "}
                        và cho phép TDNM liên hệ với tôi về các dịch vụ AI.
                      </label>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-emerald-600 hover:bg-emerald-700"
                      disabled={!formData.agreeToPrivacy}
                    >
                      Gửi Yêu Cầu
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Contact Details */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-xl mb-6 text-slate-900">Thông Tin Liên Hệ</h3>

                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="h-5 w-5 text-emerald-600 mt-1" />
                      <div>
                        <p className="font-medium text-slate-900">Email</p>
                        <a href="mailto:contact@tdn-m.com" className="text-emerald-600 hover:underline">
                          contact@tdn-m.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <MapPin className="h-5 w-5 text-emerald-600 mt-1" />
                      <div>
                        <p className="font-medium text-slate-900">Địa chỉ</p>
                        <p className="text-slate-600">TP. Hồ Chí Minh, Việt Nam</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <Clock className="h-5 w-5 text-emerald-600 mt-1" />
                      <div>
                        <p className="font-medium text-slate-900">Giờ làm việc</p>
                        <p className="text-slate-600">Thứ 2 - Thứ 6: 8:00 - 17:00</p>
                        <p className="text-slate-600">Thứ 7: 8:00 - 12:00</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Links */}
              <Card className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <h3 className="font-serif font-semibold text-xl mb-6 text-slate-900">Kết Nối Với Chúng Tôi</h3>

                  <div className="space-y-4">
                    <a
                      href="https://tensor.art/u/637285499601470901"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
                        <ExternalLink className="h-5 w-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Tensor.Art</p>
                        <p className="text-sm text-slate-600">Xem các mô hình AI của chúng tôi</p>
                      </div>
                    </a>

                    <a
                      href="https://huggingface.co/TDN-M"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <ExternalLink className="h-5 w-5 text-yellow-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Hugging Face</p>
                        <p className="text-sm text-slate-600">Mô hình mã nguồn mở</p>
                      </div>
                    </a>

                    <a
                      href="https://linktr.ee/tdnm"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-3 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <ExternalLink className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Linktree</p>
                        <p className="text-sm text-slate-600">Tất cả liên kết của TDNM</p>
                      </div>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Training Link */}
              <Card className="border-0 shadow-lg bg-emerald-50">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MessageCircle className="h-6 w-6 text-emerald-600" />
                    <h3 className="font-serif font-semibold text-xl text-slate-900">Đào Tạo AI</h3>
                  </div>
                  <p className="text-slate-600 mb-4">
                    "Học Ngắn, Hiểu Sâu, Làm Được Ngay" - Chương trình đào tạo AI thực chiến
                  </p>
                  <Button asChild className="w-full bg-emerald-600 hover:bg-emerald-700">
                    <a href="https://www.tdn-m.com/edu1.html" target="_blank" rel="noopener noreferrer">
                      Đăng Ký Đào Tạo
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <img src="/images/milestone-25.jpg" alt="TDNM Milestones" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-emerald-600/80"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl text-white mb-6">
            Gửi Yêu Cầu Ngay Để Nhận Tư Vấn Miễn Phí!
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Đội ngũ chuyên gia AI của TDNM sẽ liên hệ với bạn trong vòng 24 giờ để tư vấn giải pháp AI phù hợp nhất cho
            doanh nghiệp của bạn.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary">
              <a href="mailto:contact@tdn-m.com">
                Gửi Email Ngay
                <Mail className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-emerald-600 bg-transparent"
            >
              <a href="https://www.tdn-m.com/edu1.html" target="_blank" rel="noopener noreferrer">
                Tham Gia Đào Tạo
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
