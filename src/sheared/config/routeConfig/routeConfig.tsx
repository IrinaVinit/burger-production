import { FeedPage } from "pages/FeedPage"
import { LoginPage } from "pages/LoginPage"
import { MainPage } from "pages/MainPage"
import { RouteProps } from "react-router-dom"

export enum AppRoutes {
    MAIN = 'main',
    FEED = 'feed',
    LOGIN = 'login'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.FEED]: '/feed',
    [AppRoutes.LOGIN]: '/login'
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path:RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.FEED]: {
        path:RoutePath.feed,
        element: <FeedPage />
    },
    [AppRoutes.LOGIN]: {
        path: RoutePath.login,
        element: <LoginPage/>
    }
}