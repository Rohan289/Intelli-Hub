import React from "react";


const Tree = ({data}) => {

    return (
        
            data.map((element) => {
                return (
                    <NodeElement element={element} />
                )
            })
        
    )

}

const NodeElement = ({element}) => {
    const [visibility,setVisibiliry] = React.useState(false);
    let hasChildren = element.children?true:false;
    const handleVisibility = () => {
        setVisibiliry(!visibility);
    }
    return(
        <>
        <button onClick={handleVisibility}>{element.id}</button>
            {
            visibility && hasChildren && (
                <Tree data = {element.children} />
            )
            }
        </>
    )
}


export default Tree;