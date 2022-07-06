import React, { useEffect } from "react";

import styled from "@emotion/styled";

import Members from "./Members";
import Place from "./Place";

const Wrapper = styled("div")`
    /* position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0; */

    border: 1px solid red;

    /* display: flex; */
    overflow-y: auto;
`;
function Position() {
    useEffect(() => {
        console.log("use Effect:: Seats");
    }, []);

    return (
        <Wrapper>
        <Place />
        <Members />
        </Wrapper>
    );
}

export default Position;
