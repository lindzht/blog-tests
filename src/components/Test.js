import React from "react";
import { useMediaQuery } from "react-responsive";

function TestPage (){
    const isDesktop = useMediaQuery({ query : "(min-width: 900px)" });
    const isTablet = useMediaQuery({ query : "(min-width: 601px)" });
    const isMobile = useMediaQuery({ query : "(max-width: 600px)" });

    const handleStyleChange = () => {
        if (isDesktop) {
            return "desktop-style";
        } else if (isTablet) {
            return "tablet-style";
        } else if (isMobile) {
            return "mobile-style";
        }
    };

    const handleContainerChange = () => {
        if (isDesktop) {
            return "div-container-desk";
        } else if (isTablet) {
            return "div-container-tablet";
        } else if (isMobile) {
            return "div-container-mobile";
        }
    };

    const Container = () => {
        return (
            <div className={ handleStyleChange() }> 
                <p>👋</p> 
            </div>
          )}

    return(
        <div className="test-page">
            <div className={ handleContainerChange() }>
                <Container />
                <Container />
                <Container />
            </div>
        </div>
    )
}

export default TestPage;




// import React from "react";
// import { useMediaQuery } from "react-responsive";

// function TestPage (){
//     const isDesktop = useMediaQuery ( {query: "(min-width: 900px)" });

//     return(
//         <div>
//             <h1> Hello! </h1>
//               {isDesktop ? 
//                 <h3 style={{color: "orange"}}> Show me when the window is big </h3>
//                 : <h3 style={{backgroundColor: "yellow"}}>Show me when the window is small </h3>}
//         </div>
//     )
// }

// export default TestPage;































