import React, {createContext} from 'react'



const initialState = {
    isLightTheme: true
}


export const ThemeContext = createContext(themeContextTemplate);

const ThemeContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, inintialState)
    return (
        <ThemeContext.Provider value={[state, dispatch]}>
            {children}
        </ThemeContext.Provider>
    )
}
// class ThemeContextProvider extends React.Component {
//     state = {
//         isLightTheme: true
//     }
//     toggleTheme = () => {
//         this.setState({isLightTheme: !this.state.isLightTheme});
//     }
//     render() { 
//         return (
//             <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
//                 {this.props.children}
//             </ThemeContext.Provider>
//         );
//     }
// }
 
export default ThemeContextProvider;