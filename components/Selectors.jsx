import { useState } from 'react'
import Select from 'react-select'
import { gql, useQuery } from '@apollo/client'
import { toast } from 'react-toastify'

const styles = { option: () => ({ color: 'black' }), multiValueLabel: provided => ({ ...provided, whiteSpace: 'normal' }) }

function SelectorBase (props) {
  const { startQuery, changeQuery } = props
  const [query, setQuery] = useState(startQuery)
  const [title, setTitle] = useState()
  const { data, error, loading } = useQuery(gql`${query}`, { variables: { limit: 10, title }, fetchPolicy: 'network-only' })

  if (error) {
    console.log(error)
    toast.error('Selector: Failed to fetch server info')
  }

  function handleChange (newValue) {
    setTitle(newValue)
    setQuery(changeQuery)
  }

  const results = data ? data[Object.keys(data)[0]].options || data[Object.keys(data)[0]] : []

  return (
    <Select {...props} onInputChange={handleChange} isLoading={loading || loading} options={results} styles={styles} />
  )
}

export function SimpleSelector (props) {
  return (
    <Select {...props} styles={styles} />
  )
}

export function OstSelector (props) {
  return (
    <SelectorBase
      {...props}
      startQuery={`
              query SearchOst($limit: Int){
                  searchOst(limit: $limit) {
                    options: rows{
                      value: id
                      label: title
                    }
                  }
              }`}
      changeQuery={`
              query SearchOst($title: String){
                  searchOst(title: $title) {
                    options: rows{
                      value: id
                      label: title
                    }
                  }
              }
            `}
    />
  )
}

export function StudioSelector (props) {
  return (
    <SelectorBase
      {...props}
      startQuery={`
              query SearchStudio($limit: Int){
                  searchStudio(limit: $limit) {
                    options: rows{
                      value: slug
                      label: name
                    }
                  }
              }`}
      changeQuery={`
              query SearchStudio($title: String){
                  searchStudio(name: $title) {
                    options: rows{
                      value: slug
                      label: name
                    }
                  }
              }
            `}
    />
  )
}

export function GameSelector (props) {
  return (
    <SelectorBase
      {...props}
      startQuery={`
              query SearchGame($limit: Int){
                  searchGame(limit: $limit) {
                    options: rows{
                      value: slug
                      label: name
                    }
                  }
              }`}
      changeQuery={`
              query SearchGame($name: String){
                  searchGame(name: $name) {
                    options: rows{
                      value: slug
                      label: name
                    }
                  }
              }
            `}
    />
  )
}

export function AnimSelector (props) {
  return (
    <SelectorBase
      {...props}
      startQuery={`
                query SearchAnimation($limit: Int!){
                  searchAnimation(limit: $limit, order: "createdAt", mode: "DESC") {
                    options: rows{
                      value: id
                      label: title
                    }
                  }
                }`}
      changeQuery={`
                query SearchAnimation($title: String){
                    searchAnimation(title: $title) {
                      options: rows{
                        value: id
                        label: title
                      }
                    }
                }
              `}
    />
  )
}

export function SeriesSelector (props) {
  return (
    <SelectorBase
      {...props}
      startQuery={`
                  query RecentSeries($limit: Int!){
                      recentSeries(limit: $limit) {
                      value: slug
                      label: name
                      }
                  }`}
      changeQuery={`
                  query SearchSeries($title: String){
                      searchSeriesByName(name: $title) {
                        value: slug
                        label: name
                      }
                  }
                `}
    />
  )
}

export function PublisherSelector (props) {
  return (
    <SelectorBase
      {...props}
      startQuery={`
                    query RecentPublishers($limit: Int!){
                        recentPublishers(limit: $limit) {
                        value: id
                        label: name
                        }
                    }`}
      changeQuery={`
                    query SearchPublishers($title: String){
                        searchPublishersByName(name: $title) {
                          value: id
                          label: name
                        }
                    }
                  `}
    />
  )
}

export function PlatformSelector (props) {
  return (
    <SelectorBase
      {...props}
      startQuery={`
                      query RecentPlatforms($limit: Int!){
                          recentPlatforms(limit: $limit, type: "${props.type}") {
                          value: id
                          label: name
                          }
                      }`}
      changeQuery={`
                      query SearchPlatforms($title: String){
                          searchPlatformsByName(name: $title, type: "${props.type}") {
                            value: id
                            label: name
                          }
                      }
                    `}
    />
  )
}
