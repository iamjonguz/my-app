import React, { ReactNode } from 'react'
import "./PageContainerStyles.scss"

interface IPageContainer  {
    children: ReactNode;
    backgroundImage?: string;
}

export const PageContainer = ({children}: IPageContainer) => {
    return (
        <div className={"container"}>
            {children}
        </div>
    )
}