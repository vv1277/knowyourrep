import Link from 'next/link'
import { Promise } from '@/data/politicians'

interface PoliticianCardProps {
  name?: string
  party?: string
  position?: string
  region?: string
  imageUrl?: string
  electionProbability?: number
  promises?: Promise[]
}

export default function PoliticianCard({
  name = "정치인 이름",
  party = "정당",
  position = "직책",
  region = "지역",
  imageUrl = "https://via.placeholder.com/180",
  electionProbability = 50,
  promises = []
}: PoliticianCardProps) {

  const cardLink = name ? `/politician/${encodeURIComponent(name)}` : '/'

  return (
    <Link href={cardLink} passHref>
      <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300 ease-in-out cursor-pointer h-full flex flex-col border border-gray-200">
        {/* Politician Info Section */}
        <div className="flex items-center space-x-5 mb-4 flex-grow">
          <div className="w-24 h-24 rounded-full overflow-hidden flex-shrink-0 border border-gray-300 bg-gray-100">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-gray-900 mb-1.5 leading-snug">{name}</h3>
            <p className="text-sm text-gray-600 mb-1 leading-snug">{position}</p>
            <p className="text-sm text-gray-600 mb-2 leading-snug">{region}</p>
            <div>
              {party && (
                 <span className="inline-block px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  {party}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Promises Section */}
        {promises && promises.length > 0 && (
          <div className="mt-4 space-y-3 pt-4 border-t border-gray-100">
            <h4 className="text-sm font-semibold text-gray-700 mb-2">주요 공약 달성률</h4>
            {promises.map((promise, index) => (
              <div key={index} className="space-y-1">
                <p className="text-sm text-gray-600 line-clamp-2">{promise.content}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">달성률</span>
                  <span className="text-xs font-medium text-gray-700">{promise.fulfillmentRate}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5">
                  <div
                    className="bg-green-500 h-1.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${promise.fulfillmentRate}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Election Probability Section */}
        {electionProbability !== undefined && (
          <div className={`mt-4 ${promises && promises.length > 0 ? '' : 'pt-4 border-t border-gray-100'}`}>
            <div className="flex justify-between items-center mb-1.5">
              <span className="text-sm text-gray-600">당선 확률</span>
              <span className="text-base font-semibold text-gray-900">{electionProbability}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div
                className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${electionProbability}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </Link>
  )
} 