import { news } from '@/data/news'
import Link from 'next/link'

interface Props {
  params: { id: string }
}

export default function NewsDetailPage({ params }: Props) {
  const newsId = Number(params.id)
  const newsItem = news.find(n => n.id === newsId)

  if (!newsItem) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto p-8 bg-white rounded-xl shadow-lg text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">뉴스를 찾을 수 없습니다.</h2>
          <p className="text-gray-600 mb-6">요청하신 뉴스 정보를 찾을 수 없습니다.</p>
          <Link href="/" className="text-blue-600 hover:underline text-lg font-medium">홈으로 돌아가기</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-gray-50 min-h-screen py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 border border-gray-200">
          <div className="mb-8 pb-6 border-b border-gray-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3 leading-tight">{newsItem.title}</h2>
            <div className="text-sm text-gray-500">{newsItem.date} | {newsItem.source}</div>
          </div>
          <div className="text-lg text-gray-800 mb-8 leading-relaxed whitespace-pre-line">
            {newsItem.content}
          </div>
          <div className="mt-8 text-center">
            <Link href="/" className="text-blue-600 hover:underline text-lg font-medium">홈으로 돌아가기</Link>
          </div>
        </div>
      </div>
    </div>
  )
} 