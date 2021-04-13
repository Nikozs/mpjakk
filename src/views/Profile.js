import { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardContent, List, ListItem, Typography,
} from '@material-ui/core';
import { MediaContext } from '../contexts/MediaContext';
import { getAvatar } from '../hooks/ApiHooks';

const uploadsUrl = 'https://media-new.mw.metropolia.fi/wbma/uploads/';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const Profile = () => {
  const avatar = getAvatar();
  let avatarurl = '';
  if (avatar) {
    if (avatar.length > 0) {
      // avatarurl = uploadsUrl + avatar.filename;

      avatarurl = avatar[0].thumbnails ? uploadsUrl + avatar[0].thumbnails.w160 : '#';
    } else {
      avatarurl = '#';
    }
  }

  const classes = useStyles();
  const [user] = useContext(MediaContext);
  return (
    <>
      <Typography variant="h4" style={{ color: 'white' }}>Profile</Typography>
      {user
        && (
        <div className={classes.root}>
          <Card>
            <CardContent>
              <List>
                <ListItem>
                  <Avatar alt="Profile image" src={avatarurl} className={classes.large} />
                </ListItem>
                <ListItem>
                  <p>{user.full_name}</p>
                </ListItem>
                <ListItem>
                  <p>{user.email}</p>
                </ListItem>
                <ListItem>
                  <p>{user.username}</p>
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </div>
        )}
    </>
  );
};
export default Profile;
