import './App.css';
import MyButton from './components/MyButton';
import List from './components/List';
import Svg from './SVG/Svg';

function App() {
  {/* using an object for more complex JSX example */}
  const user = {
    name: 'Leo Bennett',
    imageUrl: 'https://avatars.githubusercontent.com/u/103042120?v=4',
    imageSize: 90
  };
{/* End of complex object fo JSX */}
  return (
    <>
    {/*
    <h1>Welcome to the app</h1>
    <MyButton /> {//Adding simple component}
    <img className="avatar" />{//Using className for CSS}
    <p />
    {// using object for more complex JSX }
    <h1>{user.name}</h1>
    <img
      className = "avatar"
      src = {user.imageUrl}
      alt = {user.name}
      style = {{
        width: user.imageSize,
        height: user.imageSize
      }} />
      {// End of complex JSX example }

      <List />
      */}      
      <Svg />
    </>
  )
}

export default App
