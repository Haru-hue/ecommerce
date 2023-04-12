import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface RatingProps {
  stars: number
}

const starArray = [...Array(5).keys()].map(i => i + 1)

const Rating = ({ stars }: RatingProps) => {
  return (
    <div>
      {starArray.map(i => (
        <FontAwesomeIcon key={i} className="ps-1" icon={faStar} color={i <= stars ? 'orange' : 'lightgrey'} />
      ))}
    </div>
  )
}

export default Rating
