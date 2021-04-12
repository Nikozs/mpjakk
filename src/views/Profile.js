import { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { MediaContext } from '../contexts/MediaContext';
import { getAvatar } from '../hooks/ApiHooks';

const uploadsUrl = 'https://media-new.mw.metropolia.fi/wbma/uploads/';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
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
      <h1>Profile</h1>
      {user
        && (
        <div className={classes.root}>
          <Avatar alt="Profile image" src={avatarurl} className={classes.large} />
          <p>{user.full_name}</p>
          <br />
          <p>{user.email}</p>
          <p>{user.username}</p>
        </div>
        )}
    </>
  );
};
export default Profile;
