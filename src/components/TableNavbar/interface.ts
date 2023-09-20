export interface TableNavbarProps {
  editButton?: () => void
  disableEditButton?: boolean
  deleteButton?: () => void
  searchButton?: () => void
  createButton?: () => void
  approveButton?: () => void
  disableApproveButton?: boolean
  rejectButton?: () => void
  reconsiderButton?: () => void
  createButtonTitle?: string
}
