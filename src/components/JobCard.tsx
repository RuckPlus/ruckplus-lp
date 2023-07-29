import { Button, Card, Col, Row, Text } from '@nextui-org/react'
import { InfoCircle, Send } from 'react-iconly'
import useModal from '@/hooks/useModal'
import JobDetailModal from '@/components/Modal/JobDetailModal'
import EntryModal from '@/components/Modal/EntryModal'

type JobCardProps = {
  employmentType: string
  title: string
  image: string
}

const JobCard = (props: JobCardProps) => {
  const { employmentType, title, image } = props

  const { open: isEntryModal, closeModal: closeEntryModal, openModal: openEntryMmodal } = useModal()
  const {
    open: isJobDetailModal,
    closeModal: closeJobDetailModal,
    openModal: openJobDetailModal,
  } = useModal()

  return (
    <>
      <Card css={{ w: '100%', h: '400px' }}>
        <Card.Header css={{ position: 'absolute', zIndex: 1, top: 5 }}>
          <Col>
            <Text h5 color='#ffffff' css={{ mb: 0 }}>
              {employmentType}
            </Text>
            <Text h3 color='#ffffff'>
              {title}
            </Text>
          </Col>
        </Card.Header>
        <Card.Body css={{ p: 0 }}>
          <Card.Image src={image} width='100%' height='100%' objectFit='cover' alt='Job image' />
        </Card.Body>
        <Card.Footer
          isBlurred
          css={{
            position: 'absolute',
            bgBlur: '#ffffff66',
            borderTop: '$borderWeights$light solid rgba(255, 255, 255, 0.2)',
            bottom: 0,
            zIndex: 1,
          }}
        >
          <Row>
            <Col>
              <Text color='#000' size={12}>
                採用情報
              </Text>
            </Col>
            <Col>
              <Row justify='flex-end'>
                <Button
                  flat
                  auto
                  rounded
                  color='secondary'
                  css={{ mr: 8 }}
                  icon={<InfoCircle set='bold' primaryColor='#9750DD' />}
                  onClick={() => openJobDetailModal()}
                >
                  <Text css={{ color: 'inherit' }} size={12} weight='bold' transform='uppercase'>
                    詳細
                  </Text>
                </Button>
                <Button
                  flat
                  auto
                  rounded
                  color='secondary'
                  icon={<Send set='bold' primaryColor='#9750DD' />}
                  onClick={() => openEntryMmodal()}
                >
                  <Text css={{ color: 'inherit' }} size={12} weight='bold' transform='uppercase'>
                    応募
                  </Text>
                </Button>
              </Row>
            </Col>
          </Row>
        </Card.Footer>
      </Card>

      <EntryModal open={isEntryModal} closeModal={closeEntryModal} />
      <JobDetailModal open={isJobDetailModal} closeModal={closeJobDetailModal} />
    </>
  )
}

export default JobCard
