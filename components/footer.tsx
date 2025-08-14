import Link from "next/link"
import { Brain, Mail, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-emerald-400" />
              <span className="font-serif font-bold text-xl">TDNM</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed">
            Công ty Sở hữu nhiều sáng tạo hàng đầu châu Á trong nghiên cứu và phát triển mô hình AI cho các nhiệm vụ chuyên môn hóa cao.
            Chúng tôi không chỉ xây dựng AI - chúng tôi định hình tương lai của trí tuệ nhân tạo.
            </p>
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <MapPin className="h-4 w-4" />
              <span>TP. Hồ Chí Minh, Việt Nam</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-slate-300">
              <Mail className="h-4 w-4" />
              <a href="mailto:contact@tdn-m.com" className="hover:text-emerald-400 transition-colors">
                contact@tdn-m.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Liên Kết Nhanh</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Giới Thiệu
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Dịch Vụ
                </Link>
              </li>
              <li>
                <Link href="/models" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Mô Hình AI
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-300 hover:text-emerald-400 transition-colors">
                  Tuyển Dụng
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Dịch Vụ</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-slate-300">Sản Xuất Nội Dung Đa Phương Tiện</li>
              <li className="text-slate-300">Phát Triển Ứng Dụng AI</li>
              <li className="text-slate-300">Huấn Luyện Mô Hình AI</li>
              <li className="text-slate-300">Tư Vấn & Đào Tạo AI</li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Kết Nối</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://tensor.art/u/637285499601470901"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center space-x-2"
                >
                  <span>Tensor.Art</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://huggingface.co/TDN-M"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center space-x-2"
                >
                  <span>Hugging Face</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://linktr.ee/tdnm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-emerald-400 transition-colors flex items-center space-x-2"
                >
                  <span>Linktree</span>
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">© 2025 TDNM. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Chính Sách Bảo Mật
            </Link>
            <Link href="/terms" className="text-slate-400 hover:text-emerald-400 text-sm transition-colors">
              Điều Khoản Dịch Vụ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
