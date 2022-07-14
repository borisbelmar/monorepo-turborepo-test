import React from 'react'
import PropTypes from 'prop-types'

export default function ArticleItem({ article }) {
  return (
    <li className="relative min-h-48 rounded-md overflow-hidden">
      <img src={article.image} alt={article.title} className="absolute top-0 left-0 w-full h-full z-0 object-cover" />
      <div className="z-10 relative p-2">
        <div className="flex flex-col mt-48 backdrop-blur-sm bg-primary-100 bg-opacity-50 p-2 rounded overflow-hidden">
          <h3 className="font-semibold">{article.title}</h3>
          <div className="h-1 w-[60%] bg-primary-500 mb-1" />
          <p className="line-clamp-2 mb-2">
            {article.content}
          </p>
          <p className="text-sm opacity-75">
            <span className="font-semibold">Author:</span> {article.user.firstName} {article.user.lastName}
          </p>
        </div>
      </div>
    </li>
  )
}

ArticleItem.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    user: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}
