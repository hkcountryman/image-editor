import { React, useRef } from "react";
import { Button, Container, CssBaseline, Grid, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./components.css";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
        margin: `${theme.spacing(1)}px auto`,
        padding: theme.spacing(2),
      },    
}));

function scale(uploadWidth) {
    let workspace = document.getElementById("workspace");
    if (uploadWidth > workspace.maxWidth) {
        return uploadWidth / workspace.maxWidth;
    }
    return 1;
}

function ImageUpload() {
    const uploadedImage = useRef(null);
    const handleImageUpload = (e) => {
        const [file] = e.target.files;
        if (file) {
            const reader = new FileReader();
            const {current} = uploadedImage;
            current.file = file;
            reader.onload = (e) => {
                current.src = e.target.result;
                console.log((current.width));
                current.width /= scale(current.width);
            }
            reader.readAsDataURL(file);
        }
    };

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container wrap="nowrap" spacing={2}>
                    <Grid item xs zeroMinWidth>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                        />
                    </Grid>
                </Grid>
            </Paper>
            <Grid container wrap="nowrap" spacing={2}>
                <Grid item xs zeroMinWidth>
                    <img
                        id="userImage"
                        ref={uploadedImage}
                        style={{
                            position: "absolute"
                        }}
                    />
                </Grid>
            </Grid>
        </div>
      );
}

export default function Canvas() {
    return (
        <>
            <CssBaseline />
            <Container id="workspace" maxWidth="lg">
                <ImageUpload />
            </Container>
        </>
    );
}