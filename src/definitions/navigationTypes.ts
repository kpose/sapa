import {StackNavigationProp} from '@react-navigation/stack'
import {RouteProp} from '@react-navigation/native'

/* Define Params */
export type RouteStackParams = {
    Home: undefined;
    Welcome: undefined
};


/* anotate screen navigation */
type RouteStackNavigationProp = StackNavigationProp<RouteStackParams, 'Home'>





/* anotate screen route */
type RouteStackRouteProp = RouteProp<RouteStackParams, 'Home'>



/* export navigation & route props */
export type RouteStackProps = {
    navigation: RouteStackNavigationProp,
    route : RouteStackRouteProp
}


