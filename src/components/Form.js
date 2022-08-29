import '../styles/Form.css'
import GetInput from './GetInput'
import Thankyou from './Thankyou'
import { useSelector } from 'react-redux'

const Form = () => {
  const showThankyou = useSelector((state) => state.confirm.value)

  return (
    <div className='Form'>
      {showThankyou ? <Thankyou /> : <GetInput />}
    </div>
  )
}

export default Form