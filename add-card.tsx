import React from 'react'

export default function AddCard({handleAddCard}: any) {
    return (
        <div className="add-card" onClick={handleAddCard}>
            + add a card
        </div>
    )
}
