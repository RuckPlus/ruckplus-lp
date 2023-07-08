import { useState } from 'react'

export default function useModal() {
  const [open, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }

  return {
    open,
    openModal,
    closeModal,
  }
}
