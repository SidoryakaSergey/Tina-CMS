export default function About() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              О нашей студии
            </h1>
            <p className="text-xl text-gray-600">
              Узнайте больше о нашей команде, подходе к работе и опыте в сфере
              переводов
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Наша история
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="text-lg mb-6">
                Наша студия переводов была основана с целью предоставления
                высококачественных переводческих услуг для киноиндустрии. Мы
                специализируемся на переводе сериалов и фильмов различных
                жанров.
              </p>
              <p className="text-lg mb-6">
                За годы работы мы перевели более 500 часов контента, включая
                популярные сериалы, художественные и документальные фильмы. Наши
                переводы помогают зрителям наслаждаться контентом на родном
                языке без потери качества восприятия.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наша команда
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Наша команда состоит из профессиональных переводчиков, лингвистов
              и технических специалистов, которые работают вместе для создания
              наилучшего результата.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l9-5-9-5-9 5 9 5z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Переводчики
              </h3>
              <p className="text-gray-600">
                Опытные лингвисты с глубокими знаниями языков и культур
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Актеры озвучивания
              </h3>
              <p className="text-gray-600">
                Профессиональные актеры с богатым опытом работы в дублировании
              </p>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-12 h-12 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Технические специалисты
              </h3>
              <p className="text-gray-600">
                Эксперты по обработке звука и синхронизации субтитров
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Principles */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Основные принципы работы
            </h2>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Точность перевода
                  </h3>
                  <p className="text-gray-600">
                    Мы сохраняем оригинальный смысл и настроение, передавая не
                    только слова, но и эмоции персонажей.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Культурная адаптация
                  </h3>
                  <p className="text-gray-600">
                    Учитываем культурные особенности целевой аудитории,
                    адаптируя шутки, идиомы и культурные отсылки.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Техническое качество
                  </h3>
                  <p className="text-gray-600">
                    Обеспечиваем идеальную синхронизацию с видео и высокое
                    качество звука в каждом проекте.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="bg-blue-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Соблюдение сроков
                  </h3>
                  <p className="text-gray-600">
                    Всегда выполняем работу в установленные сроки, понимая
                    важность своевременной доставки контента.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
