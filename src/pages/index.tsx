import { Container, Grid, Text } from '@nextui-org/react'
import Typical from 'react-typical'
import JobCard from '@/components/JobCard'

export default function Page() {
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
    <Container
      id='body'
      css={{
        '@smMax': {
          py: 40,
        },
        '@mdMin': {
          px: 160,
          py: 80,
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
            RuckPlus Inc.
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
        <Grid xs={12} md={4} justify='center'>
          <JobCard employmentType='正社員' title='web3エンジニア' />
        </Grid>
      </Grid.Container>
    </Container>
  )
}
