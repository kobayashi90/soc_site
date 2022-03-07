import { useEffect, useState } from 'react'
import Select from 'react-select'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { toast } from 'react-toastify'
import { MultiSelect } from 'react-multi-select-component'

const styles = { option: () => ({ color: 'black' }), multiValueLabel: provided => ({ ...provided, whiteSpace: 'normal' }) }

const valueRenderer = (selected, _options) => {
  return selected.length
    ? selected.map(({ label }) => label).join(', ')
    : 'Select...'
}
const runError = err => {
  if (!err) return

  console.log(err)
  toast.error('Selector: Failed to fetch server info')
}

export function BetaSelector (props) {
  const { startQuery, changeQuery, defaults = [], name = '' } = props
  const { isSingle = false, required = false, onChange, loading: loadingProp = false } = props
  const { rowsFn } = props

  const [options, setOptions] = useState(defaults)
  const [selected, setSelected] = useState(defaults)

  const { data: dataInitial, error: initialError, loading: loadingInitial } = useQuery(gql`${startQuery}`, { variables: { limit: 10 } })
  const [getQuery, { data, error, loading }] = useLazyQuery(gql`${changeQuery}`)

  const getOptions = data => data ? (rowsFn ? rowsFn(data[Object.keys(data)[0]]) : data[Object.keys(data)[0]]) : []
  const filterOptions = (_, filter) => {
    if (filter.length > 0) getQuery({ variables: { filter } })
    return _
  }

  const onChangeFn = (items = []) => {
    const result = isSingle ? [items[items.length - 1]] : items

    if (onChange) onChange(isSingle ? result[0] : result)
    setSelected(result)
  }

  useEffect(() => runError(initialError), [initialError])
  useEffect(() => runError(error), [error])

  useEffect(() => {
    if (!dataInitial && !data) return

    const searchOptions = data ? getOptions(data) : getOptions(dataInitial)
    const currentOptions = selected.filter(o => !searchOptions.includes(o.value))
    console.log({ currentOptions, searchOptions })
    setOptions([...currentOptions, ...searchOptions])
  }, [dataInitial, data])

  return (
    <>
      <MultiSelect
        valueRenderer={valueRenderer}
        filterOptions={filterOptions}
        onChange={onChangeFn}
        hasSelectAll={!isSingle}
        isLoading={loading || loadingInitial || loadingProp}
        value={selected} options={options}
      />
      {isSingle
        ? (
          <input defaultValue={selected[0]?.label} name={name} required={required} hidden readOnly />
        )
        : (
          selected.map(s => <input key={s.value} defaultValue={s.value} name={`${name}[]`} hidden readOnly />)
        )}
    </>
  )
}

function SelectorBase (props) {
  const { startQuery, changeQuery } = props
  const [query, setQuery] = useState(startQuery)
  const [title, setTitle] = useState()
  const { data, error, loading } = useQuery(gql`${query}`, { variables: { limit: 10, title } })

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
              query searchAlbum($limit: Int){
                  searchAlbum(limit: $limit) {
                    options: rows{
                      value: id
                      label: title
                    }
                  }
              }`}
      changeQuery={`
              query searchAlbum($title: String){
                  searchAlbum(title: $title) {
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
  const rowsFn = data => data.rows

  return (
    <BetaSelector
      {...props}
      rowsFn={rowsFn}
      startQuery={`
        query ($limit: Int!){
          searchAnimation(limit: $limit, order: "createdAt", mode: "DESC") {
            rows{
              value: id
              label: title
            }
          }
        }
      `}
      changeQuery={`
        query SearchAnimation($filter: String){
          searchAnimation(title: $filter) {
            rows {
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
    <BetaSelector
      {...props}
      startQuery={`
        query RecentSeries($limit: Int!){
          recentSeries(limit: $limit) {
            value: slug
            label: name
          }
        }
      `}
      changeQuery={`
        query SearchSeries($filter: String){
          searchSeriesByName(name: $filter) {
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
    <BetaSelector
      {...props}
      startQuery={`
        query ($limit: Int!){
          recentPublishers(limit: $limit) {
            value: id
            label: name
          }
        }`
      }
      changeQuery={`
        query ($filter: String){
          searchPublishersByName(name: $filter) {
            value: id
            label: name
          }
        }`
      }
    />
  )
}

export function PlatformSelector (props) {
  return (
    <BetaSelector
      {...props}
      startQuery={`
        query ($limit: Int!){
          recentPlatforms(limit: $limit, type: "${props.type}") {
            value: id
            label: name
          }
        }
      `}
      changeQuery={`
        query ($filter: String){
          searchPlatformsByName(name: $filter, type: "${props.type}") {
            value: id
            label: name
          }
        }
      `}
    />
  )
}
