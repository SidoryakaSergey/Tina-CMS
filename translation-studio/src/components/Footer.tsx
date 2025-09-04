import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Студия переводов</h3>
            <p className="text-gray-300 mb-4">
              Профессиональная студия переводов сериалов и фильмов. Качественные
              переводы с субтитрами и озвучкой.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Быстрые ссылки</h3>
            <nav className="space-y-2">
              <Link
                href="/"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Главная
              </Link>
              <Link
                href="/about"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                О нас
              </Link>
              <Link
                href="/services"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Услуги
              </Link>
              <Link
                href="/contact"
                className="block text-gray-300 hover:text-white transition-colors duration-200"
              >
                Контакты
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Контакты</h3>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@translation-studio.com</p>
              <p>Телефон: +7 (xxx) xxx-xx-xx</p>
              <p>Telegram: @translation_studio</p>
              <p className="mt-4">г. Москва, ул. Примерная, д. 123, офис 456</p>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="https://facebook.com/translationstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/translation_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Instagram
            </a>
            <a
              href="https://t.me/translation_studio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-200"
            >
              Telegram
            </a>
          </div>
          <p className="text-gray-300 text-sm">
            © 2024 Студия переводов. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
}
