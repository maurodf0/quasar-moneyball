import { Dark } from 'quasar';


 export default function useLightOrDark(lightString, darkString){
    return !Dark.isActive ?  'lightString' :  'darkString'
}