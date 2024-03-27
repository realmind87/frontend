"use client"

import React, { createContext, ReactNode, useState } from 'react';
import type {Session} from "@auth/core/types";

// 상태의 타입을 정의합니다.
export interface AppState {
    session: Session | null,
    setSession: React.Dispatch<React.SetStateAction<Session | null>> | null
}

// 초기 상태를 정의합니다.
const initialState: AppState = {
    session: null,
    setSession: null
}
interface AppProviderProps {
    children: ReactNode;
}

export const AppContext = createContext<AppState>(initialState);

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {

    const [session, setSession] = useState<Session | null>(null)
    
    return (
        <AppContext.Provider value={{session, setSession}}>
            {children}
        </AppContext.Provider>
    );
};