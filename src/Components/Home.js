import { useQuery, useSubscription } from "@apollo/client";

import React, { useEffect, useState } from "react";




import Card from "@material-ui/core/Card";

import { makeStyles } from "@material-ui/core/styles";

import {
  Typography,
  CardHeader,
  CardActions,
  CardContent,
  Grid,
} from "@material-ui/core";

import Avatar from "@material-ui/core/Avatar";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import IconButton from "@material-ui/core/IconButton";
import { red } from "@material-ui/core/colors";

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';

import { GET_JOBS } from "../GraphQL/subscription";

import { Toaster,toast } from "react-hot-toast";
import {Helmet} from "react-helmet";
import StyledButton from "./LinkButton";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import IconBreadcrumbs from "./Header";



const useStyles = makeStyles((theme) => ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    expand: {
      transform: "rotate(0deg)",
      marginLeft: "auto",
      transition: theme.transitions.create("transform", {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: "rotate(180deg)",
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));




export default function Home() {
    const { data } = useSubscription(GET_JOBS);
    const [id, setId] = useState("");
    
    
    
    
  
  
  
  const classes = useStyles();

  useEffect(() => {
    if (data === undefined) {
      console.log("Loading");
    }

    if (data !== undefined) {
      
      setId(
        data.Jobs.map((item) => (
          <div key={item.id}>
            <Helmet>
                <meta charSet="utf-8" />
                <title>{`${item.name} aramıza katıldı !`}</title>
                
            </Helmet>
            <Card className={classes.root}>
              <CardHeader
                avatar={
                  <Avatar alt={item.name} src="/broken-image.jpg" aria-label="recipe" className={classes.avatar}>
                    
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.name}
                subheader={item.created_at}
              />
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  Kullanıcı Bilgileri
                </Typography>
                <Typography variant="h5" component="h2">
                  {item.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  {item.job}
                </Typography>
                <Typography variant="body2" component="p">
                  Yaş:{item.age}
                  <br />
                  
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                <PersonAddIcon/>
                </IconButton>
                <IconButton aria-label="share">
                <RemoveCircleOutlineIcon/>
                </IconButton>
                
              </CardActions>
              
            </Card>
            <br/>
            
            
  
          </div>
          
        ))
        
      );
      
      toast.success('Kişi Eklendi');
      
    }
  }, [data]);

  
    return (
        <div>

          <IconBreadcrumbs>

          </IconBreadcrumbs>
          <Toaster
            position="top-center"
            reverseOrder={false}
          />
          
        <h1>UYSAL FORUMA HOŞ GELDİNİZ</h1>
      
        




            <header>
                  İş başvuruları için lütfen linke tıklayınız →
                  <Link to="/Form">
        <StyledButton  >
          İş başvurusu
        </StyledButton>
      </Link>
                </header>
                <br />
                <Grid
                  item
                  xs={12}
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  {id}
                </Grid>
                
        </div>
    )
}
