import {StackNavigationProp} from '@react-navigation/stack'
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs'
import {RouteProp} from '@react-navigation/native'

/* Define Params */

//home stack params
export type RouteStackParams = {
    Home: undefined;
    BottomTabs: undefined;
    AddToWallet: undefined;
    SettingsStack: undefined
};


//Settings stack params
export type SettingsStackParams = {
    Settings: undefined;
    LanguageSettings: undefined;
    ProfileSettings: undefined;
    CurrencySettings: undefined
    
};

//bottom tab params
export type HomeTabParams = {
    WalletDetails: undefined;
    WalletBudget: undefined;
     WalletCalender: undefined;
    WalletChart: undefined;
     WalletSettings: undefined
};


/* anotate screen navigation */
type RouteStackNavigationProp = StackNavigationProp<RouteStackParams, 'Home'>
type HomeTabsNavigationProp = MaterialBottomTabNavigationProp<HomeTabParams, 'WalletDetails'>
type SettingsStackNavigationProp = StackNavigationProp<SettingsStackParams, 'Settings'>



/* anotate screen route */
type RouteStackRouteProp = RouteProp<RouteStackParams, 'Home'>
type HomeTabsRouteProp = RouteProp<HomeTabParams, 'WalletDetails'>
type SettingsStackRouteProp = RouteProp<SettingsStackParams, 'Settings'>




/* export navigation & route props */
export type RouteStackProps = {
    navigation: RouteStackNavigationProp,
    route : RouteStackRouteProp
}

export type WalletTabProps = {
    navigation: HomeTabsNavigationProp,
    route : HomeTabsRouteProp
}

export type SettingsStackProps = {
    navigation: SettingsStackNavigationProp,
    route : SettingsStackRouteProp
}

