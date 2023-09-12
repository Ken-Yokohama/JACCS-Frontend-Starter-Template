export interface NavMenuProps {
  title: string
  to?: string
  icon?: string
  show: boolean
  subModule?: {
    subTitle: string
    to: string
    show: boolean
  }[]
}
