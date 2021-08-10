export const filters = {
  all (array) {
    return array
  },
  favorite (array) {
    return array.filter(item => item.favorite)
  },
  search (array, keyword) {
    if (!keyword) return []
    const reg = new RegExp(keyword, 'i')
    return array.filter(item => item.title.match(reg))
  }
}
