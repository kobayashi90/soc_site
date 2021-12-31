import { gql } from '@apollo/client'
import { Row, Col, Button } from 'react-bootstrap'
import classname from 'classnames'
import Image from 'next/image'
import Link from 'next/link'

import { initializeApollo } from '@/lib/ApolloClient'
import { getImageUrl } from '@/components/utils'
import style from '../../styles/letter.module.scss'

export async function /* getStaticProps */ getServerSideProps () {
  const client = initializeApollo()
  const { data } = await client.query({
    query: gql`
      query {
        series {
          slug
          name
          placeholder
        }
      }
    `
  })

  const series = {}
  data.series.forEach(serie => {
    const letter = serie.name[0].toUpperCase()
    if (!series[letter]) series[letter] = [serie]
    else series[letter].push(serie)
  })

  const letters = Object.keys(series).sort()

  return { props: { letters, series, seriesList: data.series }/*, revalidate: 60 */ }
}

export default function SeriesList ({ series, letters, seriesList }) {
  return (
    <Col className='blackbg p-2 pb-5'>
      <Row className='my-2'>
        <Col>
          {letters.map(letter => <Button key={letter} variant='secondary' md='auto' className={classname(style.letter, 'p-2 m-1')} href={`#${letter}`}><h2>{letter}</h2></Button>)}
        </Col>
      </Row>
      <Row className='mt-4'>
        <Col xs='auto' className='px-4'>
          {letters.map(letter => (
            <div id={letter} key={letter} className='mt-4 d-flex flex-column'>
              <h2 className='text-center ost-title text-capitalize'>{letter.toUpperCase()}</h2>
              {series[letter].map(({ slug, name }) => <Link href={`/series/${slug}`} key={slug}><a className='text-center mt-2 link' >{name}</a></Link>)}
            </div>
          ))}
        </Col>
        <Col className='px-4'>
          <Row>
            {seriesList.map(({ slug, placeholder }) => (
              <Col key={slug} xs={4}>
                <Link href={`/series/${slug}`} passHref>
                  <a><Image alt={slug} src={getImageUrl(slug, 'series')} layout='responsive' width={300} height={100} placeholder='blur' blurDataURL={placeholder} /></a>
                </Link>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </Col>
  )
}
