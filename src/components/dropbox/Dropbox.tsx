import React from 'react'

import stl from './Dropbox.module.scss'

const Dropbox = ({
  setSelectedFile,
}: {
  setSelectedFile: (arg: File) => void
}) => {
  const handleDragOver = (e: any) => {
    e.preventDefault()
    const ele = e.target
    ele.classList.add(stl.draggedOver)
  }

  const handleDragOut = (e: any) => {
    e.preventDefault()
    const ele = e.target
    ele.classList.remove(stl.draggedOver)
  }

  const handleDrop = (e: any) => {
    e.preventDefault()
    const ele = e.target
    ele.classList.remove(stl.draggedOver)
    const files = e.dataTransfer.files
    files.length > 1 &&
      alert("Multiple files are'nt supported.\n First file will be scanned.")
    const file = files[0]

    if (file.type === 'image/png' || 'image/jpeg' || 'image/gif')
      setSelectedFile(file)
    else if (file.size > 1048576) alert('File size should be less than 1 MiB')
    else alert('File type is not supported.\n Supported files are: PNG or JPEG')
  }

  return (
    <div
      id="dropbox"
      className={stl.dropbox}
      onDragOver={handleDragOver}
      onDragLeave={handleDragOut}
      onDrop={handleDrop}
    />
  )
}

export default Dropbox
