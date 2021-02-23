import React from 'react';
import '../components/ProductDisplay.css';

class App extends React.Component{

  state = {
    products: [
      {
        "_id": "1",
        "title": "Coaster",
        "src": [
            "images/img-3.jpeg",
            "images/img-4.png",
            "images/img-1.jpeg",
            "images/img-5.jpeg"
          ],
        "description": "Coasters for the sports fan",
        "content": "Support your fav sports team while resting your drink on the logo",
        "price": 10,
      }
    ],
    index: 0
  };

  render(){
    const {products, index} = this.state;
    return(
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <p>{item.description}</p>
                <p>{item.content}</p>
              </div>
            </div>
          ))
        }
      </div>
    );
  };
}

export default App;