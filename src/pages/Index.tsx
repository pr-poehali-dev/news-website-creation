import { useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Icon from '@/components/ui/icon'

const newsData = [
  {
    id: 1,
    title: "Парламентские выборы: результаты голосования",
    excerpt: "Подведены предварительные итоги голосования на парламентских выборах. Явка составила 67%",
    category: "Политика",
    tags: ["выборы", "парламент", "результаты"],
    readTime: "3 мин",
    image: "/img/e65f4b41-d4f3-4934-9699-1998a25856f7.jpg",
    isBreaking: true
  },
  {
    id: 2,
    title: "Новые меры поддержки малого бизнеса",
    excerpt: "Правительство анонсировало пакет мер для поддержки предпринимателей в условиях экономической нестабильности",
    category: "Политика",
    tags: ["экономика", "бизнес", "поддержка"],
    readTime: "5 мин",
    image: "/img/e65f4b41-d4f3-4934-9699-1998a25856f7.jpg",
    isBreaking: false
  },
  {
    id: 3,
    title: "Реформа образования: что изменится",
    excerpt: "Министерство образования представило новую концепцию развития школьного образования на ближайшие 5 лет",
    category: "Политика",
    tags: ["образование", "реформы", "школы"],
    readTime: "4 мин",
    image: "/img/e65f4b41-d4f3-4934-9699-1998a25856f7.jpg",
    isBreaking: false
  },
  {
    id: 4,
    title: "Цифровизация государственных услуг",
    excerpt: "Запущен новый портал для получения государственных услуг в электронном виде",
    category: "Политика",
    tags: ["цифровизация", "госуслуги", "технологии"],
    readTime: "2 мин",
    image: "/img/e65f4b41-d4f3-4934-9699-1998a25856f7.jpg",
    isBreaking: false
  }
]

export default function Index() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [searchQuery, setSearchQuery] = useState('')

  const allTags = Array.from(new Set(newsData.flatMap(news => news.tags)))
  
  const filteredNews = newsData.filter(news => {
    const matchesTag = !selectedTag || news.tags.includes(selectedTag)
    const matchesSearch = !searchQuery || 
      news.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      news.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesTag && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Icon name="Newspaper" size={28} className="text-primary" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  NewsPortal
                </h1>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Главная
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Политика
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Экономика
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors font-medium">
                Технологии
              </a>
            </nav>

            <Button variant="outline" size="sm">
              <Icon name="Menu" size={20} />
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20">
              <Icon name="Zap" size={16} className="mr-1" />
              Актуальные новости
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Новости
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                сегодня
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Оперативные новости политики, экономики и общества. 
              Достоверная информация из первых рук.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 animate-scale-in">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Поиск новостей..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-gray-300 focus:border-primary focus:ring-primary"
              />
            </div>
            
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-sm font-medium text-gray-700">Теги:</span>
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className="rounded-full"
              >
                Все
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className="rounded-full"
                >
                  {tag}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news, index) => (
            <Card 
              key={news.id} 
              className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-gray-200 hover:border-primary/20 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {news.isBreaking && (
                  <Badge className="absolute top-3 left-3 bg-primary text-white">
                    <Icon name="Zap" size={14} className="mr-1" />
                    Срочно
                  </Badge>
                )}
                <div className="absolute top-3 right-3">
                  <Badge variant="secondary" className="bg-black/20 text-white backdrop-blur-sm">
                    {news.category}
                  </Badge>
                </div>
              </div>
              
              <CardHeader className="pb-3">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                  {news.title}
                </h3>
              </CardHeader>
              
              <CardContent className="pt-0">
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {news.excerpt}
                </p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {news.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="text-xs cursor-pointer hover:bg-primary hover:text-white transition-colors"
                      onClick={() => setSelectedTag(tag)}
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <Icon name="Clock" size={16} className="mr-1" />
                    {news.readTime}
                  </div>
                  
                  <Button size="sm" className="bg-primary hover:bg-primary/90 text-white">
                    Читать
                    <Icon name="ArrowRight" size={16} className="ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {filteredNews.length === 0 && (
          <div className="text-center py-20">
            <Icon name="Search" size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Новости не найдены</h3>
            <p className="text-gray-600">Попробуйте изменить критерии поиска</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Newspaper" size={24} className="text-primary" />
                <h3 className="text-xl font-bold">NewsPortal</h3>
              </div>
              <p className="text-gray-400 mb-4">
                Ваш надежный источник актуальных новостей и аналитики.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-400 hover:bg-gray-800">
                  <Icon name="Mail" size={16} />
                </Button>
                <Button variant="outline" size="sm" className="bg-transparent border-gray-600 text-gray-400 hover:bg-gray-800">
                  <Icon name="Phone" size={16} />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Политика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Экономика</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Технологии</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Спорт</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">О нас</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-primary transition-colors">Редакция</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Реклама</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Подписка</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 NewsPortal. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}