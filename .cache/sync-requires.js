const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-pages-404-js": hot(preferDefault(require("C:\\xampp\\htdocs\\fornetwa-drupal-gatsby\\src\\pages\\404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\xampp\\htdocs\\fornetwa-drupal-gatsby\\src\\pages\\index.js"))),
  "component---src-pages-news-js": hot(preferDefault(require("C:\\xampp\\htdocs\\fornetwa-drupal-gatsby\\src\\pages\\news.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("C:\\xampp\\htdocs\\fornetwa-drupal-gatsby\\src\\pages\\page-2.js")))
}

