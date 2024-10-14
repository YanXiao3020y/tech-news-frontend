import Link from 'next/link'

const news = [
  {
    id: 1,
    title: 'AI Revolutionizes the Tech Industry',
    description:
      'Artificial Intelligence is making rapid strides in transforming multiple sectors of technology...',
    date: 'October 13, 2024'
  },
  {
    id: 2,
    title: 'Quantum Computing: The Next Big Leap',
    description:
      'Quantum computing is expected to revolutionize problem-solving in sectors like cryptography and material sciences...',
    date: 'October 10, 2024'
  },
  {
    id: 3,
    title: '5G and the Future of Connectivity',
    description:
      'The widespread adoption of 5G technology is expected to enhance connectivity and transform communication...',
    date: 'October 8, 2024'
  }
]
export default function NewsPage() {
  return (
    <div className="w-full min-h-screen bg-gray-100">
      <div className="max-w-3xl mx-auto p-8 text-gray-800">
        <h1 className="text-4xl font-bold text-center mb-10">Tech News</h1>
        <ul>
          {news.map((item) => (
            <li
              key={item.id}
              className="bg-white p-6 mb-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
            >
              <span className="text-sm text-gray-500">{item.date}</span>
              <Link
                href="#"
                className="block text-2xl font-semibold text-gray-800 hover:text-blue-600 mt-2 transition-colors"
              >
                {item.title}
              </Link>
              <p className="text-gray-600 mt-4">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
