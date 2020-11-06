import React from 'react'

export const Total = ({ total, term, quantity }) => (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>Quantity: ${ quantity }</p>
            <p>To pay in: { term } months</p>
            <p>Month Payment: ${ (total / term).toFixed(2) }</p>
            <p>Total: ${ total.toFixed(2) }</p>
        </div>
)
