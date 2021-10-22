import { Loader } from 'react-clip-loader'
import 'react-clip-loader/dist/index.css'

export default function App() {
  return (
    <div className='App'>
      <div>
        <h1>Small Loaders</h1>
        <Loader small={true} />
      </div>

      <div>
        <h1>Large Loaders</h1>
        <Loader />
      </div>

      <div>
        <h1>Custom Colors</h1>
        <Loader color='red' secondaryColor='black' />
      </div>

      <p>Enjoy using this package</p>
    </div>
  )
}
