import { StyleSheetManager } from "styled-components";

export function MyApp() {
  return <StyleSheetManager shouldForwardProp={true}></StyleSheetManager>;
}

// function shouldForwardProp(propName, target) {
//     if (typeof target === 'string') {
//         return isPropValid(propName)
//     }
// }
