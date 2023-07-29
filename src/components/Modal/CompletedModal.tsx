import { Button, Modal, Link, Text } from '@nextui-org/react'

type ConpletedModalProps = {
  open: boolean
  closeModal: () => void
}

const CompletedModal = (props: ConpletedModalProps) => {
  const { open, closeModal } = props

  return (
    <Modal
      aria-labelledby='conplated-modal'
      open={open}
      onClose={() => closeModal()}
      width='560px'
      css={{
        mx: 16,
      }}
      blur
    >
      <Modal.Header>
        <Text b size={18}>
          応募完了
        </Text>
      </Modal.Header>
      <Modal.Body>
        <Text>応募が完了しました！</Text>
      </Modal.Body>
      <Modal.Footer>
        <Button flat auto color='primary'>
          <Link href='https://ruckplus-tech.io'>企業ページへ戻る</Link>
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CompletedModal
