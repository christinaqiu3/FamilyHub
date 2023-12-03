'use client'
import {createContext, useContext, useState} from 'react'

export const GroupContext = createContext(1) ;
export const GroupSetterContext = createContext(undefined) ;

export function GroupProvider({children}) {
    const [group, setGroup] = useState(1)
    return (
        <GroupSetterContext.Provider value = {{setGroup}}>
            <GroupContext.Provider value = {{group}}>
                {children}
            </GroupContext.Provider>
        </GroupSetterContext.Provider>
        
    )
}