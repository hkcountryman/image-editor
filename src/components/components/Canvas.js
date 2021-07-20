import React from "react";
import { Button, Container, CssBaseline } from "@material-ui/core";
import "./components.css";

function addPic() {
    let canvas = document.getElementById("canvas");
    let context = canvas.getContext("2d");
    let image = new Image();
    image.src = "../../public/logo192.png";
    //image.src = "https://www.w3schools.com/html/img_the_scream.jpg";
    image.onload = () => context.drawImage(image, 0, 0, 500, 500);
}

export default function Canvas() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="sm">
                <canvas id="canvas"></canvas>
                <Button variant="contained" color="primary" onClick={addPic}>upload</Button>
            </Container>
        </>
    );
}