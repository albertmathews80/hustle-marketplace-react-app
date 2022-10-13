import classes from './Heading.module.css'

const Heading = ({heading}) => {
  return (
    <div className={classes.container}>{heading}</div>
  )
}

export default Heading