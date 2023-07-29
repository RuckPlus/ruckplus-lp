import { Button, Container, Link, Grid, Navbar, Text } from '@nextui-org/react'
import Typical from 'react-typical'
import JobCard from '@/components/JobCard'
import { consts } from '@/config/constants'
import jobs from '@/data/jobs.json'

export default function HomePage() {
  const typicalSteps = [
    'WEB3 IS A NEW PARADIGM',
    5000,
    'WEB3 IS DEAD',
    5000,
    'WEB3 IS ALIVE',
    5000,
    'WEB3 IS THE FUTURE',
    5000,
    'WEB3 IS GOING GREAT',
    5000,
    'WEB3 IS NOW',
    5000,
  ]

  return (
    <>
      <Navbar isBordered variant='floating'>
        <Navbar.Brand>
          <Text b color='inherit' hideIn='xs'>
            {consts.companyName}
          </Text>
        </Navbar.Brand>
        <Navbar.Content hideIn='xs'>
          <Navbar.Link href='#'>Ruck Academy</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content>
          <Navbar.Item>
            <Button auto flat color='secondary' as={Link} href='https://ruckplus-tech.io'>
              企業サイト
            </Button>
          </Navbar.Item>
        </Navbar.Content>
      </Navbar>

      <Container
        id='body'
        css={{
          '@smMax': {
            py: 40,
          },
          '@mdMin': {
            px: 160,
            py: 120,
          },
        }}
      >
        <Grid.Container gap={2} justify='center'>
          <Grid xs={12} justify='center' direction='column'>
            <Text
              h1
              css={{
                textAlign: 'center',
                textGradient: '45deg, $blue600 -20%, $pink600 65%',
                mb: 0,
              }}
              weight='bold'
            >
              {consts.companyName}
            </Text>
            <Text
              h3
              css={{
                textAlign: 'center',
                mb: 0,
              }}
              weight='bold'
            >
              採用情報
            </Text>
          </Grid>
          <Grid xs={12} justify='center' css={{ mb: 32 }}>
            <Text h2 b>
              <Typical steps={typicalSteps} loop={Infinity} wrapper='span' />
            </Text>
          </Grid>
          {jobs.map((job: any) => {
            return (
              <Grid key={job.id} xs={12} md={4} justify='center'>
                <JobCard
                  employmentType={job.employmentType}
                  title={job.position}
                  image={job.image}
                />
              </Grid>
            )
          })}
        </Grid.Container>
      </Container>
    </>
  )
}
