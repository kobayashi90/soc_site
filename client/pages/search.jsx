import { useRouter } from 'next/router'
import { gql, useLazyQuery } from '@apollo/client'
import { Row, Col, Nav } from 'react-bootstrap'
import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-toastify'

import styles from '../styles/Search.module.scss'
import { getImageUrl } from '../components/utils'
import Loader from '../components/Loader'
import { useEffect, useState } from 'react'

const limit = 30
const queryHeader = 'query Search($title: String!, $limit: Int!, $page: Int!)'

const categories = {
  byTitle: {
    query: 'searchAlbum(title: $title, limit: $limit, page: $page){ count, items: rows { id, title, classes { name }, releaseDate } }',
    title: 'Albums',
    subTitle: ({ classes, releaseDate }) => `${classes.map(c => c.name).join(' / ')} Album - ${releaseDate}`,
    type: 'album'
  },
  byArtist: {
    query: 'searchAlbumByArtist(name: $title, limit: $limit, page: $page){ count, items: rows { id, title, classes { name }, releaseDate } }',
    title: 'Albums (by artists)',
    subTitle: ({ classes, releaseDate }) => `${classes.map(c => c.name).join(' / ')} Album - ${releaseDate}`,
    type: 'album'
  },
  games: {
    query: 'searchGame(name: $title, limit: $limit, page: $page){ count, items: rows { id: slug, title: name, releaseDate } }',
    title: 'Games',
    subTitle: ({ releaseDate }) => `Game - ${releaseDate}`,
    type: 'game'
  },
  studios: {
    query: 'searchStudio(name: $title, limit: $limit, page: $page){ count, items: rows { id: slug, title: name } }',
    title: 'Studios',
    subTitle: () => 'Studio'
  },
  anims: {
    query: 'searchAnimation(title: $title, limit: $limit, page: $page){ count, items: rows { id, title, releaseDate } }',
    title: 'Animations',
    subTitle: ({ releaseDate }) => `Animation - ${releaseDate}`,
    type: 'anim'
  },
  series: {
    query: 'searchSeries(name: $title, limit: $limit, page: $page){ count, items: rows { id: slug, title: name } }',
    title: 'Series',
    subTitle: () => 'Series',
    type: 'series'
  }
}

const initialState = {}
Object.keys(categories).forEach(name => { initialState[name] = false })

export default function Search () {
  const router = useRouter()
  const search = router.query.q

  const query = gql`
  ${queryHeader}{
    byTitle: ${categories.byTitle.query}
    byArtist: ${categories.byArtist.query}
    games: ${categories.games.query}
    studios: ${categories.studios.query}
    anims: ${categories.anims.query}
    series: ${categories.series.query}
  }
  `

  const [getInitial, { data, loading: initialLoad }] = useLazyQuery(query, { variables: { title: search, limit, page: 0 } })
  const [loadingState, setLoadingState] = useState(initialState)
  const setLoading = (name, value) => setLoadingState({ ...loadingState, [name]: value })

  const loading = initialLoad || Object.values(loadingState).some(c => c.loading)

  useEffect(() => {
    if (search) getInitial()
  }, [search])

  return (
    <Row className='h-100 bg-dark'>
      <Col className='mx-5'>
        <Row>
          <Col md={12} className='my-1 px-4 py-3' style={{ backgroundColor: '#33353e' }}>
            <h2 className='searchTitle'>Search Results for: {router.query.q}</h2>
          </Col>
        </Row>
        {loading && (
          <Row>
            <Col>
              <Loader className='mx-auto my-2' />
            </Col>
          </Row>
        )}

        {data && Object.entries(categories).map(([name, value]) =>
          categories[name] && <SearchSection key={name} search={search} category={name} {...value} {...data[name]} setLoading={setLoading} />
        )}
      </Col>
    </Row>
  )
}

function SearchSection (props) {
  const { count: initialCount, title, subTitle, items: initialItems, type, search, category, query, setLoading } = props
  const [initialized, setInit] = useState(false)
  const [items, setItems] = useState(initialItems)
  const [page, setPage] = useState(0)
  const [count, setCount] = useState(initialCount)
  const [getInfo] = useLazyQuery(
    gql`
      ${queryHeader}{
        result: ${query}
      }
    `,
    {
      onCompleted: data => {
        setLoading(category, false)
        setItems(data.result.items)
      },
      onError: err => {
        console.log(err)
        toast.error('Failed to fetch some results')
        setCount(0)
      }
    })

  const start = page * limit
  const calculatedEnd = start + limit
  const end = count < calculatedEnd ? count : calculatedEnd

  useEffect(() => {
    if (initialized) {
      setLoading(category, true)
      getInfo({ variables: { title: search, limit, page } })
    } else setInit(true)
  }, [page])

  return count > 0
    ? (
      <>
        <Row className='mb-1 mt-4'>
          <Col md='auto'>
            <h2>{title} ({count > limit ? `${start + 1} - ${end}` : count})</h2>
          </Col>
          {count > limit && (
            <Col md='auto'>
              <Nav>
                {Array.from(Array(Math.ceil(count / limit)), (x, i) => <Nav.Link disabled={page === i} key={i} onClick={() => setPage(i)} className='py-0 px-2'><h2>{i + 1}</h2></Nav.Link>)}
              </Nav>
            </Col>
          )}
        </Row>
        <Row>
          {items.map((item) =>
            <Link key={item.id} href={`/${type}/${item.id}`} passHref>
              <Col md={6}>
                <Row className={classNames(styles.result, 'mx-1 d-flex flex-row mb-3')}>
                  {type && (
                    <Col md='auto' className={classNames(styles.cover, 'px-0')}>
                      <Image objectFit='contain' alt={item.title} src={getImageUrl(item.id, type)} width={180} height={180} />
                    </Col>
                  )}
                  <Col className='p-2 px-4 my-auto'>
                    <h2>{item.title}</h2>
                    <p className='card-text mt-2'>{subTitle(item)}</p>
                  </Col>
                </Row>
              </Col>
            </Link>
          )}
        </Row> {/* This is a test */}
      </>
    )
    : null
}