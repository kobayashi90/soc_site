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

export function BaseSelector (props) {
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

export function SimpleSelector (props) {
  return (
    <Select {...props} styles={styles} />
  )
}

export function AlbumSelector (props) {
  const rowsFn = data => data.rows

  return (
    <BaseSelector
      {...props}
      rowsFn={rowsFn}
      startQuery={`
        query ($limit: Int){
          searchAlbum(limit: $limit) {
            rows {
              value: id
              label: title
            }
          }
        }
      `}
      changeQuery={`
        query ($filter: String){
          searchAlbum(title: $filter) {
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

export function StudioSelector (props) {
  const rowsFn = data => data.rows

  return (
    <BaseSelector
      {...props}
      rowsFn={rowsFn}
      startQuery={`
        query ($limit: Int){
          searchStudio(limit: $limit) {
            rows {
              value: slug
              label: name
            }
          }
        }
      `}
      changeQuery={`
        query ($filter: String){
          searchStudio(name: $filter) {
            rows {
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
  const rowsFn = data => data.rows

  return (
    <BaseSelector
      {...props}
      rowsFn={rowsFn}
      startQuery={`
        query ($limit: Int){
          searchGame (limit: $limit) {
            rows{
              value: slug
              label: name
            }
          }
        }
      `}
      changeQuery={`
        query ($filter: String){
          searchGame(name: $filter) {
            rows {
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
    <BaseSelector
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
    <BaseSelector
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
    <BaseSelector
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
    <BaseSelector
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
