export interface Photo {
  id: string
  created_at: string
  updated_at: string
  width: number
  height: number
  color: string
  blur_hash: string
  likes: number
  liked_by_user: boolean
  description: string
  user: User
  current_user_collections: CurrentUserCollection[]
  urls: PhotoUrls
  links: PhotoLinks
}

export interface PhotoData {
  total: number
  total_pages: number
  results: Photo[]
}

export interface SearchQueryParams {
  query: string
  page?: number
  per_page?: number
  order_by?: 'latest' | 'relevant'
  collections?: string
  content_filter?: 'low' | 'high'
  color?:
    | 'black_and_white'
    | 'black'
    | 'white'
    | 'yellow'
    | 'orange'
    | 'red'
    | 'purple'
    | 'magenta'
    | 'green'
    | 'teal'
    | 'blue'
  orientation?: 'landscape' | 'portrait' | 'squarish'
}

interface UserProfileImage {
  small: string
  medium: string
  large: string
}

interface UserLinks {
  self: string
  html: string
  photos: string
  likes: string
  portfolio: string
}

interface User {
  id: string
  username: string
  name: string
  portfolio_url: string
  bio: string
  location: string
  total_likes: number
  total_photos: number
  total_collections: number
  instagram_username: string
  twitter_username: string
  profile_image: UserProfileImage
  links: UserLinks
}

interface CurrentUserCollection {
  id: number
  title: string
  published_at: string
  last_collected_at: string
  updated_at: string
  cover_photo: string | null
  user: User | null
}

interface PhotoUrls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
}

interface PhotoLinks {
  self: string
  html: string
  download: string
  download_location: string
}
