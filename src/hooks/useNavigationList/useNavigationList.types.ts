export type NavigationItem = {
  startContent?: JSX.Element
  name: string
  link: string
}

export type NavigationListResponse = {
  list: NavigationItem[]
  pageName: string
}
