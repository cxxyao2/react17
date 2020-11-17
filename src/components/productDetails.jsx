import React,{ Component} from 'react';

export default class ProductDetails extends Component{

  handleSave = () => {
    this.props.history.push('/products');
  }

  render()  {
    return (
      <div>
        <ul>
    <h1>Prdocut id is {this.props.match.params.id}</h1>
          <li>flore</li>
          <li>flane</li>
          <li>biologie</li>
          <li><button onClick={this.handleSave}>save</button></li>
        </ul>
      </div>
  );
}

}
