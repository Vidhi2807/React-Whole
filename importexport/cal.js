import x from "./add.js"
import y from "./sub.js"
import z from "./mul.js"
import v from "./div.js"


function cal(a, b){
    x(a, b);
    y(a,b);
    z(a,b);
    v(a,b);
}

export default cal;