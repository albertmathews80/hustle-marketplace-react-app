import classes from './ProfileHeader.module.css'

const ProfileHeader = ({ heading }) => {
  return (
    <div className={classes.heading}>
      {heading}
    </div>
  )
}

export default ProfileHeader