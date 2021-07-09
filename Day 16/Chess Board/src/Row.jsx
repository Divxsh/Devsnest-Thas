import Box from "./Box"
import "./index.css";

function Row(){
    return (
    <div>
        <div className="row1">
            <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
        </div>
        <div className="row2">
            <Box/><Box/><Box/><Box/><Box/><Box/><Box/><Box/>
        </div>
    </div>   
    )
};

export default Row;