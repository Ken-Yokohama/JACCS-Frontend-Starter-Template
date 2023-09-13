export interface PageHeaderProps {
  title: string
  back?: boolean
  breadcrumbs?: { label: string; to?: string }[] | null
}
