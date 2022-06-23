import React, { useState } from 'react'
import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { addWord } from './glossarySlice'

export const GlossaryInputForm = () => {
    const dispatch = useAppDispatch()

    const glossary = useAppSelector(state => state.glossary)
    const [input, setInput] = useState('')

    return (
        <>
            <form>
                <input
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                />
            </form>
            <button
                type="submit"
                onClick={e => dispatch(addWord(input))}>
                Add +
            </button>

            <ul>
                {glossary.map(word => {
                    return <li>{word}</li>
                })}
            </ul>
        </>
    )
}
