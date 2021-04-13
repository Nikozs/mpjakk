import { Grid, Typography } from '@material-ui/core';
import MediaTable from '../components/MediaTable';

const Home = () => (
  <>
    <Typography variant="h4" style={{ color: 'white' }}>Home</Typography>
    <Grid container>
      <MediaTable />
    </Grid>
  </>
);

export default Home;
