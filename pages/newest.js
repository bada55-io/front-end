import React from 'react'
import 'isomorphic-fetch'
import MenuApp from '../components/MenuApp'

export default class extends React.Component {

  static async getInitialProps () {
    const res = await fetch('http://localhost:1337/colors/latest?limit=100')
    const data = await res.json()
    return { colors: data };
  }

  render() {

    const colors = this.props.colors;
    const style = ({ name }) => ({
      display: 'inline-block',
      backgroundColor: `#${name}`,
      listStyle: 'none',
      width: '150px',
      height: '150px'
    })

    return (<section>
      <MenuApp />
      <h1>Liste de couleurs latest</h1>
      <ul className="ColorList-list" >
        {(colors || []).map(color =>
          <li style={style(color)} className="ColorItem-container" key={color.name.toString()}>
            <h3 className="ColorItem-title">{color.label}</h3>
          </li>
        )}
      </ul>
    </section>)
  }
}