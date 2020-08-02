import React from 'react'

import { Cards, CountryPicker, Chart } from './components'
import { fetchData } from './api/index'

import styles from './App.module.css'

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const data = await fetchData()

    this.setState({ data })
  }

  handleCountryChange = async country => {
    const data = await fetchData(country)

    this.setState({ data, country: country })
  }

  render() {
    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />

        <footer>
          &copy;{' '}
          <a
            href='http://www.github.com/elijahdaniel'
            target='_blank'
            rel='noopener noreferrer'
          >
            Elijah P.
          </a>{' '}
          - API by{' '}
          <a
            href='https://github.com/mathdroid/covid-19-api'
            target='_blank'
            rel='noopener noreferrer'
          >
            mathdro
          </a>
        </footer>
      </div>
    )
  }
}

export default App
