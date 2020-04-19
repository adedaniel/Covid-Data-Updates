import React from 'react'
import { OfflineIcon } from './imageComponents/Images'

export default function ErrorMessage() {
    return (
        <div className='text-center w-100'>
            <OfflineIcon />
            <h4 className="text-center">No internet connection. Check your connection and reload this page</h4>
        </div>
    )
}
