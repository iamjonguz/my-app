import React, { useEffect } from 'react'
import { IMenu } from '../../../models/Menu'
import { PageContainer } from '../../shared/PageContainer/PageContainer'
import "./MenuStyles.scss"

export const Menu = () => {

    const menu: IMenu = {
        menuName: "Nyårsafton 2022",
        firstCourse: "Rökt rotsellerisoppa",
        secondCourse: "Vilt kött med potatiskaka + VB, etc..",
        dessert: "Mascarponemoussebakelse"
    }

    useEffect(() => {
        console.log("on mount")
    },[])

    const renderMenu = (menu: IMenu) => {
        return (
            <div>
                <h2>{menu.menuName}</h2>
                <h3>{menu.firstCourse}</h3>
                <h3>{menu.secondCourse}</h3>
                <h3>{menu.dessert}</h3>
            </div>
        )
    }

    return (
        <PageContainer >
            <div>
                <h1>Menu</h1>
                {renderMenu(menu)}
            </div>
        </PageContainer>
        
    )
}