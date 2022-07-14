/* eslint-disable react/forbid-prop-types */
import { ArticleItem } from 'ui'
import PropTypes from 'prop-types'

export default function AllArticles({ articles }) {
  return (
    <div className="flex-1 w-full max-w-2xl mx-auto px-2 py-8">
      <h1 className="font-bold text-2xl uppercase text-center mb-16">
        All Articles
      </h1>
      <ul className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4 ">
        {articles?.map((article) => (
          <ArticleItem key={article._id} article={article} />
        ))}
      </ul>
    </div>
  )
}

AllArticles.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.object).isRequired
}
