/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
// import { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import MediaRow from './MediaRow';
import { useAllMedia } from '../hooks/ApiHooks';

const MediaTable = () => {
  const picArray = useAllMedia();

  console.log(picArray);

  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
    >
      <table>
        <tbody>
          {
        picArray.map((item, index) => <MediaRow key={index} file={item} />)
}
        </tbody>
      </table>

    </Grid>
  );
};

export default MediaTable;
