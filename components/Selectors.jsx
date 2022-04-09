import { useEffect, useState, useRef } from 'react'
import { gql, useQuery, useLazyQuery } from '@apollo/client'
import { toast } from 'react-toastify'
import { MultiSelect } from 'react-multi-select-component'

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

function HiddenInputs (props) {
  const { isSingle = false, selected = isSingle ? {} : [], required = false, name = '' } = props

  return isSingle
    ? (
      <input value={selected.value} name={name} required={required} hidden readOnly />
    )
    : (
      selected.map(s => <input key={s.value} value={s.value} name={`${name}[]`} hidden readOnly />)
    )
}

export function BaseSelector (props) {
  const { isSingle = false, required = false, onChange, loading: loadingProp = false } = props
  const { startQuery, changeQuery, defaultValue = isSingle ? undefined : [], name = '' } = props
  const { rowsFn } = props

  const [options, setOptions] = useState(defaultValue || [])
  const [selected, setSelected] = useState(defaultValue)
  const stubElement = useRef(null)
  const value = isSingle ? (selected ? [selected] : []) : selected

  useEffect(() => {
    const form = stubElement.current.closest('form')
    form?.addEventListener('reset', () => setSelected(defaultValue))
  }, [])

  const { data: dataInitial, error: initialError, loading: loadingInitial } = useQuery(gql`${startQuery}`, { variables: { limit: 10 } })
  const [getQuery, { data, error, loading }] = useLazyQuery(gql`${changeQuery}`)

  const getOptions = data => data ? (rowsFn ? rowsFn(data[Object.keys(data)[0]]) : data[Object.keys(data)[0]]) : []
  const filterOptions = (_, filter) => {
    if (filter.length > 0) getQuery({ variables: { filter } })
    return _
  }

  const onChangeFn = (items = []) => {
    const result = isSingle ? items[items.length - 1] : items

    if (onChange) onChange(result)
    setSelected(result)
  }

  useEffect(() => runError(initialError), [initialError])
  useEffect(() => runError(error), [error])

  useEffect(() => {
    if (!dataInitial && !data) return

    const searchOptions = data ? getOptions(data) : getOptions(dataInitial)
    const currentOptions = value.filter(o => !searchOptions.includes(o.value))

    setOptions([...currentOptions, ...searchOptions])
  }, [dataInitial, data])

  return (
    <>
      <div ref={stubElement} style={{ display: 'none' }} />
      <MultiSelect
        valueRenderer={valueRenderer}
        filterOptions={filterOptions}
        onChange={onChangeFn}
        hasSelectAll={!isSingle}
        isLoading={loading || loadingInitial || loadingProp}
        value={value} options={options}
      />
      <HiddenInputs isSingle={isSingle} required={required} selected={selected} name={name} />
    </>
  )
}

export function SimpleSelector (props) {
  const { isSingle = false, defaultValue = isSingle ? undefined : [], required = false, name = '', onChange } = props

  const stubElement = useRef(null)
  const [selected, setSelected] = useState(defaultValue)

  useEffect(() => {
    const form = stubElement.current.closest('form')
    form?.addEventListener('reset', () => setSelected(defaultValue))
  }, [])

  const onChangeFn = (items = []) => {
    const result = isSingle ? items[items.length - 1] : items
    setSelected(result)

    if (onChange) onChange(result)
  }

  const value = isSingle ? (selected ? [selected] : []) : selected

  return (
    <>
      <div ref={stubElement} style={{ display: 'none' }} />
      <MultiSelect
        valueRenderer={valueRenderer}
        hasSelectAll={!isSingle}
        {...props}
        onChange={onChangeFn}
        value={value}
      />
      <HiddenInputs isSingle={isSingle} required={required} selected={selected} name={name} />
    </>
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
