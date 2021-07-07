import useStyles from './styles';
import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';

const progLangs = ["Unibasic", "Uniquery", "SQL", "C# (ASP.NET)", "HTML", "CSS", "Javascript", 
                    "JQuery", "JSON", "XML", "AJAX", "GraphQL", "Knockout.js", "Vue.js", "C", 
                    "C++", "Java", "Scheme", "Assembly (Sparc)", "MATLAB", "VB.NET", "PowerBuilder"];

const dbs = ["SQL Server Management Studio", "MySQL", "MS Access", "Oracle", "Sybase", "ODBC", 
            "UniData", "Excel", "MongoDB"];

const appls = ["Microsoft Office", "Adobe Acrobat/Photoshop/ImageReady", "Eclipse IDE", "Javadoc", 
                "Perforce", "CruiseControl", "MbUnit", "Visual Studio", "VSCode", "VMWare/vSphere", 
                "ConnectWise", "SQLAnywhere/Interactive SQL", "Colleague Studio", "PuTTY", 
                "ImageNow/Perceptive Content", "VS extensions", "Github"];

const other = ["System Software (Development/Cycle)", "Networking - Installation/Routers", "Communication",
                 "Working with teams (development and QA)", "Component Based Software"," Unit/Component Testing",
                  "Technical Writing", "Digital Logic - Design and Implementation", "Computer Architecture (MIPS)", 
                  "Linear Algebra / Advanced Calculus and Physics", "Numerical Analysis", "Business/Time Management",
                   "MVC", "REST", "MVVM", "APIs" ];

export default function Skillset(props) {
  const classes = useStyles();
  const { title } = props;

  return (
    <Grid item xs={12} md={8} id="experience.projects">
        <Typography variant="h6" gutterBottom>
            {title}
        </Typography>

        <Divider />

        <div className={classes.accordion}>
            <Accordion id="skills.progLangs">
                <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                >
                <Typography className={classes.heading}>Programming Languages</Typography>
                </AccordionSummary>
                <AccordionDetails>

                    <div className={classes.chips}>
                        {progLangs.map((lang) => (
                        <Chip label={lang} />
                        ))} 
                    </div>

                </AccordionDetails>
            </Accordion>

            <Accordion id="skills.dbs">
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={classes.heading}>Databases</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <div className={classes.chips}>
                    {dbs.map((db) => (
                    <Chip label={db} />
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion id="skills.appls">
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={classes.heading}>Applications</Typography>
            </AccordionSummary>
            <AccordionDetails>
            
                <div className={classes.chips}>
                    {appls.map((appl) => (
                    <Chip label={appl} />
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>

        <Accordion id="skills.other">
            <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
            >
            <Typography className={classes.heading}>Other Skills</Typography>
            </AccordionSummary>
            <AccordionDetails>
            
                <div className={classes.chips}>
                    {other.map((o) => (
                    <Chip label={o} />
                    ))}
                </div>
            </AccordionDetails>
        </Accordion>
      </div>

    </Grid>
  );
}

Skillset.propTypes = {
    title: PropTypes.string,
};