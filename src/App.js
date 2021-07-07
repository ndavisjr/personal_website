import React from 'react';
import useStyles from './styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Toolbar from '@material-ui/core/Toolbar';

import Header from '../src/components/header/Header';
import MainFeaturedPost from '../src/components/mainfeaturedpost/MainFeaturedPost';
import FeaturedPost from '../src/components/featuredpost/FeaturedPost';
import Main from '../src/components/main/Main';
import Sidebar from '../src/components/sidebar/Sidebar';
import Footer from '../src/components/footer/Footer';
import Experience from './components/experience/Experience';
import Skillset from '../src/components/skillset/Skillset';
import professionalExp from './ProfessionalExp';
import exampleProjects from './ExampleProjects';
import sidebarInfo from './SidebarInfo';

// material ui code for "back to the top" button
function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

const sections = [
  { title: 'Professional Experience', url: '#experience.projects' },
  { title: 'Side Projects', url: '#main.exampleprojects' },
  { title: 'Education', url: '#sidebar.education' },
  { title: 'Languages', url: '#skills.progLangs' },
  { title: 'Databases', url: '#skills.dbs' },
  { title: 'Applications', url: '#skills.appls' },
  { title: 'Other Skills', url: '#skills.other' },
];

const mainFeaturedPost = {
  title: 'Who am I?',
  description:
    "Experienced software developer with a background in designing, developing, maintaining and administering software systems for a variety of clientele. This includes 7+ years of IT operations for Higher Education and 3 years in the private sector for the developmentally disabled community. A skillset that combines computer operations with customer service oriented relationships; bridging gaps between tech-oriented programmers and users.",
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
  linkText: '',
};

export default function App(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
      <Toolbar id="back-to-top-anchor" />
        <Header title="Neil Davis" sections={sections} />

        <main>
          <MainFeaturedPost post={mainFeaturedPost} />

          <Grid container spacing={4}>
            {professionalExp.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>

          <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="Example projects" projects={exampleProjects} />

            <Sidebar
              title={sidebarInfo.title}
              school={sidebarInfo.school}
              dateRange={sidebarInfo.dateRange}
              description={sidebarInfo.description}

              contactName={sidebarInfo.contactName}
              contactEmail={sidebarInfo.contactEmail}
              contactPhone={sidebarInfo.contactPhone}
              contactLocation={sidebarInfo.contactLocation}
    
              social={sidebarInfo.social}
            />

            <Experience title="Professional Experience" professionalExp={professionalExp} />
            <Skillset title="Skillsets" />
 
          </Grid>

        </main>
      </Container>

      <ScrollTop {...props}>
        <Fab color="gray" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>

      <Footer title="" description="Thanks for stopping by. I look forward to hearing from you." />
    </React.Fragment>
  );
}