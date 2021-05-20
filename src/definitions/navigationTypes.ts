import {StackNavigationProp} from '@react-navigation/stack'
import {MaterialBottomTabNavigationProp} from '@react-navigation/material-bottom-tabs'
import {RouteProp} from '@react-navigation/native'

/* Define Params */
export type RouteStackParams = {
    Home: undefined;
    Welcome: undefined
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




/* anotate screen route */
type RouteStackRouteProp = RouteProp<RouteStackParams, 'Home'>
type HomeTabsRouteProp = RouteProp<HomeTabParams, 'WalletDetails'>



/* export navigation & route props */
export type RouteStackProps = {
    navigation: RouteStackNavigationProp,
    route : RouteStackRouteProp
}

export type WalletTabProps = {
    navigation: HomeTabsNavigationProp,
    route : HomeTabsRouteProp
}

