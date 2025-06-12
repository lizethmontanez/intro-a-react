import './App.css'
import Card from './Components/Card'
import Counter from './Components/Counter'
import FilterableList from './Components/FilterableList'

const alt = "cat-image"

function App() {

  return (
    <>
      <h1>Este es mi primer componente:</h1>
      <Card 
        src={"https://s3.abcstatics.com/abc/www/multimedia/sociedad/2024/07/11/gato-RaZLibek03KjY2lBzGD2qEN-1200x840@diario_abc.jpg"} 
        alt={alt} 
        text={"Gato 1"}
      />
      <Card 
        src={"https://media.es.wired.com/photos/657cb5b81e17b099f8f9e15c/16:9/w_3008,h_1692,c_limit/gatos%20172050389.jpg"} 
        alt={alt}
        text={"Gato 2"}
      />
      <Card 
        src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYWplrvvfeRbtQSS1y5NC-rNV2lFjxUiO9g&s"} 
        alt={alt}
        text={"Gato 3"}
      />
      <Counter />
      <FilterableList />
    </>
  )
}

export default App
