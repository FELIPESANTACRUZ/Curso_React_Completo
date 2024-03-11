import React from 'react'

const BookDetails = ({title, author, price, novo }) => {
  return (
    <div>
        <h2>BookDetails</h2>
        <p> {title}  </p>
        <p> {author} </p>
        <p> {price} </p>

    {/* {novo && <p>este livro é novo</p>}
    {!novo && <p>este livro é antigo</p>} */}

    {novo ? <p>este livro é novo</p> : <p>este livro é antigo</p>}

    </div>
  )
}

export default BookDetails