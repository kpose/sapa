import {StackNavigationProp} from '@react-navigation/stack'
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs'
import {RouteProp} from '@react-navigation/native'
import {MaterialTopTabNavigationProp} from '@react-navigation/material-top-tabs'

/* Define Params */

//home stack params
export type RouteStackParams = { 
    Welcome: undefined;
    Home: {uid: string, title: string, refreshWallets: () => void, params? : any }  
    BottomTabs: undefined;
    AddToWallet: undefined;
    AddToWalletToo: undefined;
    SettingsStack: undefined;
    EditWallet: {date: string, image: string, marchant: string, category: string, amount: string, type: string, note: string, icon: string, transactionUUID: string} 
};
 
//Settings stack params
export type SettingsStackParams = {
    Settings: undefined;
    LanguageSettings: undefined;
    ProfileSettings: undefined;
    CurrencySettings: undefined
    
};


//chart tab params
export type ChartTopTabsParams = {
    Expense: undefined;
    Income: undefined;
};

type ppp = {
   icon: string
}
//bottom tab params
export type BottomTabParams = {
    WalletDetails: {data: {uid: string; title: string; transactions: []}}; 
    WalletBudget: {initialParams: {icon: string}}
     WalletCalender: {initialParams: {icon: string}}
    WalletChart: {initialParams: {icon: string}}
     WalletSettings: {initialParams: {icon: string}}
     WalletCurrency: {initialParams: {icon: string}}
};


/* anotate screen navigation */
type RouteStackNavigationProp = StackNavigationProp<RouteStackParams, 'Home'>
type HomeTabsNavigationProp = MaterialBottomTabNavigationProp<BottomTabParams, 'WalletDetails'>
type SettingsStackNavigationProp = StackNavigationProp<SettingsStackParams, 'Settings'>
type ChartTabNavigationProp = MaterialTopTabNavigationProp<ChartTopTabsParams, 'Expense'>



/* anotate screen route */
type RouteStackRouteProp = RouteProp<RouteStackParams, 'Home'>
type HomeTabsRouteProp = RouteProp<BottomTabParams, 'WalletDetails'>
type SettingsStackRouteProp = RouteProp<SettingsStackParams, 'Settings'>
type EditWalletStackRouteProp = RouteProp<RouteStackParams, 'EditWallet'>
type ChartTabRouteProp = RouteProp<ChartTopTabsParams, 'Expense'>





/* export navigation & route props */
export type RouteStackProps = {
    navigation: RouteStackNavigationProp,
    route : RouteStackRouteProp
}

export type BottomTabProps = {
    navigation: HomeTabsNavigationProp,
    route : HomeTabsRouteProp
}

export type SettingsStackProps = {
    navigation: SettingsStackNavigationProp,
    route : SettingsStackRouteProp
}

export type EditWalletStackProps = {
    navigation: RouteStackNavigationProp,
    route : EditWalletStackRouteProp
}

export type ChartTabProps = {
    navigation: ChartTabNavigationProp,
    route : ChartTabRouteProp
}