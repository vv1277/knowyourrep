interface NewsCardProps {
  title?: string
  summary?: string
  date?: string
  source?: string
  onClick?: () => void
}

export default function NewsCard({
  title = "정치 뉴스 제목",
  summary = "정치 뉴스 요약 내용입니다...",
  date = "YYYY-MM-DD",
  source = "언론사",
  onClick
}: NewsCardProps) {
  return (
    <div
      className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer h-full flex flex-col border border-gray-200"
      onClick={onClick}
    >
      <div className="flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-lg font-semibold text-gray-900 leading-snug line-clamp-2 mr-2">
            {title}
          </h3>
        </div>
        <p className="text-gray-700 text-sm mb-4 leading-relaxed line-clamp-3">
          {summary}
        </p>
      </div>
      <div className="flex justify-between items-center text-sm text-gray-500 pt-4 border-t border-gray-100">
        <span>{source} - {date}</span>
        <button className="text-blue-600 hover:text-blue-700 font-medium" onClick={e => { e.stopPropagation(); onClick && onClick(); }}>
          자세히 보기
        </button>
      </div>
    </div>
  )
} 