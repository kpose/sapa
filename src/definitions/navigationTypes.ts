import {StackNavigationProp} from '@react-navigation/stack'
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs'
import {RouteProp} from '@react-navigation/native'

/* Define Params */

//home stack params
export type RouteStackParams = { 
    Welcome: undefined;
    Home: {uid: string, title: string, refresh: () => void, params? : any } 
    BottomTabs: undefined;
    AddToWallet: undefined;
    AddToWalletToo: undefined;
    SettingsStack: undefined;
    EditWallet: {date: string, image: string, marchant: string, category: string, amount: string, type: string, note: string} 
};
 
//Settings stack params
export type SettingsStackParams = {
    Settings: undefined;
    LanguageSettings: undefined;
    ProfileSettings: undefined;
    CurrencySettings: undefined
    
};

//bottom tab params
export type BottomTabParams = {
    WalletDetails: {uid : string, title: string, transactions: [], refresh: any};
    WalletBudget: undefined;
     WalletCalender: undefined;
    WalletChart: undefined;
     WalletSettings: undefined 
     WalletCurrency: undefined
};


/* anotate screen navigation */
type RouteStackNavigationProp = StackNavigationProp<RouteStackParams, 'Home'>
type HomeTabsNavigationProp = MaterialBottomTabNavigationProp<BottomTabParams, 'WalletDetails'>
type SettingsStackNavigationProp = StackNavigationProp<SettingsStackParams, 'Settings'>



/* anotate screen route */
type RouteStackRouteProp = RouteProp<RouteStackParams, 'Home'>
type HomeTabsRouteProp = RouteProp<BottomTabParams, 'WalletDetails'>
type SettingsStackRouteProp = RouteProp<SettingsStackParams, 'Settings'>

/* added */
type EditWalletStackRouteProp = RouteProp<RouteStackParams, 'EditWallet'>





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


/* added */
export type EditWalletStackProps = {
    navigation: RouteStackNavigationProp,
    route : EditWalletStackRouteProp
}