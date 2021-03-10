import React from 'react'
import { KeywordProvider } from '../contexts/KeywordContext';
import Header from '../components/Header';

export default function MainLayout({ children }) {
    return (
        <div>
            <KeywordProvider>
                <Header />
                {children}
            </KeywordProvider>
        </div>
    )
}
